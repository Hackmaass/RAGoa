import { motion } from 'framer-motion';

export function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-10 md:py-5"
      style={{ backgroundColor: 'rgba(5, 5, 5, 0.7)', backdropFilter: 'blur(12px)' }}
    >
      {/* Left */}
      <div className="flex items-center gap-4">
        <span className="text-sm font-semibold tracking-[0.2em] text-text-primary">
          GO GOA HACK
        </span>
        <span className="hidden sm:inline text-[10px] font-mono tracking-[0.15em] text-text-secondary">
          HH GOA 2026
        </span>
      </div>

      {/* Right */}
      <div className="flex items-center gap-4">
        <span className="text-[10px] font-mono tracking-[0.15em] text-text-secondary">
          TASK 02
        </span>
        <span className="hidden sm:inline h-3 w-px bg-border" />
        <span className="hidden sm:inline text-[10px] font-mono tracking-[0.15em] text-accent">
          FALCONS
        </span>
      </div>
    </motion.nav>
  );
}
