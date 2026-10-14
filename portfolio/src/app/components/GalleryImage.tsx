import type { Photo } from "@/app/shared/photo-data"

type GalleryImageProps = {
  photo: Photo,
  setSelectedPhoto: React.Dispatch<React.SetStateAction<number>>
}

export function GalleryImage({ photo, setSelectedPhoto }: GalleryImageProps) {

  return (
    <button className="gallery__button" onClick={() => (
      setSelectedPhoto(photo.id)
    )}>
    <img className="gallery__image"
        src={photo.base_path}
        alt={photo.alt_text}
        loading="lazy"/>
    </button>
  )
}