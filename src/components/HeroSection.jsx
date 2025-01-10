import React from "react";
import HeroImage from "./HeroImage.svg";

function HeroSection() {
    return <div className="row flex-lg-row-reverse align-items-center g-5 " id="herosection">
    <div className="col-10 col-sm-8 col-lg-6" >
      <img src={HeroImage} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" loading="lazy" id="heroimage" />
    </div>
    <div className="col-lg-6 " >
      <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3" id="heroheading" >React: The Future of Web Development</h1>
      <p id="herosubtitle" className="lh-3"><strong>Efficient, Flexible, and Scalable Websites for Modern Needs</strong></p>
      <p className="lead" id="herocontent">"Explore why React is the go-to choice for developers worldwide. Let's build something amazing together!"</p>
      <div className="d-grid gap-2 d-md-flex justify-content-md-start">
        <button type="button" className="btn btn-primary btn-lg px-4 me-md-2" >Explore</button>
      </div>
    </div>
  </div>
}

export default HeroSection;