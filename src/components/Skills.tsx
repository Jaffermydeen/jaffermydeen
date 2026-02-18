import AnimatedSection from './AnimatedSection';
import { motion } from 'framer-motion';

interface Skill {
  name: string;
  color: string;
}

interface SkillCategory {
  title: string;
  emoji: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
{
  title: 'Programming Knowledge',
  emoji: '💻',
  skills: [
  { name: 'HTML', color: 'hsl(15 85% 55%)' },
  { name: 'CSS', color: 'hsl(210 80% 55%)' },
  { name: 'C', color: 'hsl(200 70% 50%)' },
  { name: 'C++', color: 'hsl(220 75% 55%)' }]

},
{
  title: 'Arts & Science',
  emoji: '⚡',
  skills: [
  { name: 'MATLAB', color: 'hsl(20 80% 50%)' },
  { name: 'Arduino / IoT', color: 'hsl(190 70% 45%)' },
  { name: 'Circuit Design', color: 'hsl(265 80% 60%)' },
  { name: 'Embedded C', color: 'hsl(220 70% 50%)' }]

},
{
  title: 'Tools & Others',
  emoji: '🛠️',
  skills: [
  { name: 'Excel', color: 'hsl(140 70% 40%)' },
  { name: 'Power BI', color: 'hsl(45 90% 50%)' },
  { name: 'SQL', color: 'hsl(210 75% 55%)' },
  { name: 'Tableau', color: 'hsl(200 85% 50%)' },
  { name: 'Data Analysis', color: 'hsl(265 70% 55%)' },
  { name: 'Data Cleaning', color: 'hsl(15 80% 55%)' }]

},
{
  title: 'Languages',
  emoji: '🌐',
  skills: [
  { name: 'Tamil', color: 'hsl(340 70% 55%)' },
  { name: 'English', color: 'hsl(210 60% 55%)' }]

}];


const Skills = () => {
  return (
    <section id="skills" className="relative">
      <div className="section-container">
        <AnimatedSection>
          <p className="text-primary font-mono text-sm mb-2">{'// my skills'}</p>
          <h2 className="section-title text-xl text-primary-foreground">​Tech Skills 
            <span className="text-gradient">​Skills</span>
          </h2>
          <p className="section-subtitle mt-4">
            A collection of technologies and tools I've honed through projects and continuous learning.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6 mt-12">
          {skillCategories.map((category, catIdx) =>
          <AnimatedSection
            key={category.title}
            delay={catIdx * 0.15}
            direction={catIdx % 2 === 0 ? 'left' : 'right'}>

              <motion.div
              whileHover={{ y: -4 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="card-gradient rounded-xl p-6 h-full">

                <h3 className="text-lg font-heading font-semibold mb-5 flex items-center gap-2">
                  <span>{category.emoji}</span>
                  <span className="text-foreground">{category.title}</span>
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) =>
                <span
                  key={skill.name}
                  className={`px-3 py-1.5 rounded-full text-sm font-medium ${skill.color}`}>

                      {skill.name}
                    </span>
                )}
                </div>
              </motion.div>
            </AnimatedSection>
          )}
        </div>
      </div>
    </section>);

};

export default Skills;