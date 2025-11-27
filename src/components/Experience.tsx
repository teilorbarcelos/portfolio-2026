import educationData from '../data/education.json'
import experienceData from '../data/experience.json'
import { EducationProps, ExperienceProps } from '../types'

const experiences = experienceData as { experiences: ExperienceProps[] }
const education = educationData as { education: EducationProps[] }

export default function Experience() {
  return (
    <section id="experience" className="section-container bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Experiência & Educação
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Experience */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
              <svg className="w-6 h-6 mr-2 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Experiência Profissional
            </h3>
            <div className="space-y-8">
              {experiences.experiences.map((exp) => (
                <div key={exp.id} className="relative pl-8 border-l-2 border-primary-200">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-primary-600 rounded-full"></div>
                  <div className="card">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <h4 className="text-xl font-bold text-gray-900">{exp.position}</h4>
                      <span className="text-sm text-primary-600 font-medium">{exp.period}</span>
                    </div>
                    <p className="text-primary-600 font-semibold mb-2">{exp.company}</p>
                    <p className="text-gray-600 mb-4">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="text-xs bg-primary-100 text-primary-700 px-3 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
              <svg className="w-6 h-6 mr-2 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14v7M5 10.832v7.223a12.08 12.08 0 006.824 2.998M19 10.832v7.223a12.08 12.08 0 01-6.824 2.998" />
              </svg>
              Educação
            </h3>
            <div className="space-y-8">
              {education.education.map((edu) => (
                <div key={edu.id} className="relative pl-8 border-l-2 border-primary-200">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-primary-600 rounded-full"></div>
                  <div className="card">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <h4 className="text-xl font-bold text-gray-900">{edu.degree}</h4>
                      <span className="text-sm text-primary-600 font-medium">{edu.period}</span>
                    </div>
                    <p className="text-primary-600 font-semibold mb-2">{edu.institution}</p>
                    <p className="text-gray-600">{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

