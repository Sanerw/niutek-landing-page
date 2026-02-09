import Image from "next/image";

const Header = () => {
  return (
    <div className="absolute top-8 left-auto right-auto">
      <Image src="/images/header.png" alt="Header" width={400} height={100} />
    </div>
  );
};

export default Header;
