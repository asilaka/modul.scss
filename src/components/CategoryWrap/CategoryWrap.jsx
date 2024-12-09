import React from 'react'
import s from './CategoryWrap.module.scss'
import { Link } from 'react-router-dom'
const CategoryWrap = () => {
  return (
 <>
<h3 className={s.zaebal}>Casual</h3>
    <div className={s.categoryWrap}>
        
      <div className={s.filters}>
        <h3>Filters</h3>
        <ul>
          <li>Price</li>
          <li>Colors</li>
          <li>Size</li>
          <li>Dress Style</li>
        </ul>
      </div>
      
      
      <div className={s.products}>
        
        <div className={s.product}>
            
          <img src="/public/Frame 33.png" alt="" />
          <p>Gradient Graphic T-shirt</p>
          <p>⭐⭐⭐⭐</p>
          <p>$145</p>
        </div>
        
        <div className={s.product}>
          <img src="/public/image 9.png" alt="" />
          <p>Polo with Tipping Details</p>
          <p>⭐⭐⭐⭐</p>
          <p>$180</p>
        </div>

        <div className={s.product}>
          <img src="/public/image 10.png" alt="" />
          <p>Black Striped T-shirt</p>
          <p>⭐⭐⭐⭐⭐</p>
          <p>$120</p>
        </div>

        <div className={s.product}>
          <img src="/public/Frame 71.png" alt="" />
          <p>Black Striped T-shirt</p>
          <p>⭐⭐⭐⭐⭐</p>
          <p>$120</p>
        </div>

        <div className={s.product}>
          <img src="/public/image 9 (1).png" alt="" />
          <p>Black Striped T-shirt</p>
          <p>⭐⭐⭐⭐⭐</p>
          <p>$120</p>
        </div>

        <div className={s.product}>
          <img src="/public/image 10 (1).png" alt="" />
          <p>Black Striped T-shirt</p>
          <p>⭐⭐⭐⭐⭐</p>
          <p>$120</p>
        </div>
        
        <div className={s.product}>
          <img src="/public/image 7.png" alt="" />
          <p>Black Striped T-shirt</p>
          <p>⭐⭐⭐⭐⭐</p>
          <p>$120</p>
        </div>
        
        <div className={s.product}>
          <img src="/public/image 8.png" alt="" />
          <p>Black Striped T-shirt</p>
          <p>⭐⭐⭐⭐⭐</p>
          <p>$120</p>
        </div>
        
        <div className={s.product}>
          <img src="/public/image 9 (2).png" alt="" />
          <p>Black Striped T-shirt</p>
          <p>⭐⭐⭐⭐⭐</p>
          <p>$120</p>
        </div>
        

        
      </div>
    </div>
  

 </>
  )
}

export default CategoryWrap