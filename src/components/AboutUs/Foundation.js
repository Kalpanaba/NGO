import React from "react";
import foundationImage from '../../Asserts/Found Image.png'
import foundationImage2 from '../../Asserts/Found Image2.png'

const Foundation = () => {
  return (
    <>
      <div className="p-5  md:px-10 lg:px-36 lg:pt-10 ">
        <h1 className="text-center text-5xl font-semibold">Foundations</h1>
       <div>

         <div className="grid lg:grid-cols-2 gap-10 mt-10">
          <img
            className="object-cover shadow-lg hover:scale-125"
            src={foundationImage}
            alt="#"
          />
          <p className="md:text-lg">
            A Non-Governmental Organization (NGO) foundation is a nonprofit
            entity established to address social, environmental, or humanitarian
            issues. NGOs operate independently of governments and are often
            funded by donations, grants, and international aid. These
            foundations work in various sectors, including education,
            healthcare, poverty alleviation, human rights, and environmental
            conservation. NGO foundations can be community-based, national, or
            international. They play a crucial role in implementing projects,
            advocating for policy changes, and providing direct assistance to
            marginalized groups. Well-known NGO foundations include the Red
            Cross, Amnesty International, and Oxfam, which work globally to
            provide aid and support social justice. Governed by a board of
            trustees or directors, NGO foundations ensure transparency and
            accountability in their operations. 
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 mt-10 md:mt-40">
          <p className="md:text-lg">
            These foundations are overseen by a governing body, such as a board
            of directors, ensuring ethical operations and accountability.
            Collaboration with businesses, governments, and other nonprofits
            allows them to maximize their reach and effectiveness. By launching
            community initiatives, policy advocacy, and research programs, NGO
            foundations play a key role in driving positive change, providing
            essential services, and supporting sustainable development
            worldwide. NGO foundations work at different levels—local, national,
            or international—depending on their mission. Some organizations,
            like ActionAid, CARE, and The Smile Foundation, work to uplift
            underprivileged communities through development programs and
            advocacy.
          </p>
          <img className="w-full" src={foundationImage2} alt=''/>
        </div>
       </div>
      </div>
    </>
  );
};

export default Foundation;
