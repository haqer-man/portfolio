"use client"

import { useState, useEffect, useRef } from 'react'
import { hamburgerData } from '@/app/shared/navbar-links'
import type { NavbarItem } from '@/app/shared/navbar-links'

function useEscape(menuShown: boolean, setMenuShown: Function) {
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

function useClickOutside(
    menuShown: boolean, setMenuShown: Function, ref: React.RefObject<HTMLDivElement | null>) {
  useEffect(() => {
    if (!menuShown) return;
    function handleClickOutside(event: MouseEvent) {
      if (!(event.target instanceof Node)) return;
      if (ref.current && !ref.current.contains(event.target)) {
        setMenuShown(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuShown]);
}

export function Hamburger() {
  const [menuShown, setMenuShown] = useState(false);

  function handleClick() {
    setMenuShown(menuShown => !menuShown);
  }

  const wrapperRef = useRef(null);
  useClickOutside(menuShown, setMenuShown, wrapperRef);
  useEscape(menuShown, setMenuShown);

  return (
    <div className="hamburger" ref={wrapperRef}>
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