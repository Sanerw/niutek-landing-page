import Image from "next/image";

const Background = () => {
  return (
    <Image
      src="/images/bg.webp"
      alt="Background"
      fill
      className="absolute inset-0 object-cover"
      priority
      sizes="100vw"
    />
  );
};

export default Background;
