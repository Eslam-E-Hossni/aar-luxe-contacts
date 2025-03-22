import Image from "next/image";
import React from "react";

const SocialMedia = () => {
  return (
    <div className="flex justify-center gap-x-5 py-8">
      <a href="https://www.tiktok.com/@aarluxe" target="_blank">
        <Image
          src="/assets/images/tiktok.png"
          width={40}
          height={40}
          alt="tiktok icon from https://aarluxe.online/"
        />
      </a>
      <a href="https://www.instagram.com/aarluxe/" target="_blank">
        <Image
          src="/assets/images/instagram.png"
          width={40}
          height={40}
          alt="tiktok icon from https://aarluxe.online/"
        />
      </a>
      <a
        href="https://www.facebook.com/profile.php?id=61571573291499"
        target="_blank"
      >
        <Image
          src="/assets/images/facebook.png"
          width={40}
          height={40}
          alt="tiktok icon from https://aarluxe.online/"
        />
      </a>
      <a href="https://www.snapchat.com/add/aarluxe" target="_blank">
        <Image
          src="/assets/images/snapchat.png"
          width={40}
          height={40}
          alt="tiktok icon from https://aarluxe.online/"
        />
      </a>
    </div>
  );
};

export default SocialMedia;
