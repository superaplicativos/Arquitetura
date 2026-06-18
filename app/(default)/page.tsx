export const metadata = {
  title: "Curso de Produção de Conteúdo para Arquitetos com IA",
  description: "Eleve o nível das suas apresentações e conquiste mais clientes com o poder da Inteligência Artificial. Curso completo para arquitetos, designers de interiores e engenheiros.",
};

import Hero from "@/components/hero-home";
import ThreePillars from "@/components/three-pillars";
import BeforeAfter from "@/components/before-after";
import Pricing from "@/components/pricing";
import Cta from "@/components/cta";

export default function Home() {
  return (
    <>
      <Hero />
      <ThreePillars />
      <BeforeAfter />
      <Pricing />
      <Cta />
    </>
  );
}

// Made with Bob
