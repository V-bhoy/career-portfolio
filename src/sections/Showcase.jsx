import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Showcase() {
    const sectionRef = useRef(null);
    const project1Ref = useRef(null);
    const project2Ref = useRef(null);
    const project3Ref = useRef(null);

  



    useGSAP(() => { 
          const projects = [
            project1Ref.current,
            project2Ref.current,
            project3Ref.current,
          ];
        gsap.fromTo(sectionRef.current, {
            opacity: 0,
        }, {
            opacity: 1,
            duration: 1.5,

        })
            projects.forEach((card, index) => {
              gsap.fromTo(
                card,
                {
                  y: 50,
                  opacity: 0,
                },
                {
                  y: 0,
                  opacity: 1,
                  duration: 1,
                  delay: (index + 1) * 0.3,
                  scrollTrigger: {
                    trigger: card,
                    start: "top bottom-=100",
                  },
                }
              );
            });
    }, []);
    return (
      <div id="work" className="app-showcase" ref={sectionRef}>
        <div className="w-full">
          <div className="showcaselayout">
            <div className="first-project-wrapper" ref={project1Ref}>
              <div className="image-wrapper">
                <img src="/images/p1.png" alt="one-stop e-commerce app" />
              </div>
              <div className="text-content">
                <h2></h2>
                <p className="text-white-50 md:text-xl"></p>
              </div>
            </div>
            <div className="project-list-wrapper overflow-hidden">
              <div className="project" ref={project2Ref}>
                <div className="image-wrapper bg-[#ffefdb]">
                  <img src="/images/p1.png" alt="social media app" />
                </div>
                <h2></h2>
              </div>
              <div className="project" ref={project3Ref}>
                <div className="image-wrapper bg-[#ffefdb]">
                  <img src="/images/p1.png" alt="social media app" />
                </div>
                <h2></h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}