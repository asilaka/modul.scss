import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import s from "./TabsWrap.module.scss";
import Reviewswrap from "../ReviewsWrap/Reviewswrap";

const TabsWrap = () => {
  return (
    <>
      <section className={s.tabswrap}>
        <div className="container">
          <Tabs>
            <TabList className={s.Rate}>
              <Tab>Product Details</Tab>
              <Tab>Rating & Reviews</Tab>
              <Tab>FAQs</Tab>
            </TabList>

            <TabPanel>
              <div className={s.list}>
                <div>
                  <ul>
                    <li>Свободная модель оверсайз</li>
                    <li>Футболка унисекс</li>
                    <li>XL размер 54-58 : На рост 180-195, вес до 130 кг</li>
                    <li>M размер 48-50: На рост 155-165, вес до 75 кг</li>
                    <li>L размер 50-54: На рост 165-180, вес до 100 кг</li>
                  </ul>
                </div>
              </div>
            </TabPanel>  

            <TabPanel>
             <Reviewswrap/>
            </TabPanel>
          </Tabs>
        </div>
      </section>
    </>
  );
};

export default TabsWrap;
