import { Hero } from "./components/Home/Hero";
import { WhatWeDo } from "./components/Home/WhatWeDo";
import { Activities } from "./components/Home/Activities";
import { Mission } from "./components/Home/Mission";
import { YearHighlight } from "./components/Home/YearHighlight";
import { statsData } from "../api/data";

export default function Home() {
  return (
    <main>
      <Hero />
      <YearHighlight statsData={statsData} />
      <WhatWeDo />
      <Activities />
      <Mission />
    </main>
  )
}