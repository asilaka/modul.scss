import React from 'react'
import s from './Reviewswrap.module.scss'
const Reviewswrap = () => {
  return (
   <>
   <section className={s.Reviewswrap}>
    <div className="container">
        <div className={s.wrap}>
<div className={s.card}>
    <div>
        <p>⭐⭐⭐⭐</p>
        <img src="/Frame 27.svg" alt="" />
    </div>

    <h3>Samantha D.✅</h3> 
    <p>"I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt."</p>
    <b>Posted on August 14, 2023</b>
</div>
        </div>
    </div>
   </section>
   </>
  )
}

export default Reviewswrap