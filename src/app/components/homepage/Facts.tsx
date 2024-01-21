import React, { Component } from 'react';
import PropTypes from 'prop-types';


export default function HeroSection() {
 

    return (
      <div className="container-xxl py-5">
      <div className="container pt-5">
          <div className="row g-4">
              <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                  <div className="fact-item text-center bg-light h-100 p-5 pt-0">
                      <div className="fact-icon">
                          <img src="img/icons/icon-2.png" alt="Icon"/>
                      </div>
                      <h3 className="mb-3">ضمان وامان </h3>
                <p className="mb-0">نقدم لك جميع الضمانات على منزلك الاول </p>
               </div>
              </div>
              <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                  <div className="fact-item text-center bg-light h-100 p-5 pt-0">
                      <div className="fact-icon">
                          <img src="img/icons/icon-3.png" alt="Icon"/>
                      </div>
                      <h3 className="mb-3">نسهلها عليك</h3>
                <p className="mb-0">
                  سهلنا لك اجراءات البنك والدفعه الاولى علينا{" "}
                </p>
                 </div>
              </div>
              <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                  <div className="fact-item text-center bg-light h-100 p-5 pt-0">
                      <div className="fact-icon">
                          <img src="img/icons/icon-4.png" alt="Icon"/>
                      </div>
                      <h3 className="mb-3">نحفط وقتك</h3>
                <p className="mb-0">
                  في عقار محمد الاصيفر نوفر عليك عناء تملك بيتك
                </p>
                  </div>
              </div>
          </div>
      </div>
  </div>
    );
  }

