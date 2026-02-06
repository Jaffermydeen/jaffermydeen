import AnimatedSection from './AnimatedSection';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Project {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
  gradient: string;
  emoji: string;
}

const projects: Project[] = [
  {
    title: 'Data Analytics Dashboard',
    description:
      'Interactive dashboard built with Power BI for visualizing sales trends, customer behavior, and KPIs with real-time data filtering.',
    tech: ['Power BI', 'SQL', 'DAX', 'Excel'],
    github: '#',
    live: '#',
    gradient: 'from-[hsl(190,100%,50%)] to-[hsl(210,100%,55%)]',
    emoji: '📊',
  },
  {
    title: 'IoT Monitoring System',
    description:
      'Real-time environmental monitoring system using Arduino sensors with a React dashboard for temperature, humidity, and air quality.',
    tech: ['React', 'Node.js', 'Arduino', 'MQTT'],
    github: '#',
    live: '#',
    gradient: 'from-[hsl(265,80%,60%)] to-[hsl(290,70%,55%)]',
    emoji: '🌡️',
  },
  {
    title: 'Machine Learning Pipeline',
    description:
      'End-to-end ML pipeline for predicting equipment failure using sensor data. Includes data preprocessing, model training, and deployment.',
    tech: ['Python', 'Scikit-learn', 'Pandas', 'Flask'],
    github: '#',
    gradient: 'from-[hsl(50,80%,50%)] to-[hsl(30,90%,55%)]',
    emoji: '🤖',
  },
  {
    title: 'E-Commerce Analytics',
    description:
      'Comprehensive analysis of e-commerce data with Python. Customer segmentation, RFM analysis, and sales forecasting using time series.',
    tech: ['Python', 'SQL', 'Matplotlib', 'Seaborn'],
    github: '#',
    live: '#',
    gradient: 'from-[hsl(140,60%,45%)] to-[hsl(170,70%,50%)]',
    emoji: '🛒',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative">
      <div className="section-container">
        <AnimatedSection>
          <p className="text-primary font-mono text-sm mb-2">{'// my work'}</p>
          <h2 className="section-title">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="section-subtitle mt-4">
            A showcase of projects spanning data analytics, IoT, and web development.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6 mt-12">
          {projects.map((project, i) => (
            <AnimatedSection key={project.title} delay={i * 0.15} direction="scale">
              <motion.div
                whileHover={{ y: -8, rotateX: 2, rotateY: -2 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="card-gradient rounded-xl overflow-hidden h-full flex flex-col group"
                style={{ perspective: '1000px' }}
              >
                {/* Gradient header */}
                <div
                  className={`h-2 bg-gradient-to-r ${project.gradient} opacity-70 group-hover:opacity-100 transition-opacity`}
                />

                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-3xl">{project.emoji}</span>
                    <div className="flex gap-2">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors p-1"
                          aria-label="View source on GitHub"
                        >
                          <Github size={18} />
                        </a>
                      )}
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors p-1"
                          aria-label="View live demo"
                        >
                          <ExternalLink size={18} />
                        </a>
                      )}
                    </div>
                  </div>

                  <h3 className="text-xl font-heading font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-5 flex-1">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-mono px-3 py-1 rounded-full bg-muted text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.6} className="text-center mt-12">
          <Button variant="outline-glow" size="lg" className="font-heading">
            View All Projects
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Projects;