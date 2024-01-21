import React from 'react';

export default function page(){
    return(

      
      
        <div  className="card">
        <div  className="imgBx">
          <img src="https://i.ytimg.com/vi/Xx6t0gmQ_Tw/maxresdefault.jpg" alt="house"/>
          <input type="checkbox"/>
          <div  className="heart">
            <i  className="fas fa-heart"></i>
          </div>
        </div>
        <div  className="price-section">
          <h2>Some House - 10Y old</h2>
          <h1>$650,000</h1>
          <h3>789 Some City Street</h3>
        </div>
        <div  className="info-section">
          <div  className="beds">
            <h3><i  className="fas fa-bed"></i> <span>3</span> Bedrooms</h3>
          </div>
          <div  className="baths">
            <h3><i  className="fas fa-bath"></i> <span>2</span> Bathrooms</h3>
          </div>
        </div>
        <div  className="contact">
          <h3>Realtor</h3>
          <div  className="contact-info">
            <div  className="contact-img">
              <img src="project8.jpg" alt="profile picture"/>
            </div>
            <div  className="contact-name">
              <h4>Some Name</h4>
              <p>+99 (99) 123-4567</p>
            </div>
          </div>
        </div>
      </div>
  
    )
}