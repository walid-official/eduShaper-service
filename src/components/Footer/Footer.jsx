import React from "react";
import footerLogo from "../../assets/images/logo4.png";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    // className="bg-center bg-cover text-white" style={{backgroundImage: `url(https://t3.ftcdn.net/jpg/04/95/12/38/360_F_495123890_u9dfRTJx2MrYXWs8Rd1eUibMAeVyXXP9.jpg)`}}
    <div
      className="bg-center bg-cover text-white "
      style={{
        backgroundImage: `url(https://img.freepik.com/free-photo/studio-background-concept-abstract-empty-light-gradient-purple-studio-room-background-product_1258-68131.jpg)`,
      }}
    >
      <footer className="lg:flex w-11/12 border-b mx-auto justify-between px-10 py-20">
        <div>
          <div className="flex gap-2 items-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/4319/4319160.png"
              className="w-20"
              alt=""
            />
            <h2 className="font-bold text-xl">EduSphere</h2>
          </div>
          <div className="pl-4">
            <h2 className="font-bold text-xl">Learn from the Best</h2>
            <p className="font-bold">
              Empowering students with top-tier education services since 2010.
            </p>
          </div>
        </div>

        <div className="pt-10">
          <h6 className="footer-title">Services</h6>
          <Link to="/add-service" className="link link-hover block">Add Service</Link>
          <Link to="/ManageService" className="link link-hover block">Manage Service</Link>
          <Link to="/BookedServices" className="link link-hover block">Booked Service</Link>
          <Link to="/service-to-do" className="link link-hover block">Service-To-Do</Link>
        </div>
        <div className="pt-10">
          <h6 className="footer-title">Company</h6>
          <Link to="/about" className="link link-hover block">About us</Link>
          <Link to="/contact" className="link link-hover block">Contact</Link>
          <a href="https://bdjobs.com/" target="_blank" className="link link-hover block">Jobs</a>
          <a href="https://www.prezly.com/academy/press-kit-101-what-to-include-to-get-earned-media-coverage" target="_blank" className="link link-hover block">Press kit</a>
        </div>
        <div className="pt-10">
          <h6 className="footer-title">Legal</h6>
          <a href="https://en.wikipedia.org/wiki/Terms_of_service" target="_blank" className="link link-hover block">Terms of use</a>
          <a href="https://www.privacypolicygenerator.info/" target="_blank" className="link link-hover block">Privacy policy</a>
          <a href="https://www.accenture.com/us-en/support/company-cookies-similar-technology" target="_blank" className="link link-hover block">Cookie policy</a>
        </div>
      </footer>
      <footer className="footer w-11/12 mx-auto px-14 py-8 items-center p-4">
        <aside className="grid-flow-col items-center font-bold">
          <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
        </aside>
        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
            </svg>
          </a>
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
            </svg>
          </a>
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
            </svg>
          </a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
