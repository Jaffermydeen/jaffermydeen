import AnimatedSection from './AnimatedSection';
import { motion } from 'framer-motion';
import { Code, Database, Zap, TrendingUp } from 'lucide-react';
const stats = [{
  icon: Code,
  label: 'Projects Completed',
  value: '15+'
}, {
  icon: Database,
  label: 'Data Sets Analyzed',
  value: '50+'
}, {
  icon: Zap,
  label: 'Technologies Used',
  value: '20+'
}, {
  icon: TrendingUp,
  label: 'Years Learning',
  value: '3+'
}];
const About = () => {
  return <section id="about" className="relative">
      <div className="section-container">
        <AnimatedSection>
          <p className="text-primary font-mono text-sm mb-2">{'// about me'}</p>
          <h2 className="section-title">
            Get to Know <span className="text-gradient">I am a passionate Aspiring Data Analyst and BCA Graduate with strong skills in , Excel,  Power BI and SQL . I enjoy working with data to uncover insights, create dashboards, and support data-driven decisions. My academic background in computer applications has helped me build a strong foundation in analytical thinking and problem-solving. I am continuously learning new tools and techniques to grow as a data professional. </span>
          </h2>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12 mt-12">
          {/* About text */}
          

          {/* Stats grid */}
          <AnimatedSection delay={0.4} direction="right">
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => <motion.div key={stat.label} whileHover={{
              scale: 1.05,
              y: -5
            }} transition={{
              type: 'spring',
              stiffness: 300
            }} className="card-gradient rounded-xl p-6 text-center group cursor-default">
                  <stat.icon className="w-8 h-8 text-primary mx-auto mb-3 group-hover:text-accent transition-colors duration-300" />
                  <div className="text-2xl md:text-3xl font-bold text-foreground font-heading mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>)}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>;
};
export default About;