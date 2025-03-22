import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-primary" dir="rtl">
      <div>
        <div className="flex flex-col mx-auto justify-center sm:flex-row text-center text-white">
          <div className="py-4 flex items-center justify-center gap-x-3">
            <p className="font-heading-arabic">صنع بكل حب ❤️ بواسطة</p>
            <a href="https://www.10trend.ae/">
              <Image
                src={"/assets/images/10trend-logo.png"}
                width={70}
                height={70}
                alt="https://www.10trend.ae/ logo from https://aarluxe.online/"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
