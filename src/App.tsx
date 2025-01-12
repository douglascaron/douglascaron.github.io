import { ThemeProvider } from '@/components/theme-provider';
import { ModeToggle } from '@/components/mode-toggle';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Section } from '@/components/section';
import { TimelineItem } from '@/components/timeline-item';
import { CertificationCard } from '@/components/certification-card';
import {
  Briefcase,
  GraduationCap,
  Mail,
  Github,
  Linkedin,
  Award,
  School,
  BookOpen,
  Trophy
} from 'lucide-react';
import { motion } from 'framer-motion';

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="min-h-screen bg-background relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-grid-white/10 bg-[size:30px_30px] [mask-image:radial-gradient(white,transparent_85%)]" />
        
        {/* Content */}
        <div className="relative">
          <header className="fixed top-4 right-4 z-50">
            <ModeToggle />
          </header>

          <main className="container mx-auto px-4 py-16 space-y-12">
            {/* Hero Section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center space-y-6"
            >
              <h1 className="text-4xl font-bold tracking-tight">Douglas Caron</h1>
              <div className="space-y-6">
                <div className="flex flex-col items-center gap-4">
                  <p className="text-xl text-muted-foreground">Aspiring Software Engineer</p>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <Button
                      variant="secondary"
                      className="backdrop-blur bg-background/40 border border-border/50 shadow-lg hover:shadow-xl transition-all duration-300"
                      asChild
                    >
                      <a href="http://fulhamboysschool.org" target="_blank" rel="noopener noreferrer">
                      <School className="mr-2 h-4 w-4" />
                      Fulham Boys School
                      </a>
                    </Button>
                  </motion.div>
                </div>
                
                <div className="flex justify-center gap-2 flex-wrap">
                  {['Economics', 'Business', 'Computer Science', 'EPQ'].map((subject) => (
                    <motion.div
                      key={subject}
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <Badge 
                        variant="outline" 
                        className="backdrop-blur bg-background/40 border border-border/50 shadow-sm hover:shadow-md transition-all duration-300"
                      >
                        <BookOpen className="mr-1 h-3 w-3" /> {subject}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              <div className="flex justify-center gap-4 pt-4">
                {[
                  { href: "mailto:rsc.douglas@gmail.com", icon: Mail },
                  { href: "https://github.com/douglascaron", icon: Github },
                  { href: "https://www.linkedin.com/in/douglas-caron/", icon: Linkedin }
                ].map(({ href, icon: Icon }) => (
                  <motion.div
                    key={href}
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <Button 
                      variant="outline" 
                      size="icon" 
                      asChild
                      className="backdrop-blur bg-background/40 border border-border/50 shadow-sm hover:shadow-md transition-all duration-300"
                    >
                      <a href={href} target="_blank" rel="noopener noreferrer">
                        <Icon className="h-5 w-5" />
                      </a>
                    </Button>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Summary */}
            <motion.section
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="max-w-3xl mx-auto"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Card className="p-6 backdrop-blur bg-background/80 border border-border/50 hover:shadow-xl transition-all duration-300">
                  <p className="text-muted-foreground leading-relaxed">
                    As an A-Level student at The Fulham Boys School with an expected graduation in July 2025, 
                    I've embraced a comprehensive curriculum, gaining a keen interest in economics, business, 
                    and computer science. My core competencies lie in being inquisitive, adopting a can-do approach, 
                    and being resourceful, which are evident in my engagement with academic challenges and 
                    extracurricular activities such as rowing and programming.
                  </p>
                </Card>
              </motion.div>
            </motion.section>

            {/* Rest of the sections remain the same */}
            <Section icon={Briefcase} title="Experience">
              <TimelineItem 
                title="Rowing Volunteer"
                organization="Fulham Reach Boat Club"
                period="September 2023 - October 2024"
              />
              <TimelineItem 
                title="Volunteer Staff"
                organization="Oxfam"
                period="May 2021 - January 2024"
                description="Assisted with store operations including inventory management, donations processing, and customer service, developing strong organizational and interpersonal skills."
              />
            </Section>

            <Section icon={Trophy} title="Sports">
              <TimelineItem 
                title="Rower"
                organization="Vesta Rowing Club"
                period="October 2024 - Present"
              />
              <TimelineItem 
                title="Rower"
                organization="Fulham Reach Boat Club"
                period="February 2022 - October 2024"
              />
            </Section>

            <Section icon={GraduationCap} title="Education">
              <TimelineItem 
                title="A-Levels"
                organization="The Fulham Boys School"
                period="September 2023 - July 2025"
              />
              <TimelineItem 
                title="GCSE"
                organization="The Fulham Boys School"
                period="March 2021 - July 2023"
              />
              <TimelineItem 
                title="Education"
                organization="Lycée Français Charles de Gaulle de Londres"
                period="September 2017 - March 2021"
              />
            </Section>

            <Section icon={Award} title="Certifications">
              <div className="grid gap-4 md:grid-cols-2">
                <CertificationCard 
                  title="Excel Skills for Business"
                  organization="Goldman Sachs"
                  type="Job Simulation"
                />
                <CertificationCard 
                  title="Software Engineering"
                  organization="J.P. Morgan"
                  type="Job Simulation"
                />
                <CertificationCard 
                  title="Cybersecurity"
                  organization="Mastercard"
                  type="Job Simulation"
                />
                <CertificationCard 
                  title="Software Engineering"
                  organization="Goldman Sachs"
                  type="Job Simulation"
                />
              </div>
            </Section>
          </main>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;