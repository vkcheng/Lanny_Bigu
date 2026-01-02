"use client";

import { motion } from "framer-motion";

export default function Intro() {
    return (
        <section className="py-24 md:py-32 px-6 md:px-12 max-w-5xl mx-auto flex flex-col items-center text-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
            >
                <h3 className="text-2xl md:text-3xl font-serif text-ink leading-relaxed">
                    你是不是也有这样的经历？
                </h3>

                <p className="text-lg md:text-xl text-charcoal font-light leading-loose max-w-3xl">
                    节食、运动、断糖……试过无数方法，却总是反弹，甚至越减越累。<br className="hidden md:block" />
                    最痛苦的是：<span className="text-cinnabar font-normal">明明已经很努力，却始终瘦不下来</span>，<br />
                    健康状况也越来越差。
                </p>

                <div className="w-16 h-1 bg-stone mx-auto my-8 rounded-full" />

                <p className="text-lg md:text-xl text-ink font-serif leading-relaxed">
                    其实，真正的减脂，不是“饿自己”，也不是“拼命燃烧”。<br />
                    我们身体本来就有天然的自愈系统，<br />
                    只是你还没找到<span className="border-b border-bamboo pb-0.5">“启动它”的方法</span>。
                </p>
            </motion.div>
        </section>
    );
}
