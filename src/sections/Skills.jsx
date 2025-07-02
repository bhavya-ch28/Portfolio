import React from 'react'
import {
  FaPython,
  FaJava,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
} from 'react-icons/fa'
import { SiKotlin, SiMongodb, SiDocker, SiJenkins, SiKubernetes } from 'react-icons/si'

const skills = [
  { name: 'Python', icon: FaPython, color: '#3776AB' },
  { name: 'Java', icon: FaJava, color: '#007396' },
  { name: 'Kotlin', icon: SiKotlin, color: '#0095D5' },
  { name: 'React', icon: FaReact, color: '#61DAFB' },
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
  { name: 'Node.js', icon: FaNodeJs, color: '#339933' },
  { name: 'Docker', icon: SiDocker, color: '#2496ED' },
  { name: 'Git', icon: FaGitAlt, color: '#F05032' },
  { name: 'Jenkins', icon: SiJenkins, color: '#D24939' },
  { name: 'HTML5', icon: FaHtml5, color: '#E34F26' },
  { name: 'CSS3', icon: FaCss3Alt, color: '#1572B6' },
  { name: 'JavaScript', icon: FaJsSquare, color: '#F7DF1E' },
  { name: 'Kubernetes', icon: SiKubernetes, color: '#326CE5' },
]

export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen bg-gray-900 text-white flex flex-col justify-center items-center p-10"
    >
      <h2 className="text-4xl font-bold mb-8 text-center text-cyan-400">
        Skills & Technologies
      </h2>
      <div style={{ maxWidth: 900, columns: 3, columnGap: '1.5rem' }}>
        {skills.map(({ name, icon: Icon, color }, idx) => (
          <div
            key={idx}
            style={{
              breakInside: 'avoid',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              marginBottom: '1rem',
              padding: '0.4rem 0.8rem',
              borderRadius: '8px',
              border: '1.5px solid rgba(255, 255, 255, 0.15)',
              boxShadow: '0 2px 6px rgba(0,0,0,0.3)',
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              transition: 'all 0.3s ease',
              cursor: 'default',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.12)'
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.5)'
              e.currentTarget.style.borderColor = 'rgba(0, 216, 255, 0.7)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)'
              e.currentTarget.style.boxShadow = '0 2px 6px rgba(0,0,0,0.3)'
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)'
            }}
          >
            <Icon size={28} color={color} />
            <p style={{ margin: 0, fontWeight: '600', fontSize: '1rem' }}>{name}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
