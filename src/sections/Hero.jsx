// src/components/Hero.jsx
import React from 'react'

export default function Hero() {
  return (
    <section
      id="hero"
      className="h-screen w-screen bg-black text-white flex items-center justify-center"
    >
      <div className="text-center">
      <h1 className="text-5xl md:text-6xl font-extrabold text-cyan-400 text-center mb-4">
  Bhavya Sri Chennamsetty
</h1>

        <p className="text-xl text-gray-300">
          Full-Stack Developer | Cloud Enthusiast | AI Explorer
        </p>
      </div>
    </section>
  )
}
