"use client";

import { ArrowRight, Code2, Globe, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-24">
      {/* Background Blur */}
      <div className="absolute left-20 top-20 h-72 w-72 rounded-full bg-indigo-600/20 blur-3xl" />
      <div className="absolute right-20 bottom-10 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />

      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-2 text-sm text-indigo-300">
            <Sparkles size={16} />
            Building the Future with Code
          </span>

          <h1 className="mt-6 text-5xl font-extrabold leading-tight md:text-7xl">
            We Build
            <span className="block bg-gradient-to-r from-indigo-400 via-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Digital Products
            </span>
            That Scale.
          </h1>

          <p className="mt-6 max-w-xl text-lg text-gray-400">
            PixelDevlop creates stunning websites, scalable web
            applications, AI-powered tools, and mobile apps that help
            startups launch faster and businesses grow.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <button className="flex items-center gap-2 rounded-xl bg-indigo-600 px-7 py-4 font-semibold transition hover:bg-indigo-500">
              Start Your Project
              <ArrowRight size={18} />
            </button>

            <button className="rounded-xl border border-white/20 px-7 py-4 transition hover:border-indigo-500">
              View Portfolio
            </button>
          </div>

          <div className="mt-12 flex gap-10">
            <div>
              <h2 className="text-3xl font-bold">100+</h2>
              <p className="text-gray-400">Projects</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold">50+</h2>
              <p className="text-gray-400">Happy Clients</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold">5★</h2>
              <p className="text-gray-400">Reviews</p>
            </div>
          </div>
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Main Card */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-xl">
            <div className="mb-6 flex gap-2">
              <div className="h-3 w-3 rounded-full bg-red-500" />
              <div className="h-3 w-3 rounded-full bg-yellow-500" />
              <div className="h-3 w-3 rounded-full bg-green-500" />
            </div>

            <pre className="overflow-x-auto text-sm text-green-400">
{`const startup = {
  name: "PixelDevlop",
  stack: ["Next.js","React","TypeScript"],
  mission: "Build Amazing Products"
}

export default startup;`}
            </pre>
          </div>

          {/* Floating Card */}
          <motion.div
            animate={{ y: [-10, 10, -10] }}
            transition={{
              repeat: Infinity,
              duration: 4,
            }}
            className="absolute -left-10 top-16 rounded-2xl border border-white/10 bg-slate-900/80 p-5 backdrop-blur"
          >
            <Code2 className="mb-2 text-indigo-400" />
            <p className="font-semibold">Clean Code</p>
            <small className="text-gray-400">
              Modern Architecture
            </small>
          </motion.div>

          <motion.div
            animate={{ y: [10, -10, 10] }}
            transition={{
              repeat: Infinity,
              duration: 5,
            }}
            className="absolute -right-6 bottom-10 rounded-2xl border border-white/10 bg-slate-900/80 p-5 backdrop-blur"
          >
            <Globe className="mb-2 text-cyan-400" />
            <p className="font-semibold">Global Ready</p>
            <small className="text-gray-400">
              Fast & Responsive
            </small>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}