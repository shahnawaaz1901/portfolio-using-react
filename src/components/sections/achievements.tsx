import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { Section } from "./Section";
import { achievements } from "@/lib/portfolio-data";

export function Achievements() {
  return (
    <Section id="achievements" eyebrow="Highlights" title="Achievements">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {achievements.map((a, i) => (
          <motion.div
            key={a}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: i * 0.04 }}
            className="flex items-start gap-3 rounded-2xl border border-border bg-card p-5 shadow-card transition-all hover:border-primary/40"
          >
            <div className="grid size-10 shrink-0 place-items-center rounded-xl bg-accent text-primary">
              <Award className="size-5" />
            </div>
            <p className="text-sm font-medium text-foreground/90">{a}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
