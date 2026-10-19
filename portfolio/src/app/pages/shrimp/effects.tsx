"use client"

import { useEffect } from "react"

// Replaces the inline <script> from success.html.
// Renders nothing; it only runs the original behavior after the page loads.
export function SuccessEffects() {
  useEffect(() => {
    let cancelled = false

    const video = document.getElementById("shrimple") as HTMLVideoElement | null
    const audio = document.getElementById("cheer") as HTMLAudioElement | null
    if (video) video.muted = false
    if (audio) audio.muted = false

    // Loaded on demand so the library never runs during server rendering.
    import("canvas-confetti").then(({ default: confetti }) => {
      if (cancelled) return

      const scalar = 10
      const happy = confetti.shapeFromText({ text: "😄", scalar })
      const fire = confetti.shapeFromText({ text: "🔥", scalar })
      const conf = confetti.shapeFromText({ text: "🎊", scalar })
      const firework1 = confetti.shapeFromText({ text: "🎆", scalar })
      const firework2 = confetti.shapeFromText({ text: "🎇", scalar })

      confetti({
        shapes: [happy, fire, conf, firework1, firework2],
        particleCount: 200,
        spread: 100,
        scalar,
      })
    })

    return () => {
      cancelled = true
    }
  }, [])

  return null
}

// Replaces the inline <script> from fail.html.
export function FailEffects() {
  useEffect(() => {
    const laugh = document.getElementById("laugh") as HTMLAudioElement | null
    if (laugh) laugh.muted = false
  }, [])

  return null
}