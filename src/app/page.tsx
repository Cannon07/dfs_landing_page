import Image from "next/image";
import Header from "@/components/Header";
import LandingSection from "@/components/LandingSection";

export default function Home() {
  return (
    <div className={"relative"}>
      <Header />
      <LandingSection />
      <h1>Hello</h1>
    </div>
  );
}
