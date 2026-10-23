import { BackgroundBeamsWithCollision } from "@/app/components/ui/BackgroundBeamsWithCollision";
import { ShootingStars } from "@/app/components/ui/ShootingStars";
import { StarsBackground } from "@/app/components/ui/StarsBackground";
import { TextHoverEffect } from "@/app/components/ui/TextHoverEffect";
import { Social } from "@/app/components/Social";

const navigation = [
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export function Home() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden">
    <BackgroundBeamsWithCollision 
      className="h-auto md:h-auto min-h-screen to-neutral-900 dark:from-black dark:to-neutral-900"
    >
    <ShootingStars
      starMinWidth={15}
      starMaxWidth={25}
      starColor="#e8d580"
      trailColor="#b390e0"
      minSpeed={8}
      maxSpeed={10}
      starHeight={5}
      minDelay={1000}
      maxDelay={3000}
    />
    <StarsBackground
      starDensity={0.005}
      twinkleProbability={0.8}
      atHome={true}
    />
    <div className="grid grid-cols-2 px-8 md:grid-cols-1 pt-20">
      <div className="z-10 flex items-center justify-center md:flex-col">
        <div className="pl-20 md:pl-0 md:w-full">
          <div className="flex flex-col justify-center">
            <div className="px-10 mb-8">
              <Social />
            </div>
            <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
            <div className="pl-10 w-full">
              {/* text-hero pl-10 z-10 text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display whitespace-nowrap bg-clip-text */}
              <TextHoverEffect
                className="text-hero"
                segments={[
                  { text: "I'm ", color: "#ffffff" },
                  { text: "Zachary ", color: "#22d3ee" },
                  { text: "Burgoon.", color: "#ec4899" },
                ]}
              />
            </div>
            <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
            <div className="inline-block px-10 text-left animate-fade-in z-15 w-full mt-8">
              <h2 className="text-md text-zinc-500 md:text-3xl">
                I&apos;m a full time student studying Robotics Engineering, Computer Science, and Music at WPI.
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
    </BackgroundBeamsWithCollision>
    </div>
  );
}