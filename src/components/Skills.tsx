import skillsData from '../data/skills.json'
import { SkillCategoryProps } from '../types'

const skills = skillsData as { skills: SkillCategoryProps[] }

export default function Skills() {
  return (
    <section id="skills" className="section-container bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Habilidades
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Tecnologias e ferramentas que utilizo para criar soluções incríveis
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.skills.map((category, index) => (
            <div key={index} className="bg-gray-900 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                {category.category}
              </h3>
              <div className="space-y-4">
                {category.items.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-sm text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2.5">
                      <div
                        className="bg-gradient-to-r from-primary-500 to-primary-600 h-2.5 rounded-full transition-all duration-500"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

