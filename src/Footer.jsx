import React from 'react'

function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer className='footer'>
            Copyrights © {year}
        </footer>
    )
}

export default Footer;