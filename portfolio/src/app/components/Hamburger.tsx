"use client"

import { useState } from 'react'

export function Hamburger() {
  const [menuShown, setMenuShown] = useState(false);

  function handleClick() {
    setMenuShown(menuShown => !menuShown);
  }

  return (
    <div className="hamburger">
      <button aria-label="Toggle navigation" onClick={handleClick}>Hamburger</button>
      <h1>{JSON.stringify(menuShown)}</h1>
    </div>
  )
}