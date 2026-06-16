import { motion } from "framer-motion";
import { Mail, ArrowRight, Github, Linkedin, MapPin } from "lucide-react";
import { Button } from "@/components/common/Button";
import { profile } from "@/lib/portfolio-data";
import profileImg from "@/assets/Profile.jpg";

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pst-20 md:pt-24 sm:pt-20 scroll-mt-20 md:scroll-mt-24"
    >
      <div className="absolute inset-0 -z-10 glow-radial" />
      <div className="absolute inset-x-0 top-0 -z-10 h-[500px] opacity-50 [background:radial-gradient(circle_at_top,oklch(0.7_0.18_262/0.15),transparent_60%)]" />

      <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-[1fr_2fr]">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative mx-auto"
        >
          <div className="absolute -inset-4 -z-10 rounded-full gradient-primary opacity-30 blur-3xl" />
          <div className="relative size-64 overflow-hidden rounded-3xl border border-border bg-card shadow-elegant md:size-80">
            <img
              src={profileImg}
              alt={profile.name}
              width={512}
              height={512}
              className="size-full"
            />
          </div>
          <div className="absolute -top-4 -right-4 rounded-2xl border border-border bg-card px-2 py-3 shadow-card md:px-4 md:py-3">
            <div className="text-2xl font-bold gradient-text">2+ yrs</div>
            <div className="text-xs text-muted-foreground">
              Frontend Experience
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            Hi, I'm <span className="gradient-text">{profile.name} </span>
            {/* <br /> */}
            <span className="text-foreground/90">Frontend Engineer.</span>
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg text-justify">
            {profile.intro}
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <Button asChild variant="outline" size="lg">
              <a href="#contact">
                <Mail className="size-4" />
                Contact Me
              </a>
            </Button>
            <Button asChild variant="ghost" size="lg">
              <a href="#projects">
                View Projects <ArrowRight className="size-4" />
              </a>
            </Button>
          </div>

          <div className="mt-8 flex items-center gap-4">
            {[
              { href: profile.github, Icon: Github, label: "GitHub" },
              { href: profile.linkedin, Icon: Linkedin, label: "LinkedIn" },
              { href: `mailto:${profile.email}`, Icon: Mail, label: "Email" },
            ].map(({ href, Icon, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                whileHover={{ y: -3 }}
                className="grid size-11 place-items-center rounded-full border border-border bg-card text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <Icon className="size-5" />
              </motion.a>
            ))}
            <span className="ml-2 flex items-center gap-1.5 text-sm text-muted-foreground">
              <MapPin className="size-4" /> {profile.location}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
