import type { LayoutProps } from 'rwsdk/router'
import { Navigation } from "@/app/components/Navigation";

export function RootLayout({ children, requestInfo }: LayoutProps) {
  return (
    <html lang="en">
      <head>
        <title>Zachary Burgoon</title>
        <meta name="description" content="Portfolio" />
      </head>
      <body className="bg-black">
        <Navigation />
        {children}
      </body>
    </html>
  );
}