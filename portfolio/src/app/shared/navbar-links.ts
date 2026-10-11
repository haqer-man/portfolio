export type NavbarItem = {
  readonly label: string,
  readonly href: `/${string}`
}
export type NavbarData = readonly NavbarItem[];

export const PhotoNavbarData: NavbarData = [
  {label: "Gallery", href: "/photos"}, // TODO: Rename this to imply it is the photography home page
  {label: "Albums", href: "/photos/albums"},
  {label: "Map", href: "/photos/map"},
  {label: "Contact", href: "/contact"},
]

