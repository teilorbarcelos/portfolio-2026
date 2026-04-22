import { ProjectProps } from '../types'

interface ProjectModalProps {
  project: ProjectProps | null
  isOpen: boolean
  onClose: () => void
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  if (!isOpen || !project) return null

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Escape') onClose()
  }

  return (
    <div 
      className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-8 outline-none"
      role="dialog"
      aria-modal="true"
      tabIndex={-1}
      ref={(node) => node?.focus()}
      onKeyDown={handleKeyDown}
    >
      <div 
        className="absolute inset-0 bg-gray-950/90 backdrop-blur-sm animate-in fade-in duration-300" 
        onClick={onClose}
      />
      
      <div className="relative bg-gray-800 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl border border-gray-700 animate-in zoom-in-95 fade-in duration-300">
        {/* Header / Image */}
        <div className="relative aspect-video md:aspect-[21/9] w-full bg-gray-900">
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-6xl">🚀</div>
          )}
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-gray-900/50 hover:bg-red-500/80 text-white rounded-full backdrop-blur-md transition-colors border border-white/10"
            title="Fechar Detalhes"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="p-8 md:p-12">
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className={`text-xs font-bold px-3 py-1 rounded-full border ${
              project.category === 'Estudo' ? 'bg-primary-600/20 text-primary-400 border-primary-600/30' : 'bg-green-600/20 text-green-400 border-green-600/30'
            }`}>
              {project.category}
            </span>
            {project.period && (
              <span className="text-sm text-gray-400 flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {project.period}
              </span>
            )}
          </div>

          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {project.title}
          </h3>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2">
              <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                Sobre o Projeto
              </h4>
              <p className="text-gray-300 leading-relaxed whitespace-pre-line text-lg">
                {project.description}
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Tecnologias</h4>
              <div className="flex flex-wrap gap-2 mb-8">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="text-sm bg-gray-700/50 text-gray-300 px-3 py-1.5 rounded-lg border border-gray-600"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {project.demo && (
                <a 
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full flex items-center justify-center gap-2 group"
                >
                  Acessar Projeto
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              )}
              {project.npm && (
                <a 
                  href={project.npm}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary w-full mt-4 flex items-center justify-center gap-2 border-red-500/50 hover:bg-red-500/10 hover:border-red-500 text-red-400"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M1.763 0C.786 0 0 .786 0 1.763v20.474C0 23.214.786 24 1.763 24h20.474c.977 0 1.763-.786 1.763-1.763V1.763C24 .786 23.214 0 22.237 0H1.763zM5.13 5.323l13.837.019-.009 13.336h-3.477v-10.12h-3.447v10.12H5.13V5.323z" />
                  </svg>
                  Ver no NPM
                </a>
              )}
              {project.github && (
                <a 
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary w-full mt-4 flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  Código no GitHub
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
