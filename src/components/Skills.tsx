export const Skills = () => {
  const skillCategories = [{
    title: "Programming Languages",
    skills: ["Python", "JavaScript", "HTML/CSS", "SQL", "C++", "Java"],
    color: "purple"
  }, {
    title: "Machine Learning & AI",
    skills: ["PyTorch", "TensorFlow", "Keras", "Computer Vision", "NLP", "Deep Learning"],
    color: "teal"
  }, {
    title: "Web Development",
    skills: ["React", "Node.js", "MySQL", "Firebase", "Responsive Design"],
    color: "purple"
  }, {
    title: "Mobile Development",
    skills: ["Flutter", "Firebase Integration", "Cross-platform Development"],
    color: "teal"
  }];
  return <section id="skills" className="py-20 px-6 bg-gray-800/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Technical Skills</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Proficient in modern technologies and frameworks for full-stack development and AI research
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => <div key={index} className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-purple-500/50 transition-colors">
              <h3 className={`text-xl font-bold mb-4 ${category.color === 'purple' ? 'text-purple-400' : 'text-teal-400'}`}>
                {category.title}
              </h3>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => {})}
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};