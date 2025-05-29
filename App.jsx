
// SilentID - Elite Mobile Web App
import React from "react";
import { motion } from "framer-motion";

export default function SilentIDApp() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-zinc-800 text-white p-6 flex flex-col items-center justify-center gap-8">
      <motion.h1 
        className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        SilentID
      </motion.h1>

      <motion.p
        className="text-center text-base text-zinc-300 max-w-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        The elite identity experience. Built for those who move in silence. Unseen. Unmatched.
      </motion.p>

      <motion.div
        className="w-full max-w-sm bg-zinc-950 border border-zinc-800 rounded-2xl p-6 shadow-xl"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <p className="text-sm text-zinc-400 mb-4">
          Start your anonymous journey. Tap below to activate.
        </p>
        <button className="w-full bg-gradient-to-r from-purple-600 to-indigo-700 text-white text-lg py-2 rounded-xl font-medium shadow-md hover:opacity-90 transition duration-300">
          Activate SilentID
        </button>
      </motion.div>

      <p className="text-xs text-zinc-500 mt-6">
        © 2025 SilentID. Elite. Ghost. Silent.
      </p>
    </main>
  );
}
