import Hero from "@/components/Hero";

//loading the hero component with some padding to get away from the edges
export default function Home() {
  return (
   <div className="p-6">
    <Hero/>
  </div>
  );
}
