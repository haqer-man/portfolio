import type { LightweightPhoto } from "@/db/schema"

type GalleryImageProps = {
  photo: LightweightPhoto,
  setSelectedPhoto: React.Dispatch<React.SetStateAction<number | null>>
}

export function GalleryImage({ photo, setSelectedPhoto }: GalleryImageProps) {

  return (
    <button className="gallery__button" onClick={() => (
      setSelectedPhoto(photo.id)
    )}>
    <img className="gallery__image"
        src={photo.path}
        alt={photo.altText ?? ""}
        loading="lazy"/>
    </button>
  )
}