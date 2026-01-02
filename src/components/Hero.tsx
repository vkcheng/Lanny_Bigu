"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-linear-to-b from-stone/10 to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-linear-to-t from-bamboo/5 to-transparent pointer-events-none rounded-full blur-3xl" />

            {/* Main Content */}
            <div className="z-10 text-center space-y-8 md:space-y-12">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="flex flex-col items-center gap-6"
                >
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-ink tracking-wide">
                        忆养身心
                    </h1>
                    <div className="h-px w-24 bg-cinnabar/60 my-2" />
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-charcoal tracking-[0.2em]">
                        辟谷学院
                    </h2>
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
