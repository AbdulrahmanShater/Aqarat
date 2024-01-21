import React from "react";
export default function HeroSection() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };
  return (
    

    <div className="container-fluid p-0 pb-5 wow fadeIn" data-wow-delay="0.1s" dir='rtl'>
        <div className="owl-carousel header-carousel position-relative">
            <div className="owl-carousel-item position-relative" data-dot="<img src='img/carousel-1.jpg'>">
                <img className="img-fluid" src="img/carousel-1.jpg" alt=""/>
                <div className="owl-carousel-inner">
                    <div className="container">
                        <div className="row justify-content-start">
                            <div className="col-10 col-lg-8">
                                <h1 className="display-1 text-white animated slideInDown">فخامة الاسم تعني فخامة المكان </h1>
                                <p className="fs-5 fw-medium text-white mb-4 pb-3"></p>
                                <a href="" className="btn btn-primary py-3 px-5 animated slideInLeft">المزيد</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="owl-carousel-item position-relative" data-dot="<img src='img/carousel-2.jpg'>">
                <img className="img-fluid" src="img/carousel-2.jpg" alt=""/>
                <div className="owl-carousel-inner">
                    <div className="container">
                        <div className="row justify-content-start">
                            <div className="col-10 col-lg-8">
                                <h1 className="display-1 text-white animated slideInDown">Best Architecture And Interior Design Services</h1>
                                <p className="fs-5 fw-medium text-white mb-4 pb-3">Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.</p>
                                <a href="" className="btn btn-primary py-3 px-5 animated slideInLeft">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            {/* <div className="owl-carousel-item position-relative" data-dot="<img src='img/carousel-3.jpg'>">
                <img className="img-fluid" src="img/carousel-3.jpg" alt=""/>
                <div className="owl-carousel-inner">
                    <div className="container">
                        <div className="row justify-content-start">
                            <div className="col-10 col-lg-8">
                                <h1 className="display-1 text-white animated slideInDown">Best Architecture And Interior Design Services</h1>
                                <p className="fs-5 fw-medium text-white mb-4 pb-3">Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.</p>
                                <a href="" className="btn btn-primary py-3 px-5 animated slideInLeft">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    </div>
  );
}
