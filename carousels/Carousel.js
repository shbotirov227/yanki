import React, { useEffect, useRef, useState } from "react";
import Image from 'next/image';
import Slider from "react-slick";
import Img1 from "../assets/images/img1.png";
import Img2 from "../assets/images/img2.png";
import Img3 from "../assets/images/img3.png";
import Img4 from "../assets/images/img4.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from "../styles/Carousel.module.scss";

const items = [
	{Img1: "../assets/images/img1.png",},
	{Img2: "../assets/images/img2.png",},
	{Img3: "../assets/images/img3.png",},
	{Img4: "../assets/images/img4.png",}
	// Img2,
	// Img3,
	// Img4
]

const Carousel = () => {

  return (
    <div className={`${styles.Carousel} container`} style={styles}>

		<div className="flex items-center justify-between w-[100%]">
			{items.map((el, index) => {
				<Image src={el} key={index} alt="" width={275} height={450} />
			})}
		</div>

    </div>
  );
};

export default Carousel;