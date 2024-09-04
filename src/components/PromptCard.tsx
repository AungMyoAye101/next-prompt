import Image from "next/image";
import React from "react";

const PromptCard = () => {
  return (
    <section>
      <div>
        <Image src={""} width={40} height={40} alt="user profile" />
        <div>
          <h1>User name</h1>
          <p>user@gmail.com</p>
        </div>
      </div>
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis iure
          deserunt, rerum maxime beatae
        </p>
        <p>#webdev</p>
      </div>
    </section>
  );
};

export default PromptCard;
