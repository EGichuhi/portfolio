import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, ChevronDown, Heart } from 'lucide-react';

function App() {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-rose-50">
      {/* Hero Section */}
      <section className="min-h-screen relative flex items-center justify-center bg-gradient-to-br from-rose-300 to-purple-300 text-white">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black opacity-30"></div>
          <img 
            src="https://images.unsplash.com/photo-1522441815192-d9f04eb0615c?auto=format&fit=crop&q=80"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-serif mb-6">Eunice Gichuhi</h1>
          <p className="text-xl md:text-2xl font-light mb-8">Nanotechnology Engineering Student</p>
          <div className="flex justify-center space-x-6">
            <a href="https://github.com/EGichuhi" target="_blank" rel="noopener noreferrer" className="hover:text-rose-200 transition-colors">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/eunicegichuhi/" target="_blank" rel="noopener noreferrer" className="hover:text-rose-200 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="mailto:eunice.gwanja@gmail.com" className="hover:text-rose-200 transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </div>
        <button 
          onClick={scrollToAbout}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-10 animate-bounce cursor-pointer hover:text-rose-200 transition-colors"
          aria-label="Scroll to About section"
        >
          <ChevronDown size={32} />
        </button>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-12">
            <h2 className="text-3xl font-serif text-center relative">
              About Me
              <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2">
                <Heart size={20} className="text-rose-400 fill-rose-400" />
              </span>
            </h2>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-12">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80"
              alt="Profile"
              className="w-48 h-48 rounded-full object-cover ring-4 ring-rose-100"
            />
            <div className="flex-1">
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                I'm an aspiring engineer pursuing a Bachelor's degree in Nanotechnology at the University of Waterloo. 
                My passion lies in problem-solving and developing innovative solutions at the intersection of technology and engineering.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                With a strong foundation in programming (Python, HTML, CSS) and data analysis, I leverage tools like 
                Pandas, NumPy, Matplotlib, Seaborn, and SciPy to tackle complex challenges. My coursework has equipped me 
                with proficiency in industry-standard software including COMSOL, AutoCAD, SQL, and MATLAB.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                I'm currently seeking opportunities to collaborate with innovative teams and contribute to cutting-edge 
                solutions in the tech industry. As someone who's eager to learn and grow, I'm excited to become a 
                valuable asset in my field.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-center mb-12">
            <h2 className="text-3xl font-serif text-center relative">
              Featured Projects
              <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2">
                <Heart size={20} className="text-rose-400 fill-rose-400" />
              </span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-rose-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-serif mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex justify-between items-center">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className="px-2 py-1 bg-rose-50 text-sm rounded-full text-rose-600">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <a href={project.link} className="text-rose-500 hover:text-rose-700">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-rose-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex justify-center mb-12">
            <h2 className="text-3xl font-serif text-center relative">
              Get In Touch
              <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2">
                <Heart size={20} className="text-rose-400 fill-rose-400" />
              </span>
            </h2>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8 border border-rose-100">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md border-rose-200 shadow-sm focus:border-rose-400 focus:ring-rose-400"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-rose-200 shadow-sm focus:border-rose-400 focus:ring-rose-400"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-rose-200 shadow-sm focus:border-rose-400 focus:ring-rose-400"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-rose-900 text-white py-2 px-4 rounded-md hover:bg-rose-800 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-rose-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="font-light">&copy; {new Date().getFullYear()} Eunice Gichuhi. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

const projects = [
  {
    title: "Nanoparticle Analysis Tool",
    description: "Data analysis tool for characterizing nanoparticle properties using Python and machine learning.",
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80",
    technologies: ["Python", "Pandas", "NumPy", "Matplotlib"],
    link: "#"
  },
  {
    title: "Material Simulation",
    description: "COMSOL simulation of novel nanomaterials for enhanced conductivity.",
    image: "https://images.unsplash.com/photo-1628595351029-c2bf17511435?auto=format&fit=crop&q=80",
    technologies: ["COMSOL", "MATLAB", "AutoCAD"],
    link: "#"
  },
  {
    title: "Data Visualization Dashboard",
    description: "Interactive dashboard for visualizing experimental data from nanotechnology research.",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80",
    technologies: ["Python", "Seaborn", "SQL"],
    link: "#"
  }
];

export default App;