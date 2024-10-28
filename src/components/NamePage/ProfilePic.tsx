import Image from "next/image";
import React from "react";

export default function ProfilePic() {
  return (
    <div>
      <Image src="/images/profile.jpg" height={40} width={43} alt="Ini" />
    </div>
  );
}
