import React from 'react'

const FooterComponent = () => {
  return (
    <div>
        <footer className='footer'>
            <span className='text-muted'>All Rights Reserved &copy; {new Date().getFullYear} @JavaGuides </span>
        </footer>
    </div>
  )
}

export default FooterComponent