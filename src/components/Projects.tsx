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
    title: 'Adventure Works Sales Cycle Analysis',
    description:
      'Developed a complete SQL-based data analysis project using MySQL to analyze business operations and sales workflows. Designed normalized relational tables and established primary and foreign key relationships to maintain data consistency. Performed complex SQL queries using joins, subqueries, aggregate functions, and window functions to evaluate sales performance, customer behavior, and product trends.',
    tech: ['MySQL', 'SQL', 'Data Analysis', 'Stored Procedures'],
    github: 'https://github.com/Jaffermydeen/SQL-PROJECT/blob/main/Adventures_works_cycle.sql',
    gradient: 'from-[hsl(30,100%,50%)] to-[hsl(50,100%,55%)]',
    emoji: '📊',
  },
  {
    title: 'Olist E-Commerce Data Analysis',
    description:
      'Analyzed a real-world e-commerce dataset using SQL to extract insights on customer behavior, sales trends, and product performance. Performed joins across multiple tables including customers, orders, payments, and products. Identified top-performing products and categories using aggregate functions like COUNT, SUM, and GROUP BY, delivering actionable business insights.',
    tech: ['SQL', 'Data Analysis', 'Data Cleaning', 'E-Commerce'],
    live: '/olist_ecommerce_projectsql.sql',
    gradient: 'from-[hsl(160,80%,45%)] to-[hsl(200,90%,50%)]',
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
            A showcase of my projects in data analysis and database engineering.
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