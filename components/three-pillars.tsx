export default function ThreePillars() {
  return (
    <section className="relative overflow-hidden before:absolute before:inset-0 before:-z-20 before:bg-gradient-to-b before:from-gray-900 before:to-gray-800">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-16">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-cyan-400 after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-cyan-400">
              <span className="inline-flex bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                O Que Você Vai Aprender
              </span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.cyan.400),theme(colors.blue.500),theme(colors.cyan.400),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Técnicas Práticas de IA para Arquitetura
            </h2>
            <p className="text-lg text-gray-400">
              Domine as ferramentas mais avançadas do mercado com métodos testados e aprovados
            </p>
          </div>

          {/* Five Pillars Grid */}
          <div className="mx-auto grid max-w-sm gap-6 sm:max-w-none sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {/* Pilar 1: Ambientes Decorados */}
            <article className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:bg-gradient-to-br before:from-cyan-500/20 before:via-transparent before:to-blue-500/20 before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 shadow-lg shadow-cyan-500/50">
                <svg className="h-6 w-6 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3zm0 2.5l6 6V19h-2v-6H8v6H6v-7.5l6-6z"/>
                </svg>
              </div>
              <h3 className="mb-2 text-lg font-bold text-gray-100">
                Transformar Ambientes Vazios em Decorados
              </h3>
              <p className="text-sm text-gray-400">
                Aprenda a pegar um ambiente vazio e transformá-lo em um espaço totalmente decorado e realista usando IA
              </p>
              <div className="pointer-events-none absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 blur-2xl transition-all duration-500 group-hover:scale-150" />
            </article>

            {/* Pilar 2: Simulação de Reformas */}
            <article className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:bg-gradient-to-br before:from-blue-500/20 before:via-transparent before:to-purple-500/20 before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg shadow-blue-500/50">
                <svg className="h-6 w-6 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94L14.4 2.81c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/>
                </svg>
              </div>
              <h3 className="mb-2 text-lg font-bold text-gray-100">
                Simular Reformas Complexas
              </h3>
              <p className="text-sm text-gray-400">
                Mostre ao cliente como ficará o ambiente após a reforma, alterando pisos, paredes, acabamentos e mais
              </p>
              <div className="pointer-events-none absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 blur-2xl transition-all duration-500 group-hover:scale-150" />
            </article>

            {/* Pilar 3: Vídeos de Apresentação */}
            <article className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:bg-gradient-to-br before:from-purple-500/20 before:via-transparent before:to-pink-500/20 before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-pink-600 shadow-lg shadow-purple-500/50">
                <svg className="h-6 w-6 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"/>
                </svg>
              </div>
              <h3 className="mb-2 text-lg font-bold text-gray-100">
                Criar Vídeos de Apresentação
              </h3>
              <p className="text-sm text-gray-400">
                Produza vídeos cinematográficos magnéticos que encantam clientes e aumentam sua taxa de conversão
              </p>
              <div className="pointer-events-none absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 blur-2xl transition-all duration-500 group-hover:scale-150" />
            </article>

            {/* Pilar 4: Objetos Reais */}
            <article className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:bg-gradient-to-br before:from-pink-500/20 before:via-transparent before:to-red-500/20 before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100 sm:col-span-2 lg:col-span-1">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-pink-500 to-red-600 shadow-lg shadow-pink-500/50">
                <svg className="h-6 w-6 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM8 20H4v-4h4v4zm0-6H4v-4h4v4zm0-6H4V4h4v4zm6 12h-4v-4h4v4zm0-6h-4v-4h4v4zm0-6h-4V4h4v4zm6 12h-4v-4h4v4zm0-6h-4v-4h4v4zm0-6h-4V4h4v4z"/>
                </svg>
              </div>
              <h3 className="mb-2 text-lg font-bold text-gray-100">
                Inserir Móveis e Decorações Reais
              </h3>
              <p className="text-sm text-gray-400">
                Coloque quadros, cubas, mesas, móveis específicos de forma totalmente realista no ambiente
              </p>
              <div className="pointer-events-none absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-gradient-to-br from-pink-500/20 to-red-500/20 blur-2xl transition-all duration-500 group-hover:scale-150" />
            </article>

            {/* Pilar 5: Plantas 2D em 3D */}
            <article className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:bg-gradient-to-br before:from-red-500/20 before:via-transparent before:to-orange-500/20 before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100 sm:col-span-2 lg:col-span-1">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-red-500 to-orange-600 shadow-lg shadow-red-500/50">
                <svg className="h-6 w-6 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h18v14zM5 15h14v3H5z"/>
                </svg>
              </div>
              <h3 className="mb-2 text-lg font-bold text-gray-100">
                Transformar Plantas 2D em 3D
              </h3>
              <p className="text-sm text-gray-400">
                Converta plantas baixas em visualizações 3D realistas e depois em ambientes fotorrealísticos
              </p>
              <div className="pointer-events-none absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-gradient-to-br from-red-500/20 to-orange-500/20 blur-2xl transition-all duration-500 group-hover:scale-150" />
            </article>
          </div>

          {/* Bottom CTA */}
          <div className="mt-12 text-center">
            <p className="text-sm text-gray-500">
              Método completo testado por mais de 500 profissionais
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// Made with Bob
