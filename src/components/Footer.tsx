import { motion } from 'framer-motion';

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="border-t border-border px-6 py-10 md:px-10"
    >
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="flex items-center gap-3">
          <span className="text-[10px] font-mono tracking-[0.2em] text-text-secondary">
            BUILT AT HH GOA 2026
          </span>
          <span className="h-3 w-px bg-border" />
          <span className="text-[10px] font-mono tracking-[0.2em] text-accent">
            TEAM FALCONS
          </span>
        </div>
        <div className="text-[10px] font-mono tracking-[0.15em] text-text-tertiary">
          VOICE-ENABLED RAG · TASK 02
        </div>
      </div>
    </motion.footer>
  );
}
