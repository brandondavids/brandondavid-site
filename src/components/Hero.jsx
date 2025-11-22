import React, { useEffect, useState } from "react";

export default function Hero() {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
          setScrollY(window.scrollY);  
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [])

    const blur = Math.min(scrollY / 40, 12);
    const fade = Math.max(1 - scrollY / 500, 0);

    return (
        <section className="
                min-h-dvh bg-[#eeeee0] px-6
                flex flex-col justify-between
                relative
                md:block
            "
            style={{
                filter: `blur(${blur}px)`,
                opacity: fade,
            }}>

            <div className="
                pt-[28vh] mx-auto text-center max-w-[90%]

                sm:max-w-[70%]

                md:absolute md:top-[4vh]
                md:right-20
                md:max-w-[540px]
                md:text-right
            ">
                <p className="
                    font-poppins font-light tracking-tighter
                    text-[clamp(1.2rem,2.2vw,3.4rem)]
                ">
                    I like figuring out how things work. Whether it's gaming, code, tools, or some random idea that shows up at 2 a.m. If something doesn't make sense, I'll probably poke at it until it does.
                </p>
            </div>

            <div className="
                w-full flex justify-center pb-[env(safe-area-inset-bottom)]
                md:absolute md:bottom-[-4vh] 
                md:left-[-2vw] md:justify-start
            ">
                <h1 className="
                    font-serifbrand font-bold leading-none tracking-tighter
                    text-[clamp(4rem,18vw,32rem)]
                ">davids</h1>
            </div>
        </section>
    )
}
