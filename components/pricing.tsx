export default function Pricing() {
  return (
    <section className="relative" id="pricing">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-16">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-indigo-200 after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-indigo-200">
              <span className="inline-flex bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                Escolha Seu Caminho
              </span>
            </div>
            <h2 className="text-3xl font-bold text-gray-800 md:text-4xl">
              Invista no Seu Futuro Profissional
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Duas opções pensadas para diferentes necessidades e orçamentos
            </p>
          </div>

          {/* Pricing cards */}
          <div className="mx-auto grid max-w-sm gap-8 lg:max-w-none lg:grid-cols-2 lg:gap-6">
            {/* Card 1: Curso Gravado */}
            <div className="relative flex flex-col rounded-3xl border border-gray-200 bg-white p-8 shadow-2xl shadow-gray-900/10">
              {/* Badge */}
              <div className="mb-4">
                <span className="inline-flex rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold text-indigo-600">
                  ACESSO IMEDIATO
                </span>
              </div>

              {/* Card header */}
              <div className="mb-5">
                <div className="mb-1 text-lg font-semibold text-gray-900">
                  Curso Gravado
                </div>
                <div className="mb-4 inline-flex items-baseline">
                  <span className="text-4xl font-bold text-gray-900">R$ 39</span>
                  <span className="text-2xl font-bold text-gray-900">,90</span>
                </div>
                <div className="mb-5 text-sm text-gray-600">
                  Pagamento único • Acesso vitalício
                </div>
              </div>

              {/* Features list */}
              <ul className="mb-8 grow space-y-3 text-sm">
                <li className="flex items-start">
                  <svg
                    className="mr-3 mt-0.5 h-5 w-5 shrink-0 fill-indigo-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                  </svg>
                  <span className="text-gray-600">
                    <strong className="font-semibold text-gray-900">Aulas gravadas completas</strong> - Assista quando e onde quiser
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="mr-3 mt-0.5 h-5 w-5 shrink-0 fill-indigo-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                  </svg>
                  <span className="text-gray-600">
                    <strong className="font-semibold text-gray-900">5 Técnicas Práticas</strong> - Ambientes decorados, reformas, vídeos, objetos reais e plantas 3D
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="mr-3 mt-0.5 h-5 w-5 shrink-0 fill-indigo-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                  </svg>
                  <span className="text-gray-600">
                    <strong className="font-semibold text-gray-900">Certificado de conclusão</strong> incluso
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="mr-3 mt-0.5 h-5 w-5 shrink-0 fill-indigo-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                  </svg>
                  <span className="text-gray-600">
                    <strong className="font-semibold text-gray-900">Suporte técnico</strong> na plataforma Hotmart
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="mr-3 mt-0.5 h-5 w-5 shrink-0 fill-indigo-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                  </svg>
                  <span className="text-gray-600">
                    <strong className="font-semibold text-gray-900">Atualizações gratuitas</strong> do conteúdo
                  </span>
                </li>
              </ul>

              {/* CTA button */}
              <div>
                <a
                  className="btn group w-full bg-gradient-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-lg shadow-indigo-950/10 hover:bg-[length:100%_150%]"
                  href="https://pay.hotmart.com/C106369391H"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="relative inline-flex items-center">
                    Acessar Curso Agora
                    <span className="ml-1 tracking-normal text-indigo-300 transition-transform group-hover:translate-x-0.5">
                      →
                    </span>
                  </span>
                </a>
              </div>
            </div>

            {/* Card 2: Mentoria Especialista */}
            <div className="relative flex flex-col rounded-3xl border-2 border-indigo-500 bg-gradient-to-br from-indigo-50 to-white p-8 shadow-2xl shadow-indigo-900/20">
              {/* Popular badge */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="inline-flex rounded-full bg-gradient-to-r from-indigo-600 to-indigo-500 px-4 py-1.5 text-xs font-bold text-white shadow-lg">
                  ⭐ PARA EMPRESAS
                </span>
              </div>

              {/* Badge */}
              <div className="mb-4 mt-2">
                <span className="inline-flex rounded-full bg-indigo-600 px-3 py-1 text-xs font-semibold text-white">
                  PERSONALIZADO
                </span>
              </div>

              {/* Card header */}
              <div className="mb-5">
                <div className="mb-1 text-lg font-semibold text-gray-900">
                  Mentoria Especialista
                </div>
                <div className="mb-1 inline-flex items-baseline">
                  <span className="text-4xl font-bold text-gray-900">R$ 499</span>
                  <span className="text-2xl font-bold text-gray-900">,90</span>
                </div>
                <div className="mb-2 text-sm font-medium text-indigo-600">
                  Online • A partir de
                </div>
                <div className="text-sm text-gray-600">
                  Presencial sob consulta
                </div>
              </div>

              {/* Features list */}
              <ul className="mb-8 grow space-y-3 text-sm">
                <li className="flex items-start">
                  <svg
                    className="mr-3 mt-0.5 h-5 w-5 shrink-0 fill-indigo-600"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                  </svg>
                  <span className="text-gray-700">
                    <strong className="font-semibold text-gray-900">Tudo do curso gravado</strong> incluído
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="mr-3 mt-0.5 h-5 w-5 shrink-0 fill-indigo-600"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                  </svg>
                  <span className="text-gray-700">
                    <strong className="font-semibold text-gray-900">Encontros personalizados</strong> focados no seu escritório
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="mr-3 mt-0.5 h-5 w-5 shrink-0 fill-indigo-600"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                  </svg>
                  <span className="text-gray-700">
                    <strong className="font-semibold text-gray-900">Implementação imediata</strong> no seu fluxo de trabalho
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="mr-3 mt-0.5 h-5 w-5 shrink-0 fill-indigo-600"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                  </svg>
                  <span className="text-gray-700">
                    <strong className="font-semibold text-gray-900">Suporte prioritário</strong> via WhatsApp
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="mr-3 mt-0.5 h-5 w-5 shrink-0 fill-indigo-600"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                  </svg>
                  <span className="text-gray-700">
                    <strong className="font-semibold text-gray-900">Estratégias comerciais</strong> para fechar mais projetos
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="mr-3 mt-0.5 h-5 w-5 shrink-0 fill-indigo-600"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                  </svg>
                  <span className="text-gray-700">
                    <strong className="font-semibold text-gray-900">Análise de projetos reais</strong> do seu portfólio
                  </span>
                </li>
              </ul>

              {/* CTA button */}
              <div>
                <a
                  className="btn group w-full bg-gradient-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-lg shadow-indigo-950/10 hover:bg-[length:100%_150%]"
                  href="https://wa.me/5511966161611?text=Olá,%20acessei%20o%20site%20e%20gostaria%20de%20obter%20um%20orçamento%20para%20Mentoria%20Personalizada!"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="relative inline-flex items-center">
                    Falar com Consultor
                    <span className="ml-1 tracking-normal text-indigo-300 transition-transform group-hover:translate-x-0.5">
                      →
                    </span>
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom note */}
          <div className="mt-12 text-center">
            <p className="text-sm text-gray-500">
              💳 Pagamento 100% seguro via Hotmart • 🔒 Garantia de 7 dias • 📱 Suporte dedicado
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// Made with Bob
