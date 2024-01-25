import React from "react";
import Image from "next/image";

const hours = () => {
  return (
    <>
      <div className=" max-w-[1200px] m-auto px-[15px] py-[50px]">
        <section id="open">
          <div className=" grid grid-cols-1 md:grid-cols-2 gap-5  place-items-center">
            <div className="open-text">
              <p className=" text-[#2d1e1e] text-sm lg:text-[19px] font-semibold mb-1">
                Opening-Hours
              </p>
              <h2 className=" text-md lg:text-3xl mb-2">
                We are trading since 2017
              </h2>
              <p>
                Supreme Restaurant welcomes patrons with a commitment to
                providing an exceptional dining experience throughout the week.
                Our doors are open from 1:00 pm to 11:00 pm every Monday to
                Sunday, ensuring a delightful atmosphere for both lunch and
                dinner service.We extend our hours, inviting guests to indulge
                in our culinary offerings time. Whether you're seeking an
                exquisite lunch, an intimate dinner, or a leisurely weekend
                brunch, Supreme Restaurant is dedicated to creating memorable
                moments through unparalleled service and culinary excellence.
                Please note that our opening hours may be subject to seasonal
                variations or special occasions, so we recommend checking our
                website or contacting us directly for the most up-to-date
                information.
              </p>
            </div>
            <div className=" w-[100%] h-auto">
              <Image
                width={500}
                height={500}
                src="/images/open.jpg"
                className=" w-full h-full object-cover"
                alt="open"
              ></Image>
            </div>
          </div>
        </section>

        <section className=" mt-9 flex gap-2  justify-center  flex-col">
          <span className=" text-[16px] text-[#2d1e1e] font-semibold">
            {" "}
            OPENINGHOURS :{" "}
          </span>

          <select className="border border-gray-800 px-5 py-1 w-[100%] max-w-[300px]  rounded-md">
            <option value="">Open today 1:00 / 11:00</option>
            <option value="">Tue 1:00 / 11:00</option>
            <option value="">Wed 1:00 / 11:00</option>
            <option value="">Thu 1:00 / 11:00</option>
            <option value="">Fri 1:00 / 11:30</option>
            <option value="">Sat 1:00 / 11:30</option>
            <option value="">Sun 1:00 / 11:00</option>
          </select>
        </section>
      </div>
    </>
  );
};

export default hours;
