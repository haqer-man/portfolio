// import { photos } from "@/app/shared/photo-data"
import { Gallery } from "@/app/components/Gallery"

import { db } from "@/db/db"
import { photos, type LightweightPhoto } from "@/db/schema"

export const PhotoHome = async () => {
  const allPhotos: LightweightPhoto[] = await db.select({
    id: photos.id,
    path: photos.path,
    width: photos.width,
    height: photos.height,
    altText: photos.altText
  }).from(photos);
  return (
    <>
    <div className="hero__image">
      <div className="hero__text">
        <h1>Burgoon Photography</h1>
      </div>
    </div>
    <Gallery photos={allPhotos} />
    </>
  );
}