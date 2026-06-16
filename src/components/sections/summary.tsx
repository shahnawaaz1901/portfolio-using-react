import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { Section } from "./section";
import { profile } from "@/lib/portfolio-data";

export function Summary() {
  return (
    <Section id="about" eyebrow="About" title="Professional Summary">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-card"
      >
        <div className="absolute -right-12 -top-12 size-48 rounded-full gradient-primary opacity-10 blur-3xl" />
        <Quote className="size-10 text-primary/40" />
        <p className="mt-6 text-lg leading-relaxed text-foreground/90 md:text-xl">
          {profile.summary}
        </p>
      </motion.div>
    </Section>
  );
}
