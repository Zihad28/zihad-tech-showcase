
import { Button } from "@/components/ui/button";
import { Github, ArrowRight } from "lucide-react";

export const Portfolio = () => {
  const projects = [
    {
      title: "Deen – Islamic App",
      description: "Comprehensive Islamic application with features like Qiblah compass, prayer times, Zakat calculator, Hadith, Tasbih counter, personal tracker, and mosque density map.",
      tech: ["Flutter", "Firebase", "Google Maps API"],
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
      category: "Mobile App"
    },
    {
      title: "Ignited Minds – STEM Learning Platform",
      description: "Interactive STEM learning platform featuring responsive design with dark/light modes, quizzes, and educational tools for enhanced learning experience.",
      tech: ["HTML", "CSS", "JavaScript", "MySQL"],
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop",
      category: "Web Application"
    },
    {
      title: "Image Caption Generator",
      description: "Machine learning application that generates context-aware captions for images with accessibility focus, using advanced neural networks.",
      tech: ["Python", "Flutter", "TensorFlow", "Keras"],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
      category: "AI/ML Project"
    },
    {
      title: "Single Image Deraining Research",
      description: "Advanced research project on rain removal from images using U-Net with dilated convolutions, multi-scale CNNs, and Swin Transformers.",
      tech: ["Python", "PyTorch", "Computer Vision", "Deep Learning"],
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop",
      category: "Research Project"
    }
  ];

  return (
    <section id="portfolio" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Featured Projects</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A showcase of my technical expertise across web development, mobile apps, and AI research
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-gray-800/50 rounded-xl overflow-hidden border border-gray-700 hover:border-purple-500/50 transition-all duration-300 hover:scale-105"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-purple-600/80 text-white text-sm rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-purple-400">{project.title}</h3>
                <p className="text-gray-300">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-gray-700 text-gray-300 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4">
                  <Button variant="outline" size="sm">
                    <Github className="h-4 w-4 mr-2" />
                    View Code
                  </Button>
                  <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                    Live Demo
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
