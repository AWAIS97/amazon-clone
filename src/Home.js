/** @format */

import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className='home'>
      <img
        className='home__image'
        src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg'
        alt=''
      />
      {/* product id,title,price,rating,image */}
      <div className='home__row'>
        <Product
          id='12345'
          title='Acer Aspire 5 Slim Laptop, 15.6 inches Full HD IPS Display, AMD Ryzen 3 3200U, Vega 3 Graphics, 4GB DDR4, 128GB SSD, Backlit Keyboard, Windows 10 in S Mode, A515-43-R19L,Silver'
          price={279}
          rating={5}
          image='https://images-na.ssl-images-amazon.com/images/I/910k5MM2vRL._AC_SL1500_.jpg'
        />
        <Product
          id='12345'
          title='Everki Studio Slim Laptop Backpack for Upto 14.1-Inch Laptops/15-Inch MacBook Pro (EKP118)'
          price={279}
          rating={5}
          image='https://images-na.ssl-images-amazon.com/images/I/910k5MM2vRL._AC_SL1500_.jpg'
        />
      </div>

      <div className='home__row'>
        <Product
          id='12345'
          title='AMD Ryzen 7 3700X 8-Core, 16-Thread Unlocked Desktop Processor with Wraith Prism LED Cooler'
          price={279}
          rating={5}
          image='https://images-na.ssl-images-amazon.com/images/I/910k5MM2vRL._AC_SL1500_.jpg'
        />
        <Product
          id='12345'
          title='Philips Norelco MG3750 Multigroom All-In-One Series 3000, 13 attachment trimmer'
          price={279}
          rating={5}
          image='https://images-na.ssl-images-amazon.com/images/I/91qmPJKT87L._SL1500_.jpg'
        />
        <Product
          id='12345'
          title='
          Garmin Forerunner 235, GPS Running Watch, Black/Gray'
          price={279}
          rating={5}
          image='https://images-na.ssl-images-amazon.com/images/I/819WMWm6NoL._AC_SL1500_.jpg'
        />
      </div>

      <div className='home__row'>
        <Product
          id='12345'
          title='Mission Cooling Neck Gaiter 12+ Ways To Wears, Face Mask, UPF 50, Cools when Wet'
          price={279}
          rating={5}
          image='https://images-na.ssl-images-amazon.com/images/I/71vvXGmdKWL._AC_SL1500_.jpg'
        />
      </div>

      {/* Product */}
    </div>
  );
}

export default Home;
