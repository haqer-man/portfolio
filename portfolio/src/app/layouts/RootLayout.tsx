import type { LayoutProps } from 'rwsdk/router'
import { Navigation } from "@/app/components/Navigation";
import { StarsBackground } from '../components/ui/StarsBackground';

export function RootLayout({ children, requestInfo }: LayoutProps) {
  return (
    <html lang="en">
      <head>
        <title>Zachary Burgoon</title>
        <meta name="description" content="Portfolio" />
      </head>
      <body className="max-h-screen bg-black text-zinc-200">
        <div className="relative max-h-screen">
          <div className="flex max-h-screen flex-col">
            <Navigation />
            <main className="flex-1">{children}</main>
            {/* <Footer /> */}
          </div>
        </div>
      </body>
    </html>
  );
}