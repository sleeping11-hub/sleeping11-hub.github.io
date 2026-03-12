import { motion } from "framer-motion";
import { 
  Terminal, Server, Code2, Database, MessageSquare, 
  Globe, ShieldCheck, ChevronRight, Gamepad2, 
  Cpu, Users, Zap, ExternalLink, Mail, Ticket
} from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";

const LEAF_DISCORD = "https://discord.gg/C6v6k8mduc";
const ATOMSLAB_DISCORD = "https://discord.gg/wsz5N3R5Ux";

export default function Home() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative w-full min-h-screen">
      {/* GLOBAL BACKGROUND ELEMENTS */}
      <div className="fixed inset-0 z-[-1] bg-grid-pattern opacity-30" />
      <div className="fixed inset-0 z-[-1] bg-background/80 backdrop-blur-[1px]" />
      
      {/* NAVBAR */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-md border-b border-border"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Personal Logo */}
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary/40 flex items-center justify-center bg-card">
              <img
                src={`${import.meta.env.BASE_URL}images/my-logo.jpeg`}
                alt="SleepingWarrior Logo"
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = "none";
                  (e.currentTarget.nextSibling as HTMLElement).style.display = "flex";
                }}
              />
              <div style={{ display: "none" }} className="w-full h-full items-center justify-center">
                <Cpu className="w-5 h-5 text-primary" />
              </div>
            </div>
            <span className="font-display font-bold text-xl tracking-widest text-white">
              S<span className="text-primary">W</span>
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            {['About', 'Skills', 'Projects', 'Gigs'].map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item.toLowerCase())}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors uppercase tracking-wider font-display"
              >
                {item}
              </button>
            ))}
            <button
              onClick={() => scrollTo('contact')}
              className="px-5 py-2.5 rounded-none border border-primary/50 text-primary font-display font-bold uppercase tracking-wider text-sm hover:bg-primary/10 transition-all box-glow-hover"
            >
              Contact Me
            </button>
          </div>
        </div>
      </motion.nav>

      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-[-1]">
          <img 
            src={`${import.meta.env.BASE_URL}images/hero-bg.png`} 
            alt="Futuristic tech background" 
            className="w-full h-full object-cover opacity-40 mix-blend-screen"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/80 to-background" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl flex flex-col items-start"
          >
            {/* Personal Logo in Hero */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="w-24 h-24 rounded-full overflow-hidden border-4 border-primary/40 shadow-[0_0_30px_rgba(0,212,255,0.3)] mb-6 bg-card flex items-center justify-center"
            >
              <img
                src={`${import.meta.env.BASE_URL}images/my-logo.jpeg`}
                alt="SleepingWarrior"
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = "none";
                }}
              />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary font-display text-sm tracking-widest mb-8 box-glow"
            >
              <Zap className="w-4 h-4" />
              <span>ZulifargarDev</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-black text-white leading-tight mb-6">
              SLEEPING<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600 text-glow">
                WARRIOR
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground font-sans font-light mb-4 max-w-2xl">
              Young Developer | Minecraft Servers • Discord Bots • Websites • Python / Java / JS
            </p>
            <p className="text-lg md:text-xl text-white font-sans font-medium mb-12 max-w-2xl border-l-2 border-primary pl-4">
              "Building real things for real communities."
            </p>

            <div className="flex flex-col sm:flex-row gap-6">
              <button 
                onClick={() => scrollTo('gigs')}
                className="px-8 py-4 bg-primary text-primary-foreground font-display font-bold uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-white transition-all duration-300 shadow-[0_0_20px_rgba(0,212,255,0.4)] hover:shadow-[0_0_30px_rgba(255,255,255,0.6)] group"
              >
                View My Gigs
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => scrollTo('contact')}
                className="px-8 py-4 bg-transparent border border-primary/50 text-white font-display font-bold uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-primary/10 transition-all duration-300"
              >
                Contact Me
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. ABOUT ME SECTION */}
      <section id="about" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="About Me" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-8 bg-card border border-border p-8 md:p-10 rounded-xl relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-colors duration-700" />
              
              <div className="prose prose-invert max-w-none font-sans text-lg text-muted-foreground leading-relaxed relative z-10">
                <p>
                  Hey! I'm SleepingWarrior — a self-taught developer passionate about building things people actually enjoy. I specialize in Minecraft server setup and plugin development, Discord bot creation, website building, and automation scripts using Python, Java, and JavaScript.
                </p>
                <p>
                  I've helped manage <strong>LEAF SMP</strong> — a thriving Minecraft community with 1,000+ active members — and currently serve as an admin at <strong>AtomsLab Minecraft Hosting</strong>, where I handle real server infrastructure daily. These aren't just projects on paper; they're proof I can deliver under real-world conditions.
                </p>
                <p className="text-white font-medium border-l-2 border-primary pl-4 italic">
                  I'm honest about being young and still growing, but my skills are real and my commitment to quality work is genuine. Pricing will be according to your budget — just reach out and we'll figure out what works for both of us.
                </p>
              </div>
              
              <div className="mt-8 flex flex-wrap gap-3">
                <span className="px-4 py-1.5 bg-background border border-border rounded-full text-sm font-display text-white">
                  English (Fluent)
                </span>
                <span className="px-4 py-1.5 bg-background border border-border rounded-full text-sm font-display text-white">
                  Urdu (Native)
                </span>
              </div>
            </motion.div>

            <div className="lg:col-span-4 flex flex-col gap-6">
              {[
                { label: "LEAF SMP Community", value: "1,000+", sub: "Active Members", icon: Users },
                { label: "AtomsLab Hosting", value: "Active", sub: "Server Admin", icon: Server }
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-card/50 border border-primary/20 p-6 rounded-xl flex items-start gap-4 hover:border-primary/50 transition-colors box-glow-hover"
                >
                  <div className="p-3 bg-primary/10 rounded-lg text-primary">
                    <stat.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-3xl font-display font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-primary font-medium text-sm tracking-wide uppercase">{stat.sub}</div>
                    <div className="text-muted-foreground text-sm mt-1">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. SKILLS SECTION */}
      <section id="skills" className="py-24 bg-card/30 relative border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Skills & Expertise" />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
            {[
              { name: "Minecraft Server Setup", icon: Server },
              { name: "Bukkit / Spigot / Paper", icon: Code2 },
              { name: "Skript (Minecraft)", icon: Terminal },
              { name: "Discord Bot Dev", icon: MessageSquare },
              { name: "discord.py / discord.js", icon: BotIcon },
              { name: "Python Automation", icon: Cpu },
              { name: "JavaScript (Node.js)", icon: Database },
              { name: "Java Development", icon: Code2 },
              { name: "Web Creation (HTML/CSS/JS)", icon: Globe },
              { name: "Server Administration", icon: ShieldCheck },
              { name: "Game Server Management", icon: Gamepad2 }
            ].map((skill, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 4) * 0.1 }}
                className="bg-background border border-border p-5 rounded-lg flex items-center gap-4 hover:border-primary/50 hover:-translate-y-1 transition-all duration-300 group hover:shadow-[0_0_20px_rgba(0,212,255,0.15)]"
              >
                <div className="text-muted-foreground group-hover:text-primary transition-colors">
                  <skill.icon className="w-6 h-6" />
                </div>
                <span className="font-sans font-medium text-white group-hover:text-primary transition-colors">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PROJECTS SECTION */}
      <section id="projects" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Real Projects" subtitle="Real results from active, thriving communities." />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project 1 — LEAF SMP */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-2xl p-8 relative overflow-hidden group flex flex-col"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110" />
              
              <div className="flex justify-between items-start mb-6 relative z-10">
                <div className="flex items-center gap-4">
                  {/* LEAF SMP Logo */}
                  <div className="w-14 h-14 rounded-xl overflow-hidden border-2 border-green-500/30 bg-card/80 flex items-center justify-center flex-shrink-0 shadow-[0_0_15px_rgba(34,197,94,0.2)]">
                    <img
                      src={`${import.meta.env.BASE_URL}images/leaf-smp-logo.png`}
                      alt="LEAF SMP Logo"
                      className="w-full h-full object-contain p-1"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).style.display = "none";
                        (e.currentTarget.nextSibling as HTMLElement).style.display = "flex";
                      }}
                    />
                    <div style={{ display: "none" }} className="w-full h-full items-center justify-center text-green-400">
                      <Gamepad2 className="w-7 h-7" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-display font-bold text-white">LEAF SMP</h3>
                </div>
                <span className="px-3 py-1 bg-green-500/10 border border-green-500/30 text-green-400 text-xs font-bold uppercase tracking-wider rounded flex-shrink-0">
                  1,000+ Members
                </span>
              </div>
              
              <p className="text-muted-foreground font-sans text-base mb-6 relative z-10">
                Minecraft SMP community with over 1,000 active members. Managed server infrastructure, plugin configuration, performance optimization, and player experience.
              </p>
              
              <div className="flex flex-wrap gap-2 relative z-10 mb-6">
                {['Minecraft', 'Server Admin', 'Community Management'].map(tag => (
                  <span key={tag} className="text-xs font-sans text-white/70 bg-background px-3 py-1 rounded border border-white/10">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-auto relative z-10">
                <a
                  href={LEAF_DISCORD}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-[#5865F2]/10 border border-[#5865F2]/40 text-[#7289da] font-display font-bold text-sm uppercase tracking-wider hover:bg-[#5865F2]/20 hover:border-[#5865F2]/70 transition-all duration-300 rounded-lg"
                >
                  <DiscordIcon />
                  Join LEAF SMP Discord
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>

            {/* Project 2 — AtomsLab */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-card border border-border rounded-2xl p-8 relative overflow-hidden group flex flex-col"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110" />
              
              <div className="flex justify-between items-start mb-6 relative z-10">
                <div className="flex items-center gap-4">
                  {/* AtomsLab Logo */}
                  <div className="w-14 h-14 rounded-xl overflow-hidden border-2 border-primary/30 bg-card/80 flex items-center justify-center flex-shrink-0 shadow-[0_0_15px_rgba(0,212,255,0.15)]">
                    <img
                      src={`${import.meta.env.BASE_URL}images/atomslab-logo.webp`}
                      alt="AtomsLab Logo"
                      className="w-full h-full object-contain p-1"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).style.display = "none";
                        (e.currentTarget.nextSibling as HTMLElement).style.display = "flex";
                      }}
                    />
                    <div style={{ display: "none" }} className="w-full h-full items-center justify-center text-primary">
                      <Server className="w-7 h-7" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-display font-bold text-white">AtomsLab Hosting</h3>
                </div>
                <span className="px-3 py-1 bg-primary/10 border border-primary/30 text-primary text-xs font-bold uppercase tracking-wider rounded flex-shrink-0">
                  Admin
                </span>
              </div>
              
              <p className="text-muted-foreground font-sans text-base mb-6 relative z-10">
                Serving as an admin at AtomsLab Minecraft Hosting — handling real production server environments, client servers, and infrastructure daily.
              </p>
              
              <div className="flex flex-wrap gap-2 relative z-10 mb-6">
                {['Hosting', 'Server Admin', 'Infrastructure'].map(tag => (
                  <span key={tag} className="text-xs font-sans text-white/70 bg-background px-3 py-1 rounded border border-white/10">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-auto relative z-10">
                <a
                  href={ATOMSLAB_DISCORD}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-[#5865F2]/10 border border-[#5865F2]/40 text-[#7289da] font-display font-bold text-sm uppercase tracking-wider hover:bg-[#5865F2]/20 hover:border-[#5865F2]/70 transition-all duration-300 rounded-lg"
                >
                  <DiscordIcon />
                  Join AtomsLab Discord
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. GIGS SECTION */}
      <section id="gigs" className="py-24 bg-card/50 relative border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="My Gigs" subtitle="Professional services tailored to your exact needs." />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            
            {/* GIG 1 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-background border border-border hover:border-primary/40 transition-colors duration-300 rounded-2xl flex flex-col"
            >
              <div className="p-8 border-b border-border flex-1">
                <div className="w-14 h-14 bg-primary/10 border border-primary/20 rounded-xl flex items-center justify-center mb-6 text-primary">
                  <Server className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-display font-bold text-white mb-4 leading-snug">
                  I will set up your Minecraft server and develop custom plugins or Skripts
                </h3>
                
                <div className="space-y-6 mt-8">
                  <div>
                    <h4 className="text-sm font-display text-primary uppercase tracking-wider mb-3">What's Included:</h4>
                    <ul className="space-y-2 font-sans text-muted-foreground">
                      {['Full server setup (Spigot, Paper, Bukkit)', 'Custom plugin installation & configuration', 'Skript creation for unique mechanics', 'Java plugin development', 'Performance optimization', 'Permission systems (LuckPerms, etc.)'].map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckIcon /> <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-display text-white/60 uppercase tracking-wider mb-3">Requirements from client:</h4>
                    <ul className="space-y-1 font-sans text-muted-foreground text-sm opacity-80">
                      <li>• Hosting platform / control panel</li>
                      <li>• Minecraft version & Server type</li>
                      <li>• Desired features/plugins list</li>
                      <li>• Preferred timeline</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="p-8 bg-card/30 mt-auto rounded-b-2xl">
                <p className="text-sm font-medium text-white mb-4 italic">
                  * Pricing will be according to your budget — message me first!
                </p>
                <button 
                  onClick={() => scrollTo('contact')}
                  className="w-full py-4 bg-primary/10 border border-primary/50 text-primary font-display font-bold uppercase tracking-widest hover:bg-primary hover:text-primary-foreground transition-all duration-300 box-glow-hover"
                >
                  Get a Quote
                </button>
              </div>
            </motion.div>

            {/* GIG 2 */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-background border border-border hover:border-primary/40 transition-colors duration-300 rounded-2xl flex flex-col"
            >
              <div className="p-8 border-b border-border flex-1">
                <div className="w-14 h-14 bg-primary/10 border border-primary/20 rounded-xl flex items-center justify-center mb-6 text-primary">
                  <MessageSquare className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-display font-bold text-white mb-4 leading-snug">
                  I will create a custom Discord bot with commands, automations, and server management
                </h3>
                
                <div className="space-y-6 mt-8">
                  <div>
                    <h4 className="text-sm font-display text-primary uppercase tracking-wider mb-3">What's Included:</h4>
                    <ul className="space-y-2 font-sans text-muted-foreground">
                      {['Custom slash & prefix commands', 'Auto-moderation systems', 'Welcome messages & role assignment', 'Ticket & support systems', 'Leveling / XP systems', 'Minecraft server integration', 'Utility commands (polls, giveaways)'].map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckIcon /> <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-display text-white/60 uppercase tracking-wider mb-3">Requirements from client:</h4>
                    <ul className="space-y-1 font-sans text-muted-foreground text-sm opacity-80">
                      <li>• Feature list / commands needed</li>
                      <li>• Preferred language (Python or JS)</li>
                      <li>• Hosting setup or VPS details</li>
                      <li>• Server size, type & timeline</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="p-8 bg-card/30 mt-auto rounded-b-2xl">
                <p className="text-sm font-medium text-white mb-4 italic">
                  * Pricing will be according to your budget — message me first!
                </p>
                <button 
                  onClick={() => scrollTo('contact')}
                  className="w-full py-4 bg-primary/10 border border-primary/50 text-primary font-display font-bold uppercase tracking-widest hover:bg-primary hover:text-primary-foreground transition-all duration-300 box-glow-hover"
                >
                  Get a Quote
                </button>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 6. CONTACT SECTION */}
      <section id="contact" className="py-32 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/10 blur-[120px] rounded-[100%] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-card border border-primary/30 p-10 md:p-16 rounded-3xl shadow-[0_0_50px_rgba(0,0,0,0.5)] box-glow text-center"
          >
            <Mail className="w-12 h-12 text-primary mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4 text-glow">
              Work With Me
            </h2>
            <p className="text-xl text-muted-foreground font-sans mb-10 max-w-2xl mx-auto">
              Got a project in mind? Let's talk. I'll work within your budget to build exactly what you need.
            </p>

            {/* Freelance Platforms */}
            <div className="grid sm:grid-cols-2 gap-4 max-w-xl mx-auto mb-10">
              <a href="#" className="flex flex-col items-center justify-center p-6 bg-background border border-border rounded-xl hover:border-primary/50 hover:-translate-y-1 transition-all group">
                <span className="text-sm text-muted-foreground uppercase tracking-widest font-display mb-2">Fiverr</span>
                <span className="text-xl font-bold text-white group-hover:text-primary transition-colors">SleepingWarrior</span>
              </a>
              <a href="#" className="flex flex-col items-center justify-center p-6 bg-background border border-border rounded-xl hover:border-primary/50 hover:-translate-y-1 transition-all group">
                <span className="text-sm text-muted-foreground uppercase tracking-widest font-display mb-2">Freelancer</span>
                <span className="text-xl font-bold text-white group-hover:text-primary transition-colors">ZulifargarDev</span>
              </a>
            </div>

            {/* Discord Communities */}
            <div className="mb-10">
              <p className="text-sm font-display text-muted-foreground uppercase tracking-widest mb-4">Join My Communities on Discord</p>
              <div className="grid sm:grid-cols-2 gap-4 max-w-xl mx-auto">
                <a
                  href={LEAF_DISCORD}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-5 bg-[#5865F2]/10 border border-[#5865F2]/30 rounded-xl hover:bg-[#5865F2]/20 hover:border-[#5865F2]/60 hover:-translate-y-1 transition-all group"
                >
                  <DiscordIcon className="w-7 h-7 text-[#7289da] mb-2" />
                  <span className="text-lg font-bold text-white group-hover:text-[#7289da] transition-colors">LEAF SMP</span>
                  <span className="text-xs text-muted-foreground mt-1">discord.gg/C6v6k8mduc</span>
                </a>
                <a
                  href={ATOMSLAB_DISCORD}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-5 bg-[#5865F2]/10 border border-[#5865F2]/30 rounded-xl hover:bg-[#5865F2]/20 hover:border-[#5865F2]/60 hover:-translate-y-1 transition-all group"
                >
                  <DiscordIcon className="w-7 h-7 text-[#7289da] mb-2" />
                  <span className="text-lg font-bold text-white group-hover:text-[#7289da] transition-colors">AtomsLab</span>
                  <span className="text-xs text-muted-foreground mt-1">discord.gg/wsz5N3R5Ux</span>
                </a>
              </div>
            </div>

            {/* Meet Me Banner */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-green-900/30 via-primary/10 to-green-900/30 border border-green-500/30 rounded-2xl p-6 mb-8 text-left"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-green-500/10 rounded-xl text-green-400 flex-shrink-0">
                  <Ticket className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-white text-lg mb-1">Want to Meet Me Directly?</h3>
                  <p className="text-muted-foreground font-sans">
                    Join the <strong className="text-green-400">LEAF SMP Discord</strong> and open a <strong className="text-primary">ticket</strong> — I'll get back to you there personally. It's the fastest way to reach me and discuss your project in detail.
                  </p>
                  <a
                    href={LEAF_DISCORD}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-4 px-5 py-2.5 bg-green-500/10 border border-green-500/40 text-green-400 font-display font-bold text-sm uppercase tracking-wider hover:bg-green-500/20 transition-all rounded-lg"
                  >
                    <DiscordIcon />
                    Join LEAF SMP & Make a Ticket
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </motion.div>

            <div className="inline-block bg-primary/10 border border-primary/20 rounded-lg px-6 py-4">
              <p className="text-primary font-medium">
                💡 Feel free to message me before ordering — I'm happy to discuss your project first!
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border bg-background py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-full overflow-hidden border border-primary/40 bg-card flex items-center justify-center">
              <img
                src={`${import.meta.env.BASE_URL}images/my-logo.jpeg`}
                alt="SleepingWarrior"
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = "none";
                  (e.currentTarget.nextSibling as HTMLElement).style.display = "flex";
                }}
              />
              <div style={{ display: "none" }} className="w-full h-full items-center justify-center">
                <Cpu className="w-4 h-4 text-primary" />
              </div>
            </div>
            <span className="font-display font-bold text-xl tracking-widest text-white">
              S<span className="text-primary">W</span>
            </span>
          </div>
          <p className="text-white font-display font-bold uppercase tracking-widest mb-2">
            SleepingWarrior <span className="text-primary mx-2">|</span> ZulifargarDev
          </p>
          <p className="text-muted-foreground font-sans text-sm mb-6">
            Self-taught Developer | Minecraft • Discord • Web • Python / Java / JS
          </p>
          <div className="flex items-center justify-center gap-4 mb-6">
            <a
              href={LEAF_DISCORD}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#7289da] hover:text-white transition-colors text-sm"
            >
              <DiscordIcon /> LEAF SMP
            </a>
            <span className="text-border">|</span>
            <a
              href={ATOMSLAB_DISCORD}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#7289da] hover:text-white transition-colors text-sm"
            >
              <DiscordIcon /> AtomsLab
            </a>
          </div>
          <p className="text-muted-foreground/50 text-xs font-sans">
            © {new Date().getFullYear()} SleepingWarrior. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

function CheckIcon() {
  return (
    <div className="mt-1 flex-shrink-0">
      <div className="w-4 h-4 rounded-full bg-primary/20 border border-primary/50 flex items-center justify-center">
        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
      </div>
    </div>
  );
}

function BotIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 8V4H8" />
      <rect width="16" height="12" x="4" y="8" rx="2" />
      <path d="M2 14h2" />
      <path d="M20 14h2" />
      <path d="M15 13v2" />
      <path d="M9 13v2" />
    </svg>
  );
}

function DiscordIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
    </svg>
  );
}
