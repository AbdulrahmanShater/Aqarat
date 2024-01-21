import React from 'react';
export default function page(){
    return(
     <div>
     <div className="container-fluid page-header py-5 mb-5 wow fadeIn"dir='rtl' data-wow-delay="0.1s">
        <div className="container py-5">
            <h1 className="display-1 text-white animated slideInDown">من نحن</h1>
            <nav aria-label="breadcrumb animated slideInDown">
                <ol className="breadcrumb text-uppercase mb-0">
             
                 
                </ol>
            </nav>
        </div>
    </div>
  

    <div className="container-xxl py-5">
        <div className="container">
            <div className="row g-5">
                <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                    <div className="about-img">
                        
                        <img className="img-fluid" src="project5.jpg" alt=""/>
                        <img className="img-fluid" src="project6.jpg" alt=""/>
                    </div>
                </div>
                <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                    <h4 className="section-title"  dir='rtl'>شركة محمد الاصيفر</h4>
                    <h1 className="display-5 mb-4"  dir='rtl'>شركة تطويريه وعقاريه إبداعية لمنزل أحلامك</h1>
                    <p dir='rtl'>تعد شركة عقارات محمد الاصيفر واحدة من أبرز الشركات العقارية في منطقة الطائف، حيث تمتلك الشركة خبرة تمتد لعقود في تقديم أفضل الخدمات العقارية للعملاء. وتعمل الشركة على تطوير وإدارة مشاريع سكنية وتجارية وصناعية بما في ذلك مشاريع التمليك وشقق تمليك وفلل وأبراج سكنية وتجارية. حققت شركة محمد الاصيفر العقارية نجاحاً كبيرا في تطوير المشاريع العقارية، وقد نجحت شركة محمد الأصيفر في إنجاز العديد من المشاريع العقارية في المنطقة، حيث تعددت هذه المشاريع من حيث النوع والحجم وتضمنت إنشاء أبراج سكنية فاخرة، وتطوير مشاريع سكنية من فلل وشقق تمليك باالاضافة الى تطوير المخططات وتسويقها بافضل الطرق</p>
                    <p className="mb-4" dir='rtl'>وتعتمد شركة عقارات محمد الاصيفر على أحدث التقنيات في إدارة وتنفيذ المشاريع العقارية وتسعى دائماً لتحقيق أعلى مستويات الجودة والكفاءة في جميع أعمالها. كما تهتم الشركة بتقديم خدمات ما بعد البيع لعملائها، حيث توفر لهم خدمات الصيانة والإصلاح والترميم، لضمان حفاظهم على عقاراتهم وتمتعهم بأفضل قيمة

استثمارية.</p>
                    <div className="d-flex align-items-center mb-5">
                        <div className="d-flex flex-shrink-0 align-items-center justify-content-center border border-5 border-primary" style={{width: "120px", height: "120px"}}>
                            <h1 className="display-1 mb-n2" data-toggle="counter-up">25</h1>
                        </div>
                        <div className="ps-4">
                            <h3>خبره</h3>
                            <h3>في</h3>
                            <h3 className="mb-0">التطوير</h3>
                        </div>
                    </div>
                    <a className="btn btn-primary py-3 px-5" href="">قرأت المزيد</a>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- About End -->


    <!-- Feature Start --> */}
   
    </div>
  
    )
}