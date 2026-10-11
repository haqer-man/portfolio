import type { NavbarItem, NavbarData } from "@/app/shared/navbar-links"

export function Navbar({ navbarData }: NavbarData ) {
  return (
    <header className="navbar">
      <div className="navbar__container">
        <div className="navbar__menu">
          <a href="/" className="navbar__home">Home</a>

          <ul className="navbar__list">
            {navbarData.map((item:NavbarItem) => (
              <li className="navbar__item" key={item.label}>
                <a href={item.href} className="navbar__link">{item.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <button className="navbar__menu">
          Hamburger menu
        </button>
      </div>
    </header>
  );
}