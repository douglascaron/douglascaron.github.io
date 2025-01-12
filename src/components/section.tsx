import { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

interface SectionProps {
  icon: LucideIcon;
  title: string;
  children: React.ReactNode;
}

export function Section({ icon: Icon, title, children }: SectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="max-w-3xl mx-auto"
    >
      <div className="flex items-center gap-2 mb-6">
        <Icon className="h-6 w-6" />
        <h2 className="text-2xl font-semibold">{title}</h2>
      </div>
      <div className="space-y-4">
        {children}
      </div>
    </motion.section>
  );
}