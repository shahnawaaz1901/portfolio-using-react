import { motion } from "framer-motion";
import { Download, Eye, FileText } from "lucide-react";
import { Section } from "./section";
import { Button } from "@/components/ui/button";
import { profile } from "@/lib/portfolio-data";

export function Resume() {
  return (
    <Section id="resume" eyebrow="Resume" title="My Resume" description="Get a one-page overview of my experience and skills.">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-card md:p-12"
      >
        <div className="absolute -right-20 -top-20 size-64 rounded-full gradient-primary opacity-10 blur-3xl" />
        <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-start gap-5">
            <div className="grid size-14 place-items-center rounded-2xl gradient-primary text-primary-foreground shadow-elegant">
              <FileText className="size-7" />
            </div>
            <div>
              <h3 className="font-display text-2xl font-bold">{profile.name} — Resume</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                {profile.title}
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg" className="shadow-elegant">
              <a href={profile.resumeUrl} download>
                <Download className="size-4" />
                Download
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href={profile.resumeUrl} target="_blank" rel="noreferrer">
                <Eye className="size-4" />
                View Resume
              </a>
            </Button>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
