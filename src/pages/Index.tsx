import { Github, Linkedin, Mail, FileText, Rocket, Sparkles, Target, MessageCircle, ArrowRight, Code, Database, Cloud, Cpu, Quote, ExternalLink, Twitter } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Index = () => {
  // Rotating images state
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const rotatingImages = [
    { src: "/japan.png", alt: "Japan Experience" },
    { src: "/uoft_hacks judge.JPG", alt: "UofT Hacks Judge" },
    { src: "/pitch.png", alt: "Pitch Competition" },
    { src: "/hackathon.png", alt: "Hackathon Achievement" }
  ];

  // Rotate images every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % rotatingImages.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [rotatingImages.length]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center px-8 lg:px-20 py-12">
          <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-[1fr_500px] gap-12 items-start w-full">
            {/* Left Content */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6 mt-20"
            >
              <div className="space-y-4">
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="text-white text-lg"
                >
                  Hi, my name is
                </motion.p>
                
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="text-4xl sm:text-6xl lg:text-7xl font-black text-white leading-tight"
                >
                  Ishika Mittal.
                </motion.h1>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  className="text-2xl sm:text-4xl lg:text-5xl font-normal text-white leading-tight"
                >
                  I turn ideas into{" "}
                  <span className="bg-[#6699cc] text-white px-4 py-2 rounded-lg inline-block">
                    AI solutions
                  </span>
                </motion.div>
              </div>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="text-white text-xl leading-relaxed max-w-2xl"
              >
                I'm a Full Stack AI Engineer who transforms complex data into intelligent solutions. 
                From building neural network visualizations to developing real estate analytics platforms, 
                I bridge the gap between cutting-edge software/AI and practical business applications.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0, duration: 0.6 }}
                className="flex flex-wrap gap-4"
              >
                <a 
                  href="mailto:ishika.mittal@mail.utoronto.ca"
                  className="inline-flex items-center gap-2 bg-[#6699cc] hover:bg-[#5588bb] text-white px-6 py-3 rounded-lg font-medium transition-all"
                >
                  Get in touch
                  <ArrowRight className="w-4 h-4" />
                </a>
                
                <a 
                  href="#projects"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-2 border border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white px-6 py-3 rounded-lg font-medium transition-all"
                >
                  View my work
                  <ExternalLink className="w-4 h-4" />
                </a>
              </motion.div>
              
              {/* Social Links */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="flex items-center gap-6 pt-6"
              >
                <a 
                  href="https://github.com/ishika1202" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/ishika-mittal1202/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a 
                  href="https://x.com/imittalishika" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Twitter className="w-6 h-6" />
                </a>
                <a 
                  href="mailto:ishika.mittal@mail.utoronto.ca"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Mail className="w-6 h-6" />
                </a>
                <a 
                  href="/ishika_resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <FileText className="w-6 h-6" />
                </a>
              </motion.div>
            </motion.div>
            
            {/* Right Content - Character Illustration */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="hidden lg:flex items-end justify-end h-screen pb-0"
            >
              <div className="relative">
                <img 
                  src="/ishikaimage.png"
                  alt="Ishika Mittal - AI Engineer and Founder" 
                  className="w-[500px] h-auto object-contain object-bottom"
                  onError={(e) => {
                    console.error('Image failed to load:', e);
                    // Hide this image and show fallback
                    (e.target as HTMLImageElement).style.display = 'none';
                    const fallback = (e.target as HTMLImageElement).nextElementSibling as HTMLElement;
                    if (fallback) fallback.style.display = 'flex';
                  }}
                  onLoad={() => {
                    console.log('✅ Image loaded successfully');
                  }}
                />
                
                {/* Fallback content */}
                <div className="w-[500px] h-[500px] bg-card rounded-2xl border border-border flex items-center justify-center" style={{ display: 'none' }}>
                  <div className="text-center space-y-4">
                    <div className="w-24 h-24 bg-primary rounded-full mx-auto flex items-center justify-center">
                      <Code className="w-12 h-12 text-white" />
                    </div>
                    <div className="space-y-2">
                      <p className="text-foreground font-semibold">AI Engineer</p>
                      <p className="text-muted-foreground text-sm">Building the future</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* About/Experience Section */}
        <section id="experience" className="py-24 px-8 lg:px-20 scroll-mt-20 bg-background">
          <div className="mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-16"
            >
              {/* Section Header */}
              <div className="text-center space-y-4">
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                  Work experience
                </h2>
              </div>

              {/* Experience Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Amazon Robotics - Flip Card */}
                <motion.div 
                  className="col-span-1 md:col-span-2 h-64 perspective-1000"
                >
                  <div className="group relative w-full h-full transition-transform duration-700 transform-style-preserve-3d hover:rotate-y-180">
                    {/* Front Face */}
                    <div className="absolute inset-0 w-full h-full backface-hidden bg-card border border-border rounded-xl p-6">
                                             <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-6 items-start h-full pt-4">
                                                 {/* Left side - Large Amazon Logo */}
                         <div className="flex justify-center lg:justify-start items-start">
                           <img 
                             src="/amazon.png"
                             alt="Amazon Robotics Logo" 
                             className="w-56 h-40 lg:w-72 lg:h-48 object-contain"
                           />
                        </div>
                        
                        {/* Right side - Company and Role Info */}
                        <div className="space-y-4 text-center lg:text-left">
                          <h3 className="text-2xl lg:text-3xl font-semibold text-white leading-tight">
                            Software Engineer Intern
                          </h3>
                          <p className="text-[#6699cc] font-medium text-xl lg:text-2xl">Amazon Robotics</p>
                          <p className="text-gray-300 text-lg lg:text-xl">(12 month term) Sep 2024 - Sep 2025</p>
                          <p className="text-gray-400 text-sm lg:text-base mt-4">
                            Hover to see key achievements
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Back Face */}
                    <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-card border border-border rounded-xl p-6 overflow-y-auto">
                      <div className="space-y-4 text-white leading-relaxed text-sm">
                        <h3 className="text-xl font-semibold text-[#6699cc] mb-4">Key Achievements</h3>
                        
                        <div className="flex items-start gap-3">
                          <span className="w-2 h-2 bg-[#6699cc] rounded-full mt-2 flex-shrink-0"></span>
                          <p>
                            <strong>Led global deployment</strong> of robotic planning infrastructure across 150+ warehouses in EU and Japan—delivered secure, cross-region SageMaker model orchestration using S3, ECR, Lambda, and IAM.
                          </p>
                        </div>
                        
                        <div className="flex items-start gap-3">
                          <span className="w-2 h-2 bg-[#6699cc] rounded-full mt-2 flex-shrink-0"></span>
                          <p>
                            <strong>Redesigned and deployed</strong> the SageMaker endpoint allocator (SmEndpointMappingHandler) used across every Amazon warehouse; replaced legacy alphabetical assignment with scalable round-robin allocator.
                          </p>
                        </div>
                        
                        <div className="flex items-start gap-3">
                          <span className="w-2 h-2 bg-[#6699cc] rounded-full mt-2 flex-shrink-0"></span>
                          <p>
                            <strong>Built real-time operational monitoring platform</strong>—developed full-stack serverless tool (React, TypeScript, Kotlin, Lambda) for debugging live warehouse events.
                          </p>
                        </div>
                        
                        <div className="flex items-start gap-3">
                          <span className="w-2 h-2 bg-[#6699cc] rounded-full mt-2 flex-shrink-0"></span>
                          <p>
                            <strong>Delivered secure access control system</strong> under Sev2 escalation—integrated role-based authorization, federated identity, and custom IAM layers in &lt;2 weeks.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* FlicFit - Flip Card */}
                <motion.div 
                  className="col-span-1 md:col-span-2 h-64 perspective-1000"
                >
                  <div className="group relative w-full h-full transition-transform duration-700 transform-style-preserve-3d hover:rotate-y-180">
                    {/* Front Face */}
                    <div className="absolute inset-0 w-full h-full backface-hidden bg-card border border-border rounded-xl p-6">
                      <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-6 items-start h-full pt-4">
                        {/* Left side - Large FlicFit Logo */}
                        <div className="flex justify-center lg:justify-start items-start">
                          <img 
                            src="/flicfit1.png"
                            alt="FlicFit Logo" 
                            className="w-56 h-40 lg:w-72 lg:h-48 object-contain"
                          />
                        </div>
                        
                        {/* Right side - Company and Role Info */}
                        <div className="space-y-4 text-center lg:text-left">
                          <h3 className="text-2xl lg:text-3xl font-semibold text-white leading-tight">
                            AI/ML Engineer Intern
                          </h3>
                          <p className="text-[#6699cc] font-medium text-xl lg:text-2xl">FlicFit, Japan</p>
                          <p className="text-gray-300 text-lg lg:text-xl">May 2024 - August 2024</p>
                          <p className="text-gray-400 text-sm lg:text-base mt-4">
                            Hover to see key achievements
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Back Face */}
                    <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-card border border-border rounded-xl p-6 overflow-y-auto">
                      <div className="space-y-4 text-white leading-relaxed text-sm">
                        <h3 className="text-xl font-semibold text-[#6699cc] mb-4">Key Achievements</h3>
                        
                        <div className="flex items-start gap-3">
                          <span className="w-2 h-2 bg-[#6699cc] rounded-full mt-2 flex-shrink-0"></span>
                          <p>
                            <strong>Worked at an early-stage startup in R&D</strong> for early dementia detection. Developed a Lasso Regression model to predict cognitive impairment (MOCA score) using normalized gait features from insole sensor data of 950+ patients, achieving interpretable results.
                          </p>
                        </div>
                        
                        <div className="flex items-start gap-3">
                          <span className="w-2 h-2 bg-[#6699cc] rounded-full mt-2 flex-shrink-0"></span>
                          <p>
                            <strong>Engineered a binary classifier</strong> from continuous predictions to label dementia status (DM/NOTDM), using Scikit-learn for modeling and Pandas for outcome analysis across participant cohorts.
                          </p>
                        </div>
                        
                        <div className="flex items-start gap-3">
                          <span className="w-2 h-2 bg-[#6699cc] rounded-full mt-2 flex-shrink-0"></span>
                          <p>
                            <strong>Led a C# Unity-based gaming project</strong> that reduced real-time shoe data transfer from 4 seconds to 0.5 seconds, improving avatar movement and enhancing player experience. Pitched the product to Niantic for collaboration between insoles and gaming.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Nokia - Flip Card */}
                <motion.div 
                  className="col-span-1 md:col-span-2 h-64 perspective-1000"
                >
                  <div className="group relative w-full h-full transition-transform duration-700 transform-style-preserve-3d hover:rotate-y-180">
                    {/* Front Face */}
                    <div className="absolute inset-0 w-full h-full backface-hidden bg-card border border-border rounded-xl p-6">
                      <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-6 items-start h-full pt-4">
                        {/* Left side - Large Nokia Logo */}
                        <div className="flex justify-center lg:justify-start items-start">
                          <img 
                            src="/Nokia-Logo.jpg"
                            alt="Nokia Logo" 
                            className="w-56 h-40 lg:w-72 lg:h-48 object-contain"
                          />
                        </div>
                        
                        {/* Right side - Company and Role Info */}
                        <div className="space-y-4 text-center lg:text-left">
                          <h3 className="text-2xl lg:text-3xl font-semibold text-white leading-tight">
                            SDN and Automation Engineer Intern
                          </h3>
                          <p className="text-[#6699cc] font-medium text-xl lg:text-2xl">Nokia</p>
                          <p className="text-gray-300 text-lg lg:text-xl">May 2023 - Dec 2023</p>
                          <p className="text-gray-400 text-sm lg:text-base mt-4">
                            Hover to see key achievements
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Back Face */}
                    <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-card border border-border rounded-xl p-6 overflow-y-auto">
                      <div className="space-y-4 text-white leading-relaxed text-sm">
                        <h3 className="text-xl font-semibold text-[#6699cc] mb-4">Key Achievements</h3>
                        
                        <div className="flex items-start gap-3">
                          <span className="w-2 h-2 bg-[#6699cc] rounded-full mt-2 flex-shrink-0"></span>
                          <p>
                            <strong>Created an automation platform</strong> through API implementation using FastAPI, Golang API, Bootstrap, Docker, HTML, and Python, resulting in a remarkable 95% efficiency gain.
                          </p>
                        </div>
                        
                        <div className="flex items-start gap-3">
                          <span className="w-2 h-2 bg-[#6699cc] rounded-full mt-2 flex-shrink-0"></span>
                          <p>
                            <strong>Reduced infrastructure preparation time</strong> from weeks to 15 minutes, enhancing the customer experience and enabling quicker product demonstrations.
                          </p>
                        </div>
                        
                        <div className="flex items-start gap-3">
                          <span className="w-2 h-2 bg-[#6699cc] rounded-full mt-2 flex-shrink-0"></span>
                          <p>
                            <strong>Integrated ESLint</strong> for rapid issue detection and code quality improvement, reducing review times by 60%.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Accomplishments Section */}
        <section className="py-24 px-8 lg:px-20 bg-background">
          <div className="mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-4 mb-12">
                <Target className="w-8 h-8 text-[#6699cc]" />
                <h2 className="text-3xl font-bold text-white">Accomplishments</h2>
              </div>
              
              {/* Large Mirror Effect Square */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                whileHover={{ scale: 1.02 }}
                className="relative max-w-6xl mx-auto"
              >
                {/* Mirror Effect Background */}
                <div className="relative bg-gradient-to-br from-white/30 to-white/10 backdrop-blur-xl border-2 border-white/40 rounded-3xl p-12 min-h-[600px] shadow-[0_0_50px_rgba(255,255,255,0.1)]">
                  {/* Clean mirror reflection */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/25 via-transparent to-[#6699cc]/20 rounded-3xl"></div>
                  
                  {/* Subtle diagonal shine */}
                  <div className="absolute top-0 left-0 w-full h-full overflow-hidden rounded-3xl">
                    <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-white/30 via-transparent to-transparent transform rotate-12 scale-150"></div>
                  </div>
                  
                  {/* Clean shimmer effect */}
                  <div className="absolute inset-0 overflow-hidden rounded-3xl">
                    <div className="absolute inset-0 opacity-20">
                      <div className="absolute top-0 left-0 w-8 h-full bg-gradient-to-r from-transparent via-white/80 to-transparent mirror-shimmer"></div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-20 space-y-8">
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-white mb-2">Key Achievements</h3>
                      <div className="w-24 h-1 bg-[#6699cc] mx-auto rounded-full"></div>
                    </div>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-8 text-white">
                      {/* Left Side - Achievements */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Left Column */}
                        <div className="space-y-6">
                          <div className="flex items-start gap-4">
                            <div className="w-3 h-3 bg-[#6699cc] rounded-full mt-2 flex-shrink-0 shadow-lg"></div>
                            <div>
                              <h4 className="font-semibold text-[#6699cc] text-lg mb-1">Cansbridge Fellowship 2024</h4>
                              <p className="text-gray-300">Acceptance Rate - 1%. Prestigious fellowship program for emerging leaders.</p>
                            </div>
                          </div>
                          
                          <div className="flex items-start gap-4">
                            <div className="w-3 h-3 bg-[#6699cc] rounded-full mt-2 flex-shrink-0 shadow-lg"></div>
                            <div>
                              <h4 className="font-semibold text-[#6699cc] text-lg mb-1">TreeHacks 2024 Track Winner</h4>
                              <p className="text-gray-300">Stanford's premier hackathon - won track for innovative AI solution.</p>
                            </div>
                          </div>
                          
                          <div className="flex items-start gap-4">
                            <div className="w-3 h-3 bg-[#6699cc] rounded-full mt-2 flex-shrink-0 shadow-lg"></div>
                            <div>
                              <h4 className="font-semibold text-[#6699cc] text-lg mb-1">National Rank 1</h4>
                              <p className="text-gray-300">National Interactive Maths Olympiad 2016 - top performer nationwide.</p>
                            </div>
                          </div>
                        </div>
                        
                        {/* Right Column */}
                        <div className="space-y-6">
                          <div className="flex items-start gap-4">
                            <div className="w-3 h-3 bg-[#6699cc] rounded-full mt-2 flex-shrink-0 shadow-lg"></div>
                            <div>
                              <h4 className="font-semibold text-[#6699cc] text-lg mb-1">Tech Lead Toronto</h4>
                              <p className="text-gray-300">Leading 2600+ women in tech community at Rewriting the Code.</p>
                            </div>
                          </div>
                          
                          <div className="flex items-start gap-4">
                            <div className="w-3 h-3 bg-[#6699cc] rounded-full mt-2 flex-shrink-0 shadow-lg"></div>
                            <div>
                              <h4 className="font-semibold text-[#6699cc] text-lg mb-1">WISE STEM Conference</h4>
                              <p className="text-gray-300">Organized 300+ attendee nation-wide conference in Canada.</p>
                            </div>
                          </div>
                          
                          <div className="flex items-start gap-4">
                            <div className="w-3 h-3 bg-[#6699cc] rounded-full mt-2 flex-shrink-0 shadow-lg"></div>
                            <div>
                              <h4 className="font-semibold text-[#6699cc] text-lg mb-1">UTEK Competition Director</h4>
                              <p className="text-gray-300">End-to-end planning and execution of Re-engineering Competition.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Right Side - Rotating Images */}
                      <div className="flex items-center justify-center">
                        <div className="relative w-full h-[400px] rounded-2xl overflow-hidden border border-white/20">
                          {rotatingImages.map((image, index) => (
                            <motion.img
                              key={index}
                              src={image.src}
                              alt={image.alt}
                              className="absolute inset-0 w-full h-full object-cover"
                              initial={{ opacity: 0 }}
                              animate={{ 
                                opacity: index === currentImageIndex ? 1 : 0,
                                scale: index === currentImageIndex ? 1 : 1.1
                              }}
                              transition={{ 
                                opacity: { duration: 0.5 },
                                scale: { duration: 0.5 }
                              }}
                            />
                          ))}
                          
                          {/* Image overlay with info */}
                          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                            <p className="text-white text-sm font-medium">
                              {rotatingImages[currentImageIndex]?.alt}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Clean bottom accent */}
                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-[#6699cc]/50 to-transparent"></div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-24 px-8 lg:px-20 scroll-mt-20 bg-background">
          <div className="mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Featured Projects</h2>
                <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                  Showcasing my work in full-stack AI engineering, interactive web applications, and innovative educational tools.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Memora AI Project */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1, duration: 0.6 }}
                  className="bg-card border border-border rounded-xl overflow-hidden"
                >
                  {/* Project Image */}
                  <div className="h-48 bg-gray-200 overflow-hidden">
                    <img 
                      src="/memora.png"
                      alt="Memora AI Project" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-3">Memora AI</h3>
                    <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                      Built an AI companion that simulates conversations with loved ones using their voice, tone, and memories to foster connection and reduce loneliness. Also designed daily wellness routines with posture correction to encourage movement and overall well-being.
                    </p>
                    
                    {/* Technologies */}
                    <div className="mb-4">
                      <p className="text-gray-400 text-xs mb-2">Technologies:</p>
                      <div className="flex flex-wrap gap-2">
                        {["Python & Flask", "OpenAI", "Resemble AI", "OpenCV", "MediaPipe"].map((tech) => (
                          <span 
                            key={tech}
                            className="px-2 py-1 bg-[#6699cc]/20 text-[#6699cc] rounded text-xs border border-[#6699cc]/30"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Live Demo Button */}
                    <a 
                      href="https://github.com/ishika1202/Memora"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-[#6699cc] hover:bg-[#5588bb] text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2"
                    >
                      Live Demo
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </motion.div>

                {/* Random Route Generator Project */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="bg-card border border-border rounded-xl overflow-hidden"
                >
                  {/* Project Image */}
                  <div className="h-48 bg-gray-200 overflow-hidden">
                    <img 
                      src="/route.png"
                      alt="Random Route Generator Project" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-3">Random Route Generator</h3>
                    <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                      Developed a dynamic web application, implemented a feature using the Google Maps API, enabling the generation of new and engaging walking routes based on the user's location and preferences, enhancing the overall user experience.
                    </p>
                    
                    {/* Technologies */}
                    <div className="mb-4">
                      <p className="text-gray-400 text-xs mb-2">Technologies:</p>
                      <div className="flex flex-wrap gap-2">
                        {["Google Maps API", "CSS", "React", "Google Cloud", "JavaScript"].map((tech) => (
                          <span 
                            key={tech}
                            className="px-2 py-1 bg-[#6699cc]/20 text-[#6699cc] rounded text-xs border border-[#6699cc]/30"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Demo Button */}
                    <a 
                      href="https://github.com/Ahmed-Labs/BikeRoute"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-[#6699cc] hover:bg-[#5588bb] text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2"
                    >
                      View Demo
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </motion.div>

                {/* Cricket Score Predictor Project */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="bg-card border border-border rounded-xl overflow-hidden"
                >
                  {/* Project Image */}
                  <div className="h-48 bg-gray-200 overflow-hidden">
                    <img 
                      src="/cricket.png"
                      alt="Cricket Score Predictor Project" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-3">Cricket Score Predictor</h3>
                    <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                      Architected and trained a PyTorch deep neural network (396→180→90→40→3) with ReLU activations and softmax output for multi-class cricket match outcome prediction using player stats and recent form.
                    </p>
                    
                    {/* Technologies */}
                    <div className="mb-4">
                      <p className="text-gray-400 text-xs mb-2">Technologies:</p>
                      <div className="flex flex-wrap gap-2">
                        {["Python", "pandas", "NumPy", "Matplotlib", "PyTorch", "Multi-Threading"].map((tech) => (
                          <span 
                            key={tech}
                            className="px-2 py-1 bg-[#6699cc]/20 text-[#6699cc] rounded text-xs border border-[#6699cc]/30"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Demo Button */}
                    <a 
                      href="https://github.com/ishika1202/Scrore_Predictor"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-[#6699cc] hover:bg-[#5588bb] text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2"
                    >
                      View Demo
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Community Section */}
        <section id="community" className="py-24 px-8 lg:px-20 scroll-mt-20 bg-background">
          <div className="mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-4 mb-12">
                <MessageCircle className="w-8 h-8 text-[#6699cc]" />
                <h2 className="text-3xl font-bold text-white">Community Involvement</h2>
              </div>
              
              {/* Community Card */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="bg-card border border-border rounded-xl overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-[600px_1fr] gap-0 items-stretch">
                  {/* Left side - Community Image */}
                  <div className="relative overflow-hidden rounded-l-xl lg:rounded-r-none">
                    <img 
                      src="/community.png"
                      alt="Community Leadership" 
                      className="w-full h-full min-h-[300px] lg:min-h-[400px] object-cover"
                    />
                  </div>
                  
                  {/* Right side - Community Info */}
                  <div className="p-8 space-y-6 text-center lg:text-left">
                    
                    <div className="space-y-4 text-gray-300 text-base lg:text-lg leading-relaxed">
                      <div className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-[#6699cc] rounded-full mt-3 flex-shrink-0"></span>
                        <p>
                          <strong className="text-white">Tech Lead Toronto, Rewriting the Code - </strong> Leading local chapter for early-career women in tech; host bi-monthly events and mentorship sessions for community of 2600+ women.
                        </p>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-[#6699cc] rounded-full mt-3 flex-shrink-0"></span>
                        <p>
                          <strong className="text-white">Organized 300+ attendee WISE STEM nation-wide conference in Canada.</strong> Led menstrual health campaign in India, distributing over 600+ sanitary products.
                        </p>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-[#6699cc] rounded-full mt-3 flex-shrink-0"></span>
                        <p>
                          <strong className="text-white">Directed the end-to-end planning and execution of UTEK's Re-engineering Competition,</strong> including challenge design, event logistics, and report evaluation to determine winners.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>



        <Footer />
      </main>
    </div>
  );
};

export default Index;
