import React from 'react';
export default function page(){
    return(
<div>
<div className="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
    <div className="container py-5">
        <h1 className="display-1 text-white animated slideInDown">404 Error</h1>
        <nav aria-label="breadcrumb animated slideInDown">
            <ol className="breadcrumb text-uppercase mb-0">
                <li className="breadcrumb-item"><a className="text-white" href="#">Home</a></li>
                <li className="breadcrumb-item"><a className="text-white" href="#">Pages</a></li>
                <li className="breadcrumb-item text-primary active" aria-current="page">404 Error</li>
            </ol>
        </nav>
    </div>
</div>
{/* <!-- Page Header End -->


<!-- 404 Start --> */}
<div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
    <div className="container text-center">
        <div className="row justify-content-center">
            <div className="col-lg-6">
                <i className="bi bi-exclamation-triangle display-1 text-primary"></i>
                <h1 className="display-1">404</h1>
                <h1 className="mb-4">الصفحه غير موجوده</h1>
                <p className="mb-4">عذرا، الصفحة التي تبحثت عنها غير موجودة في موقعنا! انتقل إلى صفحتنا الرئيسية أو حاول استخدام البحث؟</p>
                <a className="btn btn-primary py-3 px-5" href="">الرجوع الى الصفحه الرئسية </a>
            </div>
        </div>
    </div>
</div>
{/* <!-- 404 End -->
    

<!-- Footer Start --> */}
<div className="container-fluid bg-dark text-body footer mt-5 pt-5 px-0 wow fadeIn" data-wow-delay="0.1s">
    <div className="container py-5">
        <div className="row g-5">
            <div className="col-lg-3 col-md-6">
                <h3 className="text-light mb-4">Address</h3>
                <p className="mb-2"><i className="fa fa-map-marker-alt text-primary me-3"></i>123 Street, New York, USA</p>
                <p className="mb-2"><i className="fa fa-phone-alt text-primary me-3"></i>+012 345 67890</p>
                <p className="mb-2"><i className="fa fa-envelope text-primary me-3"></i>info@example.com</p>
                <div className="d-flex pt-2">
                    <a className="btn btn-square btn-outline-body me-1" href=""><i className="fab fa-twitter"></i></a>
                    <a className="btn btn-square btn-outline-body me-1" href=""><i className="fab fa-facebook-f"></i></a>
                    <a className="btn btn-square btn-outline-body me-1" href=""><i className="fab fa-youtube"></i></a>
                    <a className="btn btn-square btn-outline-body me-0" href=""><i className="fab fa-linkedin-in"></i></a>
                </div>
            </div>
            <div className="col-lg-3 col-md-6">
                <h3 className="text-light mb-4">Services</h3>
                <a className="btn btn-link" href="">Architecture</a>
                <a className="btn btn-link" href="">3D Animation</a>
                <a className="btn btn-link" href="">House Planning</a>
                <a className="btn btn-link" href="">Interior Design</a>
                <a className="btn btn-link" href="">Construction</a>
            </div>
            <div className="col-lg-3 col-md-6">
                <h3 className="text-light mb-4">Quick Links</h3>
                <a className="btn btn-link" href="">About Us</a>
                <a className="btn btn-link" href="">Contact Us</a>
                <a className="btn btn-link" href="">Our Services</a>
                <a className="btn btn-link" href="">Terms & Condition</a>
                <a className="btn btn-link" href="">Support</a>
            </div>
            <div className="col-lg-3 col-md-6">
                <h3 className="text-light mb-4">Newsletter</h3>
                <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
               
            </div>
        </div>
    </div>
    <div className="container-fluid copyright">
        <div className="container">
            <div className="row">
                <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                    &copy; <a href="#">Your Site Name</a>, All Right Reserved.
                </div>
                <div className="col-md-6 text-center text-md-end">
                    
                </div>
            </div>
        </div>
    </div>
</div>
{/* <!-- Footer End -->


<!-- Back to Top --> */}
<a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up"></i></a>


{/* <!-- JavaScript Libraries --> */}
<script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></script>
<script src="lib/wow/wow.min.js"></script>
<script src="lib/easing/easing.min.js"></script>
<script src="lib/waypoints/waypoints.min.js"></script>
<script src="lib/counterup/counterup.min.js"></script>
<script src="lib/owlcarousel/owl.carousel.min.js"></script>
<script src="lib/tempusdominus/js/moment.min.js"></script>
<script src="lib/tempusdominus/js/moment-timezone.min.js"></script>
<script src="lib/tempusdominus/js/tempusdominus-bootstrap-4.min.js"></script>

{/* <!-- Template Javascript --> */}
<script src="js/main.js"></script>
</div>
  
)
}