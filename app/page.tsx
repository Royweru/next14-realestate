import { Hero } from "@/components/hero";
import { SearchInput } from "@/components/search-input";


export default async function Home() {

  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <Hero >
        <SearchInput />
      </Hero>
    </main>
  );
}
