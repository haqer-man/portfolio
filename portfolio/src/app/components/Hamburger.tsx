"use client"

import { useState, useEffect, useRef } from 'react'
import { hamburgerData } from '@/app/shared/navbar-links'
import type { NavbarItem } from '@/app/shared/navbar-links'
import styles from "@/app/components/Hamburger.module.css"

function useEscape(menuShown: boolean,
      setMenuShown: React.Dispatch<React.SetStateAction<boolean>>) {
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
      menuShown: boolean,
      setMenuShown: React.Dispatch<React.SetStateAction<boolean>>,
      ref: React.RefObject<HTMLDivElement | null>) {

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
    <div className={styles.hamburger} ref={wrapperRef}>
      <button className={styles.hamburger__toggle}
              aria-label="Toggle navigation"
              aria-controls="hamburgerMenu"
              onClick={handleClick} 
              aria-expanded={menuShown}>
        <span className={styles.bar} aria-hidden={!menuShown}></span>
        <span className={styles.bar} aria-hidden={!menuShown}></span>
        <span className={styles.bar} aria-hidden={!menuShown}></span>
      </button>
      
      {menuShown && <nav className={styles.hamburger__menu} id="hamburgerMenu">
        <ul className={styles.hamburger__list}>
          {hamburgerData.map((item:NavbarItem) => (
            <li className={styles.hamburger__item} key={item.label}>
              <a href={item.href} className={styles.hamburger__link}>{item.label}</a>
            </li>
          ))}
        </ul>
      </nav>}
    </div>
  )
}