import React from 'react'
import { Headings } from '../../core/headings/headings'
import {
  Github,
  Instagram,
  LinkedIn,
  Blog,
  socialLinks,
} from '../../../library'
import './style.css'

const Socials = React.forwardRef<HTMLDivElement>((props, ref) => {
  // 🎨 Mapping icons to components for dynamic rendering
  const icons = { Github, Instagram, LinkedIn, Blog }

  return (
    <div ref={ref} className="socials">
      {/* 🎯 Headings for the social media section */}
      <Headings title="On The Web" subtitle="More of my works" />

      <div className="socials-wrapper">
        {socialLinks.map((link) => (
          <a
            key={link.name}
            className="socials-link"
            href={link.url} // 🔄 Ensure the URL is correct
            target="_blank"
            rel="noreferrer"
          >
            {/* Display the icon associated with each link */}
            {React.createElement(icons[link.icon as keyof typeof icons])}
            <span className="socials-name">{link.name}</span>
          </a>
        ))}
      </div>
    </div>
  )
})

Socials.displayName = 'Socials'

export { Socials }
