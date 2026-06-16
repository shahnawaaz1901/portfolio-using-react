import { motion } from "framer-motion";
import { ArrowUpRight, Folder, Sparkles } from "lucide-react";
import { Section } from "./Section";
import { Badge } from "@/components/common/Badge";
import { projects } from "@/lib/portfolio-data";

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Work"
      title="Featured Projects"
      description="A selection of products and platforms I've contributed to — from enterprise risk systems to e-signature tools."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-card transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-elegant"
          >
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            <div className="flex items-start justify-between">
              <div className="grid size-11 place-items-center rounded-xl gradient-primary text-primary-foreground">
                <Folder className="size-5" />
              </div>
              <ArrowUpRight className="size-5 text-muted-foreground transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary" />
            </div>

            <h3 className="mt-5 font-display text-xl font-bold">{p.title}</h3>

            <ul className="mt-3 space-y-1.5">
              {p.highlights.map((h) => (
                <li key={h} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Sparkles className="mt-0.5 size-3.5 shrink-0 text-primary/70" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>

            <div className="mt-5 flex flex-wrap gap-1.5">
              {p.stack.map((s) => (
                <Badge key={s} variant="secondary" className="font-normal">
                  {s}
                </Badge>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
