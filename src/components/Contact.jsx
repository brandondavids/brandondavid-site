// import React, { useEffect, useState } from "react";

// export default function Contact() {
//     const [scrollY, setScrollY] = useState(0);
    
//         useEffect(() => {
//             const handleScroll = () => {
//               setScrollY(window.scrollY);  
//             };
    
//             window.addEventListener("scroll", handleScroll);
//             return () => window.removeEventListener("scroll", handleScroll);
//         })
    
//     const offset = Math.max(0, 300 - scrollY); 
//     const opacity = Math.min(scrollY / 200, 1);

//     return (
//         <section className="min-h-dvh text-black relative -mt-[250px] flex flex-col items-center justify-center"
//             style={{
//                 transform: `translateY(${offset}px)`,
//                 opacity,
//                 transition: "transform 0.1s linear, opacity 0.1s linear",
//             }}>

//             <div className="text-center">
//                 <h2 className="font-poppins text-[clamp(1.2rem,2.4vw,3rem)] tracking-tighter leading-tight">
//                     Brandon David
//                 </h2>

//                 <p className="font-poppins text-[clamp(1.2rem,2.4vw,3rem)] tracking-tighter leading-tight">
//                     brdndvid@gmail.com
//                 </p>

//                 <div className="pt-6 space-y-2">
//                     <a
//                         href="https://github.com/brandondavids"
//                         className="block text-[clamp(1.2rem,2.4vw,3rem)] underline underline-offset-4 decoration-[2px] font-poppins tracking-tighter leading-tight"
//                         target="_blank"
//                     >
//                         Github
//                     </a>
//                     <a
//                         href="https://instagram.com/ddviidd"
//                         className="block text-[clamp(1.2rem,2.4vw,3rem)] underline underline-offset-4 decoration-[2px] font-poppins tracking-tighter leading-tight"
//                         target="_blank"
//                     >
//                         Instagram
//                     </a>
//                 </div>
//             </div>
//         </section>
//     )
// }
