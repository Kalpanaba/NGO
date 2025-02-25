
import React from 'react'
import image3 from '../../Asserts/image3.jpg';
import ngo from '../../Asserts/ngo.jpg'
import images8 from '../../Asserts/image8.jpg'
import images7 from '../../Asserts/image7.jpg'
import ngo2 from '../../Asserts/ngo2.jpg'
import events from '../../Asserts/events.avif'

const Special = () => {

    const data = [
        {
            id: 1,
            image: ngo,
            title: "Volunteer In-Person",
            text: "It sounds like you’re looking for in-person volunteer opportunities with NGOs, and you're interested in content-related work. Are you asking about specific roles, such as content creation, writing, social media management, or helping with community outreach in person? Or are you looking for suggestions on how to find these types of volunteer opportunities? Let me know what you're thinking so I can help better!"
        },

        {
            id: 2,
            image: images8,
            title: "Special Events",
            text: "At Special Events, our special events are designed to bring people together for a greater cause. From fundraising to awareness campaigns, these events foster community engagement and support. They create opportunities for individuals to contribute to positive change. Be a part of our mission and help us make a lasting impact."
        },
        
        {
            id: 1,
            image: images7,
            title: "Disabled Vocational Training",
            text: "At Disabled Vocational Training, our Disabled Vocational Training program empowers individuals with disabilities by providing them with essential skills to succeed in the workforce. We offer tailored training to enhance independence and improve career prospects. Our goal is to create equal opportunities, fostering self-confidence and long-term success. Join us in making a difference and promoting inclusivity in the workplace."
        },

        {
            id: 2,
            image: ngo2,
            title: "Family Gathering and Events",
            text: "At Family Gathering and Events, our Family Gathering and Events bring together individuals and families to celebrate unity, support, and community. These events provide a safe space for families to connect, share experiences, and create lasting memories. We aim to strengthen relationships and promote well-being through fun, engaging activities. Join us in fostering a sense of belonging and togetherness for all."
        },
    ];

    return (
        <div>

        
      <div className="relative">
        <div>
        <img src={events} alt="" className="w-full object-cover   sm:h-72 md:h-96" />
        </div>
<div className="absolute  sm:top-20 top-10  sm:left-20 left-10">
<h1 className="text-black  md:text-6xl sm:text-4xl text-2xl font-semibold">Events</h1>
</div>

      </div>
            <div className="gap-10  lg:mx-36 md:mx-10  md:mt-20 mt-10  mx-5">
                <h1 className="text-center  md:text-4xl text-2xl font-bold">Upcoming Events</h1>
                {data.map((event) => (
                    <div key={event.id} className=" hover:drop-shadow-3xl w-full rounded-lg ">
                        <div className={`flex  md:flex-row  flex-col  gap-10  md:mt-16 mt-10 bg-white shadow-md hover:shadow-xl rounded-3xl ${event.id === 1 ? 'flex-row' : ' md:flex-row-reverse'}`}>
                            <div className=" md:w-1/2  w-full h-full">
                                <img src={event.image} alt={event.title} className="rounded-3xl   md:h-96 h-52 w-full object-cover" />
                            </div>

                            <div className="md:w-1/2  w-full  p-3 md:p-5">
                                <h1 className=" md:text-4xl text-xl font-bold">{event.title}</h1>
                                <p className=" md:pt-7 pt-4  text-md md:text-xl">{event.text}</p>
                            </div>
                        </div>
                    </div>
                ))}

              
    
    
            </div>
        </div>
    )
}

export default Special;
