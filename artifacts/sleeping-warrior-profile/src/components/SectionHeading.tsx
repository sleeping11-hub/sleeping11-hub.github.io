import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionHeading({ title, subtitle, className }: SectionHeadingProps) {
  return (
    <div className={cn("mb-12 md:mb-16", className)}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-4 mb-4"
      >
        <div className="h-[2px] w-8 md:w-12 bg-primary rounded-full box-glow" />
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-white uppercase tracking-widest text-glow">
          {title}
        </h2>
      </motion.div>
      
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-muted-foreground text-lg md:text-xl max-w-2xl font-sans"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
