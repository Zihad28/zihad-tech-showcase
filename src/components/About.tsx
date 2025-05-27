

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
                  <p className="text-purple-400">CGPA: 3.88/4.00</p>
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
                  <p className="text-gray-300 mt-2">
                    Collaborated on machine learning projects for anomaly detection, 
                    customer satisfaction analysis, and customer segmentation.
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
                <p className="text-gray-300">Harnessing advanced deep learning with a novel Rain Removal Transformer and Mixed-Scale Feed-Forward Networks within an encoder-decoder framework — designed to restore image clarity and enhance performance in downstream vision tasks.</p>
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
                  Solved over 1500 problems across various online judges
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                  Active profiles on{" "}
                  <a 
                    href="https://codeforces.com/profile/Zihad_28" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-300 underline mx-1"
                  >
                    Codeforces
                  </a>
                  ,{" "}
                  <a 
                    href="https://www.codechef.com/users/zihad1783" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-300 underline mx-1"
                  >
                    CodeChef
                  </a>
                  {" "}and{" "}
                  <a 
                    href="https://leetcode.com/u/Zihad_028/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-300 underline mx-1"
                  >
                    LeetCode
                  </a>
                </li>
              </ul>
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
                    <a 
                      href="https://www.deeplearning.ai" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-green-400 hover:text-green-300 underline"
                    >
                      DeepLearning.AI
                    </a>
                    {" "}on Coursera
                  </p>
                  <ul className="space-y-2 text-gray-300">
                    <li>
                      <a 
                        href="https://coursera.org/share/ace49ca7d1938c8d2c71e014b8c92194" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-green-400 hover:text-green-300 underline"
                      >
                        Neural Networks and Deep Learning
                      </a>
                      {" "}– Completed July 2023
                    </li>
                    <li>
                      <a 
                        href="https://coursera.org/share/b2ef708106bb80512a14b0132111dc11" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-green-400 hover:text-green-300 underline"
                      >
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
        </div>
      </div>
    </section>;
};

