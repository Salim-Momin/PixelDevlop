"use client";

import { motion } from "framer-motion";
import {
  Rocket,
  ShieldCheck,
  Zap,
  Layers,
  Clock,
  Users,
} from "lucide-react";

const features = [
  {
    icon: Rocket,
    title: "Startup Speed",
    description:
      "We move fast without compromising quality. Launch your product quickly with an experienced development team.",
  },
  {
    icon: Layers,
    title: "Scalable Architecture",
    description:
      "Our solutions are built to grow from your first customer to millions of users.",
  },
  {
    icon: Zap,
    title: "Modern Technology",
    description:
      "Using Next.js, React, TypeScript, AI, and cloud technologies.",
  },
  {
    icon: ShieldCheck,
    title: "Clean & Secure Code",
    description:
      "Maintainable code, best practices, security, and performance optimization.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description:
      "Transparent communication and reliable project timelines.",
  },
  {
    icon: Users,
    title: "Dedicated Support",
    description:
      "Long-term partnership beyond just launching your product.",
  },
];

const stats = [
  {
    value: "100+",
    label: "Projects Delivered",
  },
  {
    value: "50+",
    label: "Happy Clients",
  },
  {
    value: "5+",
    label: "Years Experience",
  },
  {
    value: "99%",
    label: "Client Satisfaction",
  },
];

export default function WhyUs() {
  return (
    <section className="py-28">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
            Why PixelDevlop
          </span>

          <h2 className="mt-6 text-4xl font-bold md:text-5xl">
            We Don't Just Build Apps.
            <span className="block bg-gradient-to-r from-cyan-400 to-indigo-500 bg-clip-text text-transparent">
              We Build Businesses.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-gray-400">
            A technology partner focused on creating fast, scalable,
            and beautiful digital experiences.
          </p>
        </motion.div>


        {/* Stats */}
        <div className="mb-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{
                opacity: 0,
                scale: 0.8,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: index * 0.1,
              }}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur"
            >
              <h3 className="text-4xl font-bold text-indigo-400">
                {stat.value}
              </h3>

              <p className="mt-2 text-gray-400">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>


        {/* Features */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once:true,
                }}
                transition={{
                  delay:index * 0.1,
                }}
                className="group rounded-3xl border border-white/10 bg-slate-900/50 p-8 transition hover:-translate-y-2 hover:border-indigo-500/50"
              >

                <div className="mb-5 inline-flex rounded-xl bg-indigo-500/10 p-4">
                  <Icon className="h-7 w-7 text-indigo-400" />
                </div>


                <h3 className="mb-3 text-xl font-semibold">
                  {feature.title}
                </h3>


                <p className="leading-7 text-gray-400">
                  {feature.description}
                </p>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}