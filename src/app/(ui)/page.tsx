import { Hero } from "./components/Home/Hero";
import { WhatWeDo } from "./components/Home/WhatWeDo";
import { Activities } from "./components/Home/Activities";
import { Mission } from "./components/Home/Mission";
import { YearHighlight } from "./components/Home/YearHighlight";

export default function Home() {
  return (
    <main>
      <Hero />
      <YearHighlight />
      <WhatWeDo />
      <Activities />
      <Mission />
    </main>
  )
}