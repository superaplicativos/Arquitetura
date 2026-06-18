import Image from "next/image";

export default function BeforeAfter() {
  return (
    <section className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-gray-50 to-white" aria-hidden="true" />
      
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section content */}
          <div className="mx-auto grid max-w-sm gap-12 sm:max-w-none lg:grid-cols-2 lg:gap-8">
            {/* Content (Left side) */}
            <div className="flex flex-col justify-center">
              <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-indigo-200 after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-indigo-200">
                <span className="inline-flex bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                  O Poder da IA
                </span>
              </div>
              
              <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
                Staging Virtual e Simulação de Reformas
              </h2>
              
              <p className="mb-6 text-lg text-gray-600">
                Pare de perder horas preciosas em softwares de modelagem 3D convencionais. 
                A Inteligência Artificial elimina esse gargalo mantendo o rigor estético exigido pelo mercado.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-indigo-100">
                    <svg
                      className="h-4 w-4 fill-indigo-600"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0ZM6.5 5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1Zm3 4.5h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 1 0 1Z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-gray-900">
                      Transforme ambientes vazios em decorados
                    </h3>
                    <p className="text-sm text-gray-600">
                      Crie visualizações realistas e impactantes em minutos, não em dias
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-indigo-100">
                    <svg
                      className="h-4 w-4 fill-indigo-600"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                    >
                      <path d="M14.9 1.1A1 1 0 0 0 14 .5H2a1 1 0 0 0-.9.6l-1 4A1 1 0 0 0 1 6.5h14a1 1 0 0 0 .9-1.4l-1-4ZM2.5 8.5a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1h-11Z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-gray-900">
                      Simule reformas complexas instantaneamente
                    </h3>
                    <p className="text-sm text-gray-600">
                      Mostre o potencial real de um espaço antes de qualquer intervenção física
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-indigo-100">
                    <svg
                      className="h-4 w-4 fill-indigo-600"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0Zm3.7 11.3-3-3a1 1 0 0 1-.3-.7V4a1 1 0 1 1 2 0v3.2l2.6 2.6a1 1 0 1 1-1.4 1.4Z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-gray-900">
                      Reduza o tempo de produção em até 10x
                    </h3>
                    <p className="text-sm text-gray-600">
                      Aumente sua taxa de conversão e entregue experiências visuais inesquecíveis
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <a
                  className="btn group inline-flex bg-gradient-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-lg shadow-indigo-950/10 hover:bg-[length:100%_150%]"
                  href="#pricing"
                >
                  <span className="relative inline-flex items-center">
                    Ver Planos e Preços
                    <span className="ml-1 tracking-normal text-indigo-300 transition-transform group-hover:translate-x-0.5">
                      →
                    </span>
                  </span>
                </a>
              </div>
            </div>

            {/* Visual showcase (Right side) */}
            <div className="flex items-center justify-center">
              <div className="relative">
                {/* Main comparison container */}
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  {/* Before/After labels */}
                  <div className="absolute left-4 top-4 z-10 rounded-full bg-red-500 px-3 py-1 text-xs font-bold text-white shadow-lg">
                    ANTES
                  </div>
                  <div className="absolute right-4 top-4 z-10 rounded-full bg-green-500 px-3 py-1 text-xs font-bold text-white shadow-lg">
                    DEPOIS
                  </div>

                  {/* Placeholder for before/after image */}
                  <div className="relative aspect-[4/3] w-full bg-gradient-to-br from-gray-200 to-gray-300">
                    {/* Split effect simulation */}
                    <div className="absolute inset-0 flex">
                      {/* Before side (left) */}
                      <div className="relative w-1/2 overflow-hidden bg-gradient-to-br from-gray-300 to-gray-400">
                        <div className="flex h-full items-center justify-center">
                          <div className="text-center">
                            <svg
                              className="mx-auto mb-2 h-16 w-16 fill-gray-500"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                            >
                              <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
                            </svg>
                            <p className="text-sm font-medium text-gray-600">Ambiente Vazio</p>
                          </div>
                        </div>
                      </div>

                      {/* Divider */}
                      <div className="absolute left-1/2 top-0 z-20 h-full w-1 -translate-x-1/2 bg-white shadow-lg">
                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-xl">
                            <svg
                              className="h-5 w-5 fill-indigo-600"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                            >
                              <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                            </svg>
                          </div>
                        </div>
                      </div>

                      {/* After side (right) */}
                      <div className="relative w-1/2 overflow-hidden bg-gradient-to-br from-indigo-100 to-indigo-200">
                        <div className="flex h-full items-center justify-center">
                          <div className="text-center">
                            <svg
                              className="mx-auto mb-2 h-16 w-16 fill-indigo-600"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                            </svg>
                            <p className="text-sm font-medium text-indigo-700">Decorado com IA</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Note: Replace the placeholder above with actual before/after images */}
                  {/* Example with real images:
                  <Image
                    src="/images/before-after-demo.jpg"
                    width={800}
                    height={600}
                    alt="Antes e Depois - Staging Virtual com IA"
                    className="h-full w-full object-cover"
                  />
                  */}
                </div>

                {/* Decorative elements */}
                <div className="pointer-events-none absolute -bottom-4 -right-4 -z-10 h-32 w-32 rounded-full bg-indigo-500/20 blur-3xl" />
                <div className="pointer-events-none absolute -left-4 -top-4 -z-10 h-32 w-32 rounded-full bg-cyan-500/20 blur-3xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Made with Bob
