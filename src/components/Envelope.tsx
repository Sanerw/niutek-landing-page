import Image from "next/image";

const Envelope = () => {
  const messages = [
    {
      text: "Uwielbiam Twoj smiech - serio, czasem przez Ciebie az sie przewracam ze smiechu",
    },
  ];

  return (
    <div className="relative">
      <Image
        src="/images/envelope2.png"
        alt="Envelope"
        width={490}
        height={580}
      />
      <div className="flex px-16 absolute right-1 top-0 inset-0 pt-28 justify-center pb-28">
        <div className="w-full h-full ">
          <p className="text-lg text-[#5c3436] leading-8">{messages[0].text}</p>
        </div>
      </div>
    </div>
  );
};

export default Envelope;
