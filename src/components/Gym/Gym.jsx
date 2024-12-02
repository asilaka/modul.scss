import React from "react";
import s from "./Gym.module.scss";

const Gym = () => {
  return (
    <>
      <section className="by">
        <div className="container">
          <h1 className={s.dress}>BROWSE BY dress STYLE</h1>
          <div className={s.cards}>
          <div className={s.card}>
            <h2>Casual</h2>
          </div>
          <div className={s.card1}>
            <h2>Formal</h2>
          </div>
          <div className={s.card2}>
            <h2>Party</h2>
          </div>
          <div className={s.card3}>
            <h2>Gym</h2>
          </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Gym;
