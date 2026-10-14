"use client"

import { useState } from "react"

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
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);

  return (
    <div className="gallery">
    {photos.map((item:Photo) => (
      <div key={item.id} style={createStyling(item)} className="gallery__container">
        <GalleryImage photo={item} setSelectedPhoto={setSelectedPhoto}/>
      </div>
      ))}
      Currently selected: {selectedPhoto}
    </div>
  )
}