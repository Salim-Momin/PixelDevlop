"use client";

import { motion } from "framer-motion";
import {
  Globe,
  Smartphone,
  Code2,
  Palette,
  Database,
  BrainCircuit,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Website Development",
    description:
      "High-performance business websites built with Next.js and modern web technologies.",
  },
  {
    icon: Code2,
    title: "Web Applications",
    description:
      "Scalable SaaS platforms, dashboards, admin panels, and custom business applications.",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description:
      "Cross-platform Android and iOS applications with React Native.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Beautiful, user-friendly interfaces designed to improve engagement and conversions.",
  },
  {
    icon: BrainCircuit,
    title: "AI Solutions",
    description:
      "AI chatbots, workflow automation, and intelligent business integrations.",
  },
  {
    icon: Database,
    title: "Backend & APIs",
    description:
      "Secure APIs, databases, authentication, and cloud infrastructure for scalable systems.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-28">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-2 text-sm text-indigo-300">
            Our Services
          </span>

          <h2 className="mt-6 text-4xl font-bold md:text-5xl">
            Everything You Need
            <span className="block bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              To Build Your Product
            </span>
          </h2>

          <p className="mt-6 text-lg text-gray-400">
            We help startups and businesses transform ideas into modern,
            scalable digital products.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.5,
                }}
                whileHover={{
                  y: -10,
                }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all"
              >
                {/* Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/0 via-indigo-500/0 to-cyan-500/0 opacity-0 transition duration-500 group-hover:opacity-100 group-hover:from-indigo-500/10 group-hover:to-cyan-500/10" />

                <div className="relative z-10">
                  <div className="mb-6 inline-flex rounded-2xl bg-indigo-500/10 p-4">
                    <Icon className="h-8 w-8 text-indigo-400" />
                  </div>

                  <h3 className="mb-4 text-2xl font-semibold">
                    {service.title}
                  </h3>

                  <p className="leading-7 text-gray-400">
                    {service.description}
                  </p>

                  <button className="mt-8 font-medium text-indigo-400 transition hover:text-cyan-400">
                    Learn More →
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}