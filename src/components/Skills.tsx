import AnimatedSection from './AnimatedSection';
import { motion } from 'framer-motion';

interface Skill {
  name: string;
  level: number;
  color: string;
}

interface SkillCategory {
  title: string;
  emoji: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    emoji: '🎨',
    skills: [
      { name: 'React', level: 85, color: 'hsl(190 100% 50%)' },
      { name: 'TypeScript', level: 80, color: 'hsl(210 100% 55%)' },
      { name: 'Tailwind CSS', level: 90, color: 'hsl(190 80% 45%)' },
      { name: 'HTML / CSS', level: 92, color: 'hsl(20 90% 55%)' },
    ],
  },
  {
    title: 'Data & Analytics',
    emoji: '📊',
    skills: [
      { name: 'Python', level: 82, color: 'hsl(50 80% 50%)' },
      { name: 'SQL', level: 88, color: 'hsl(200 70% 50%)' },
      { name: 'Power BI', level: 85, color: 'hsl(45 90% 50%)' },
      { name: 'Excel', level: 90, color: 'hsl(140 60% 45%)' },
    ],
  },
  {
    title: 'Engineering',
    emoji: '⚡',
    skills: [
      { name: 'MATLAB', level: 78, color: 'hsl(20 80% 50%)' },
      { name: 'Arduino / IoT', level: 75, color: 'hsl(190 70% 45%)' },
      { name: 'Circuit Design', level: 80, color: 'hsl(265 80% 60%)' },
      { name: 'Embedded C', level: 70, color: 'hsl(220 70% 50%)' },
    ],
  },
  {
    title: 'Tools & Others',
    emoji: '🛠️',
    skills: [
      { name: 'Git / GitHub', level: 85, color: 'hsl(10 80% 55%)' },
      { name: 'VS Code', level: 92, color: 'hsl(210 90% 55%)' },
      { name: 'Figma', level: 70, color: 'hsl(265 70% 60%)' },
      { name: 'Linux', level: 75, color: 'hsl(50 70% 50%)' },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="relative">
      <div className="section-container">
        <AnimatedSection>
          <p className="text-primary font-mono text-sm mb-2">{'// my skills'}</p>
          <h2 className="section-title">
            Tech <span className="text-gradient">Arsenal</span>
          </h2>
          <p className="section-subtitle mt-4">
            A collection of technologies and tools I've honed through projects and continuous learning.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6 mt-12">
          {skillCategories.map((category, catIdx) => (
            <AnimatedSection
              key={category.title}
              delay={catIdx * 0.15}
              direction={catIdx % 2 === 0 ? 'left' : 'right'}
            >
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="card-gradient rounded-xl p-6 h-full"
              >
                <h3 className="text-lg font-heading font-semibold mb-5 flex items-center gap-2">
                  <span>{category.emoji}</span>
                  <span className="text-foreground">{category.title}</span>
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIdx) => (
                    <div key={skill.name}>
                      <div className="flex justify-between text-sm mb-1.5">
                        <span className="text-muted-foreground font-medium">{skill.name}</span>
                        <span className="text-muted-foreground font-mono text-xs">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 1,
                            delay: catIdx * 0.15 + skillIdx * 0.1,
                            ease: 'easeOut',
                          }}
                          className="h-full rounded-full"
                          style={{ background: skill.color }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;