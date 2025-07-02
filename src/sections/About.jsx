import React from 'react'

export default function About() {
  return (
    <section
      id="about"
      style={{ maxWidth: '960px', margin: '0 auto', padding: '2rem' }}
    >
      <h2
        style={{
          textAlign: 'center',          // Center the heading
          color: '#00d8ff',
          fontWeight: '700',
          fontSize: '2.5rem',
          marginBottom: '1.5rem',
          textShadow: '0 0 6px #00d8ffaa',
        }}
      >
        About Me
      </h2>
      <div
        className="about-content"
        style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}
      >
        <div className="about-text" style={{ flex: 1 }}>
          <p
            style={{
              fontSize: '1.25rem',
              color: '#ccc',
              lineHeight: 1.8,
              fontWeight: '500',
              marginBottom: '1.5rem',
              textShadow: '0 0 4px #000',
              textAlign: 'left',          // Keep paragraph text left aligned
            }}
          >
            I am a motivated and passionate developer, constantly seeking to grow my skills and build meaningful digital experiences. My dedication to learning and creativity drives me to explore new technologies and tackle challenges with enthusiasm.
          </p>

          <ul style={{ listStyle: 'none', paddingLeft: 0, color: '#00d8ff' }}>
            <li
              style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '1rem',
                fontSize: '1.125rem',
                fontWeight: '600',
                textShadow: '0 0 4px #004466',
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#00d8ff"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                style={{ marginRight: '0.75rem', flexShrink: 0 }}
              >
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
              </svg>
              Quick learner with a growth mindset
            </li>

            <li
              style={{
                display: 'flex',
                alignItems: 'center',
                fontSize: '1.125rem',
                fontWeight: '600',
                textShadow: '0 0 4px #004466',
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#00d8ff"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                style={{ marginRight: '0.75rem', flexShrink: 0 }}
              >
                <path d="M12 2a10 10 0 1010 10A10.011 10.011 0 0012 2zm1 14.93V17a1 1 0 01-2 0v-.07A8.002 8.002 0 014 12a8 8 0 018-8 8.002 8.002 0 015 14.93z" />
              </svg>
              Strong collaborator and communicator
            </li>
          </ul>
        </div>

        <div className="about-image" style={{ flexShrink: 0 }}>
          <img
            src="/mine_compressed_more.jpeg"
            alt="My Portrait"
            style={{
              width: '240px',
              height: 'auto',
              borderRadius: '12px',
              objectFit: 'cover',
              boxShadow: '0 0 15px #00d8ff88',
            }}
          />
        </div>
      </div>
    </section>
  )
}
