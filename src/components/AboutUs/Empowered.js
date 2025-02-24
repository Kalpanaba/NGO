import React from "react";

const Empowered = () => {
  let data = [
    {
      women:
        "Empowered women and girls can lift their entire families and communities out of poverty.",
      text: "We are a not-for-profit organization that builds the capacity of communities to ensure empowerment for marginalized women and girls.Our sustainable and holistic interventions in Health, Livelihood, Education, and Disaster Relief & Resilience provide innovative solutions deep-rooted development problems. Along with access  the international confederation of expertise,we integrate interna knowledge and a strong network of partnerships to deliver outcomes at scale to varied stakeholders.",
    },
  ];
  return (
  <>

{data.map((item,index)=>(
    <>
     <section key={index} className=" p-5  md:px-10 lg:px-36 lg:pt-10">
      <article className="">
        <h3 className="font-semibold  text-xl md:text-2xl lg:text-3xl  mb-6  lg:text-left  ">
      {item.women}
        </h3>
        <p className="md:text-lg md:text-[25px] text-justify">
          {item.text}
        </p>
      </article>
    </section>
    </>
   ))}
  </>
  );
};

export default Empowered;
