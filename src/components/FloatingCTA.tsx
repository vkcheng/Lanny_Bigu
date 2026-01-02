"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function FloatingCTA() {
    return (
        <motion.a
            href="https://wa.me/60128052250?text=你好，我想了解辟谷咨询服务。"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2, duration: 0.5 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-8 right-8 z-50 bg-cinnabar text-white p-4 rounded-full shadow-xl shadow-cinnabar/30 flex items-center justify-center cursor-pointer hover:bg-cinnabar/90 transition-colors"
        >
            <MessageCircle className="w-6 h-6" />
        </motion.a>
    );
}
