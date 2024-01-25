import React from "react";
import Image from "next/image";

const about = () => {
  return (
    <div className=" max-w-[1200px] m-auto px-[15px] py-[60px]">
      <section id="about">
        <div className="about-wrapper container">
          <div className="about-text">
            <p className="small">About Us</p>
            <h2>We've beem making healthy food last for alot of years</h2>
            <p>
              Supreme Home invites you into a rich narrative that encapsulates
              the essence and history of our esteemed establishment. With a
              legacy rooted in culinary excellence, Supreme Restaurant was
              founded [insert founding year] and has since evolved to become a
              distinguished culinary destination. Our mission is deeply
              ingrained in a commitment to providing an unparalleled dining
              experience, where the artistry of food and the warmth of
              hospitality converge.
            </p>
          </div>
          <div className=" w-[100%] h-auto">
            <Image
              src="/images/res.jpg"
              className=" w-[100%] h-[100%] object-cover"
              alt="food"
              width={500}
              height={500}
            ></Image>
          </div>
        </div>
      </section>

      <section id="about">
        <div className="about-wrapper container">
          <div className=" w-full h-auto">
            <Image
              width={500}
              height={500}
              src="/images/burger.jpg"
              className=" w-full h-full object-cover"
              alt="food"
            ></Image>
          </div>
          <div className="about-text">
            <p className="small">Serve</p>
            <h2>We are serving</h2>
            <p>
              Each course is a work of art, plated with precision and served
              with grace. The restaurant's commitment to excellence extends to
              its wine and beverage service, where a dedicated sommelier guides
              guests through a thoughtfully curated selection. The attentive
              staff ensures that guests' needs are met throughout the meal,
              fostering an atmosphere of both luxury and warmth. As the dining
              experience culminates, guests are bid farewell with the assurance
              that every element of their visit to Supreme Restaurant was
              crafted to surpass expectations and create lasting culinary
              memories.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default about;
