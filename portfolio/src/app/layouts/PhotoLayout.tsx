import type { LayoutProps } from 'rwsdk/router'

export function PhotoLayout({ children, requestInfo }: LayoutProps) {
	return (
		<div className="photo-layout">
			<header>Photography Header
        <li>{requestInfo &&
          <span>Path: {new URL(requestInfo.request.url).pathname}</span>
        }</li>
      </header>
      <main>{children}</main>
		</div>
	);
}