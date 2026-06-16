import { motion } from "framer-motion";
import { Briefcase, CheckCircle2 } from "lucide-react";
import { Section } from "./section";
import { Badge } from "@/components/ui/badge";
import { experiences } from "@/lib/portfolio-data";

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Career"
      title="Experience"
      description="A timeline of roles where I've built enterprise-grade products and shipped real impact."
    >
      <div className="relative">
        <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-primary/60 via-border to-transparent md:left-1/2" />
        <ul className="space-y-12">
          {experiences.map((exp, i) => (
            <motion.li
              key={exp.company}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="relative grid md:grid-cols-2 md:gap-12"
            >
              <div
                className={
                  i % 2 === 0
                    ? "md:pr-12 md:text-right"
                    : "md:order-2 md:pl-12"
                }
              >
                <div className="ml-12 md:ml-0">
                  <div className="mb-2 flex items-center gap-2 md:justify-end">
                    {i % 2 !== 0 && <span className="hidden md:inline" />}
                    <Badge variant="secondary">{exp.duration}</Badge>
                    {exp.current && <Badge className="gradient-primary text-primary-foreground border-0">Current</Badge>}
                  </div>
                  <h3 className="font-display text-xl font-bold">{exp.role}</h3>
                  <p className="text-sm text-primary font-medium">{exp.company}</p>
                </div>
              </div>

              <div className={i % 2 === 0 ? "md:order-2" : ""}>
                <div className="ml-12 rounded-2xl border border-border bg-card p-6 shadow-card md:ml-0">
                  <ul className="space-y-2.5">
                    {exp.points.map((p) => (
                      <li key={p} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                        <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <span className="absolute left-4 top-1 grid size-8 -translate-x-1/2 place-items-center rounded-full border border-border bg-background text-primary shadow-card md:left-1/2">
                <Briefcase className="size-4" />
              </span>
            </motion.li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
