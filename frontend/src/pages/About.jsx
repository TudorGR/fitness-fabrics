import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsLetter from "../components/Newsletter";

function About() {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"About"} text2={"Us"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img src={assets.cart_icon} className="w-full md:max-w-[450px]" alt="" />
        <div className="flex flex-col justify-center gap-6">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores nobis consequuntur aliquid dolore dicta, ullam quis dolores explicabo aliquam, similique voluptatum perferendis deserunt culpa ut harum et, tenetur accusamus tempore?</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam magnam maiores assumenda dolor itaque. Pariatur nam adipisci provident explicabo ea molestias quos, tempore iusto, sit hic nesciunt suscipit, ullam iste.</p>
          <b className="text-gray-500">Our Mission</b>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta, itaque ex assumenda recusandae magnam quos veniam maxime corporis non cum, deserunt minus vero perspiciatis vel aut? Rem expedita vero nesciunt?</p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title text1={"Why"} text2={"Choose us"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 flex flex-col gap-5">
          <b>Quality Assurance</b>
          <p className="text-gray-600">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt, cumque id, ad ut exercitationem quae nisi natus praesentium quasi quibusdam beatae quo dolores totam quidem, porro voluptatem tempore blanditiis! Iure.</p>
        </div>
        <div className="border px-10 md:px-16 py-8 flex flex-col gap-5">
          <b>Convenience</b>
          <p className="text-gray-600">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt, cumque id, ad ut exercitationem quae nisi natus praesentium quasi quibusdam beatae quo dolores totam quidem, porro voluptatem tempore blanditiis! Iure.</p>
        </div>
        <div className="border px-10 md:px-16 py-8 flex flex-col gap-5">
          <b>Idk ran out of ideas</b>
          <p className="text-gray-600">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt, cumque id, ad ut exercitationem quae nisi natus praesentium quasi quibusdam beatae quo dolores totam quidem, porro voluptatem tempore blanditiis! Iure.</p>
        </div>
      </div>
      <NewsLetter />
    </div>
  );
}

export default About;
