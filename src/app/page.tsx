import FontShowcase from "@/components/Fonts";
import Hero from "@/components/Hero";
import SELL from "./(pages)/arrivale/sell";
import Shirts from "./(pages)/arrivale/shirt";


export default function Home() {
  return (
         <div>
        
          <Hero/>
          <FontShowcase/>
          <SELL/>
          <Shirts/>
         </div>
  );
}
