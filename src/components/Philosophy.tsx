"use client";

import { motion } from "framer-motion";
import { Leaf, Activity, Heart } from "lucide-react";

const features = [
    {
        icon: Leaf,
        title: "古法智慧",
        desc: "千年辟谷养生之道，顺应自然节律，休养生息。",
    },
    {
        icon: Activity,
        title: "科学验证",
        desc: "结合现代营养学，通过红糖与作息调整，安全启动代谢。",
    },
    {
        icon: Heart,
        title: "身心重启",
        desc: "不只是减脂，更是对身体的深度清理与内心的回归。",
    },
];

export default function Philosophy() {
    return (
        <section className="py-24 bg-stone/20">
            <div className="max-w-6xl mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-serif text-ink mb-6">
                            科学辟谷
                            <span className="block text-xl md:text-2xl text-bamboo mt-2 font-sans font-light">
                                Scientific Fasting
                            </span>
                        </h2>
                        <p className="text-xl md:text-2xl text-charcoal leading-loose mb-8 font-normal">
                            辟谷（科学断食），不是简单的“不吃饭”。它是一种通过调整饮食结构和作息节奏，帮助身体启动脂肪代谢系统的方法。
                            <br /><br />
                            我们不是“速效减重”，而是教你理解身体、掌握节奏，轻盈地过一生。
                        </p>
                    </motion.div>

                    <div className="grid gap-6">
                        {features.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2, duration: 0.6 }}
                                className="bg-white/60 backdrop-blur-sm p-6 rounded-xl border border-stone hover:border-bamboo/50 transition-colors shadow-sm"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-bamboo/10 rounded-full text-bamboo">
                                        <item.icon size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-serif text-ink mb-2">{item.title}</h4>
                                        <p className="text-base md:text-lg text-charcoal/90 font-normal">{item.desc}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
