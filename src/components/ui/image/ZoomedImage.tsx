'use client'

import { isServer } from '@tanstack/react-query'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import mediumZoom from 'medium-zoom'
import { tv } from 'tailwind-variants'
import type { Zoom } from 'medium-zoom'
import type { FC, ReactNode } from 'react'

import { LazyLoad } from '~/components/common/Lazyload'
import { useIsUnMounted } from '~/hooks/common/use-is-unmounted'
import { calculateDimensions } from '~/lib/calc-image'
import { useMarkdownImageRecord } from '~/providers/article/markdown-image-record-provider'
import { clsxm } from '~/utils/helper'

import { Divider } from '../divider'
import imageStyles from './ZoomedImage.module.css'

type TImageProps = {
  src: string
  alt?: string
  title?: string
  accent?: string
}

type BaseImageProps = {
  zoom?: boolean
  placeholder?: ReactNode
}

export enum ImageLoadStatus {
  Loading = 'loading',
  Loaded = 'loaded',
  Error = 'error',
}

const styles = tv({
  base: 'rounded-xl overflow-hidden text-center inline-flex items-center justify-center duration-200',
  variants: {
    status: {
      loading: 'hidden opacity-0',
      loaded: 'opacity-100 block',
      error: 'hidden opacity-0',
    },
  },
})

let zoomer: Zoom

export const ImageLazy: Component<TImageProps & BaseImageProps> = ({
  alt,
  src,
  title,
  zoom,

  placeholder,
}) => {
  // @ts-ignore
  const [zoomer_] = useState(() => {
    if (isServer) return null
    if (zoomer) return zoomer
    const zoom = mediumZoom(undefined, {
      background: 'var(--sbg)',
    })
    zoomer = zoom
    return zoom
  }) as [Zoom]

  const figcaption = title || alt
  const [imageLoadStatus, setImageLoadStatus] = useState(
    ImageLoadStatus.Loading,
  )
  const isUnmount = useIsUnMounted()
  const setImageLoadStatusSafe = useCallback(
    (status: ImageLoadStatus) => {
      if (!isUnmount.current) {
        setImageLoadStatus(status)
      }
    },
    [isUnmount],
  )

  const imageRef = useRef<HTMLImageElement>(null)
  useEffect(() => {
    if (imageLoadStatus !== ImageLoadStatus.Loaded) {
      return
    }
    if (!zoom) {
      return
    }
    const $image = imageRef.current

    if ($image) {
      zoomer_.attach($image)

      return () => {
        zoomer_.detach($image)
      }
    }
  }, [zoom, zoomer_, imageLoadStatus])

  return (
    <LazyLoad placeholder={placeholder} offset={30}>
      <figure suppressHydrationWarning>
        <span className="relative block">
          <span>
            {imageLoadStatus !== ImageLoadStatus.Loaded && placeholder}
          </span>
          <img
            src={src}
            title={title}
            alt={alt}
            ref={imageRef}
            onLoad={() => {
              setImageLoadStatusSafe(ImageLoadStatus.Loaded)
            }}
            onError={() => setImageLoadStatusSafe(ImageLoadStatus.Error)}
            className={styles({
              status: imageLoadStatus,
              className: imageStyles[ImageLoadStatus.Loaded],
            })}
            onAnimationEnd={(e) => {
              if (ImageLoadStatus.Loaded) {
                ;(e.target as HTMLElement).classList.remove(
                  imageStyles[ImageLoadStatus.Loaded],
                )
              }
            }}
          />
        </span>

        {!!figcaption && (
          <figcaption className="mt-1 flex flex-col items-center justify-center">
            <Divider className="w-[80px] opacity-80" />
            <span>{figcaption}</span>
          </figcaption>
        )}
      </figure>
    </LazyLoad>
  )
}

export const ZoomedImage: Component<TImageProps> = (props) => {
  return (
    <span className="block text-center">
      <ImageLazy {...props} zoom />
    </span>
  )
}

interface FixedImageProps extends TImageProps {
  containerWidth: number

  height?: number
  width?: number
}
export const FixedZoomedImage: Component<FixedImageProps> = (props) => {
  const placeholder = useMemo(() => {
    return <Placeholder containerWidth={props.containerWidth} src={props.src} />
  }, [props.containerWidth, props.src])
  return <ImageLazy zoom placeholder={placeholder} {...props} />
}

const Placeholder: FC<
  Pick<FixedImageProps, 'src' | 'containerWidth' | 'height' | 'width'>
> = ({ src, containerWidth, height: manualHeight, width: manualWidth }) => {
  const imageMeta = useMarkdownImageRecord(src)

  const scaledSize = useMemo(() => {
    let nextHeight = manualHeight
    let nextWidth = manualWidth

    if (!nextHeight || !nextWidth) {
      if (!imageMeta) {
        return
      }
      nextHeight = imageMeta.height
      nextWidth = imageMeta.width
    }

    if (containerWidth <= 0) return
    const { height: scaleHeight, width: scaleWidth } = calculateDimensions({
      width: nextHeight,
      height: nextWidth,
      max: {
        width: containerWidth,
        height: Infinity,
      },
    })

    return {
      scaleHeight,
      scaleWidth,
    }
  }, [manualHeight, manualWidth, containerWidth, imageMeta])

  if (!scaledSize) return <NoFixedPlaceholder accent={imageMeta?.accent} />

  return (
    <span
      className={styles.base}
      style={{
        height: scaledSize.scaleHeight,
        width: scaledSize.scaleWidth,
        backgroundColor: imageMeta?.accent,
      }}
    />
  )
}

const NoFixedPlaceholder = ({ accent }: { accent?: string }) => {
  return (
    <span
      className={clsxm(
        styles.base,
        'h-[300px] w-full bg-slate-300 dark:bg-slate-700',
      )}
      style={{
        backgroundColor: accent,
      }}
    />
  )
}
