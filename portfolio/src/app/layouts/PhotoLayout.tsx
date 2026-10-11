import type { LayoutProps } from 'rwsdk/router'
import { Navbar } from '@/app/components/Navbar'
import { photoNavbarData } from '@/app/shared/navbar-links'

export function PhotoLayout({ children, requestInfo }: LayoutProps) {
	return (
		<div className="photo__layout">
      <Navbar navbarData={photoNavbarData} />

      <main>{children}</main>
		</div>
	);
}