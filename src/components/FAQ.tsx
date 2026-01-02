"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
    {
        q: "1. 辟谷是不是完全不吃东西？安全吗？",
        a: "不是！我们采用的是现代科学＋古法调理的温和型辟谷，通过合理阶段规划 + 红糖营养支持，让你不伤身也能轻松减重排毒。有专业老师一对一指导，确保过程安全可靠。",
    },
    {
        q: "2. 手脚冰冷 / 月经不准 / 低血压，可以做辟谷吗？",
        a: "可以！这些体质更适合“红糖+温补辟谷”调理。我们配套的老红糖有助于暖宫活血、补气补血，改善寒症、经痛等问题，是体质虚寒者的理想选择。",
    },
    {
        q: "3. 我上班／带孩子很忙，还能做辟谷吗？",
        a: "当然可以！我们的方案非常适合忙碌人士，无需煮复杂食物，每天只需遵循简单饮食安排＋定时喝红糖茶／代餐，轻松又高效。",
    },
    {
        q: "4. 会不会减了又反弹？",
        a: "我们提供完整【三阶段辟谷方案】：缓进 → 正式辟谷 → 恢复饮食。只要按指导进行＋建立正确饮食观念，长期维持轻盈体态完全没问题！",
    },
    {
        q: "5. 我怕自己没毅力，做不到怎么办？",
        a: "我们采用每日一对一语音或文字陪伴，提供心理支持、实用技巧、饮食调整建议，让你每天都有动力坚持下去，不孤单、不放弃！",
    },
    {
        q: "6. 辟谷期间还能运动吗？",
        a: "可以做轻度运动如拉伸、快走、瑜伽等。断食期间不建议剧烈运动。我们会根据你的状态，给予量身建议。",
    },
    {
        q: "7. 辟谷适合减肥以外的什么人？",
        a: "除了瘦身，辟谷还适合：肠胃不适、便秘；皮肤暗沉、体内湿气重；经期失调、宫寒；亚健康、疲劳、三高预防。",
    },
    {
        q: "8. 月经期间可以做辟谷吗？",
        a: "经期不建议断食，但可进行暖宫调理 + 红糖饮食调整。等经期结束后再正式开始更安全有效。",
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-24 px-6 md:px-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif text-center mb-16 text-ink">常见问题</h2>
            <div className="space-y-4">
                {faqs.map((item, index) => (
                    <div
                        key={index}
                        className="border-b border-stone last:border-none"
                    >
                        <h3 className="m-0 p-0 text-base font-normal">
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between py-6 text-left group"
                            >
                                <span className={`text-lg transition-colors ${openIndex === index ? "text-cinnabar font-medium" : "text-ink group-hover:text-cinnabar/80"}`}>
                                    {item.q}
                                </span>
                                <motion.span
                                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="text-stone group-hover:text-cinnabar transition-colors"
                                >
                                    <ChevronDown />
                                </motion.span>
                            </button>
                        </h3>
                        <AnimatePresence>
                            {openIndex === index && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                    className="overflow-hidden"
                                >
                                    <p className="pb-6 text-charcoal leading-loose font-light">
                                        {item.a}
                                    </p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
        </section>
    );
}
