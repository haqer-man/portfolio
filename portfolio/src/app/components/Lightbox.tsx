"use client"

import { useEffect } from "react"
import type { Photo } from "@/app/shared/photo-data"

type LightboxProps = {
  photo: Photo,
  closeFn: () => void,
}

export function Lightbox({ photo, closeFn }: LightboxProps) {
  // Escape closes the lightbox. This component only exists while a photo
  // is selected, so the listener is attached only while it's open.
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") closeFn();
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [closeFn]);

  // Stop the page behind the overlay from scrolling.
  useEffect(() => {
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, []);

  function handleBackdropClick(event: React.MouseEvent<HTMLDivElement>) {
    // Only close if the backdrop itself was clicked, not something inside it.
    if (event.target === event.currentTarget) closeFn();
  }

  return (
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={photo.alt_text ?? "Photo"}
      onClick={handleBackdropClick}
    >
      <button className="lightbox__close" onClick={closeFn} aria-label="Close">
        ×
      </button>
      <img
        className="lightbox__image"
        src={photo.base_path}
        alt={photo.alt_text ?? ""}
      />
    </div>
  )
}