"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  useEffect(() => {
    const handleDocumentClick = () => {
      if (isClicked) {
        setIsClicked(false);
      }
    };

    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, [isClicked]);

  return (
    <main className="h-screen flex items-center justify-center bg-primary-lightGrayishBlue p-4">
      <section className="flex max-sm:flex-col w-full sm:w-[640px] bg-white rounded-xl">
        <div className="flex w-full">
          <div className="w-full h-full">
            <Image
              src={"/images/drawers.jpg"}
              alt="Drawers"
              width={300}
              height={200}
              className="object-cover max-sm:rounded-t-xl sm:rounded-l-xl w-full sm:w-auto h-full"
            />
          </div>
        </div>
        <div className="flex flex-col p-8 gap-4">
          <h1 className="font-bold text-primary-veryDarkGrayishBlue text-xl">
            Shift the overall look and feel by adding these wonderful touches to
            furniture in your home
          </h1>
          <p className="text-primary-grayishBlue font-medium">
            Ever been in a room and felt like something was missing? Perhaps it
            felt slightly bare and uninviting. I’ve got some simple tips to help
            you make any room feel complete.
          </p>
          <div className="flex w-full justify-between">
            <div className="flex items-center gap-4">
              <div>
                <Image
                  src={"/images/avatar-michelle.jpg"}
                  alt="Michelle"
                  width={36}
                  height={36}
                  className="rounded-full"
                />
              </div>
              <div className="flex flex-col">
                <h1 className="text-primary-veryDarkGrayishBlue font-bold">
                  Michelle Appleton
                </h1>
                <p className="text-primary-grayishBlue text-xs">28 Jun 2020</p>
              </div>
            </div>
            <div className="relative group flex justify-center max-sm:justify-end">
              <button
                onClick={handleClick}
                className={`h-full px-2.5 transition duration-100 py-1 rounded-full  flex items-center justify-center ${
                  isClicked
                    ? "bg-primary-veryDarkGrayishBlue bg-opacity-70"
                    : "bg-primary-lightGrayishBlue"
                }`}
              >
                <div>
                  <Image
                    src={"/images/icon-share.svg"}
                    alt="Share"
                    width={16}
                    height={16}
                    className={`w-auto h-auto object-contain ${
                      isClicked ? "brightness-0 invert" : ""
                    }`}
                  />
                </div>
              </button>
              <div
                className={`absolute bottom-full mb-2  flex-col items-center max-sm:items-end animate-up transition duration-300  ${
                  isClicked ? "flex" : "hidden"
                }`}
              >
                <div className="bg-primary-veryDarkGrayishBlue text-white w-52 flex gap-4 text-xs rounded-lg p-4 items-center justify-center z-10">
                  <h1 className="text-primary-grayishBlue">S H A R E</h1>
                  <button>
                    <Image
                      src={"/images/icon-facebook.svg"}
                      alt="facebook"
                      width={16}
                      height={16}
                      className="w-auto h-auto object-contain"
                    />
                  </button>
                  <button>
                    <Image
                      src={"/images/icon-twitter.svg"}
                      alt="twitter"
                      width={16}
                      height={16}
                      className="w-auto h-auto object-contain"
                    />
                  </button>
                  <button>
                    <Image
                      src={"/images/icon-pinterest.svg"}
                      alt="pinterest"
                      width={16}
                      height={16}
                      className="w-auto h-auto object-contain"
                    />
                  </button>
                </div>
                <div className="w-3 h-3 max-sm:mr-2 -mt-2 z-0 bg-primary-veryDarkGrayishBlue transform rotate-45"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
