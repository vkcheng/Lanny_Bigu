"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const testimonialImages = [
    "https://akovkxdzyilbwfaauyhz.supabase.co/storage/v1/object/public/images/1.jpg",
    "https://akovkxdzyilbwfaauyhz.supabase.co/storage/v1/object/public/images/2.jpg",
    "https://akovkxdzyilbwfaauyhz.supabase.co/storage/v1/object/public/images/3.jpg",
    "https://akovkxdzyilbwfaauyhz.supabase.co/storage/v1/object/public/images/4.jpg",
    "https://akovkxdzyilbwfaauyhz.supabase.co/storage/v1/object/public/images/5.jpg",
    "https://akovkxdzyilbwfaauyhz.supabase.co/storage/v1/object/public/images/6.jpg",
    "https://akovkxdzyilbwfaauyhz.supabase.co/storage/v1/object/public/images/7.jpg",
    "https://akovkxdzyilbwfaauyhz.supabase.co/storage/v1/object/public/images/8.jpg",
    "https://akovkxdzyilbwfaauyhz.supabase.co/storage/v1/object/public/images/9.jpg",
    "https://akovkxdzyilbwfaauyhz.supabase.co/storage/v1/object/public/images/11.jpg",
];

export default function Testimonials() {
    return (
        <section className="py-24 bg-rice">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16 space-y-4"
                >
                    <h2 className="text-3xl md:text-5xl font-serif text-ink">学员见证</h2>
                    <p className="text-charcoal/80 font-light tracking-wide">
                        真实改变，从这里开始
                    </p>
                </motion.div>

                {/* Grid Layout - Changed from columns to grid for balanced accumulation */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {testimonialImages.map((src, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            className="relative group rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                        >
                            <Image
                                src={src}
                                alt={`学员见证 ${index + 1}`}
                                width={500}
                                height={800} // Aspect ratio will be handled by height: auto w content
                                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-ink/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
