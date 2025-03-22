import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div>
      <div className="container">
        <div>
          <div className="flex justify-center rounded-b-3xl overflow-hidden">
            <Image
              src="/assets/images/bg.png"
              width={500}
              height={250}
              alt="bg from https://aarluxe.online/"
            />
          </div>
          <div className="-mt-16 flex justify-center">
            <div className="text-center">
              <div className="logo-box mx-auto mb-2">
                <div className="logo-box-inner flex justify-center items-center">
                  <div className="logo-box-white">
                    <Image
                      src="/assets/images/logo.svg"
                      width={70}
                      height={70}
                      alt="logo from https://aarluxe.online/"
                    />
                  </div>
                </div>
              </div>
              <div>
                <h1 className="!m-0">
                  <p className="text-3xl font-heading-en font-medium">
                    AAR Luxe Car Care
                  </p>
                  <p className="text-2xl font-heading-arabic font-[500]">
                    ايه ايه ار لوكس لعناية السيارات
                  </p>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
