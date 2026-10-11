"use client"

import { useState } from 'react'
import { hamburgerData } from '@/app/shared/navbar-links'
import type { NavbarItem } from '@/app/shared/navbar-links'

export function Hamburger() {
  const [menuShown, setMenuShown] = useState(false);

  function handleClick() {
    setMenuShown(menuShown => !menuShown);
  }

  return (
    <div className="hamburger">
      <button aria-label="Toggle navigation" onClick={handleClick} aria-expanded="false">Hamburger</button>
      
      {menuShown && <nav className="hamburger__menu" role="navigation">
        <ul className="hamburger__list">
          {hamburgerData.map((item:NavbarItem) => (
            <li className="hamburger__item" key={item.label}>
              <a href={item.href} className="hamburger__item">{item.label}</a>
            </li>
          ))}
        </ul>
      </nav>}
    </div>
  )
}