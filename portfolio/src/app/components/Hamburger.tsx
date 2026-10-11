"use client"

import { useState, useEffect, useRef } from 'react'
import { hamburgerData } from '@/app/shared/navbar-links'
import type { NavbarItem } from '@/app/shared/navbar-links'

export function Hamburger() {
  const [menuShown, setMenuShown] = useState(false);

  function useEscape() {
    useEffect(() => {
      if (!menuShown) return;
      function handlePressEscape(event: KeyboardEvent) {
        if (event.code === "Escape") {
          setMenuShown(false);
        }
      }

      document.addEventListener('keydown', handlePressEscape);
      return () => {
        document.removeEventListener('keydown', handlePressEscape);
      };
    }, [menuShown]);
  }

  function useClickOutside(ref: React.RefObject<number>) {
    // TODO
    return;
  }

  useEffect(() => {
    console.log("Mounted");
  });

  function handleClick() {
    setMenuShown(menuShown => !menuShown);
  }

  const wrapperRef = useRef(0);
  useClickOutside(wrapperRef);
  useEscape();

  return (
    <div className="hamburger">
      <button aria-label="Toggle navigation" onClick={handleClick} aria-expanded={menuShown}>Hamburger</button>
      
      {menuShown && <nav className="hamburger__menu">
        <ul className="hamburger__list">
          {hamburgerData.map((item:NavbarItem) => (
            <li className="hamburger__item" key={item.label}>
              <a href={item.href} className="hamburger__link">{item.label}</a>
            </li>
          ))}
        </ul>
      </nav>}
    </div>
  )
}