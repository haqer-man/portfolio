"use client"

import { useState } from "react"

import { type LightweightPhoto } from "@/db/schema"
import { GalleryImage } from "@/app/components/GalleryImage"
import { Lightbox } from "@/app/components/Lightbox"

type PhotoArrayProp = {
  photos: LightweightPhoto[]
}

function createStyling(photo: LightweightPhoto): React.CSSProperties {
  return {
    "--ratio": photo.width / photo.height,
    flexBasis: "calc(var(--row-height) * var(--ratio))",
    flexGrow: "var(--ratio)",
  } as React.CSSProperties;
}

export function Gallery({ photos }: PhotoArrayProp) {
  const [activePhotoId, setActivePhotoId] = useState<number | null>(null);
  const closeLightbox = () => setActivePhotoId(null);
  const activePhoto = photos.find((photo) => photo.id === activePhotoId);

  return (
    <>
      <div className="gallery">
        {photos.map((item: LightweightPhoto) => (
          <div key={item.id} style={createStyling(item)} className="gallery__container">
            <GalleryImage photo={item} setSelectedPhoto={setActivePhotoId} />
          </div>
        ))}
      </div>
      {activePhoto && <Lightbox photo={activePhoto} closeFn={closeLightbox} />}
    </>
  )
}