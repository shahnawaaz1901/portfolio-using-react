import { motion } from "framer-motion";
import { GraduationCap, Trophy, BookOpen } from "lucide-react";
import { Section } from "./Section";
import { Badge } from "@/components/common/Badge";
import { education } from "@/lib/portfolio-data";

export function Education() {
  return (
    <Section id="education" eyebrow="Education" title="Academic Background">
      {education.map((edu) => (
        <>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl border border-border bg-card p-8 shadow-card md:p-10 mt-10"
          >
            <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
              <div className="flex items-start gap-4">
                <div className="grid size-12 shrink-0 place-items-center rounded-2xl gradient-primary text-primary-foreground">
                  <GraduationCap className="size-6" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold">{edu.degree}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{edu.scoreType == "CGPA" ? "Graduated" : "Completed"} in {edu.year}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 self-start rounded-xl border border-border bg-background px-4 py-3">
                <Trophy className="size-5 text-primary" />
                <div>
                  <div className="text-xs text-muted-foreground">{edu.scoreType}</div>
                  <div className="text-lg font-bold gradient-text">{edu.score}/{edu.total}</div>
                </div>
              </div>
            </div>

            <div className="mt-8 border-t border-border pt-6">
              <div className="mb-3 flex items-center gap-2 text-sm font-medium text-foreground">
                <BookOpen className="size-4 text-primary" /> Relevant Coursework
              </div>
              <div className="flex flex-wrap gap-2">
                {edu.subjects.map((s) => (
                  <Badge key={s} variant="secondary" className="font-normal">
                    {s}
                  </Badge>
                ))}
              </div>
            </div>
          </motion.div>
        </>
      ))}
    </Section>
  );
}
