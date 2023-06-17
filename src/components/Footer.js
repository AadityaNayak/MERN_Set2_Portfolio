import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Aaditya Nayak
        </p>
        {/* <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div> */}
        <p>
              
         </p>
        aadityanayak7@gmail.com
      </section>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <small class='website-rights'> ©copyright aadityanayak</small>
          <div className='social-icons'>
          
            <a
              className='social-icon-link linkedin'
              href='https://www.linkedin.com/in/aaditya-nayak-an73a8208/'
              target='_blank'
              aria-label='Twitter'
            >
              <i className='fab fa-linkedin' />
            </a>
            <a
              className='social-icon-link github'
              href='https://github.com/AadityaNayak'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i className='fab fa-github' />
            </a>
        </div>

        </div>
      </section>
    </div>
  );
}

export default Footer;
