import type { Photo } from "@/app/shared/photo-data"

type PhotoProp = {
  photo: Photo
}

export function GalleryImage({ photo }: PhotoProp) {
  const imageStyle = {
    "--ratio": photo.width / photo.height,
    flexBasis: "calc(var(--row-height) * var(--ratio))",
    flexGrow: "var(--ratio)",
  } as React.CSSProperties;
  return (
    <img className="gallery__image"
        src={photo.base_path}
        alt={photo.alt_text}
        loading="lazy"/>
  )
}