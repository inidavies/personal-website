import Image from "next/image";
import React from "react";

export default function ProfilePic() {
  return (
    <div>
      <Image src="/images/profile.jpg" height={30} width={33} alt="Ini" />
    </div>
  );
}
