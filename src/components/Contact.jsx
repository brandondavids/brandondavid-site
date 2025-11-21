import React, { useEffect, useState } from "react";

export default function Contact() {
    const [scrollY, setScrollY] = useState(0);
    
        useEffect(() => {
            const handleScroll = () => {
              setScrollY(window.scrollY);  
            };
    
            window.addEventListener("scroll", handleScroll);
            return () => window.removeEventListener("scroll", handleScroll);
        })
    
    // Slide-up + fade
    const offset = Math.max(0, 300 - scrollY); 
    const opacity = Math.min(scrollY / 200, 1);

    return (
        <section className="min-h-screen bg-[#111] text-white relative -mt-[300px]"
            style={{
                transform: `translateY(${offset}px)`,
                opacity,
                transition: "transform 0.1s linear, opacity 0.1s linear",
            }}>

            <div className="container mx-auto px-8 py-68 flex items-start justify-between">
                <div className="max-w-2xl">
                    <h2 className="text-6xl font-extrabold mb-4">contact me!</h2>
                    <p className="font-serifbrand text-xl opacity-80">always down to talk tech or memes.<br/>say hi anytime :)</p>
                </div>


            <div className="text-right space-y-4">
                <a className="block text-xl font-semibold relative group" href="mailto:bdsinambela@gmail.com">
                    Email
                    <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </a>
                <a className="block text-xl font-semibold relative group" href="https://github.com/brandondavids" target="_blank" rel="noreferrer">
                    Github
                    <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </a>
                <a className="block text-xl font-semibold relative group" href="https://instagram.com/@ddviidd" target="_blank" rel="noreferrer">
                    Instagram
                    <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </a>
                </div>
            </div>


            {/* centered footer line and copyright */}
            <div className="absolute bottom-0 left-0 w-full border-t border-gray-700">
                <div className="container mx-auto px-8 py-6 text-gray-400">© 2025 Brandon David, All Rights Reserved</div>
            </div>
        </section>
    )
}