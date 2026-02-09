import Image from "next/image";

const Background = () => {
  return (
    <Image
      src="/images/bg.png"
      alt="Background"
      fill
      className="absolute inset-0 object-cover"
    />
  );
};

export default Background;
