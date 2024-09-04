import Image from "next/image";
import React, { FC } from "react";

interface ProfileProp {
  img: string;
  name: string;
  email: string;
}

const Profile: FC<ProfileProp> = ({ img, name, email }) => {
  return (
    <section className="flex flex-col justify-center items-center gap-4 mt-4">
      <div className="relative size-40">
        <Image
          src={img}
          fill
          alt="user profile"
          className="object-cover rounded-md "
        />
      </div>
      <div className="text-center space-y-1">
        <h1 className="text-xl font-bold font-serif">{name}</h1>
        <p className="text-md text-gray-500 font-semibold font-serif">
          {email}
        </p>
      </div>
    </section>
  );
};

export default Profile;
