import React from 'react'
import { Headings } from '../../core/headings/headings'
import './style.css'

const Contact = React.forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref} className="contact">
      {/* 🎯 Headings component for consistent styling across the application */}
      <Headings title="Contact" subtitle="Look Who's Here" />
      {/* 📝 Information text about how to contact */}
      <div className="contact-text">
        The fastest way to get in touch with me is to send me a message on{' '}
        <a
          href="https://linkedin.com/in/your-profile"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>{' '}
        or a DM on{' '}
        <a
          href="https://instagram.com/yourusername"
          target="_blank"
          rel="noreferrer"
        >
          Instagram
        </a>
        . Whether you have a question or just want to say &quot;Hi,&quot;
        I&apos;ll try my best to get back to you.
      </div>
    </div>
  )
})

Contact.displayName = 'Contact'

export { Contact }
