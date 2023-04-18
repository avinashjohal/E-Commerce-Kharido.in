import React from 'react';
import { Link } from 'react-router-dom';
import { BsGithub, BsYoutube, BsInstagram, BsMedium } from 'react-icons/bs';
import { ImLinkedin2 } from 'react-icons/im';
import newsletter from "../images/newsletter.png";


const Footer = () => {
  return (
    <>
      <footer className='py-4'>
        <div class="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <img src={newsletter} alt="newsletter" />
                <h3 className="mb-0 text-white">Sign Up for Newsletter</h3>
              </div>
            </div>
            <div className="col-7">
              <div className="input-group">
                <input
                  type="text"
                  class="form-control py-1"
                  placeholder="Your Email Address..."
                  aria-label="Your Email Address..."
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text py-2" id="basic-addon2">
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className='py-4'>
        <div className='container-xxl'>
          <div className="row">
            <div className="col-4">
              <h5 className='text-white mb-3'>Contact Us</h5>
              <div>
                <address className='text-white fs-6'>
                  Hno: 318, Vill Kabulpur, <br />
                  Near Mustafabad (Block), <br />
                  Dist: Yamuna Nagar (135133),<br />
                  Haryana, INDIA.
                </address>
                <a href="tel: +91 8950371540" className="mt-3 d-block mb-1 text-white">
                  +91 8950371540
                </a>
                <a href="Mailto:avinashjohal340@gmail.com"
                  className="mt-2 d-block mb-4 text-white">
                  avinashjohal340@gmail.com
                </a>
                <div className="social_icons d-flex align-items-center gap-10">
                  <a className='text-white' href="/">
                    <ImLinkedin2 className='fs-4 ' />
                  </a>
                  <a className='text-white' href="/">
                    <BsInstagram className='fs-4 ' />
                  </a>
                  <a className='text-white' href="/">
                    <BsYoutube className='fs-4 ' />
                  </a>
                  <a className='text-white' href="/">
                    <BsGithub className='fs-4 ' />
                  </a>
                  <a className='text-white' href="/">
                    <BsMedium className='fs-4 ' />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h5 className='text-white mb-3'>Information</h5>
              <div className="footer-links d-flex flex-column">
                <span><Link to="privacy-policy" className="text-white py-1 mb-0">Privacy Policy</Link></span>
                <span><Link to="refund-policy" className="text-white py-1 mb-0">Refund Policy</Link></span>
                <span><Link to="shipping-policy" className="text-white py-1 mb-0">Shipping Policy</Link></span>
                <span><Link to="terms-conditions" className="text-white py-1 mb-0">Terms & Conditions</Link></span>
                <span><Link to="blogs" className="text-white py-1 mb-0">Blogs</Link></span>
              </div>
            </div>
            <div className="col-3">
              <h5 className='text-white mb-3'>Account</h5>
              <div className="footer-links d-flex flex-column">
                <span><Link className="text-white py-1 mb-0">About Us</Link></span>
                <span><Link className="text-white py-1 mb-0">FAQ</Link></span>
                <span><Link className="text-white py-1 mb-0">Contact</Link></span>
                {/* <Link className="text-white py-2 mb-1">Watch</Link> */}
              </div>
            </div>
            <div className="col-2">
              <h5 className='text-white mb-3'>Quick Links</h5>
              <div className="footer-links d-flex flex-column">
                <span><Link className="text-white py-1 mb-0">Laptops</Link></span>
                <span><Link className="text-white py-1 mb-0">Headphones</Link></span>
                <span><Link className="text-white py-1 mb-0">Tablets</Link></span>
                <span><Link className="text-white py-1 mb-0">Watch</Link></span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className='py-4'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <p className='text-center mb-0 text-white'>
                &copy; {new Date().getFullYear()}; Powered by AJ BRANDS.
              </p>
            </div>
          </div>
        </div>

      </footer>
    </>
  )
}

export default Footer