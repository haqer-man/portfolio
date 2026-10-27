import { StarsBackground } from "@/app/components/ui/StarsBackground";
import { TextHoverEffect } from "@/app/components/ui/TextHoverEffect";
import { Social } from "@/app/components/Social";

export function Maze() {
  return (
    <div className="relative flex flex-col items-center justify-start min-h-screen overflow-hidden">
      <StarsBackground
        starDensity={0.003}
        twinkleProbability={0.7}
        atHome={false}
      />
      <div className="mx-auto max-w-7xl px-4 pt-20 pb-12 px-6 md:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
                      <div className="pl-10 w-full">
                        {/* text-hero pl-10 z-10 text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display whitespace-nowrap bg-clip-text */}
                        <TextHoverEffect
                          className="text-hero-2 gradient-to-r from-blue-500 to-rose-600"
                          segments={[
                            { text: "Robot Navigation Final Project", color: "#3364D7" },
                          ]}
                        />
                      </div>
                      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
        </div>
      </div>
    </div>
  )
}