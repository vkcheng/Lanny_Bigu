"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative h-[65vh] min-h-[500px] w-full flex flex-col items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="https://akovkxdzyilbwfaauyhz.supabase.co/storage/v1/object/public/images/hero/Lanny_Bigu_hero-min.png"
                    alt="Lanny Bigu Hero Background"
                    fill
                    className="object-cover object-center opacity-90"
                    priority
                    quality={100}
                />
                {/* Gradient Overlays for Readability */}
                <div className="absolute inset-0 bg-white/40 mix-blend-overlay" />
                <div className="absolute inset-0 bg-linear-to-b from-rice/60 via-rice/30 to-rice/90" />
            </div>

            {/* Main Content */}
            <div className="z-10 text-center space-y-8 md:space-y-12">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="flex flex-col items-center gap-6"
                >
                    <h1 className="flex flex-col items-center">
                        <span className="text-5xl md:text-7xl lg:text-8xl font-serif text-ink tracking-wide">
                            忆养身心
                        </span>
                        <span className="h-px w-24 bg-cinnabar/60 my-6 block" aria-hidden="true" />
                        <span className="text-5xl md:text-7xl lg:text-8xl font-serif text-ink tracking-wide">
                            辟谷学院
                        </span>
                    </h1>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 1 }}
                    className="text-base md:text-lg text-charcoal/80 font-light tracking-widest"
                >
                    从断食中找回自己 · 从坚持中重塑健康
                </motion.p>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-12 flex flex-col items-center gap-2 cursor-pointer text-charcoal/50 hover:text-cinnabar transition-colors duration-300"
                onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
            >
                <span className="text-xs uppercase tracking-widest">向下滚动</span>
                <ArrowDown className="w-5 h-5 animate-bounce" />
            </motion.div>
        </section>
    );
}
