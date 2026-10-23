"use client";
import { TiHomeOutline as Home } from "react-icons/ti";
import React, { useEffect, useRef, useState } from "react";
import { ShootingStars } from "@/app/components/ui/ShootingStars";
import { StarsBackground } from "@/app/components/ui/StarsBackground";

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
		<header ref={ref} className="fixed top-0 z-50 w-full bg-black">
			<StarsBackground 
				starDensity={0.002} 
				twinkleProbability={0.8} 
				atHome={false}
			/>
			<div className="relative container flex flex-row-reverse items-center p-6 mx-auto">

				<div className="flex justify-between gap-8">
					<a
						href="/"
						className="duration-200 text-zinc-400 hover:text-zinc-100"
					>
						<Home size={20} />
						<span className="sr-only">Home</span>
					</a>
					<a
						href="/projects"
						className="duration-200 text-zinc-400 hover:text-zinc-100"
					>
						Projects
					</a>
          <a
            href="/contact"
            className="duration-200 text-zinc-400 hover:text-zinc-100"
          >
            Contact
          </a>
				</div>
			</div>
		</header>
	);
};