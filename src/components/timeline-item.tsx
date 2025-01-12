import { Card } from '@/components/ui/card';
import { motion } from 'framer-motion';

interface TimelineItemProps {
  title: string;
  organization: string;
  period: string;
  description?: string;
}

export function TimelineItem({ title, organization, period, description }: TimelineItemProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <Card className="p-4 hover:shadow-xl transition-all duration-300 backdrop-blur bg-background/80 border border-border/50">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <div>
            <h3 className="font-medium">{title}</h3>
            <p className="text-muted-foreground">{organization}</p>
          </div>
          <p className="text-sm text-muted-foreground whitespace-nowrap">{period}</p>
        </div>
        {description && (
          <p className="mt-2 text-sm text-muted-foreground">{description}</p>
        )}
      </Card>
    </motion.div>
  );
}