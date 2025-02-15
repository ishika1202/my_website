import { Github, Linkedin, Mail, FileText, Rocket, Sparkles, Target, MessageCircle, ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative overflow-hidden px-6 lg:px-8 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center sm:text-left"
            >
              <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-primary mb-6">
                Hi, I'm
                <span className="bg-gradient-to-r from-gray-700 to-purple-600 bg-clip-text text-transparent font-bold"> Ishika Mittal</span>
              </h1>
              <p className="text-xl sm:text-2xl font-medium text-gray-700 mb-4">
                Founder of Coconut
              </p>
              <p className="mx-auto sm:mx-0 max-w-2xl text-lg text-gray-600 mb-8">
              Real-Time AI That Converts Raw Sensor Data Into API-Ready Insights
              </p>
              <p className="mx-auto sm:mx-0 max-w-2xl text-lg text-gray-600 mb-8">
              Eliminating manual sensor data mapping with AI-driven standardization and API integration.
              </p>
              <div className="flex justify-center sm:justify-start gap-4">
                <motion.a 
                  whileHover={{ scale: 1.1 }}
                  href="https://github.com/ishika1202" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 text-gray-700 hover:text-gray-900 transition-colors"
                >
                  <Github className="w-6 h-6" />
                </motion.a>
                <motion.a 
                  whileHover={{ scale: 1.1 }}
                  href="https://www.linkedin.com/in/ishika-mittal1202/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 text-gray-700 hover:text-gray-900 transition-colors"
                >
                  <Linkedin className="w-6 h-6" />
                </motion.a>
                <motion.a 
                  whileHover={{ scale: 1.1 }}
                  href="mailto:ishika.mittal@mail.utoronto.ca"
                  className="p-2 text-gray-700 hover:text-gray-900 transition-colors"
                >
                  <Mail className="w-6 h-6" />
                </motion.a>
                <motion.a 
                  whileHover={{ scale: 1.1 }}
                  href="/Ishika_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-700 hover:text-gray-900 transition-colors"
                >
                  <FileText className="w-6 h-6" />
                </motion.a>
              </div>
            </motion.div>
          </div>
          
          {/* Animated Tech Background */}
          <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-100 via-white to-white">
            {/* Animated grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
            
            {/* Glowing orbs */}
            <div className="absolute top-10 left-10 w-64 h-64 bg-purple-200 rounded-full blur-3xl animate-blob opacity-60"></div>
            <div className="absolute top-0 right-10 w-72 h-72 bg-blue-100 rounded-full blur-3xl animate-blob animation-delay-2000 opacity-60"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-100 rounded-full blur-3xl animate-blob animation-delay-4000 opacity-60"></div>
            
            {/* Tech circuit lines */}
            <div className="absolute inset-0 bg-[url('/circuit-pattern.svg')] opacity-[0.02] bg-repeat"></div>
            <div className="absolute top-0 right-10 w-64 h-64 bg-gray-100 rounded-full blur-3xl animate-blob animation-delay-2000 opacity-60"></div>
            <div className="absolute -bottom-8 left-20 w-64 h-64 bg-purple-50 rounded-full blur-3xl animate-blob animation-delay-4000 opacity-60"></div>
          </div>
        </section>



        {/* Experience Section */}
        <section id="experience" className="relative py-24 px-6 lg:px-8 bg-gradient-to-b from-gray-50 via-white to-white scroll-mt-20 overflow-hidden">
          {/* Tech background elements */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,#f3e8ff,transparent)]">
          </div>
          <div className="mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-4 mb-12 relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-purple-900 rounded-lg blur opacity-10 group-hover:opacity-20 transition duration-1000 group-hover:duration-200"></div>
                <Rocket className="w-8 h-8 text-primary" />
                <h2 className="text-3xl font-bold">Experience</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div 
                  whileHover={{ 
                    rotateY: 180,
                    transition: { duration: 0.5 }
                  }}
                  className="group h-48"
                >
                  <div className="relative w-full h-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    {/* Front of card */}
                    <div className="absolute inset-0 bg-white rounded-xl p-6 shadow-lg border border-[#E6D7E9] hover:border-[#9B8B9F] [backface-visibility:hidden]">
                      <div className="absolute top-0 right-0 w-20 h-20 bg-[#F5EEF7] rounded-bl-full"></div>
                      <h3 className="text-xl font-semibold text-[#6B4C74]">Founder & CEO</h3>
                      <p className="text-[#9B8B9F] mb-2">Coconut</p>
                      <p className="text-sm text-[#AEA3B0] mb-4">12/2024 - Present</p>
                      <span className="px-3 py-1 bg-[#F5EEF7] text-[#6B4C74] rounded-full text-sm inline-block">Current</span>
                    </div>
                    {/* Back of card */}
                    <div className="absolute inset-0 bg-[#F5EEF7] rounded-xl p-6 shadow-lg [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col justify-center">
                      <div className="[transform:rotateY(180deg)]">
                      <p className="text-[#6B4C74] font-medium">Key Work:</p>
                      <ul className="mt-2 space-y-2 text-[#9B8B9F]">
                        <li>• Building AI integration layer between software and hardware</li>
                        <li>• Our platform automatically detects, interprets, and standardizes raw sensor data, then provides a plug-and-play API</li>
                      </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={{ 
                    rotateY: 180,
                    transition: { duration: 0.5 }
                  }}
                  className="group h-48"
                >
                  <div className="relative w-full h-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    <div className="absolute inset-0 bg-white rounded-xl p-6 shadow-lg border border-[#E6D7E9] hover:border-[#9B8B9F] [backface-visibility:hidden]">
                      <div className="absolute top-0 right-0 w-20 h-20 bg-[#F5EEF7] rounded-bl-full"></div>
                      <h3 className="text-xl font-semibold text-[#6B4C74]">Robotics Engineer</h3>
                      <p className="text-[#9B8B9F] mb-2">Amazon Robotics</p>
                      <p className="text-sm text-[#AEA3B0]">08/2024 - 12/2024</p>
                    </div>
                    <div className="absolute inset-0 bg-[#F5EEF7] rounded-xl p-6 shadow-lg [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col justify-center">
                      <div className="[transform:rotateY(180deg)]">
                      <p className="text-[#6B4C74] font-medium">Key Work:</p>
                      <ul className="mt-2 space-y-2 text-[#9B8B9F]">
                        <li>• Working on Pod planner which plans 4000 pods under 5 seconds based on their size, sopace and inventory needed to stow</li>
                        <li>• Developed internal service tool - StowVis for Robotics team to track station’s summary and allocated pods.</li>
                      </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={{ 
                    rotateY: 180,
                    transition: { duration: 0.5 }
                  }}
                  className="group h-48"
                >
                  <div className="relative w-full h-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    <div className="absolute inset-0 bg-white rounded-xl p-6 shadow-lg border border-[#E6D7E9] hover:border-[#9B8B9F] [backface-visibility:hidden]">
                      <div className="absolute top-0 right-0 w-20 h-20 bg-[#F5EEF7] rounded-bl-full"></div>
                      <h3 className="text-xl font-semibold text-[#6B4C74]">AI Engineer</h3>
                      <p className="text-[#9B8B9F] mb-2">Flicfit</p>
                      <p className="text-sm text-[#AEA3B0]">03/2024 - 07/2024</p>
                    </div>
                    <div className="absolute inset-0 bg-[#F5EEF7] rounded-xl p-6 shadow-lg [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col justify-center">
                      <div className="[transform:rotateY(180deg)]">
                      <p className="text-[#6B4C74] font-medium">Projects:</p>
                      <ul className="mt-2 space-y-2 text-[#9B8B9F]">
                        <li>• Developed an AI model for predicting dementia MOCA score using gait analysis from insole foot data of 950 patients, applying
                        Scikit-learn and Matplotlib for movement data analysis in healthcare applications.</li>
                        <li>• Led a C# Unity-based gaming project that reduced real-time shoe data transfer from 4 seconds to 0.5 seconds, improving
                        avatar movement and significantly enhancing the player experience.</li>
                      </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={{ 
                    rotateY: 180,
                    transition: { duration: 0.5 }
                  }}
                  className="group h-48"
                >
                  <div className="relative w-full h-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    <div className="absolute inset-0 bg-white rounded-xl p-6 shadow-lg border border-[#E6D7E9] hover:border-[#9B8B9F] [backface-visibility:hidden]">
                      <div className="absolute top-0 right-0 w-20 h-20 bg-[#F5EEF7] rounded-bl-full"></div>
                      <h3 className="text-xl font-semibold text-[#6B4C74]">Software Engineer</h3>
                      <p className="text-[#9B8B9F] mb-2">NOKIA</p>
                      <p className="text-sm text-[#AEA3B0]">03/2023 - 12/2023</p>
                    </div>
                    <div className="absolute inset-0 bg-[#F5EEF7] rounded-xl p-6 shadow-lg [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col justify-center">
                      <div className="[transform:rotateY(180deg)]">
                      <p className="text-[#6B4C74] font-medium">Key Work:</p>
                      <ul className="mt-2 space-y-2 text-[#9B8B9F]">
                        <li>•  Created an automation platform through API implementation using FastAPI, Golang API, Bootstrap, Docker, HTML, and
                        Python, resulting in a remarkable 95% efficiency gain</li>
                        <li>• Reduced infrastructure preparation time from weeks to 15 minutes, enhancing the customer experience and enabling quicker
                        product demonstrations</li>
                      </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>


          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="relative py-24 px-6 lg:px-8 bg-gradient-to-b from-white via-white to-gray-50 scroll-mt-20 overflow-hidden">
          {/* Tech background elements */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,#f3e8ff,transparent)]"></div>
          <div className="mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-4 mb-12 relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-purple-900 rounded-lg blur opacity-10 group-hover:opacity-20 transition duration-1000 group-hover:duration-200"></div>
                <Sparkles className="w-8 h-8 text-primary" />
                <h2 className="text-3xl font-bold">Products built</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="relative bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-border hover:border-primary transition-all hover:shadow-purple-100/50 hover:shadow-2xl group overflow-hidden"
                  style={{
                    background: 'linear-gradient(145deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 100%)',
                  }}
                >
                  <h3 className="text-xl font-semibold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-purple-900">“Memora,” AI-powered companion</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4"><li>Developed an AI-powered companion that simulates conversations using loved ones’ voices, tone and memories, fostering
                  cognitive engagement and reducing loneliness.</li></p>
                  <div className="flex gap-2">
                    <span className="px-2 py-1 bg-primary/10 text-primary rounded-full text-sm border border-primary/20 shadow-sm hover:shadow-primary/20 transition-all hover:scale-105 cursor-default">Python & Flask</span>
                    <span className="px-2 py-1 bg-primary/10 text-primary rounded-full text-sm border border-primary/20 shadow-sm hover:shadow-primary/20 transition-all hover:scale-105 cursor-default">OpenAI</span>
                    <span className="px-2 py-1 bg-primary/10 text-primary rounded-full text-sm border border-primary/20 shadow-sm hover:shadow-primary/20 transition-all hover:scale-105 cursor-default">Resemble AI</span>
                    <span className="px-2 py-1 bg-primary/10 text-primary rounded-full text-sm border border-primary/20 shadow-sm hover:shadow-primary/20 transition-all hover:scale-105 cursor-default">OpenCV</span>
                    <span className="px-2 py-1 bg-primary/10 text-primary rounded-full text-sm border border-primary/20 shadow-sm hover:shadow-primary/20 transition-all hover:scale-105 cursor-default">MediaPipe</span>
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="relative bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-border hover:border-primary transition-all hover:shadow-purple-100/50 hover:shadow-2xl group overflow-hidden"
                  style={{
                    background: 'linear-gradient(145deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 100%)',
                  }}
                >
                  <h3 className="text-xl font-semibold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-purple-900">Geographic Information System (GIS) Software</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                  <li>Developing Map software in a team by utilizing APIs:- Open Street Map and Streets database to fetch data and organizing it into
                  appropriate data structures for best performance.</li>
                  <li>Enhanced search efficiency by 80% through the implementation of algorithms and multithreading techniques</li></p>
                  <div className="flex gap-2">
                    <span className="px-2 py-1 bg-primary/10 text-primary rounded-full text-sm border border-primary/20 shadow-sm hover:shadow-primary/20 transition-all hover:scale-105 cursor-default">C++</span>
                    <span className="px-2 py-1 bg-primary/10 text-primary rounded-full text-sm border border-primary/20 shadow-sm hover:shadow-primary/20 transition-all hover:scale-105 cursor-default">STL</span>
                    <span className="px-2 py-1 bg-primary/10 text-primary rounded-full text-sm border border-primary/20 shadow-sm hover:shadow-primary/20 transition-all hover:scale-105 cursor-default">Open Street Map API</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Accomplishments Section */}
        <section className="py-24 px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
          <div className="mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-4 mb-12 relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-purple-900 rounded-lg blur opacity-10 group-hover:opacity-20 transition duration-1000 group-hover:duration-200"></div>
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

        {/* Contact Section */}
        <section id="contact" className="relative py-24 px-6 lg:px-8 bg-gradient-to-b from-gray-50 via-white to-white scroll-mt-20 overflow-hidden">
          {/* Tech background elements */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,#f3e8ff,transparent)]"></div>
          <div className="mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-4 mb-12 relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-purple-900 rounded-lg blur opacity-10 group-hover:opacity-20 transition duration-1000 group-hover:duration-200"></div>
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
