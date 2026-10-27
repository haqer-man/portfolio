import type { LayoutProps } from 'rwsdk/router'
import { Navigation } from "@/app/components/Navigation";
import { StarsBackground } from '../components/ui/StarsBackground';

export function RootLayout({ children, requestInfo }: LayoutProps) {
  return (
    <div className="relative max-h-screen">
      <div className="flex max-h-screen flex-col">
        <Navigation />
        <main className="lg:pt-12 md:pt-6 pt-4 flex-1">{children}</main>
        {/* <Footer /> */}
      </div>
    </div>
  );
}