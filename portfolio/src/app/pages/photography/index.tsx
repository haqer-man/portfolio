// import { photos } from "@/app/shared/photo-data"
import { Gallery } from "@/app/components/Gallery"

import { db } from "@/db/db"
import { photos, type LightweightPhoto } from "@/db/schema"

import { widthsFor, srcSetFor } from "@/app/shared/data-ingest"

export const PhotoHome = async () => {
  const allPhotos: LightweightPhoto[] = await db.select({
    id: photos.id,
    path: photos.path,
    width: photos.width,
    height: photos.height,
    altText: photos.altText
  }).from(photos);

  for (const p of allPhotos) {
    console.log(srcSetFor(p.path, p.width));
  }

  const testWidths = [300, 400, 450, 500, 700, 800, 1000, 1600, 1700, 3000];
  for (const w of testWidths) {
    console.log(`originalWidth: ${w} => ${JSON.stringify(widthsFor(w))}`);
  }

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