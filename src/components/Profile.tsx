"use client";

import { motion } from "framer-motion";
import { BookOpen, MessageCircle } from "lucide-react";

export default function Profile() {
    return (
        <section className="py-24 px-6 md:px-12 max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">

                {/* Image Area - Placeholder or Actual if user provides later */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="w-full max-w-md md:w-1/2 relative aspect-[3/4] md:aspect-square rounded-2xl overflow-hidden bg-stone/20"
                >
                    {/* Ideally we would have an image of Lanny here. Using a stylized placeholder wrapper. */}
                    <div className="absolute inset-0 flex items-center justify-center text-stone font-serif text-3xl opacity-20 bg-linear-to-tr from-stone/30 to-white/50">
                        Lanny 老师
                    </div>
                    {/* <Image src="/lanny-portrait.jpg" alt="Lanny" fill className="object-cover" /> */}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="md:w-1/2 space-y-6"
                >
                    <div className="space-y-2">
                        <span className="text-bamboo tracking-widest uppercase text-sm font-semibold">About Instructor</span>
                        <h2 className="text-4xl font-serif text-ink">Lanny · 辟谷咨询顾问</h2>
                    </div>

                    <p className="text-charcoal leading-loose font-light">
                        大家好，我是 Lanny。过去 9 年，我专注于中式养生与体重管理。我曾陪伴无数学员，通过安全、温和的方法，走上健康瘦身的道路——不节食、不反弹。
                    </p>
                    <p className="text-charcoal leading-loose font-light">
                        如果你也正经历反复减肥的困扰，欢迎加入我们的辟谷体验。我会用耐心和实际经验，陪你一起找回对身体的信任与热爱。
                    </p>

                    <div className="pt-6">
                        <div className="p-6 bg-rice border border-stone rounded-xl relative overflow-hidden group hover:border-cinnabar/30 transition-colors">
                            <div className="absolute -right-4 -top-4 text-stone/10 group-hover:text-cinnabar/5 transition-colors">
                                <BookOpen size={120} />
                            </div>
                            <h3 className="text-xl font-serif text-ink mb-2">📘 免费领取《现代辟谷入门电子书》</h3>
                            <p className="text-sm text-charcoal/70 mb-4">帮助你快速了解辟谷的原理与做法</p>
                            <a
                                href="https://wa.me/60128052250?text=From%20lannybigu.com%20我想取得现代辟谷入门电子书"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-cinnabar text-white px-6 py-3 rounded-full hover:bg-cinnabar/90 transition-all shadow-lg hover:shadow-cinnabar/20"
                            >
                                <MessageCircle size={18} />
                                WhatsApp 领取电子书
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
