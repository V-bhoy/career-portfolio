import { Button } from "../components/Button"
import { HeroExperience } from "../components/hero-models/HeroExperience";
import { words } from "../constants"
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { AnimatedCounter } from "../components/AnimatedCounter";

export default function Hero() {
    useGSAP(() => {
      gsap.fromTo(".hero-text h1", { y: 50, opacity: 0 }, {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.inOut",
        stagger: 0.3,
      });
    }, []);

    return (
      <section id="hero" className="relative overflow-hidden">
        <div className="absolute top-0 left-0 z-10">
          <img
            src="/images/bg.png"
            alt="Hero Background"
          />
        </div>
        <div className="hero-layout">
          {/*LEFT HERO CONTENT */}
          <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
            <div className="flex flex-col gap-7">
              <div className="hero-text">
                <h1>
                  Shaping
                  <span className="slide">
                    <span className="wrapper">
                      {words.map((word) => (
                        <span
                          key={word.text}
                          className="flex items-center md:gap-3 gap-1 pb-2"
                        >
                          <img
                            src={word.imgPath}
                            alt={word.text}
                            className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                          />
                          <span>{word.text}</span>
                        </span>
                      ))}
                    </span>
                  </span>
                </h1>
                <h1>Into Real Projects</h1>
                <h1>That Delivers Results</h1>
              </div>
              <p className="text-white-50 md:text-lg relative z-10 pointer-events-none max-w-xs md:max-w-sm">
                Hi, I'm Vaishali, a <span className="font-semibold">Software Developer</span> based in
                Pune with a passion for building robust & scalable tech systems.
              </p>
              <Button
                className={"md:h-16 w-60 h-12"}
                id="button"
                text={"See My Work"}
              />
            </div>
          </header>
          {/*RIGHT: 3D MODEL */}
          <figure>
            <div className="hero-3d-layout">
              <HeroExperience />
            </div>
          </figure>
            </div>
            <AnimatedCounter/>
      </section>
    );
}