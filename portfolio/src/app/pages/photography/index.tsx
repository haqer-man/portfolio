import { Gallery } from "@/app/components/Gallery"
import { photos } from "@/app/shared/photo-data"

export function PhotoHome() {
    return (
        <>
        <div className="hero__image">
          <div className="hero__text">
            <h1>Burgoon Photography</h1>
          </div>
        </div>
        <Gallery photos={photos} />
        </>
    );
}