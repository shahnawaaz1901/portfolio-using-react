import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, Linkedin, Github, MapPin, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { Section } from "./Section";
import { Button } from "@/components/common/Button";
import { Input } from "@/components/common/Input";
import { Textarea } from "@/components/common/Textarea";
import { Label } from "@/components/common/Label";
import { profile } from "@/lib/portfolio-data";

const schema = z.object({
  name: z.string().trim().min(2, "Name is too short").max(80),
  email: z.string().trim().email("Enter a valid email").max(160),
  subject: z.string().trim().min(2, "Subject is required").max(120),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(1000),
});
type FormData = z.infer<typeof schema>;

export function Contact() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    try {
      const params = new URLSearchParams({
        subject: data.subject,
        body: `From: ${data.name} <${data.email}>\n\n${data.message}`,
      });
      window.location.href = `mailto:${profile.email}?${params.toString()}`;
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  const contactItems = [
    { Icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
    { Icon: Linkedin, label: "LinkedIn", value: "shahnawaaz1901", href: profile.linkedin },
    { Icon: Github, label: "GitHub", value: "shahnawaaz1901", href: profile.github },
    { Icon: MapPin, label: "Location", value: profile.location, href: profile.locationMapUrl },
  ];

  return (
    <Section
      id="contact"
      eyebrow="Get in touch"
      title="Let's work together"
      description="Have a role, project, or idea in mind? I'd love to hear from you."
    >
      <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-3"
        >
          {contactItems.map(({ Icon, label, value, href }) => {
            const inner = (
              <div className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-card transition-all hover:border-primary/40 hover:shadow-elegant">
                <div className="grid size-11 place-items-center rounded-xl bg-accent text-primary">
                  <Icon className="size-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">{label}</div>
                  <div className="truncate text-sm font-medium text-foreground">{value}</div>
                </div>
              </div>
            );
            return href ? (
              <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="block">
                {inner}
              </a>
            ) : (
              <div key={label}>{inner}</div>
            );
          })}
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          onSubmit={handleSubmit(onSubmit)}
          className="rounded-3xl border border-border bg-card p-6 shadow-card md:p-8"
          noValidate
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Your name" className="mt-1.5" {...register("name")} />
              {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name.message}</p>}
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="you@example.com" className="mt-1.5" {...register("email")} />
              {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email.message}</p>}
            </div>
          </div>
          <div className="mt-4">
            <Label htmlFor="subject">Subject</Label>
            <Input id="subject" placeholder="What is this about?" className="mt-1.5" {...register("subject")} />
            {errors.subject && <p className="mt-1 text-xs text-destructive">{errors.subject.message}</p>}
          </div>
          <div className="mt-4">
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" placeholder="Tell me a little about it..." rows={5} className="mt-1.5" {...register("message")} />
            {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message.message}</p>}
          </div>

          <div className="mt-6 flex items-center justify-between gap-3">
            <div className="text-sm">
              {status === "success" && (
                <span className="inline-flex items-center gap-1.5 text-primary">
                  <CheckCircle2 className="size-4" /> Opening your mail client…
                </span>
              )}
              {status === "error" && (
                <span className="inline-flex items-center gap-1.5 text-destructive">
                  <AlertCircle className="size-4" /> Something went wrong.
                </span>
              )}
            </div>
            <Button type="submit" size="lg" disabled={isSubmitting} className="shadow-elegant">
              <Send className="size-4" />
              Send Message
            </Button>
          </div>
        </motion.form>
      </div>
    </Section>
  );
}
