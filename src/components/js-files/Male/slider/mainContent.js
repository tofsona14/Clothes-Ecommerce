import React, {useState}from "react";
import product_card from "./procut_data";
import {motion} from 'framer-motion'

const MainContent = () => {
  const listItems = product_card.map((item) => (
    <motion.div
    transition={{duration: 1.5}}
    
    className="card" key={item.id}>
      <div className="card_img">
        <img className="images-item" src={item.thumb} alt="" width={"250px"} height={"280px"} />
      </div>
      <div className="card_header">
        <div className="card_header_sibling">
          <h2>{item.product_name}</h2>
          <p>{item.description}</p>
          <p className="price">
            {item.price}
            <span>{item.currency}</span>
          </p>
        <div className="btn">Add to cart</div>
        </div>
      </div>
    </motion.div>
  ));
  return <div className="Main_Content">{listItems}</div>;
};

export default MainContent;
