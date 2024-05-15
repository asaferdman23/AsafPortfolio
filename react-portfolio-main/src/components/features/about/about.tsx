import React from 'react'
import { Headings } from '../../core/headings/headings'
import './style.css'

const About = React.forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref} className="about-section">
      {/* 🎯 Display the section title and subtitle */}
      <Headings title="About" subtitle="Hi, I'm Asaf." />{' '}
      {/* 📝 Edit the biography below to reflect your own journey and interests */}
      <p className="about-text">
        I&apos;m a 26-year-old Software Developer. What
        kept me on this journey is that I always find learning new things
        exciting and facing unfamiliar challenges. In addition to coding, I
        enjoy building side projects, and reading books.
        When I&apos;m not doing anything coding-related, I enjoy spending time
        with my family and working out.
        {/* 🔗 Update the href attribute with your Instagram link */}
        Follow my
        <a className="about-link" href="https://www.linkedin.com/in/asaferdman/" target="_blank" rel="noreferrer">
          LinkedIn
          {/* 🔄 Change 'Instagram' to your preferred social media or remove if not applicable */}
        </a>{' '}
        to see my journey!
      </p>
    </div>
  )
})

About.displayName = 'About'

export { About }
