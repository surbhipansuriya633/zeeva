import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaMailBulk,
  FaPinterest,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";
import { IoArrowRedoCircleOutline } from "react-icons/io5";
import { MdOutlineArrowOutward, MdWifiCalling3 } from "react-icons/md";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="footer_bg text-white">
        <div className="container">
          <div className="row p-0 m-0 py-3">
            <div
              className="col-12 col-lg-4 col-md-8 pt-4"
              data-aos="zoom-in"
              data-aos-duration="1800"
              data-aos-once="true"
            >
              <div>
                <img
                  src={require("../Assets/Image/Zeeva logo_black_bg.jpg")}
                  alt=""
                  className="img-fluid"
                />
              </div>
              <div className="text-white pera py-1">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut,
                delectus! amet consectetur adipisicing elit. Ut, delectus
              </div>
              <div className="d-flex fs-4 my-3">
                <Link
                  to={'/'}
                  target="_blank"
                  className="footericon text-center p-2 mx-1  ms-0 d-flex text-decoration-none text-white facebookicon"
                >
                  <FaFacebookF />
                </Link>
                <Link
                  to={'/'}
                  target="_blank"
                  className="footericon text-center p-2  mx-1 d-flex text-decoration-none text-white twittericon"
                >
                  <FaTwitter />
                </Link>
                <Link className="footericon text-center p-2  mx-1 d-flex text-decoration-none text-white instaicon">
                  <FaInstagram />
                </Link>
                <Link
                  to={'/'}
                  target="_blank"
                  className="footericon text-center p-2  mx-1 d-flex text-decoration-none text-white linkicon"
                >
                  <FaLinkedinIn />
                </Link>
                <Link
                  to={'/'}
                  target="_blank"
                  className="footericon text-center p-2  mx-1 d-flex text-decoration-none text-white youtubeicon"
                >
                  <FaYoutube />
                </Link>
                <Link
                  to={'/'}
                  target="_blank"
                  className="footericon text-center p-2  mx-1 d-flex text-decoration-none text-white pintresticon"
                >
                  <FaPinterest />
                </Link>
              </div>
            </div>

            <div
              className="col-12 col-lg-4 col-md-4 col-sm-5 ps-2 ps-lg-5 pt-4"
              data-aos="zoom-in"
              data-aos-duration="1800"
              data-aos-once="true"
            >
              <div className="ps-0 ps-lg-5">
                <div className="zeeva_tittle textcolor">Quicked Link</div>
                <div className="p-1 pera pt-2 pt-3">
                  <Link
                    to={"/"}
                    className="text-decoration-none linktext_hover fw-medium"
                  >
                    <span className="pe-1 fs-6">
                      <IoArrowRedoCircleOutline />
                    </span>
                    Home
                  </Link>
                </div>
                <div className="p-1 pera pt-2">
                  <Link
                    to={"/aboutus"}
                    className="text-decoration-none linktext_hover fw-medium"
                  >
                    <span className="pe-1 fs-6">
                      <IoArrowRedoCircleOutline />
                    </span>
                    About
                  </Link>
                </div>
                <div className="p-1 pera pt-2">
                  <Link
                    to={"/"}
                    className="text-decoration-none linktext_hover fw-medium"
                  >
                    <span className="pe-1 fs-6">
                      <IoArrowRedoCircleOutline />
                    </span>
                    Why Us
                  </Link>
                </div>
                <div className="p-1 pera pt-2">
                  <Link
                    to={"/"}
                    className="text-decoration-none linktext_hover fw-medium"
                  >
                    <span className="pe-1 fs-6">
                      <IoArrowRedoCircleOutline />
                    </span>
                    Industries
                  </Link>
                </div>
                <div className="p-1 pera pt-2">
                  <Link
                    to={"/"}
                    className="text-decoration-none linktext_hover fw-medium"
                  >
                    <span className="pe-1 fs-6">
                      <IoArrowRedoCircleOutline />
                    </span>
                    Products
                  </Link>
                </div>
                <div className="p-1 pera pt-2">
                  <Link
                    to={"/"}
                    className="text-decoration-none linktext_hover fw-medium"
                  >
                    <span className="pe-1 fs-6">
                      <IoArrowRedoCircleOutline />
                    </span>
                    Sustainablility
                  </Link>
                </div>
                <div className="p-1 pera pt-2">
                  <Link
                    to={"/"}
                    className="text-decoration-none linktext_hover fw-medium"
                  >
                    <span className="pe-1 fs-6">
                      <IoArrowRedoCircleOutline />
                    </span>
                    Partnership
                  </Link>
                </div>
                <div className="p-1 pera pt-2">
                  <Link
                    to={"/contactus"}
                    className="text-decoration-none linktext_hover fw-medium"
                  >
                    <span className="pe-1 fs-6">
                      <IoArrowRedoCircleOutline />
                    </span>
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>

            <div
              className="col-12 col-md-12 col-sm-7 col-lg-4 pt-4"
              data-aos="zoom-in"
              data-aos-duration="1800"
              data-aos-once="true"
            >
              <div>
                <div className="zeeva_tittle textcolor">Contact Details</div>
                <div className="p-1 pera pt-2">
                  <Link
                    to={
                      "https://www.google.com/maps/place/21%C2%B011'27.2%22N+72%C2%B044'32.2%22E/@21.1908744,72.7396886,17z/data=!3m1!4b1!4m4!3m3!8m2!3d21.1908744!4d72.7422635?entry=ttu"
                    }
                    target="_blank"
                    className="text-decoration-none linktext_hover fw-medium"
                  >
                    <span className="pe-2 fs-4">
                      <FaMapLocationDot />
                    </span>
                    3rd Floor, 157 Amrut Udhyog Nagar-1, Kamrej,
                    Surat, Gujarat, India-395013
                  </Link>
                </div>
                <div className="p-1 pera ">
                  <Link
                    to="mailto:abcdef@gmail.com"
                    target="_blank"
                    className="text-decoration-none linktext_hover fw-medium"
                  >
                    <span className="pe-2 fs-4">
                      <FaMailBulk />
                    </span>
                    zeevachemical@gmail.com<br />
                  </Link>
                </div>
                <div className="p-1 pera ">
                  <Link
                    to={"tel:+91 8048971629"}
                    className="text-decoration-none linktext_hover fw-medium"
                  >
                    <span className="pe-2 fs-4">
                      <MdWifiCalling3 />
                    </span>
                    +91 96875 23999
                  </Link>
                </div>
                <div className="p-1 pera ">
                  <div className="zeeva_tittle textcolor mb-2"><span style={{ fontSize: "12px" }}> Explore Our</span><br /> Color Spray Shade <span className="">Gallery</span></div>
                  <div className="mb-3">
                    <img src={require('../Assets/Image/broucher_image/Zeeva Brochure final draft_pages-to-jpg-0003.jpg')} alt="" height={50} width={50} className="ms-1" />
                    <img src={require('../Assets/Image/broucher_image/Zeeva Brochure final draft_pages-to-jpg-0003.jpg')} alt="" height={50} width={50} className="ms-1" />
                    <img src={require('../Assets/Image/broucher_image/Zeeva Brochure final draft_pages-to-jpg-0003.jpg')} alt="" height={50} width={50} className="ms-1" />
                    <img src={require('../Assets/Image/broucher_image/Zeeva Brochure final draft_pages-to-jpg-0003.jpg')} alt="" height={50} width={50} className="ms-1" />
                  </div>
                  <div className="zeeva_tittle"><span></span></div>
                  <button className="button m-auto" style={{ "--clr": "var(--gold)" }}>
                    <span className="button__icon-wrapper">
                      <MdOutlineArrowOutward className="button__icon-svg" width="10" />
                      <MdOutlineArrowOutward className="button__icon-svg button__icon-svg--copy" width="10" />
                    </span>
                    Explore now
                  </button>
                </div>
              </div>
            </div>
          </div>
          <p
            className="border-top border-secondary text-center p-3 m-0"
            style={{ fontSize: "12px" }}
          >
            Copyright ©Zeeva Chemical LLP. All Rights Reserved
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;