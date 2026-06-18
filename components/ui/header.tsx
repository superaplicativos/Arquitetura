import Link from "next/link";
import Logo from "./logo";

export default function Header() {
  return (
    <header className="fixed top-2 z-30 w-full md:top-6">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-white/90 px-3 shadow-lg shadow-black/[0.03] backdrop-blur-xs before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(var(--color-gray-100),var(--color-gray-200))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
          {/* Site branding */}
          <div className="flex flex-1 items-center">
            <Logo />
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            <ul className="flex grow flex-wrap items-center justify-center gap-4 text-sm">
              <li>
                <Link
                  href="#"
                  className="text-gray-700 transition hover:text-indigo-600"
                >
                  Sobre o Método
                </Link>
              </li>
              <li>
                <Link
                  href="#pricing"
                  className="text-gray-700 transition hover:text-indigo-600"
                >
                  Planos
                </Link>
              </li>
              <li>
                <a
                  href="https://wa.me/5511966161611"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 transition hover:text-indigo-600"
                >
                  Contato
                </a>
              </li>
            </ul>
          </nav>

          {/* Desktop CTA buttons */}
          <ul className="flex flex-1 items-center justify-end gap-3">
            <li>
              <a
                href="https://wa.me/5511966161611?text=Olá,%20acessei%20o%20site%20e%20gostaria%20de%20obter%20um%20orçamento%20para%20Mentoria%20Personalizada!"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-sm hidden bg-white text-gray-800 shadow-sm hover:bg-gray-50 sm:inline-flex"
              >
                Mentoria
              </a>
            </li>
            <li>
              <a
                href="https://pay.hotmart.com/C106369391H"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-sm bg-gradient-to-t from-indigo-600 to-indigo-500 text-white shadow-sm hover:from-indigo-700 hover:to-indigo-600"
              >
                Acessar Curso
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

// Made with Bob
