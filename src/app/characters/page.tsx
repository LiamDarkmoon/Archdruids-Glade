import CardsCarousel from "@/components/pure/CardsCarousel";
import CharacterForm from "@/components/pure/forms/CharacterForm";
import prisma from "@/lib/db";

export default async function Characters() {
  const chars = await prisma.character.findMany();

    return (
      <main className="relative flex min-h-screen pt-[100px]">
        <section className="flex w-full mx-10 mb-10 rounded-lg overflow-hidden">
          <CharacterForm />
          <CardsCarousel char={chars} />
        </section>
      </main>
    );
  }