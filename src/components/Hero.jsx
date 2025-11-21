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
        <section className="min-h-dvh bg-[#eeeee0] flex flex-col justify-between relative"
            style={{
                background: "#eeeee0",
                filter: `blur(${blur}px)`,
                opacity: fade,
            }}>

            <div className="text-center px-6 pt-48">
                <p className="font-serifbrand text-xl sm:text-2xl md:text-3xl max-w-4xl mx-auto leading-relaxed">
                    I like figuring out how things work. Whether it's gaming, code, tools, or some random idea that shows up at 2 a.m. If something doesn't make sense, I'll probably poke at it until it does.
                </p>
            </div>

            <div className="text-center -mb-1 sm:-mb-3 pb-[env(safe-area-inset-bottom)]">
                <p className="mt-6 font-poppins text-gray-600 tracking-tightxs">Gamer • Creator • Developer</p>
                <h1 className="text-[80px] sm:text-[120px] md:text-[180px] font-bold leading-none font-poppins tracking-tightxs">davids</h1>
            </div>
        </section>
    )
}