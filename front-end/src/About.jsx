import { useEffect, useState } from 'react'
import axios from 'axios'
import './About.css'

const About = () => {
  const [about, setAbout] = useState(null)
  const [error, setError] = useState(false)
  const [attempt, setAttempt] = useState(0)

  useEffect(() => {
    const controller = new AbortController()
    setError(false)
    axios
      .get(`${import.meta.env.VITE_SERVER_HOSTNAME}/about`, {
        signal: controller.signal,
      })
      .then(({ data }) => setAbout(data))
      .catch(err => {
        if (!axios.isCancel(err)) setError(true)
      })
    return () => controller.abort()
  }, [attempt])

  if (error) {
    return (
      <div role="alert">
        <p>Unable to load this page. Please check that the back-end is running.</p>
        <button onClick={() => setAttempt(attempt + 1)}>Try again</button>
      </div>
    )
  }
  if (!about) return <p role="status">Loading…</p>

  return (
    <article className="About">
      <h1>{about.title}</h1>
      <div className="About-profile">
        <img src={about.imageUrl} alt={about.imageAlt} />
        <div>
          <h2>{about.name}</h2>
          {about.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </article>
  )
}

export default About
