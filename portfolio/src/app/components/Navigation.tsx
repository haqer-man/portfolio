"use client";
import { useEffect, useRef, useState } from "react";
import { StarsBackground } from "@/app/components/ui/StarsBackground";
import { rootNavbarData, NavbarItem } from "@/app/shared/navbar-links";

export function Navigation() {
	const ref = useRef<HTMLElement>(null);
	const [isIntersecting, setIntersecting] = useState(true);

	useEffect(() => {
		if (!ref.current) return;
		const observer = new IntersectionObserver(([entry]) =>
			setIntersecting(entry.isIntersecting),
		);

		observer.observe(ref.current);
		return () => observer.disconnect();
	}, []);

	return (
		<header ref={ref} className="sticky top-0 z-50 w-full border-b border-zinc-800/80 bg-zinc-950/80 backdrop-blur supports-[backdrop-filter]:bg-zinc-950/70">
			<StarsBackground 
				starDensity={0.006} 
				twinkleProbability={0.7} 
				atHome={false}
			/>
			<div className="relative mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a className="text-sm font-semibold tracking-[0.25em] text-zinc-400 transition" href="/">
          burgoon
        </a>
        <nav className="flex items-center gap-3 sm:gap-4">
          {rootNavbarData.map((link:NavbarItem) => (
            <a
              key={link.href}
              href={link.href}
              className="duration-200 text-sm text-zinc-400 transition hover:text-zinc-100"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
		</header>
	);
};