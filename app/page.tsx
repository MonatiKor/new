import { Calculate } from "@/components/calculate";
import { Contacts } from "@/components/contacts";
import { Examples } from "@/components/examples";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Steps } from "@/components/steps";

export default function Home() {
  return (
    <div>
      <Hero />
      <Calculate />
      <Steps />
      <Examples />
      <Contacts />
    </div>
  );
}
