import { Card } from '@/components/ui/card';
import { motion } from 'framer-motion';

interface CertificationCardProps {
  title: string;
  organization: string;
  type: string;
}

export function CertificationCard({ title, organization, type }: CertificationCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <Card className="p-4 hover:shadow-xl transition-all duration-300 backdrop-blur bg-background/80 border border-border/50">
        <h3 className="font-medium">{title}</h3>
        <p className="text-sm text-muted-foreground">{organization}</p>
        <p className="text-xs text-muted-foreground mt-1">{type}</p>
      </Card>
    </motion.div>
  );
}