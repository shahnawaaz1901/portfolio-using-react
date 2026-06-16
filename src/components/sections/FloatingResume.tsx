import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { profile } from "@/lib/portfolio-data";

export function FloatingResume() {
  return (
    <motion.a
      href={profile.resumeUrl}
      download={"Shahnawaaz_Resume.pdf"}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, type: "spring" }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-40 inline-flex items-center gap-2 rounded-full gradient-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-elegant"
      aria-label="Download Resume"
    >
      <Download className="size-4" />
      <span className="hidden sm:inline">Resume</span>
    </motion.a>
  );
}
