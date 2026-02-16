import { lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowDown, Download, Mail } from 'lucide-react';
const Scene3D = lazy(() => import('./Scene3D'));
const Hero = () => {
  const handleScroll = (id: string) => {
    document.querySelector(id)?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <section id="home" className="relative min-h-screen flex items-center hero-gradient-bg overflow-hidden">
      <div className="section-container flex flex-col lg:flex-row items-center gap-12 pt-24">
        {/* Text content */}
        <motion.div initial={{
        opacity: 0,
        x: -50
      }} animate={{
        opacity: 1,
        x: 0
      }} transition={{
        duration: 0.8,
        ease: 'easeOut'
      }} className="flex-1 text-center lg:text-left z-10">
          <motion.p initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.2,
          duration: 0.5
        }} className="text-primary font-mono text-sm md:text-base mb-4">
            {'> Hello World! 👋'}
          </motion.p>

          <motion.h1 initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.4,
          duration: 0.6
        }} className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-4">
            Hi, I'm{' '}
            <span className="text-gradient">Jaffer Mydeen</span>
          </motion.h1>

          <motion.p initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.6,
          duration: 0.5
        }} className="text-muted-foreground text-lg md:text-xl lg:text-2xl mb-8 max-w-xl mx-auto lg:mx-0">Aspiring Data Analyst | BCA Graduate</motion.p>

          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.8,
          duration: 0.5
        }} className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <Button variant="glow" size="lg" onClick={() => handleScroll('#projects')} className="font-heading">
              View Projects
              <ArrowDown className="ml-1 h-4 w-4" />
            </Button>
            <Button variant="outline-glow" size="lg" className="font-heading">
              <Download className="mr-1 h-4 w-4" />
              Download Resume
            </Button>
            <Button variant="glass" size="lg" onClick={() => handleScroll('#contact')} className="font-heading">
              <Mail className="mr-1 h-4 w-4" />
              Contact Me
            </Button>
          </motion.div>
        </motion.div>

        {/* 3D Scene */}
        <motion.div initial={{
        opacity: 0,
        scale: 0.8
      }} animate={{
        opacity: 1,
        scale: 1
      }} transition={{
        delay: 0.5,
        duration: 1,
        ease: 'easeOut'
      }} className="flex-1 w-full h-[350px] md:h-[450px] lg:h-[550px]">
          <Suspense fallback={<div className="w-full h-full flex items-center justify-center">
              <div className="w-16 h-16 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
            </div>}>
            <Scene3D />
          </Suspense>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} transition={{
      delay: 1.5,
      duration: 0.5
    }} className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <motion.div animate={{
        y: [0, 10, 0]
      }} transition={{
        repeat: Infinity,
        duration: 2,
        ease: 'easeInOut'
      }} className="flex flex-col items-center gap-2">
          <span className="text-xs text-muted-foreground font-mono">scroll down</span>
          <ArrowDown className="h-4 w-4 text-primary" />
        </motion.div>
      </motion.div>
    </section>;
};
export default Hero;