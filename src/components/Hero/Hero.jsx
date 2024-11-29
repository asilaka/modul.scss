import React from 'react'
import './Hero.scss'
const Hero = () => {
  return (
 <>
 <section className="hero">
  <div className="container">
<div className="wrap">

    <div className="box"> 
      <h1>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
      <p>Browse through our diverse range of meticulously crafted garments, designed <br /> to bring out your individuality and cater to your sense of style.</p>
      <button>Shop Now</button>
      <div className="wrap1">
  <div className="card">
    <h3>200+</h3>
    <p>International Brands</p>
  </div>
  <div className="card">
    <h3>2,000+</h3>
    <p>High-Quality Products</p>
  </div>
  <div className="card">
    <h3>30,000+</h3>
    <p>Happy Customers</p>
  </div>

</div>
    </div>
    <img src="/hero-img.png" alt="" />
</div>


  </div>
 </section>
 </>
  )
}

export default Hero