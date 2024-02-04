import { Hero } from "@/components/hero";
import { Search } from "@/components/search";


export default async function Home() {

  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <Hero >
        <Search />
      </Hero>
    </main>
  );
}
