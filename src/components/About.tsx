
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
                  Solved over 1500 problems across various online judges including Codeforces, CodeChef, LeetCode, UVA, AtCoder, LightOJ and Vjudge.
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                  Active profiles on Codeforces and Codechef
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
