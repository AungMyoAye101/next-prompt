import Image from "next/image";
import Hero from "../components/Hero";
import Feed from "@/components/Feed";

export default function Home() {
  return (
    <section>
      <Hero />
      <Feed />
    </section>
  );
}
