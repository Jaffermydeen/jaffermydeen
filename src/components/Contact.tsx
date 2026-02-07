import { useState } from 'react';
import AnimatedSection from './AnimatedSection';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Send, Github, Linkedin, Mail, Instagram, Phone, MapPin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const socialLinks = [
  { icon: Github, label: 'GitHub', href: '#', color: 'hover:text-foreground' },
  { icon: Linkedin, label: 'LinkedIn', href: '#', color: 'hover:text-[hsl(210,80%,55%)]' },
  { icon: Mail, label: 'Email', href: 'mailto:jaffermydeen22@gmail.com', color: 'hover:text-primary' },
  { icon: Instagram, label: 'Instagram', href: '#', color: 'hover:text-[hsl(330,70%,55%)]' },
];

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [sending, setSending] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);

    // Simulate sending
    setTimeout(() => {
      setSending(false);
      toast({
        title: '✅ Message Sent!',
        description: "Thanks for reaching out. I'll get back to you soon!",
      });
      setFormData({ name: '', email: '', message: '' });
    }, 1500);
  };

  return (
    <section id="contact" className="relative">
      <div className="section-container">
        <AnimatedSection>
          <p className="text-primary font-mono text-sm mb-2">{'// get in touch'}</p>
          <h2 className="section-title">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="section-subtitle mt-4">
            Have a question or want to work together? Drop me a message!
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12 mt-12">
          {/* Form */}
          <AnimatedSection delay={0.2} direction="left">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="text-sm text-muted-foreground font-medium mb-2 block">
                  Name
                </label>
                <Input
                  id="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-card border-border focus:border-primary transition-colors"
                />
              </div>
              <div>
                <label htmlFor="email" className="text-sm text-muted-foreground font-medium mb-2 block">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-card border-border focus:border-primary transition-colors"
                />
              </div>
              <div>
                <label htmlFor="message" className="text-sm text-muted-foreground font-medium mb-2 block">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell me about your project..."
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  className="bg-card border-border focus:border-primary transition-colors resize-none"
                />
              </div>
              <Button
                type="submit"
                variant="glow"
                size="lg"
                disabled={sending}
                className="w-full font-heading"
              >
                {sending ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                    className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full"
                  />
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </form>
          </AnimatedSection>

          {/* Info + socials */}
          <AnimatedSection delay={0.4} direction="right">
            <div className="card-gradient rounded-xl p-8 h-full flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-heading font-semibold text-foreground mb-4">
                  Let's build something amazing together
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  I'm always open to discussing new projects, creative ideas, or opportunities to
                  be part of your vision. Feel free to reach out through any of the channels below.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Mail size={18} className="text-primary" />
                    <a href="mailto:jaffermydeen22@gmail.com" className="hover:text-primary transition-colors">jaffermydeen22@gmail.com</a>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Phone size={18} className="text-primary" />
                    <a href="tel:+916379369257" className="hover:text-primary transition-colors">+91 6379369257</a>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <MapPin size={18} className="text-primary" />
                    <span>Bangalore, India</span>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <p className="text-sm text-muted-foreground mb-4 font-medium">Find me on</p>
                <div className="flex gap-3">
                  {socialLinks.map((link) => (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.15, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                      className={`p-3 rounded-xl bg-muted text-muted-foreground ${link.color} transition-colors`}
                      aria-label={link.label}
                    >
                      <link.icon size={20} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Contact;