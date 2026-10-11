type NavbarItem = {
  readonly label: string,
  readonly href: `/${string}`
}
export type NavbarData = readonly NavbarItem[];

export const photoNavbarData: NavbarData = [
  {label: "Albums", href: "/photos/albums"},
  {label: "Map", href: "/photos/map"},
  {label: "Contact", href: "/contact"},
]