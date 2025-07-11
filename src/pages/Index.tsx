import { Github, Linkedin, Mail, FileText, Rocket, Sparkles, Target, MessageCircle, ArrowRight, Code, Database, Cloud, Cpu, Quote, ExternalLink } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const Index = () => {
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
                  href="mailto:ishika.mittal@mail.utoronto.ca"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Mail className="w-6 h-6" />
                </a>
                <a 
                  href="/Ishika_Resume.pdf"
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
                  src="/my_website/ishikaimage.png"
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
                  className="col-span-1 md:col-span-2 h-80 perspective-1000"
                >
                  <div className="group relative w-full h-full transition-transform duration-700 transform-style-preserve-3d hover:rotate-y-180">
                    {/* Front Face */}
                    <div className="absolute inset-0 w-full h-full backface-hidden bg-card border border-border rounded-xl p-8">
                                             <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-8 items-center h-full">
                                                 {/* Left side - Large Amazon Logo */}
                         <div className="flex justify-center lg:justify-start">
                           <div className="w-64 h-52 lg:w-80 lg:h-64 bg-white rounded-xl p-3 flex items-center justify-center shadow-lg">
                            <img 
                              src="/my_website/amazon.png"
                              alt="Amazon Robotics Logo" 
                              className="w-full h-full object-contain"
                            />
                          </div>
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
                  className="col-span-1 md:col-span-2 h-80 perspective-1000"
                >
                  <div className="group relative w-full h-full transition-transform duration-700 transform-style-preserve-3d hover:rotate-y-180">
                    {/* Front Face */}
                    <div className="absolute inset-0 w-full h-full backface-hidden bg-card border border-border rounded-xl p-8">
                      <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-8 items-center h-full">
                        {/* Left side - Large FlicFit Logo */}
                        <div className="flex justify-center lg:justify-start">
                          <div className="w-64 h-52 lg:w-80 lg:h-64 bg-white rounded-xl p-3 flex items-center justify-center shadow-lg">
                            <img 
                              src="/my_website/flicfit1.png"
                              alt="FlicFit Logo" 
                              className="w-full h-full object-contain"
                            />
                          </div>
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
                  className="col-span-1 md:col-span-2 h-80 perspective-1000"
                >
                  <div className="group relative w-full h-full transition-transform duration-700 transform-style-preserve-3d hover:rotate-y-180">
                    {/* Front Face */}
                    <div className="absolute inset-0 w-full h-full backface-hidden bg-card border border-border rounded-xl p-8">
                      <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-8 items-center h-full">
                        {/* Left side - Large Nokia Logo */}
                        <div className="flex justify-center lg:justify-start">
                          <div className="w-64 h-52 lg:w-80 lg:h-64 bg-white rounded-xl p-3 flex items-center justify-center shadow-lg">
                            <img 
                              src="/my_website/Nokia-Logo.jpg"
                              alt="Nokia Logo" 
                              className="w-full h-full object-contain"
                            />
                          </div>
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

        {/* Skills Section */}
        <section id="skills" className="py-24 px-8 lg:px-20 scroll-mt-20 bg-background">
          <div className="mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-4 mb-12">
                <Code className="w-8 h-8 text-primary" />
                <h2 className="text-3xl font-bold">Technical Skills</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Programming Languages */}
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-border hover:border-blue-300 transition-all hover:shadow-blue-100/50 hover:shadow-xl group"
                >
                  <div className="flex items-center gap-3 mb-4">
                                          <Cpu className="w-6 h-6 text-[#6699cc]" />
                    <h3 className="text-lg font-semibold text-gray-800">Languages</h3>
                    </div>
                  <div className="flex flex-wrap gap-2">
                    {["Python", "C++", "JavaScript", "TypeScript", "C#", "Go", "Java"].map((skill) => (
                      <motion.span 
                        key={skill}
                        whileHover={{ scale: 1.1 }}
                        className="px-3 py-1 bg-[#6699cc]/10 text-[#6699cc] rounded-full text-sm border border-[#6699cc]/20 hover:bg-[#6699cc]/20 transition-colors cursor-default"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>

                {/* AI/ML & Data */}
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-border hover:border-purple-300 transition-all hover:shadow-purple-100/50 hover:shadow-xl group"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Sparkles className="w-6 h-6 text-purple-600" />
                    <h3 className="text-lg font-semibold text-gray-800">AI/ML & Data</h3>
                    </div>
                  <div className="flex flex-wrap gap-2">
                    {["OpenAI", "Scikit-learn", "TensorFlow", "OpenCV", "MediaPipe", "Matplotlib", "NumPy", "Pandas"].map((skill) => (
                      <motion.span 
                        key={skill}
                        whileHover={{ scale: 1.1 }}
                        className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-sm border border-purple-200 hover:bg-purple-100 transition-colors cursor-default"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>

                {/* Web & Mobile */}
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-border hover:border-green-300 transition-all hover:shadow-green-100/50 hover:shadow-xl group"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Code className="w-6 h-6 text-green-600" />
                    <h3 className="text-lg font-semibold text-gray-800">Web & Mobile</h3>
                    </div>
                  <div className="flex flex-wrap gap-2">
                    {["React", "Flask", "FastAPI", "Unity", "Bootstrap", "HTML", "CSS", "Node.js"].map((skill) => (
                      <motion.span 
                        key={skill}
                        whileHover={{ scale: 1.1 }}
                        className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm border border-green-200 hover:bg-green-100 transition-colors cursor-default"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>

                {/* Infrastructure & Tools */}
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-border hover:border-orange-300 transition-all hover:shadow-orange-100/50 hover:shadow-xl group"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Cloud className="w-6 h-6 text-orange-600" />
                    <h3 className="text-lg font-semibold text-gray-800">Infrastructure</h3>
                    </div>
                  <div className="flex flex-wrap gap-2">
                    {["Docker", "AWS", "Git", "Linux", "APIs", "Databases", "Multithreading", "STL"].map((skill) => (
                      <motion.span 
                        key={skill}
                        whileHover={{ scale: 1.1 }}
                        className="px-3 py-1 bg-orange-50 text-orange-700 rounded-full text-sm border border-orange-200 hover:bg-orange-100 transition-colors cursor-default"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Technical Highlights */}
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="mt-12 bg-gradient-to-r from-blue-50 via-purple-50 to-blue-50 rounded-xl p-8 border border-blue-200"
              >
                <h3 className="text-xl font-semibold mb-4 text-center text-gray-800">Technical Highlights</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-2xl font-bold text-[#6699cc] mb-2">95%</div>
                    <p className="text-gray-600">Efficiency improvement through automation</p>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-purple-600 mb-2">80%</div>
                    <p className="text-gray-600">Search performance enhancement</p>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-600 mb-2">4000</div>
                    <p className="text-gray-600">Pods planned in under 5 seconds</p>
                  </div>
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
                      src="/my_website/memora.png"
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
                      src="/my_website/route.png"
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
                      src="/my_website/cricket.png"
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
                <Target className="w-8 h-8 text-primary" />
                <h2 className="text-3xl font-bold">Accomplishments</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="bg-card rounded-xl p-6 shadow-lg text-center"
                >
                  <div className="text-4xl font-bold text-primary mb-2">Cansbridge Fellowship 2024</div>
                  <p className="text-gray-600 dark:text-gray-300">Acceptence Rate - 1%</p>
                </motion.div>

                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="bg-card rounded-xl p-6 shadow-lg text-center"
                >
                  <div className="text-4xl font-bold text-primary mb-2">TreeHacks 2024 Track Winner</div>
                  <p className="text-gray-600 dark:text-gray-300">:)</p>
                </motion.div>

                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="bg-card rounded-xl p-6 shadow-lg text-center"
                >
                  <div className="text-4xl font-bold text-primary mb-2">National Rank 1</div>
                  <p className="text-gray-600 dark:text-gray-300">National Interactive Maths Olympiad 2016</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-24 px-8 lg:px-20 scroll-mt-20 bg-background">
          <div className="mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-4 mb-12">
                <Quote className="w-8 h-8 text-primary" />
                <h2 className="text-3xl font-bold">What Others Say</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-border hover:border-indigo-300 transition-all hover:shadow-indigo-100/50 hover:shadow-xl group relative"
                >
                  <Quote className="w-8 h-8 text-indigo-300 mb-4" />
                  <p className="text-gray-600 mb-6 italic">
                    "Ishika's innovative approach to AI and sensor integration at Coconut is groundbreaking. Her ability to bridge the gap between hardware and software is remarkable."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
                      TL
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Tech Lead</p>
                      <p className="text-sm text-gray-500">Industry Partner</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={{ y: -5 }}
                  className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-border hover:border-purple-300 transition-all hover:shadow-purple-100/50 hover:shadow-xl group relative"
                >
                  <Quote className="w-8 h-8 text-purple-300 mb-4" />
                  <p className="text-gray-600 mb-6 italic">
                    "Working with Ishika at Amazon Robotics was incredible. Her pod planning system significantly improved our operational efficiency and demonstrated exceptional engineering skills."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-white font-semibold">
                      AM
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Amazon Manager</p>
                      <p className="text-sm text-gray-500">Amazon Robotics</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={{ y: -5 }}
                  className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-border hover:border-blue-300 transition-all hover:shadow-blue-100/50 hover:shadow-xl group relative"
                >
                  <Quote className="w-8 h-8 text-blue-300 mb-4" />
                  <p className="text-gray-600 mb-6 italic">
                    "Ishika's AI model for dementia prediction using gait analysis was revolutionary. Her technical expertise and healthcare application insights were impressive."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-[#6699cc] to-cyan-600 rounded-full flex items-center justify-center text-white font-semibold">
                      FF
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Flicfit Team</p>
                      <p className="text-sm text-gray-500">Healthcare AI</p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Call to action */}
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="mt-12 text-center"
              >
                <p className="text-gray-600 mb-6">
                  Interested in working together or learning more about my projects?
                </p>
                <a 
                  href="https://calendly.com/ishika-mittal-02/yc-connect"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl font-medium"
                >
                  Schedule a Chat
                  <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 px-8 lg:px-20 scroll-mt-20 bg-background">
          <div className="mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-4 mb-12">
                <MessageCircle className="w-8 h-8 text-primary" />
                <h2 className="text-3xl font-bold">Let's Connect</h2>
              </div>
              
              <div className="grid grid-cols-1 gap-8">
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="bg-card rounded-xl p-8 shadow-lg max-w-2xl mx-auto w-full"
                >
                  <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    Whether you're interested in collaboration, investment opportunities, 
                    or just want to say hi - I'd love to hear from you!
                  </p>
                  <div className="space-y-4 mb-6">
                    <a 
                      href="mailto:ishika.mittal@mail.utoronto.ca"
                      className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
                    >
                      <Mail className="w-5 h-5" />
                      ishika.mittal@mail.utoronto.ca
                    </a>
                    <a 
                      href="https://linkedin.com/in/ishika-mittal1202"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
                    >
                      <Linkedin className="w-5 h-5" />
                      Connect on LinkedIn
                    </a>
                  </div>
                  <a 
                    href="https://calendly.com/ishika-mittal-02/yc-connect"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    Book Demo
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
};

export default Index;
