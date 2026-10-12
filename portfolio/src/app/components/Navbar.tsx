import type { NavbarItem, NavbarList } from "@/app/shared/navbar-links"
import { Hamburger } from "@/app/components/Hamburger"

type NavbarDataProp = {
  readonly navbarData: NavbarList;
}

export function Navbar({ navbarData }: NavbarDataProp ) {
  return (
    <header className="navbar" role="banner">
      <div className="navbar__container">
        <div className="navbar__menu">
          <a href="/" className="navbar__home" aria-label="Homepage">Home</a>

          <ul className="navbar__list">
            {navbarData.map((item:NavbarItem) => (
              <li className="navbar__item" key={item.label}>
                <a href={item.href} className="navbar__link">{item.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <Hamburger />
      </div>
    </header>
  );
}