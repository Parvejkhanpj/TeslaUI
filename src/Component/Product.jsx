import React from "react";
// import Hero from "../../assets/ms-main-hero-desktop.jpg";

const Product = ({ image, name }) => {
  return (
    <div className="">
      <div
        className={` bg-[url(${image})]
         bg-no-repeat bg-cover min-h-full md:h-[100vh] bg-center
     `}
      >
        <div className="">
          <h1
            className="  text-3xl text-center pt-[6rem] lg:pt-[3.5rem]  md:text-4xl md:font-bold 
                  pb-2"
          >
            {name}
          </h1>
          <p className="text-center mb-60 md:text-xl md:mt-3 ">
            Order Online for
            <span className="underline"> Touchless Delivery</span>
          </p>

          <div className="buttons text-center grid gap-4 md:grid-cols-2 md:p-5 md:pt-[6rem]  md:w-[50%] md:mx-auto pb-10 ">
            <button className="bg-zinc-900 text-white rounded-full text-center mx-3   px-4 py-2 ">
              {" "}
              CUSTOME ORDER
            </button>
            <button className="bg-slate-400/90 text-black rounded-full text-center mx-3   px-4 py-2 ">
              {" "}
              EXITING INVENTERY
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
