import { Gallery } from "@/app/components/Gallery"
import { photos } from "@/app/shared/photo-data"

export function PhotoHome() {
    return (
        <>
        <div className="hero__image">
          <div className="hero__text">
            <h1>Burgoon Photography</h1>
            <h3>Work in Progress</h3>
          </div>
        </div>
        <Gallery photos={photos} />
        </>
    );
}