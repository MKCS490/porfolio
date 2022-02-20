import React from 'react'
import '../footer.css'

function Footer() {
    return (
        <div className="main-footer">
            <div className="github">
                <a href="https://github.com/MKCS490" target="_blank"><img class="git" src="/img/github.png" alt="git" ></img></a>
                <a href="https://www.linkedin.com/in/mohammad-khan-125b1b161/" target="_blank"><img class="linkedin" src="/img/linkedin.png" alt="linkedin" ></img></a>
                <img class="mail" src="/img/mail.png" alt="mail" ></img> 
            </div>
        </div>
    )
}

export default Footer
