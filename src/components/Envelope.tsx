"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const Envelope = () => {
  const messages = [
    "Uwielbiam Twoj smiech - serio, czasem przez Ciebie az sie przewracam ze smiechu 1",
    "Uwielbiam Twoj smiech - serio, czasem przez Ciebie az sie przewracam ze smiechu 2",
    "Uwielbiam Twoj smiech - serio, czasem przez Ciebie az sie przewracam ze smiechu 3",
    "Uwielbiam Twoj smiech - serio, czasem przez Ciebie az sie przewracam ze smiechu 4",
  ];

  const [index, setIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    let i = 0;

    setDisplayedText("");
    setIsTyping(true);

    const type = () => {
      if (i < messages[index].length - 1) {
        setDisplayedText((prev) => prev + messages[index][i]);
        i++;
        timeout = setTimeout(type, 40); // prędkość pisania
      } else {
        setIsTyping(false);
      }
    };

    type();

    return () => clearTimeout(timeout);
  }, [index]);

  const handleClick = () => {
    if (isTyping) return;

    setIndex((prev) => (prev + 1) % messages.length);
  };

  return (
    <div className="relative">
      <Image
        src="/images/envelope3.png"
        alt="Envelope"
        width={490}
        height={580}
        priority
      />

      <div className="flex px-16 absolute inset-0 pt-28 pb-28 justify-center">
        <div className="w-full h-full">
          <p className="text-lg text-[#5c3436] leading-8">
            {displayedText}
            <span className="animate-pulse">|</span>
          </p>
        </div>
      </div>

      <button
        onClick={handleClick}
        disabled={isTyping}
        // className="absolute bottom-7 left-1/2 -translate-x-1/2 bg-[#e04852] text-white px-4 py-2 rounded-xl disabled:opacity-50"
        className="absolute bottom-7 left-1/2 -translate-x-1/2 opacity-0"
      >
        Kliknij mnie !!
      </button>
    </div>
  );
};

export default Envelope;
