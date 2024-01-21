import { Input } from 'postcss';
import React from 'react';
import { useState } from 'react';
export default function page(){
    return(
<>

{/* <!-- Page Header Start --> */}
    <div className="container-fluid page-header py-5 mb-5 wow fadeIn" dir='rtl' data-wow-delay="0.1s">
        <div className="container py-5">
            <h1 className="display-1 text-white animated slideInDown">تواصل معنا</h1>
            <nav aria-label="breadcrumb animated slideInDown">
                <ol className="breadcrumb text-uppercase mb-0">
                    <li className="breadcrumb-item"><a className="text-white" href="#">Home</a></li>
                    <li className="breadcrumb-item"><a className="text-white" href="#">Pages</a></li>
                    <li className="breadcrumb-item text-primary active" aria-current="page">Contact Us</li>
                </ol>
            </nav>
        </div>
    </div>
    {/* <!-- Page Header End --> */}
{/* <!-- Contact Start --> */}
    <div className="container-xxl py-5" >
        <div className="container">
            <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth:600}}>
                <h4 className="section-title">تواصل معنا</h4>
                <h1 className="display-5 mb-4">إذا كان لديك أي استفسار ، فلا تتردد في الاتصال بنا</h1>
            </div>
            <div className="row g-5">
                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="d-flex flex-column justify-content-between h-100">
                        <div className="bg-light d-flex align-items-center w-100 p-4 mb-4">
                            <div className="d-flex flex-shrink-0 align-items-center justify-content-center bg-dark" style={{width: "55px" , height: "55px"}}>
                                <i className="fa fa-map-marker-alt text-primary"></i>
                            </div>
                            <div className="ms-4">
                                <p className="mb-2">العنوان</p>
                                <h3 className="mb-0">Akhbab, Taif 26513, Saudi Arabia</h3>
                            </div>
                        </div>
                        <div className="bg-light d-flex align-items-center w-100 p-4 mb-4">
                            <div className="d-flex flex-shrink-0 align-items-center justify-content-center bg-dark" style={{width: "55px", height: "55px"}}>
                                <i className="fa fa-phone-alt text-primary"></i>
                            </div>
                            <div className="ms-4">
                                <p className="mb-2">تواصل الان</p>
                                <h3 className="mb-0">920033002</h3>
                            </div>
                        </div>
                        <div className="bg-light d-flex align-items-center w-100 p-4">
                            <div className="d-flex flex-shrink-0 align-items-center justify-content-center bg-dark" style={{width: "55px", height: "55px"}}>
                                <i className="fa fa-envelope-open text-primary"></i>
                            </div>
                            <div className="ms-4">
                                <p className="mb-2">البريد الالكتروني</p>
                                <h3 className="mb-0">info@alusaifer.com.sa</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                    <p className="mb-4" dir='rtl'>يسعدنا الاجابة عن استفسارتكم</p>
                    <form>
                        <div className="row g-3">
                            <div className="col-md-6">
                                <div className="form-floating">
                                    <input type="text" className="form-control" id="name" placeholder="Your Name"/>
                                    <label itemType="name" dir='rtl' >الاسم</label>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-floating">
                                    <input type="email" className="form-control" id="email" placeholder="Your Email"/>
                                    <label itemType="email" dir='rtl'>البريد الالكتروني</label>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-floating">
                                    <input type="text"  className="form-control" id="subject" placeholder="Subject"/>
                                    <label itemType="subject">الموضوع</label>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-floating">
                                    <textarea className="form-control" placeholder="Leave a message here" id="message" style={{height: "100px"}}></textarea>
                                    <label itemType="message">الرسالة</label>
                                </div>
                            </div>
                            <div className="col-12">
                                <button className="btn btn-primary w-100 py-3" type="submit">ارسال</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  


</>

    )
}