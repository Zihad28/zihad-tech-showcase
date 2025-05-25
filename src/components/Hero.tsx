
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin } from "lucide-react";

export const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="inline-block px-4 py-2 bg-purple-600/20 rounded-full text-purple-400 text-sm font-medium">
                CSE Student & ML Researcher
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Md. Jillur Rahman
                <span className="text-purple-400 block">Zihad</span>
              </h1>
              <p className="text-xl text-gray-400 max-w-2xl">
                Computer Science & Engineering student at CUET with expertise in Machine Learning, 
                Deep Learning, Computer Vision, and Web Development. Currently researching advanced 
                deep learning techniques for image deraining.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="bg-purple-600 hover:bg-purple-700"
                onClick={() => scrollToSection('portfolio')}
              >
                View My Work
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => scrollToSection('contact')}
              >
                Get In Touch
              </Button>
            </div>

            <div className="flex items-center space-x-6">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-400 transition-colors"
              >
                <Github className="h-6 w-6" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-400 transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 bg-gradient-to-br from-purple-600/20 to-teal-600/20 rounded-full p-4 backdrop-blur-sm border border-purple-500/20">
              <img 
                src="https://i.postimg.cc/W46g0DF5/temp-Image7pt1-Kh.avif" 
                alt="Md. Jillur Rahman Zihad"
                className="w-96 h-96 rounded-full object-cover mx-auto object-top-center"
                style={{ objectPosition: "center 30%" }}
              />
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-purple-600 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-teal-600 rounded-full opacity-20 animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
