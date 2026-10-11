export type NavbarItem = {
  readonly label: string,
  readonly href: `/${string}`
}
export type NavbarList = readonly NavbarItem[];

// TODO: Make the hamburger menu allow the user to select
// specific pages from a dropdown under each section
export const HamburgerData: NavbarList = [
  {label: "Home", href: "/"},
  {label: "Computer Science", href: "/cs"},
  {label: "Robotics", href: "/robotics"},
  {label: "Photography", href: "/photos"},
  {label: "Contact Me", href: "/contact"},
]

export const photoNavbarData: NavbarList = [
  {label: "Gallery", href: "/photos"}, // TODO: Rename this to imply it is the photography home page
  {label: "Albums", href: "/photos/albums"},
  {label: "Map", href: "/photos/map"},
  {label: "Contact", href: "/contact"},
]