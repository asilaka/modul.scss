import React, { useState } from "react";
import s from "./ProductWrap.module.scss";

const ProductWrap = ({ product }) => {
  return (
    <>
      <section className={s.productWrap}>
        <div className="container">
          <div className={s.wrap}>
            <div className={s.images}>
              <div>
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
              </div>
              <img src={product.image} alt="" />
            </div>

            <div className={s.box}>
              <div>
                <h2>{product.name}</h2>
                <h3>⭐⭐⭐⭐ 4/5</h3>
                <div className={s.price}>
                  <b>{product.price} сум</b>
                  <s>{Math.floor(product.price * 1.1)} сум</s>
                </div>

                <p>
                  This graphic t-shirt which is perfect for any occasion.
                  Crafted from a soft and breathable fabric, it offers superior
                  comfort and style.
                </p>
              </div>

              <div>
                <p></p>
                <div className={s.colors}>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>

              <div>
                <p>Choose Size</p>
                <div className={s.btns}>
                  <button>small</button>
                  <button>Medium</button>
                  <button className={s.large}>Large</button>
                  <button>x-Large</button>
                </div>
              </div>

              <div>
                <div className={s.count}>
                    <div>
                  <button>-</button>
                  <p>1</p>
                  <button>+</button>
                    </div>
                  <button className={s.Add}>Add to Cart</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductWrap;
