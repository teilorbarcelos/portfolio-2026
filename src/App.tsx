import { useEffect, useState } from 'react'
import About from './components/About'
import Contact from './components/Contact'
import Experience from './components/Experience'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import personalData from './data/personal.json'
import { PersonalInfoProps } from './types'

const personal = personalData as PersonalInfoProps

function App() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: personal.name,
    jobTitle: personal.role,
    description: personal.bio,
    email: personal.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: personal.location,
      addressCountry: 'BR'
    },
    sameAs: [
      personal.social.github,
      personal.social.linkedin
    ].filter(Boolean),
    url: typeof window !== 'undefined' ? window.location.origin : '',
    knowsAbout: [
      'Web Development',
      'React',
      'Node.js',
      'TypeScript',
      'JavaScript',
      'Full Stack Development'
    ]
  }

  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <Header isScrolled={isScrolled} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App

