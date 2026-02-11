import React, { useState } from 'react';
import logo from '../logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import '../bootstrap-grid.css';
import '../critical.css';
import '../font-awesome.min.css';
import '../index.css';
import '../slick.min.css';
import '../style.css';
import '../App.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import main from '../assets/images/mainlogo.png';
//import API from './Api';
import 'bootstrap/dist/css/bootstrap.css';
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';

function Footer() {
  const [show, setShow] = useState(false);
  const handleClose = () => { setShow(false) };
  const handleShow = () => setShow(true);



  return (
    <div className="">


      {/* <footer style={{ margin: "0px" }}>
        <div className="row " style={{ margin: "5px", marginTop: "20px" }}>
          <div className="col-12 col-sm-12 col-lg-3 col-md-6 footer-info" >
            <h6 className='footer-colm-head'>contact us</h6>
            <p style={{ color: "#fff" }}>

              <i
                className="fa fa-map-marker"
                style={{ float: "left", padding: "0px", width: "25px" }}
              ></i>
              <span>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Samruddhi+Printers,+Marsur+Main+Road+#71+Shop+No+5+Mohan+Reddy+Building,+Marsur+Gate,+Anekal,+Bengaluru,+Karnataka+562106"
                  target="_blank"
                  style={{ color: "inherit", textDecoration: "none", marginBottom: "25px" }}
                >

                  Marsur Main Road, #71 Shop No. 5
                  <br />
                  Mohan Reddy Building, Marsur Gate,
                  <br />
                  Anekal, Bengaluru, Karnataka 562106
                </a>
                <br />
              </span>
              <br />
              <i className="fa fa-envelope" aria-hidden="true" style={{ float: "left", padding: "0px", width: "25px", }}></i><span style={{ width: "auto", }} onClick={(e) => { window.location.href = 'mailto:samruddhiprinters@gmail.com'; }}>samruddhiprinters@gmail.com</span>
              <br />
              <i className="fa fa-phone" aria-hidden="true" style={{ float: "left", padding: "0px", width: "25px", }}></i><span>9591967075</span>
              <br />
            </p>
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-6  blok-link footer-link footer-info" style={{ margin: "0px", padding: "0px" }}>
            <div className="row" style={{ margin: "0px" }}>
              <ul className="col-4 col-sm-4 col-lg-4 col-md-4 support-pages" >
                <h6 className='footer-colm-head'>Quick Links</h6>
                <li ><a href="/" style={{ fontWeight: 'bold' }}>Home</a></li>
                <li><a href="/about" style={{ fontWeight: 'bold' }}>About us</a></li>

                <li><a href="/services" style={{ fontWeight: 'bold' }}>Services</a></li>
              </ul>


              <ul className="col-4 col-sm-4 col-lg-4 col-md-4 support-foot footer-info">
                <h6 className='footer-colm-head'>information</h6>
                <li><a href="/gallery" style={{ fontWeight: 'bold' }}>Gallery</a></li>

              </ul>

              <ul className="col-4 col-sm-4 col-lg-3 col-md-4 support-foot footer-info" >
                <h6 className='footer-colm-head'>support</h6>
                <li><a href="#" data-bs-toggle="modal" data-bs-target="#terms-conditions" style={{ fontWeight: 'bold' }}>Terms & Conditions</a></li>
                <li><a href="#" data-bs-toggle="modal" data-bs-target="#refund-policy" style={{ fontWeight: 'bold' }}>Refund Policy</a></li>
                <li><a href="#" data-bs-toggle="modal" data-bs-target="#shipping-policy" style={{ fontWeight: 'bold' }}>Shipping Policy</a></li>
                <li ><a href="#" data-bs-toggle="modal" data-bs-target="#privacy-policy" style={{ fontWeight: 'bold' }}>Privacy Policy</a></li>
              </ul>
            </div>

          </div>

          <div className="col-12 col-sm-12 col-md-6 col-lg-3  footer-subscribe support-foot footer-info">
            <h6 className='footer-colm-head'>subscribe</h6>
            <form className="subscribe-form" >
              <div className="input-group mb-3">
                <input type="email" className="form-control" name="subscriber" placeholder="subscribe" aria-label="Username" aria-describedby="basic-addon1" required />
                <button className="input-group-text text-light" style={{ backgroundColor: "#1da912" }}>send</button>
              </div>
            </form>
          </div>

        </div>



        <div className="footer-bottom" style={{ margin: "0px", padding: "0px", paddingTop: "10px", borderTop: "2px solid green" }}>
          <div className="row  copyright" style={{ margin: "0px", padding: "0px", }}>
            <div className="col-12 col-md-4 copyRightHolder v-II text-center" style={{ margin: "0px", padding: "0px", }}>
              <h6 className="">
                &#169; Copyright : <a>Samruddhi Printers.</a>
              </h6>
            </div>

          </div>

        </div>
      </footer> */}


      {/* <footer className="bg-dark text-white pt-5 pb-3">
        <div className="container">
          <div className="row">

            <div className="col-12 col-md-6 col-lg-3 mb-4">
              <h5 className="text-uppercase mb-3">Contact Us</h5>
              <p className="mb-2">
                <FaMapMarkerAlt className="me-2" />
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Samruddhi+Printers,+Marsur+Main+Road+#71+Shop+No+5+Mohan+Reddy+Building,+Marsur+Gate,+Anekal,+Bengaluru,+Karnataka+562106"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-decoration-none"
                >
                  Marsur Main Road, #71 Shop No. 5,<br />
                  Mohan Reddy Building, Marsur Gate,<br />
                  Anekal, Bengaluru, Karnataka 562106
                </a>
              </p>
              <p className="mb-2">
                <FaEnvelope className="me-2" />
                <a href="mailto:samruddhiprinters@gmail.com" className="text-white text-decoration-none">
                  samruddhiprinters@gmail.com
                </a>
              </p>
              <p>
                <FaPhone className="me-2" />9591967075
              </p>
            </div>


            <div className="col-12 col-md-6 col-lg-3 mb-4">
              <h5 className="text-uppercase mb-3">Quick Links</h5>
              <ul className="list-unstyled">
                <li><a href="/" className="text-white text-decoration-none">Home</a></li>
                <li><a href="/about" className="text-white text-decoration-none">About Us</a></li>
                <li><a href="/services" className="text-white text-decoration-none">Services</a></li>
                <li><a href="/gallery" className="text-white text-decoration-none">Gallery</a></li>
              </ul>
            </div>


            <div className="col-12 col-md-6 col-lg-3 mb-4">
              <h5 className="text-uppercase mb-3">Policies</h5>
              <ul className="list-unstyled">
                <li><a href="#terms-conditions" data-bs-toggle="modal" className="text-white text-decoration-none">Terms & Conditions</a></li>
                <li><a href="#refund-policy" data-bs-toggle="modal" className="text-white text-decoration-none">Refund Policy</a></li>
                <li><a href="#shipping-policy" data-bs-toggle="modal" className="text-white text-decoration-none">Shipping Policy</a></li>
                <li><a href="#privacy-policy" data-bs-toggle="modal" className="text-white text-decoration-none">Privacy Policy</a></li>
              </ul>
            </div>


            <div className="col-12 col-md-6 col-lg-3 mb-4">
              <h5 className="text-uppercase mb-3">Subscribe</h5>
              <form>
                <div className="input-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email"
                    required
                  />
                  <button className="btn btn-success" type="submit">Send</button>
                </div>
              </form>
            </div>
          </div>


          <div className="row border-top pt-3 mt-3 text-center">
            <div className="col-12">
              <img src={logo} alt="Samruddhi Printers" height="50" className="mb-2" /><br />
              <small>&copy; {new Date().getFullYear()} Samruddhi Printers. All rights reserved.</small>
            </div>
          </div>
        </div>
      </footer> */}

      {/* <footer className="bg-dark text-white pt-5 pb-4">
        <div className="container text-md-left">
          <div className="row text-md-left">

            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">Contact Us</h6>
              <p>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=Samruddhi+Printers,+Marsur+Main+Road,#71+Shop+No+5+Mohan+Reddy+Building,+Marsur+Gate,+Anekal,+Bengaluru,+Karnataka+562106"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-decoration-none"
                >
                  <i className="fa fa-map-marker mr-3"></i>
                  Marsur Main Road, #71 Shop No. 5,<br />
                  Mohan Reddy Building, Marsur Gate,<br />
                  Anekal, Bengaluru, Karnataka 562106
                </a>
              </p>
              <p style={{ width: "auto", cursor: "pointer" }}
                onClick={() => {
                  window.location.href = "mailto:samruddhiprinterskp@gmail.com";
                }}><i className="fa fa-envelope mr-3"></i> samruddhiprinterskp@gmail.com</p>
              <p><i className="fa fa-phone mr-3"></i> +91 95919 67075</p>
            </div>


            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">Quick Links</h6>
              <p><a href="/" className="text-white text-decoration-none">Home</a></p>
              <p><a href="/about" className="text-white text-decoration-none">About Us</a></p>
              <p><a href="/services" className="text-white text-decoration-none">Services</a></p>
              <p><a href="/gallery" className="text-white text-decoration-none">Gallery</a></p>
            </div>


            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">Policies</h6>
              <p><a href="#" data-bs-toggle="modal" data-bs-target="#terms-conditions" className="text-white text-decoration-none">Terms & Conditions</a></p>
              <p><a href="#" data-bs-toggle="modal" data-bs-target="#refund-policy" className="text-white text-decoration-none">Refund Policy</a></p>
              <p><a href="#" data-bs-toggle="modal" data-bs-target="#shipping-policy" className="text-white text-decoration-none">Shipping Policy</a></p>
              <p><a href="#" data-bs-toggle="modal" data-bs-target="#privacy-policy" className="text-white text-decoration-none">Privacy Policy</a></p>
            </div>


            <div className="col-md-4 col-lg-4 col-xl-4 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">Our Expertise</h6>
              <p><i className="fa fa-check text-success mr-2"></i> High-quality Business Cards</p>
              <p><i className="fa fa-check text-success mr-2"></i> Custom Posters & Banners</p>
              <p><i className="fa fa-check text-success mr-2"></i> Offset & Digital Printing</p>
              <p><i className="fa fa-check text-success mr-2"></i> Flyers, Brochures & Invitations</p>
            </div>
          </div>

          <hr className="mb-4" style={{ borderTop: '2px solid green' }} />

          <div className="row align-items-center">
            <div className="col-md-7 col-lg-8">
              <p className="text-center text-md-start">
                © {new Date().getFullYear()} <strong>Samruddhi Printers</strong>. All Rights Reserved.
              </p>
            </div>
            <div className="col-md-5 col-lg-4">
              <div className="text-center text-md-end">
                <img src={main} alt="Samruddhi Logo" width="150" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </footer> */}

      {/* <footer className="bg-[#143E61] text-white pt-12 pb-6 font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-10 mb-10">
          
            <div>
              <h6 className="text-lg font-bold mb-4 uppercase text-orange-400">Contact Us</h6>
              <p className="text-sm mb-2">
                <a href="https://www.google.com/maps/search/?api=1&query=Samruddhi+Printers,+Marsur+Main+Road,#71+Shop+No+5+Mohan+Reddy+Building,+Marsur+Gate,+Anekal,+Bengaluru,+Karnataka+562106" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  <i className="fa fa-map-marker mr-2"></i>
                  Marsur Main Road, #71 Shop No. 5,<br />Mohan Reddy Building, Marsur Gate,<br />Anekal, Bengaluru, Karnataka 562106
                </a>
              </p>
              <p className="text-sm mb-2 cursor-pointer hover:underline" onClick={() => { window.location.href = 'mailto:samruddhiprinterskp@gmail.com'; }}>
                <i className="fa fa-envelope mr-2"></i> samruddhiprinterskp@gmail.com
              </p>
              <p className="text-sm"><i className="fa fa-phone mr-2"></i> +91 95919 67075</p>
            </div>

           
            <div>
              <h6 className="text-lg font-bold mb-4 uppercase text-orange-400">Quick Links</h6>
              <ul className="space-y-2 text-sm">
                <li><a href="/" className="hover:text-orange-300">Home</a></li>
                <li><a href="/about" className="hover:text-orange-300">About Us</a></li>
                <li><a href="/services" className="hover:text-orange-300">Services</a></li>
                <li><a href="/gallery" className="hover:text-orange-300">Gallery</a></li>
              </ul>
            </div>

        
            <div>
              <h6 className="text-lg font-bold mb-4 uppercase text-orange-400">Policies</h6>
              <ul className="space-y-2 text-sm">
                <li><a href="#" data-bs-toggle="modal" data-bs-target="#terms-conditions" className="hover:text-orange-300">Terms & Conditions</a></li>
                <li><a href="#" data-bs-toggle="modal" data-bs-target="#refund-policy" className="hover:text-orange-300">Refund Policy</a></li>
                <li><a href="#" data-bs-toggle="modal" data-bs-target="#shipping-policy" className="hover:text-orange-300">Shipping Policy</a></li>
                <li><a href="#" data-bs-toggle="modal" data-bs-target="#privacy-policy" className="hover:text-orange-300">Privacy Policy</a></li>
              </ul>
            </div>

           
            <div>
              <h6 className="text-lg font-bold mb-4 uppercase text-orange-400">Our Expertise</h6>
              <ul className="space-y-2 text-sm">
                <li><i className="fa fa-check text-green-400 mr-2"></i>High-quality Business Cards</li>
                <li><i className="fa fa-check text-green-400 mr-2"></i>Custom Posters & Banners</li>
                <li><i className="fa fa-check text-green-400 mr-2"></i>Offset & Digital Printing</li>
                <li><i className="fa fa-check text-green-400 mr-2"></i>Flyers, Brochures & Invitations</li>
              </ul>
            </div>
          </div>

          <hr className="border-orange-400 mb-6" />

          <div className="flex flex-col md:flex-row items-center justify-between text-sm">
            <p className="text-center md:text-left mb-4 md:mb-0">© {new Date().getFullYear()} <strong>Samruddhi Printers</strong>. All Rights Reserved.</p>
            <div className="text-center md:text-right">
              <img src={main} alt="Samruddhi Logo" width="130" className="inline-block" />
            </div>
          </div>
        </div>
      </footer> */}

      {/* <footer className="bg-[#143E61] text-white pt-12 pb-6 text-sm">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8 mb-10">
          
            <div>
              <h6 className="uppercase mb-4 font-semibold text-[#F57C00]">Contact Us</h6>
              <address className="not-italic space-y-2">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Samruddhi+Printers,+Marsur+Main+Road,#71+Shop+No+5+Mohan+Reddy+Building,+Marsur+Gate,+Anekal,+Bengaluru,+Karnataka+562106"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange-300 block"
                >
                  📍 #71 Shop No. 5, Marsur Main Road, Mohan Reddy Building,<br />
                  Marsur Gate, Anekal, Bengaluru, Karnataka 562106
                </a>
                <a
                  href="mailto:samruddhiprinterskp@gmail.com"
                  className="hover:text-orange-300 block"
                >
                  ✉️ samruddhiprinterskp@gmail.com
                </a>
                <p>📞 +91 95919 67075</p>
              </address>
            </div>

   
            <div>
              <h6 className="uppercase mb-4 font-semibold text-[#F57C00]">Quick Links</h6>
              <ul className="space-y-2">
                {[
                  { name: "Home", href: "/" },
                  { name: "About Us", href: "/about" },
                  { name: "Services", href: "/services" },
                  { name: "Gallery", href: "/gallery" },
                ].map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="hover:text-orange-300">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            
            <div>
              <h6 className="uppercase mb-4 font-semibold text-[#F57C00]">Policies</h6>
              <ul className="space-y-2">
                {[
                  { id: "terms-conditions", name: "Terms & Conditions" },
                  { id: "refund-policy", name: "Refund Policy" },
                  { id: "shipping-policy", name: "Shipping Policy" },
                  { id: "privacy-policy", name: "Privacy Policy" },
                ].map((item) => (
                  <li key={item.id}>
                    <a
                      href="#"
                      data-bs-toggle="modal"
                      data-bs-target={`#${item.id}`}
                      className="hover:text-orange-300"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            
            <div>
              <h6 className="uppercase mb-4 font-semibold text-[#F57C00]">Our Expertise</h6>
              <ul className="space-y-2">
                {[
                  "High-quality Business Cards",
                  "Custom Posters & Banners",
                  "Offset & Digital Printing",
                  "Flyers, Brochures & Invitations",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="text-green-400">✔</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-center md:text-left">
              © {new Date().getFullYear()} <strong>Samruddhi Printers</strong>. All Rights Reserved.
            </p>
            <img
              src={main}
              alt="Samruddhi Logo"
              className="w-36 md:ml-auto"
            />
          </div>
        </div>
        <ToastContainer />
      </footer> */}
      {/* <footer style={{ margin: 0, backgroundColor: '#143E61', color: '#fff' }}>
        <div className="row" style={{ margin: '5px', marginTop: '20px' }}>
          <div className="col-12 col-sm-12 col-lg-3 col-md-6 footer-info">
            <h6 className="footer-colm-head" style={{ color: '#F57C00' }}>Contact Us</h6>
            <p style={{ color: "#fff" }}>
              <i className="fa fa-map-marker" style={{ float: "left", width: "25px" }}></i>
              <span>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Samruddhi+Printers,+Marsur+Main+Road+#71+Shop+No+5+Mohan+Reddy+Building,+Marsur+Gate,+Anekal,+Bengaluru,+Karnataka+562106"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                >
                  Marsur Main Road, #71 Shop No. 5<br />
                  Mohan Reddy Building, Marsur Gate,<br />
                  Anekal, Bengaluru, Karnataka 562106
                </a>
              </span><br /><br />
              <i className="fa fa-envelope" style={{ float: "left", width: "25px" }}></i>
              <span>
                <a href="mailto:samruddhiprinters@gmail.com" className="footer-link">
                  samruddhiprinters@gmail.com
                </a>
              </span><br />
              <i className="fa fa-phone" style={{ float: "left", width: "25px" }}></i>
              <span>9591967075</span>
            </p>
          </div>

          <div className="col-12 col-sm-12 col-md-12 col-lg-6 footer-link footer-info">
            <div className="row">
              <ul className="col-4 support-pages">
                <h6 className="footer-colm-head" style={{ color: '#F57C00' }}>Quick Links</h6>
                <li><a href="/" className="footer-link">Home</a></li>
                <li><a href="/about" className="footer-link">About Us</a></li>
                <li><a href="/services" className="footer-link">Services</a></li>
              </ul>

              <ul className="col-4 support-foot">
                <h6 className="footer-colm-head" style={{ color: '#F57C00' }}>Information</h6>
                <li><a href="/gallery" className="footer-link">Gallery</a></li>
              </ul>

              <ul className="col-4 support-foot">
                <h6 className="footer-colm-head" style={{ color: '#F57C00' }}>Support</h6>
                <li><a href="#" data-bs-toggle="modal" data-bs-target="#terms-conditions" className="footer-link">Terms & Conditions</a></li>
                <li><a href="#" data-bs-toggle="modal" data-bs-target="#refund-policy" className="footer-link">Refund Policy</a></li>
                <li><a href="#" data-bs-toggle="modal" data-bs-target="#shipping-policy" className="footer-link">Shipping Policy</a></li>
                <li><a href="#" data-bs-toggle="modal" data-bs-target="#privacy-policy" className="footer-link">Privacy Policy</a></li>
              </ul>
            </div>
          </div>

          <div className="col-12 col-sm-12 col-md-6 col-lg-3 footer-subscribe footer-info">
            <h6 className="footer-colm-head" style={{ color: '#F57C00' }}>Subscribe</h6>
            <form className="subscribe-form">
              <div className="input-group mb-3">
                <input type="email" className="form-control" name="subscriber" placeholder="Enter your email" required />
                <button className="input-group-text text-light" style={{ backgroundColor: "#1da912" }}>Send</button>
              </div>
            </form>
          </div>
        </div>

        <div className="footer-bottom" style={{ paddingTop: "10px", borderTop: "2px solid green", textAlign: 'center' }}>
          <h6 style={{ margin: 0, fontSize: "0.9rem" }}>
            &#169; {new Date().getFullYear()} Samruddhi Printers. All rights reserved.
          </h6>
        </div>

        <style jsx>{`
    .footer-link {
      color: white;
      font-weight: bold;
      text-decoration: none;
      transition: color 0.3s;
      display: inline-block;
    }
    .footer-link:hover {
      color: #F57C00;
      text-decoration: none;
    }
    .footer-colm-head {
      font-weight: 600;
      text-transform: uppercase;
      margin-bottom: 10px;
    }
    .footer-info li {
      list-style: none;
      margin-bottom: 6px;
    }
  `}</style>
      </footer> */}


      {/* <footer className="bg-[#143E61] text-white pt-12 pb-6 text-sm font-sans">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8 mb-10">

            <div>
              <h6 className="text-uppercase mb-4 font-weight-bold" style={{ color: 'rgb(245 124 0 / var(--tw-text-opacity, 1))' }}>Contact Us</h6>
              <address className="not-italic space-y-2 leading-relaxed">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Samruddhi+Printers,+Marsur+Main+Road,#71+Shop+No+5+Mohan+Reddy+Building,+Marsur+Gate,+Anekal,+Bengaluru,+Karnataka+562106"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange-300 block footer-address"


                >
                  📍 #71 Shop No. 5, Marsur Main Road, Mohan Reddy Building,<br />
                  Marsur Gate, Anekal, Bengaluru, Karnataka 562106
                </a>
                <a
                  href="mailto:samruddhiprinterskp@gmail.com"
                  className="hover:text-orange-300 block"
                >
                  ✉️ samruddhiprinterskp@gmail.com
                </a>
                <p>📞 +91 95919 67075</p>
              </address>
            </div>

            <div>
              <h6 className="uppercase mb-4 font-semibold text-[#F57C00]">Quick Links</h6>
              <ul className="space-y-2">
                {[
                  { name: "Home", href: "/" },
                  { name: "About Us", href: "/about" },
                  { name: "Services", href: "/services" },
                  { name: "Gallery", href: "/gallery" },
                ].map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="hover:text-orange-300">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h6 className="uppercase mb-4 font-semibold text-[#F57C00]">Policies</h6>
              <ul className="space-y-2">
                {[
                  { id: "terms-conditions", name: "Terms & Conditions" },
                  { id: "refund-policy", name: "Refund Policy" },
                  { id: "shipping-policy", name: "Shipping Policy" },
                  { id: "privacy-policy", name: "Privacy Policy" },
                ].map((item) => (
                  <li key={item.id}>
                    <a
                      href="#"
                      data-bs-toggle="modal"
                      data-bs-target={`#${item.id}`}
                      className="hover:text-orange-300"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h6 className="uppercase mb-4 font-semibold text-[#F57C00]">Our Expertise</h6>
              <ul className="space-y-2">
                {[
                  "High-quality Business Cards",
                  "Custom Posters & Banners",
                  "Offset & Digital Printing",
                  "Flyers, Brochures & Invitations",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-green-400 mt-0.5">✔</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-center md:text-left">
              © {new Date().getFullYear()} <strong>Samruddhi Printers</strong>. All Rights Reserved.
            </p>
            <img
              src={main}
              alt="Samruddhi Logo"
              className="w-36 md:ml-auto"
            />
          </div>
        </div>
        <ToastContainer />
      </footer> */}


      {/* <footer className="bg-[#143E61] text-white pt-12 pb-6 text-sm font-sans">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8 mb-10">

           
            <div>
              <h6 className="uppercase mb-4 font-semibold text-[#F57C00] tracking-wide">Contact Us</h6>
              <address className="not-italic space-y-3 leading-relaxed text-[15px] text-white/90">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Samruddhi+Printers,+Marsur+Main+Road,#71+Shop+No+5+Mohan+Reddy+Building,+Marsur+Gate,+Anekal,+Bengaluru,+Karnataka+562106"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#F57C00] transition-colors duration-300 block"
                >
                  📍 #71 Shop No. 5, Marsur Main Road,<br />
                  Mohan Reddy Building, Marsur Gate,<br />
                  Anekal, Bengaluru, Karnataka 562106
                </a>
                <a
                  href="mailto:samruddhiprinterskp@gmail.com"
                  className="hover:text-[#F57C00] transition-colors duration-300 block"
                >
                  ✉️ samruddhiprinterskp@gmail.com
                </a>
                <p>📞 +91 95919 67075</p>
              </address>
            </div>
\
            <div>
              <h6 className="uppercase mb-4 font-semibold text-[#F57C00] tracking-wide">Quick Links</h6>
              <ul className="space-y-3 text-white/90 text-[15px]">
                {[
                  { name: "Home", href: "/" },
                  { name: "About Us", href: "/about" },
                  { name: "Services", href: "/services" },
                  { name: "Gallery", href: "/gallery" },
                ].map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="hover:text-[#F57C00] transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

         
            <div>
              <h6 className="uppercase mb-4 font-semibold text-[#F57C00] tracking-wide">Policies</h6>
              <ul className="space-y-3 text-white/90 text-[15px]">
                {[
                  { id: "terms-conditions", name: "Terms & Conditions" },
                  { id: "refund-policy", name: "Refund Policy" },
                  { id: "shipping-policy", name: "Shipping Policy" },
                  { id: "privacy-policy", name: "Privacy Policy" },
                ].map((item) => (
                  <li key={item.id}>
                    <a
                      href="#"
                      data-bs-toggle="modal"
                      data-bs-target={`#${item.id}`}
                      className="hover:text-[#F57C00] transition-colors duration-300"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

          
            <div>
              <h6 className="uppercase mb-4 font-semibold text-[#F57C00] tracking-wide">Our Expertise</h6>
              <ul className="space-y-3 text-white/90 text-[15px]">
                {[
                  "High-quality Business Cards",
                  "Custom Posters & Banners",
                  "Offset & Digital Printing",
                  "Flyers, Brochures & Invitations",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-green-400 mt-0.5">✔</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

    
          <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-center md:text-left text-white/80 text-[14px]">
              © {new Date().getFullYear()} <strong className="text-white">Samruddhi Printers</strong>. All Rights Reserved.
            </p>
            <img
              src={main}
              alt="Samruddhi Logo"
              className="w-36 md:ml-auto"
            />
          </div>
        </div>

        <ToastContainer />
      </footer> */}

      <footer className="bg-[#143E61] text-white text-sm font-sans m-0">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-wrap gap-y-6 md:gap-y-4 lg:gap-y-0">

            {/* Contact Us */}
            <div className="w-full md:w-1/2 lg:w-1/4 px-2">
              <h6 className="footer-colm-head">Contact Us</h6>
              <p className="leading-relaxed text-sm">

                <span className="block">
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Samruddhi+Printers,+Marsur+Main+Road,#71+Shop+No+5+Mohan+Reddy+Building,+Marsur+Gate,+Anekal,+Bengaluru,+Karnataka+562106"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-link"
                  >
                    <i className="fa fa-map-marker mr-2 w-[25px] float-left"></i>
                    Marsur Main Road, #71 Shop No. 5<br />
                    Mohan Reddy Building, Marsur Gate,<br />
                    Anekal, Bengaluru, Karnataka 562106
                  </a>
                </span>
                <br />

                <span className="block">

                  <a href="mailto:samruddhiprinters@gmail.com" className="footer-link">
                    <i className="fa fa-envelope mr-2 w-[25px] float-left"></i>samruddhiprinters@gmail.com
                  </a>
                </span>
                <br />

                <span className="block footer-link"><i className="fa fa-phone mr-2 w-[25px] float-left"></i>+91 95919 67075</span>
              </p>
            </div>

            {/* Quick Links */}
            <div className="w-full md:w-1/2 lg:w-1/4 px-2">
              <h6 className="footer-colm-head">Quick Links</h6>
              <ul>
                <li><a href="/" className="footer-link">Home</a></li>
                <li><a href="/about" className="footer-link">About Us</a></li>
                <li><a href="/services" className="footer-link">Services</a></li>
                <li><a href="/gallery" className="footer-link">Gallery</a></li>
              </ul>
            </div>

            {/* Policies */}
            <div className="w-full md:w-1/2 lg:w-1/4 px-2">
              <h6 className="footer-colm-head">Policies</h6>
              <ul>
                <li><a href="#" data-bs-toggle="modal" data-bs-target="#terms-conditions" className="footer-link">Terms & Conditions</a></li>
                <li><a href="#" data-bs-toggle="modal" data-bs-target="#refund-policy" className="footer-link">Refund Policy</a></li>
                <li><a href="#" data-bs-toggle="modal" data-bs-target="#shipping-policy" className="footer-link">Shipping Policy</a></li>
                <li><a href="#" data-bs-toggle="modal" data-bs-target="#privacy-policy" className="footer-link">Privacy Policy</a></li>
              </ul>
            </div>

            {/* Our Expertise */}
            <div className="w-full md:w-1/2 lg:w-1/4 px-2">
              <h6 className="footer-colm-head">Our Expertise</h6>
              <ul>
                <li className="footer-link">✔ High-quality Business Cards</li>
                <li className="footer-link">✔ Custom Posters & Banners</li>
                <li className="footer-link">✔ Offset & Digital Printing</li>
                <li className="footer-link">✔ Flyers, Brochures & Invitations</li>
              </ul>
            </div>
          </div>

          <div className="my-6 border-green-600" style={{ borderTop: "2px solid green" }}></div>

          {/* Footer Bottom */}
          <div className=" border-t border-green-600 text-center" >
            <h6 className="text-xs md:text-sm" style={{ margin: 0 }}>
              &#169; {new Date().getFullYear()} Samruddhi Printers. All rights reserved.
            </h6>
          </div>
        </div>

        <style jsx>{`
    .footer-link {
      color: white;
      font-weight: bold;
      text-decoration: none;
      transition: color 0.3s ease-in-out;
      display: inline-block;
      margin-bottom: 6px;
    }

    .footer-link:hover {
      color: #F57C00;
      text-decoration: none;
    }

    .footer-colm-head {
      font-weight: 600;
      text-transform: uppercase;
      margin-bottom: 10px;
      color: #F57C00;
      font-size: 1rem;
    }

    @media (min-width: 576px) {
      .footer-colm-head {
        font-size: 1.1rem;
      }
    }

    @media (min-width: 768px) {
      .footer-colm-head {
        font-size: 1.2rem;
      }
    }

    @media (min-width: 992px) {
      .footer-colm-head {
        font-size: 1.3rem;
      }
    }

    @media (min-width: 1200px) {
      .footer-colm-head {
        font-size: 1.4rem;
      }
    }
  `}</style>
      </footer>




      <div className="modal fade" id="privacy-policy" tabindex="-1" aria-labelledby="" aria-hidden="true" style={{ minWidth: "60%", }}>
        <div className="modal-dialog modal-dialog-scrollable" style={{ minWidth: "50%" }}>
          <div className="modal-content">
            <div className="modal-header" style={{ backgroundColor: "#198754" }}>
              <h4 className="heading-main">Privacy Policy</h4>
              <button type="button" className="btn-close text-white" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body main">
              <div><h6 style={{ color: "black", textAlign: "center" }}>Welcome to www.samruddhiprinters.com</h6></div>
              <p style={{ textAlign: "justify" }}>Your privacy is important to Samruddhi Printers. This Privacy Policy outlines the types of personal information we collect, how we use and protect it, and your rights concerning your data.</p>

              <p className="text-dark font-weight-bold">Information Collection</p>
              <p>We collect personal information such as your name, contact details, shipping address, email, and order details when you place an order or contact us. This information is necessary to process your order and provide support.</p>

              <p className="text-dark font-weight-bold">Use of Information</p>
              <p>Your information is used solely for order fulfillment, customer service, and internal record-keeping. We do not sell, rent, or share your personal data with third parties, except as required by law or for shipping and payment processing.</p>

              <p className="text-dark font-weight-bold">Data Security</p>
              <p>We take appropriate measures to protect your personal data against unauthorized access, alteration, or disclosure. Payment information is processed using secure, third-party payment gateways, and we do not store any sensitive financial data on our servers.</p>

              <p className="text-dark font-weight-bold">Cookies</p>
              <p>Our website may use cookies to enhance your browsing experience and improve website functionality. You can adjust your browser settings to refuse cookies, although this may impact certain features of our website.</p>

              <p className="text-dark font-weight-bold">Your Rights</p>
              <p>You have the right to access, update, or request the deletion of your personal information at any time. To do so, please contact us via the contact information provided below.</p>

              <p className="text-dark font-weight-bold">Changes to This Policy</p>
              <p>We may update this Privacy Policy periodically to reflect changes in our practices. Please review this policy regularly to stay informed about how we protect your data.</p>

              <p style={{ textAlign: "justify" }}>If you have questions or concerns about this Privacy Policy, please contact:
                <a href="mailto:samruddhiprinterskp@gmail.com"> samruddhiprinterskp@gmail.com</a> | 📞 +91 95919 67075
              </p>
            </div>

            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" style={{ background: "#1da912", border: "none" }}>Close</button>

            </div>
          </div>
        </div>
      </div>



      <div className="modal fade" id="shipping-policy" tabindex="-1" aria-labelledby="" aria-hidden="true" style={{ minWidth: "60%" }}>
        <div className="modal-dialog modal-dialog-scrollable" style={{ minWidth: "50%" }}>
          <div className="modal-content">
            <div className="modal-header" style={{ backgroundColor: "#198754" }}>
              <h4 className="heading-main">Shipping Policy</h4>
              <button type="button" className="btn-close text-white" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body main">
              <div><h6 style={{ color: "black", textAlign: "center" }}>Welcome to www.samruddhiprinters.com</h6></div>
              <p style={{ textAlign: "justify" }}>Our shipping policy outlines the terms and conditions under which Samruddhi Printers will process and deliver your orders. By placing an order, you agree to the shipping terms described below.</p>

              <p className="text-dark font-weight-bold">Delivery Options</p>
              <p>We offer local pickup from our shop or delivery via trusted third-party courier services. Delivery options will be finalized and communicated during order confirmation.</p>

              <p className="text-dark font-weight-bold">Dispatch Timeframe</p>
              <p>Most orders are dispatched within 3–7 working days after design approval and payment confirmation. The dispatch time may vary depending on order size and complexity.</p>

              <p className="text-dark font-weight-bold">Shipping Charges</p>
              <p>Shipping charges are calculated based on order size, weight, and destination. Customers will be informed of the applicable charges prior to dispatch.</p>

              <p className="text-dark font-weight-bold">Shipping Delays</p>
              <p>While we strive to meet estimated delivery dates, Samruddhi Printers is not liable for delays caused by the courier, weather, public holidays, or other circumstances beyond our control.</p>

              <p className="text-dark font-weight-bold">Damaged Shipments</p>
              <p>If your order is damaged during transit, please report the issue within 48 hours of receipt with clear photos of the damaged items and packaging. We will liaise with the courier company and provide a suitable resolution which may include a reprint or replacement.</p>

              <p className="text-dark font-weight-bold">Tracking & Delivery Issues</p>
              <p>Once your order is shipped, a tracking number will be provided. Please follow up with the courier service directly for any transit updates. Samruddhi Printers is not responsible for failed deliveries due to incomplete or incorrect address information.</p>

              <p style={{ textAlign: "justify" }}>For any questions about shipping or your order status, please contact:
                <a href="mailto:samruddhiprinterskp@gmail.com"> samruddhiprinterskp@gmail.com</a> | 📞 +91 95919 67075
              </p>
            </div>

            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" style={{ background: "#1da912", border: "none" }}>Close</button>

            </div>
          </div>
        </div>
      </div>



      <div className="modal fade" id="refund-policy" tabindex="-1" aria-labelledby="" aria-hidden="true" style={{ minWidth: "60%", }}>
        <div className="modal-dialog modal-dialog-scrollable" style={{ minWidth: "50%" }}>
          <div className="modal-content">
            <div className="modal-header" style={{ backgroundColor: "#198754" }}>
              <h4 className="heading-main">Refund Policy</h4>
              <button type="button" className="btn-close text-white" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body main">
              <div><h6 style={{ color: "black", textAlign: "center" }}>Welcome to www.samruddhiprinters.com</h6></div>
              <p style={{ textAlign: "justify" }}>This refund policy outlines the terms and conditions under which Samruddhi Printers will process refunds or reprints. By placing an order, you agree to the terms specified herein.</p>

              <p className="text-dark font-weight-bold">No Refunds After Production</p>
              <p>Once your order enters the printing process, refunds cannot be offered. Please ensure all design files and order details are correct prior to approval.</p>

              <p className="text-dark font-weight-bold">Eligible Refunds & Reprints</p>
              <p>Refunds or complimentary reprints are only considered if Samruddhi Printers is responsible for errors such as wrong size, incorrect color, or damaged print quality. The issue must be reported within 3 working days of order receipt along with supporting photos.</p>

              <p className="text-dark font-weight-bold">Non-Refundable Charges</p>
              <p>Design fees, setup charges, shipping fees, and any third-party transaction fees are non-refundable under all circumstances.</p>

              <p className="text-dark font-weight-bold">Refund Process</p>
              <p>Once your refund or reprint request is approved, we will process the refund within 7–10 business days using the original method of payment.</p>

              <p className="text-dark font-weight-bold">Cancellations Before Printing</p>
              <p>Orders can be canceled prior to production. Cancellations may incur a design or administrative fee. Please contact us as soon as possible to check eligibility.</p>

              <p className="text-dark font-weight-bold">Shipping Damage</p>
              <p>If your order is damaged during shipping, please report it within 48 hours along with clear photos. Samruddhi Printers will liaise with the courier company to resolve the issue and may offer a reprint or replacement as appropriate.</p>

              <p style={{ textAlign: "justify" }}>For questions about this policy or your order status, please reach out to:
                <a href="mailto:samruddhiprinterskp@gmail.com"> samruddhiprinterskp@gmail.com</a> | 📞 +91 95919 67075
              </p>
            </div>

            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" style={{ background: "#1da912", border: "none" }}>Close</button>

            </div>
          </div>
        </div>
      </div>



      <div className="modal fade" id="terms-conditions" tabindex="-1" aria-labelledby="" aria-hidden="true" style={{ minWidth: "60%", }}>
        <div className="modal-dialog modal-dialog-scrollable" style={{ minWidth: "50%" }}>
          <div className="modal-content">
            <div className="modal-header" style={{ backgroundColor: "#198754" }}>
              <h4 className="heading-main">Terms and Conditions</h4>
              <button type="button" className="btn-close text-[#143E61]" data-bs-dismiss="modal" aria-label="Close" style={{ color: "#143E61" }}></button>
            </div>
            <div className="modal-body main">
              <div><h6 style={{ color: "black", textAlign: "center" }}>Welcome to www.samruddhiprinters.com</h6></div>
              <p style={{ textAlign: "justify" }}>These terms and conditions govern your use of the Samruddhi Printers website and our printing services. By accessing or using the website and our services, you agree to comply with and be bound by these terms.</p>

              <p className="text-dark font-weight-bold">Services Offered</p>
              <p>Samruddhi Printers offers professional offset, digital, and custom printing solutions including business cards, brochures, posters, flyers, invitations, banners, and customized print products. Additional services may include design assistance, printing consultations, and delivery options.</p>

              <p className="text-dark font-weight-bold">Design & Content Approval</p>
              <p>Customers must review and approve all artwork and content before printing. Samruddhi Printers is not liable for errors (spelling, color, placement) after client approval.</p>

              <p className="text-dark font-weight-bold">Payment Terms</p>
              <p>Orders require full or partial advance payment depending on scope. Remaining balance must be paid before dispatch. Accepted methods include Net Banking, UPI, Cash, Demand Draft. Returned cheques may incur administrative fees and repeat defaults may require future cash-only transactions.</p>

              <p className="text-dark font-weight-bold">Cancellations</p>
              <p>Orders can be canceled only prior to production. Once printing begins, cancellation is not possible. Pre-production cancellations may incur a design or service charge.</p>

              <p className="text-dark font-weight-bold">Delivery & Turnaround</p>
              <p>Turnaround times vary and will be provided at order confirmation. Samruddhi Printers is not liable for delays caused by third parties or unforeseen circumstances such as natural disasters or strikes.</p>

              <p className="text-dark font-weight-bold">Limitation of Liability</p>
              <p>Samruddhi Printers shall not be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with the use of our services or any unauthorized access to your data.</p>

              <p className="text-dark font-weight-bold">Links from this Website</p>
              <p>Our website may contain links to third-party sites. Samruddhi Printers is not responsible for their content or privacy practices and accepts no responsibility for any loss resulting from your disclosure of personal information on these sites.</p>

              <p className="text-dark font-weight-bold">Copyright Notice</p>
              <p>All content and intellectual property on this website, including logos, images, and designs, is owned by Samruddhi Printers and is protected under applicable Indian laws.</p>

              <p className="text-dark font-weight-bold">Governing Law</p>
              <p>These terms and conditions are governed by Indian law. By using our services, you consent to the exclusive jurisdiction of the courts in Karnataka.</p>

              <p className="text-dark font-weight-bold">Privacy & Security</p>
              <p>We take privacy seriously and use standard security measures to protect your data. Please refer to our Privacy Policy section for detailed information about data collection, storage, and usage.</p>

              <p style={{ textAlign: "justify" }}>For any questions about these terms or your orders, please contact us at:
                <a href="mailto:samruddhiprinterskp@gmail.com"> samruddhiprinterskp@gmail.com</a> | 📞 +91 95919 67075
              </p>
            </div>

            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" style={{ background: "#1da912", border: "none" }}>Close</button>

            </div>
          </div>
        </div>
      </div>



      <ToastContainer />

    </div>
  );
}

export default Footer;

