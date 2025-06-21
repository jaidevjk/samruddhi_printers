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

function Footer() {
  const [show, setShow] = useState(false);
  const handleClose = () => { setShow(false) };
  const handleShow = () => setShow(true);

  // const Subscriber = async (e) => {
  //   e.preventDefault();
  //   const Subscriber = e.target.subscriber.value;
  //   let objectOb = {

  //     email: Subscriber,


  //   }

  //   await axios
  //     .post(API + '/subscribe', objectOb)
  //     .then((response) => {
  //       toast.success("Successfully subscribed.", { position: "top-center", });
  //       e.target.subscriber.value = " ";
  //     })
  //     .catch((error) => {
  //       toast.error(error.response.data, { position: "top-center", });
  //     })
  // }

  return (
    <div className="">


      <footer style={{ margin: "0px" }}>

        <div className="row " style={{ margin: "5px", marginTop: "20px" }}>
          <div className="col-12 col-sm-12 col-lg-3 col-md-6 footer-info" >
            <h6 className='footer-colm-head'>contact us</h6>
            <p style={{ color: "#fff" }}>
              {/* <i className="fa fa-map-marker" style={{ float: "left", padding: "0px", width: "25px", }}></i><span>
                <a href="https://www.google.com/maps/place/Multiplex+Drone+Pvt+Ltd/@12.9616582,77.516885,15z/data=!4m12!1m6!3m5!1s0x0:0xb5274ccd5d4d87ed!2sMultiplex+Drone+Pvt+Ltd!8m2!3d12.9609916!4d77.5168571!3m4!1s0x0:0xb5274ccd5d4d87ed!8m2!3d12.9609916!4d77.5168571?hl=enhttps://maps.app.goo.gl/H5xbVToJ86bMxiPeA"
                  target="_blank" style={{ color: "inherit", textDecoration: "none", marginBottom: "25px" }}>No.50/1,Manasanagar,
                  <br /><span style={{ paddingLeft: "25px", }}>Nagarbhavi,Bangalore-560072</span></a></span>
              <br /> */}
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
                  {/* Samruddhi Printers,
                  <br /> */}
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
              {/* <i className="fa fa-phone" aria-hidden="true" style={{ float: "left", padding: "0px", width: "25px", }}></i><span>+91-6362900041</span> */}
            </p>
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-6  blok-link footer-link" style={{ margin: "0px", padding: "0px" }}>
            <div className="row" style={{ margin: "0px" }}>
              <ul className="col-4 col-sm-4 col-lg-4 col-md-4 support-pages">
                <h6 className='footer-colm-head'>Pages</h6>
                <li ><a href="/">Home</a></li>
                <li><a href="/about">About us</a></li>
                {/* <li><a href="/products">Products</a></li> */}
                <li><a href="/services">Services</a></li>
              </ul>


              <ul className="col-4 col-sm-4 col-lg-4 col-md-4 support-foot">
                <h6 className='footer-colm-head'>information</h6>
                <li><a href="/gallery">Gallery</a></li>
                {/* <li><a href="/newsandevent">News & Events</a></li>
                <li><a href="/career">Careers</a></li>
                <li style={{ visibility: "visible" }}><a href="/training">Training</a></li>
               */}
              </ul>

              <ul className="col-4 col-sm-4 col-lg-3 col-md-4 support-foot" >
                <h6 className='footer-colm-head'>support</h6>
                <li><a href="#" data-bs-toggle="modal" data-bs-target="#terms-conditions">Terms & Conditions</a></li>
                <li><a href="#" data-bs-toggle="modal" data-bs-target="#refund-policy">Refund Policy</a></li>
                <li><a href="#" data-bs-toggle="modal" data-bs-target="#shipping-policy">Shipping Policy</a></li>
                <li ><a href="#" data-bs-toggle="modal" data-bs-target="#privacy-policy">Privacy Policy</a></li>
              </ul>
            </div>

          </div>

          <div className="col-12 col-sm-12 col-md-6 col-lg-3  footer-subscribe">
            <h6 className='footer-colm-head'>subscribe</h6>
            <form className="subscribe-form" >
              {/* <form className="subscribe-form" onSubmit={Subscriber} */}
              <div className="input-group mb-3">
                <input type="email" className="form-control" name="subscriber" placeholder="subscribe" aria-label="Username" aria-describedby="basic-addon1" required />
                <button className="input-group-text text-light" style={{ backgroundColor: "#1da912" }}>send</button>
              </div>
            </form>
          </div>
        </div>
        {/* <br /> */}

        {/* <div className="" style={{ textAlign: "center", padding: "0px", paddingRight: "0%", width: "100%", margin: "0px" }}>
          <a href="#" className="logo-disappear" style={{ textAlign: "center", padding: "0px" }}><img src={main} alt="logo" style={{ height: "60px", width: "300px", textAlign: "center", paddingRight: "0%" }} /></a>

        </div> */}
        {/* <div className="footer-bottom" style={{ margin: "0px", padding: "0px" }}>
          <div className="row justify-content-between copyright" style={{ margin: "0px" }}>
            <div className="col-12 col-md-4 copyRightHolder v-II text-center pt-md-2 pb-md-2 py-2">
              <p className="mb-0">
                &#169; Copyright : <a>Samruddhi Printers.</a>
              </p>
            </div>
            <div
              className="col-12 col-md-3 mt-2"
              style={{ marginTop: "20px !important", color: " #fff" }}
            >
              <p className="text-center">
                <a href="/" className="logo-disappear">
                  <img src={main} width={"20%"} alt="" />
                </a>

              </p>
            </div>

          </div>

        </div> */}
        <div className="footer-bottom" style={{ margin: "0px", padding: "0px", paddingTop: "10px", borderTop: "2px solid green" }}>
          <div className="row  copyright" style={{ margin: "0px", padding: "0px", }}>
            <div className="col-12 col-md-4 copyRightHolder v-II text-center" style={{ margin: "0px", padding: "0px", }}>
              <h6 className="">
                &#169; Copyright : <a>Samruddhi Printers.</a>
              </h6>
            </div>
            {/* <div
              className="col-12 col-md-3 mt-2"
              style={{ marginTop: "20px !important", color: " #fff" }}
            >
              <p className="text-center">
                <a href="/" className="logo-disappear">
                  <img src={main} width={"20%"} alt="" />
                </a>

              </p>
            </div> */}

          </div>

        </div>
      </footer>




      <div className="modal fade" id="privacy-policy" tabindex="-1" aria-labelledby="" aria-hidden="true" style={{ minWidth: "60%", }}>
        <div className="modal-dialog modal-dialog-scrollable" style={{ minWidth: "50%" }}>
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="heading-main">Privacy Policy</h4>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
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
                <a href="mailto:info@samruddhiprinters.com"> info@samruddhiprinters.com</a> | 📞 +91-90000-00000
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
            <div className="modal-header">
              <h4 className="heading-main">Shipping Policy</h4>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
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
                <a href="mailto:info@samruddhiprinters.com"> info@samruddhiprinters.com</a> | 📞 +91-90000-00000
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
            <div className="modal-header">
              <h4 className="heading-main">Refund Policy</h4>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
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
                <a href="mailto:info@samruddhiprinters.com"> info@samruddhiprinters.com</a> | 📞 +91-90000-00000
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
            <div className="modal-header">
              <h4 className="heading-main">Terms and Conditions</h4>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
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
                <a href="mailto:info@samruddhiprinters.com"> info@samruddhiprinters.com</a> | 📞 +91-90000-00000
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




