import Image from "next/image";
import PageIllustration from "@/components/page-illustration";

export default function HeroHome() {
  return (
    <section className="relative overflow-x-hidden">
      <PageIllustration />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="pb-12 pt-32 md:pb-20 md:pt-40">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-16">
            {/* Tag superior */}
            <div
              className="mb-6 inline-flex items-center gap-3 rounded-full border border-indigo-200 bg-indigo-50 px-4 py-2"
              data-aos="zoom-y-out"
            >
              <span className="text-sm font-semibold text-indigo-600">
                ✨ MÉTODO INOVADOR
              </span>
            </div>

            {/* Título principal */}
            <h1
              className="mb-6 bg-gradient-to-r from-gray-900 via-indigo-900 to-gray-900 bg-clip-text text-5xl font-bold text-transparent md:text-6xl lg:text-7xl"
              data-aos="zoom-y-out"
              data-aos-delay={150}
            >
              Produção de Conteúdo para <br className="max-lg:hidden" />
              Arquitetos com Inteligência Artificial
            </h1>

            {/* Subtítulo */}
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-lg text-gray-700 md:text-xl"
                data-aos="zoom-y-out"
                data-aos-delay={300}
              >
                Eleve o nível das suas apresentações, conquiste clientes de alto padrão 
                e acelere seu fluxo de trabalho em até <strong className="text-indigo-600">10x</strong>. 
                O futuro da arquitetura e do design começa aqui.
              </p>

              {/* Bullet points de destaque */}
              <div
                className="mb-8 grid gap-4 text-left sm:grid-cols-2"
                data-aos="zoom-y-out"
                data-aos-delay={400}
              >
                <div className="flex items-start gap-3 rounded-lg bg-white p-4 shadow-sm">
                  <svg
                    className="mt-1 h-5 w-5 shrink-0 fill-indigo-600"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                  </svg>
                  <span className="text-sm text-gray-700">
                    Transforme ambientes vazios em decorados de forma ultra-realista
                  </span>
                </div>

                <div className="flex items-start gap-3 rounded-lg bg-white p-4 shadow-sm">
                  <svg
                    className="mt-1 h-5 w-5 shrink-0 fill-indigo-600"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                  </svg>
                  <span className="text-sm text-gray-700">
                    Simule reformas complexas diretamente em fotos reais de forma instantânea
                  </span>
                </div>

                <div className="flex items-start gap-3 rounded-lg bg-white p-4 shadow-sm">
                  <svg
                    className="mt-1 h-5 w-5 shrink-0 fill-indigo-600"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                  </svg>
                  <span className="text-sm text-gray-700">
                    Crie renders profissionais em uma fração do tempo do método convencional
                  </span>
                </div>

                <div className="flex items-start gap-3 rounded-lg bg-white p-4 shadow-sm">
                  <svg
                    className="mt-1 h-5 w-5 shrink-0 fill-indigo-600"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                  </svg>
                  <span className="text-sm text-gray-700">
                    Produza vídeos cinematográficos magnéticos para seu portfólio digital
                  </span>
                </div>
              </div>

              {/* CTAs */}
              <div className="relative before:absolute before:inset-0 before:border-y before:[border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1]">
                <div
                  className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center sm:gap-4"
                  data-aos="zoom-y-out"
                  data-aos-delay={450}
                >
                  <a
                    className="btn group mb-4 w-full bg-gradient-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-lg hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                    href="https://pay.hotmart.com/C106369391H"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="relative inline-flex items-center">
                      Quero Acessar o Curso (R$ 39,90)
                      <span className="ml-1 tracking-normal text-indigo-300 transition-transform group-hover:translate-x-0.5">
                        →
                      </span>
                    </span>
                  </a>
                  <a
                    className="btn w-full bg-white text-gray-800 shadow-sm hover:bg-gray-50 sm:w-auto"
                    href="https://wa.me/5511966161611?text=Olá,%20acessei%20o%20site%20e%20gostaria%20de%20obter%20um%20orçamento%20para%20Mentoria%20Personalizada!"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Mentoria Especialista Online/Presencial
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Hero image - Imagem do curso */}
          <div
            className="mx-auto max-w-4xl"
            data-aos="zoom-y-out"
            data-aos-delay={600}
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src="/images/cursoproducaoarquitetosdesigners.jpg"
                width={1200}
                height={675}
                alt="Curso de Produção de Conteúdo para Arquitetos com IA"
                className="h-full w-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Made with Bob
