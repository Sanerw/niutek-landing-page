import Background from "@/components/Background";
import Envelope from "@/components/Envelope";
import Header from "@/components/Header";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-dvh overflow-hidden bg-zinc-50">
      <Background />
      <div className="relative z-1 flex items-center gap-8 flex-col pt-24 pb-16 px-8">
        {/* <Header /> */}
        <Envelope />
      </div>
    </div>
  );
}
