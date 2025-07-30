import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

export const About = () => {
  return <section id="about" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">About Me</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Passionate about solving complex problems through innovative technology solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-gray-800/50 rounded-xl p-8 border border-gray-700">
              <h3 className="text-2xl font-bold text-purple-400 mb-4">Education</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold">BSc in Computer Science & Engineering</h4>
                  <p className="text-gray-400">Chittagong University of Engineering & Technology (CUET)</p>
                  <p className="text-purple-400">CGPA: 3.90/4.00</p>
                  <p className="text-sm text-gray-500">Graduated: June 2025</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 rounded-xl p-8 border border-gray-700">
              <h3 className="text-2xl font-bold text-teal-400 mb-4">Experience</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold">Industrial Attachment Trainee</h4>
                  <p className="text-gray-400">Robi Axiata Ltd.</p>
                  <p className="text-sm text-gray-500">Dec 2024 – Jan 2025</p>
                  <ul className="space-y-2 text-gray-300 mt-3">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-teal-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      Worked in a cross-functional team to build a machine learning-based analytics system for telecom data.
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-teal-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      Developed modules for anomaly detection, customer satisfaction analysis and customer segmentation.
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-teal-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      Gained practical experience in real-world data preprocessing, feature engineering and model evaluation.
                    </li>
                  </ul>
                  <div className="flex items-center gap-3 mt-4">
                    <span className="text-gray-400 font-medium">View Project: OptiPulse – ML Toolkit for Telecom Insights</span>
                  </div>
                  <div className="flex items-center gap-3 mt-3">
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => window.open("https://github.com/RJ-Hossan/OptiPulse", "_blank")}
                    >
                      <Github className="h-4 w-4 mr-2" />
                      View Code
                    </Button>
                    <Button 
                      size="sm" 
                      className="bg-teal-600 hover:bg-teal-700"
                      onClick={() => window.open("https://optipulse.streamlit.app", "_blank")}
                    >
                      Live Demo
                      <ExternalLink className="h-4 w-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 rounded-xl p-8 border border-gray-700">
              <h3 className="text-2xl font-bold text-green-400 mb-4">Certifications</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Mobile Application Development</h4>
                  <p className="text-gray-400 mb-2">Awarded by Enhancing Digital Government and Economy (EDGE), 2025</p>
                  <p className="text-gray-300">
                    Practical training in modern Android application development with Kotlin, covering core app components, lifecycle management, and exposure to UI/UX design principles and mobile app architecture.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Deep Learning Specialization</h4>
                  <p className="text-gray-400 mb-3">
                    Offered by{" "}
                    <a href="https://www.deeplearning.ai" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 underline">
                      DeepLearning.AI
                    </a>
                    {" "}on Coursera
                  </p>
                  <ul className="space-y-2 text-gray-300">
                    <li>
                      <a href="https://coursera.org/share/ace49ca7d1938c8d2c71e014b8c92194" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 underline">
                        Neural Networks and Deep Learning
                      </a>
                      {" "}– Completed July 2023
                    </li>
                    <li>
                      <a href="https://coursera.org/share/b2ef708106bb80512a14b0132111dc11" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 underline">
                        Convolutional Neural Networks
                      </a>
                      {" "}– Completed September 2023
                    </li>
                  </ul>
                  <p className="text-gray-300 mt-3">
                    Gained a strong foundation in deep learning fundamentals, including neural network optimization, convolutional layers, and image classification pipelines.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-gray-800/50 rounded-xl p-8 border border-gray-700">
              <h3 className="text-2xl font-bold text-purple-400 mb-4">Research</h3>
              <div>
                <h4 className="text-lg font-semibold mb-2">Thesis Project (Mar 2024 – Present)</h4>
                <p className="text-gray-400 mb-4">
                  "Single Image Deraining through Multi-scale Rain Streak Removal Using Deep Learning"
                </p>
                <p className="text-gray-300">Developed a novel PDAformer model with physics-aware directional axial attention, cross-gated multi-scale feedforward, and Multi-Scale Contextual Feature Enhancement Module with spatial-channel attention, achieving competitive state-of-the-art deraining performance on benchmarks.</p>
              </div>
            </div>

            <div className="bg-gray-800/50 rounded-xl p-8 border border-gray-700">
              <h3 className="text-2xl font-bold text-blue-400 mb-4">Publications</h3>
              <div>
                <h4 className="text-lg font-semibold mb-2">ART-UNet: Attentive Rain-Transformer U-Net with Cross-Scale Feature Fusion for Single Image Deraining</h4>
                <p className="text-gray-400 mb-2">
                  <span className="text-yellow-400 font-medium">Under Review</span> - 2025 7th International Conference on Sustainable Technologies for Industry 5.0 (STI 2025)
                </p>
                <p className="text-gray-500 mb-3">18–19 December 2025 — Green University of Bangladesh</p>
                <p className="text-gray-400 mb-4">
                  <strong>Authors:</strong> Md. Jillur Rahman Zihad, Sabiha Anan, Dr. Kaushik Deb
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    Introduces ART-UNet, a transformer-based U-Net framework with Rain-Attentive Multi-Scale Transformer (RAMST) for precise rain streak removal.
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    Incorporates cross-scale fusion and gated feedforward mechanisms for enhanced spatial detail recovery and contextual consistency.
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    Employs a unified rain processor and frequency-adaptive reconstruction block for progressive deraining refinement.
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    Validated on multiple benchmark datasets, demonstrating superior performance over existing state-of-the-art deraining approaches.
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-800/50 rounded-xl p-8 border border-gray-700">
              <h3 className="text-2xl font-bold text-teal-400 mb-4">Achievements</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                  13th place in CUET Programming Contest
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                  Solved 1500+ problems and took part in 80+ coding contests across leading online judges and onsite competitions.
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                  Active profiles on{" "}
                  <a href="https://codeforces.com/profile/Zihad_28" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 underline mx-1">
                    Codeforces
                  </a>
                  ,{" "}
                  <a href="https://www.codechef.com/users/zihad1783" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 underline mx-1">
                    CodeChef
                  </a>
                  {" "}and{" "}
                  <a href="https://leetcode.com/u/Zihad_028/" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 underline mx-1">
                    LeetCode
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
