import type { Photo } from "@/app/shared/photo-data"
import { GalleryImage } from "@/app/components/GalleryImage"

type PhotoArrayProp = {
  photos: Photo[]
}

function createStyling(photo: Photo): React.CSSProperties {
  return {
    "--ratio": photo.width / photo.height,
    flexBasis: "calc(var(--row-height) * var(--ratio))",
    flexGrow: "var(--ratio)",
  } as React.CSSProperties;
}
export function Gallery({ photos }: PhotoArrayProp) {
  return (
    <div className="gallery">
    {photos.map((item:Photo) => (
      <div key={item.id} style={createStyling(item)} className="gallery__container">
        <GalleryImage photo={item}/>
      </div>
      ))}
    </div>
  )
}