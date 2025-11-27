import { useState } from 'react'
import personalData from '../data/personal.json'
import { PersonalInfoProps } from '../types'

const personal = personalData as PersonalInfoProps

interface HeaderProps {
  isScrolled: boolean
}

export default function Header({ isScrolled }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-md py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="section-container">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-primary-600">
            {personal.name.split(' ')[0]}
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-primary-600 transition-colors"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-primary-600 transition-colors"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="text-gray-700 hover:text-primary-600 transition-colors"
            >
              Habilidades
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-gray-700 hover:text-primary-600 transition-colors"
            >
              Projetos
            </button>
            <button
              onClick={() => scrollToSection('experience')}
              className="text-gray-700 hover:text-primary-600 transition-colors"
            >
              Experiência
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="btn-primary"
            >
              Contato
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4 pb-4">
            <button
              onClick={() => scrollToSection('home')}
              className="block w-full text-left text-gray-700 hover:text-primary-600 transition-colors"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left text-gray-700 hover:text-primary-600 transition-colors"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="block w-full text-left text-gray-700 hover:text-primary-600 transition-colors"
            >
              Habilidades
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="block w-full text-left text-gray-700 hover:text-primary-600 transition-colors"
            >
              Projetos
            </button>
            <button
              onClick={() => scrollToSection('experience')}
              className="block w-full text-left text-gray-700 hover:text-primary-600 transition-colors"
            >
              Experiência
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="btn-primary w-full"
            >
              Contato
            </button>
          </div>
        )}
      </nav>
    </header>
  )
}

