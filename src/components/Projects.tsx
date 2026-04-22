import { useState } from 'react'
import ProjectModal from './ProjectModal'
import projectsData from '../data/projects.json'
import { ProjectProps } from '../types'

const projects = projectsData as { projects: ProjectProps[] }

export default function Projects() {
  const [filter, setFilter] = useState<string>('Todos')
  const [selectedProject, setSelectedProject] = useState<ProjectProps | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const categories = ['Todos', 'Estudo', 'Trabalho', 'Open Source']

  const filteredProjects = filter === 'Todos'
    ? projects.projects
    : projects.projects.filter(p => p.category === filter)

  const openModal = (project: ProjectProps) => {
    setSelectedProject(project)
    setIsModalOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setIsModalOpen(false)
    document.body.style.overflow = 'auto'
  }

  return (
    <section id="projects" className="section-container bg-gray-900 scroll-mt-40">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Projetos
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Alguns dos projetos que desenvolvi ao longo da minha jornada
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                filter === category
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className={`flex flex-col bg-gray-800 rounded-2xl border transition-all duration-300 overflow-hidden group h-full ${
                project.title.toLocaleLowerCase().includes('nexo') 
                  ? 'border-primary-500 shadow-[0_0_20px_rgba(37,99,235,0.2)]' 
                  : 'border-gray-700 hover:border-primary-500/50'
              }`}
            >
              <div className="relative overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-700 flex items-center justify-center">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="text-4xl text-primary-400">🚀</div>
                  )}
                </div>
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className={`text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded bg-gray-900/80 backdrop-blur-sm border ${
                    project.category === 'Estudo' 
                      ? 'text-primary-400 border-primary-400/30' 
                      : project.category === 'Open Source'
                        ? 'text-purple-400 border-purple-400/30'
                        : 'text-green-400 border-green-400/30'
                  }`}>
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-primary-400 transition-colors">
                    {project.title}
                  </h3>
                  {project.period && (
                    <span className="text-[10px] text-gray-500 font-medium">
                      {project.period}
                    </span>
                  )}
                </div>
                
                <p className="text-gray-400 text-sm mb-6 line-clamp-4 leading-relaxed flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-8">
                  {project.technologies.slice(0, 4).map((tech, index) => (
                    <span
                      key={index}
                      className="text-[10px] bg-gray-900/50 text-gray-400 px-2 py-1 rounded border border-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="text-[10px] text-gray-500 self-center ml-1">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>

                <div className="mt-auto pt-6 border-t border-gray-700/50 flex items-center justify-between">
                  <button 
                    onClick={() => openModal(project)}
                    className="text-sm font-semibold text-primary-400 hover:text-primary-300 transition-colors inline-flex items-center gap-1 group/btn"
                  >
                    Ver detalhes
                    <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                  
                  <div className="flex gap-2">
                    {project.npm && (
                      <a 
                        href={project.npm}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-gray-700 hover:bg-red-600 text-white rounded-lg transition-all duration-200"
                        title="Ver no NPM"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M1.763 0C.786 0 0 .786 0 1.763v20.474C0 23.214.786 24 1.763 24h20.474c.977 0 1.763-.786 1.763-1.763V1.763C24 .786 23.214 0 22.237 0H1.763zM5.13 5.323l13.837.019-.009 13.336h-3.477v-10.12h-3.447v10.12H5.13V5.323z" />
                        </svg>
                      </a>
                    )}
                    {project.demo && (
                      <a 
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-gray-700 hover:bg-primary-600 text-white rounded-lg transition-all duration-200"
                        title="Acessar Projeto"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ProjectModal 
        project={selectedProject} 
        isOpen={isModalOpen} 
        onClose={closeModal} 
      />
    </section>
  )
}

