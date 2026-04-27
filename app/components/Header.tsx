import Link from "next/link";

export default function Header() {
  return (
    <header className="absolute left-0 top-0 z-50 w-full">
      <div className="mx-auto flex max-w-[1540px] items-center justify-between px-12 py-6">
        <Link href="/">
          <img src="/logo.png" alt="DOM PRE VÁS" className="h-[58px] w-auto" />
        </Link>

        <nav className="hidden items-center gap-8 text-[11px] font-black uppercase text-white lg:flex">
          <Link href="/">Domy</Link>
          <Link href="/#projekty">Projekty</Link>
          <Link href="/#sluzby">Služby</Link>
          <Link href="/#realizacie">Realizácie</Link>
          <Link href="/#onas">O nás</Link>
          <Link href="/#kontakt">Kontakt</Link>
        </nav>

        <div className="hidden items-center gap-7 text-white lg:flex">
          <span className="text-[12px] font-semibold">☎ +421 911 123 456</span>

          <Link
            href="/#kontakt"
            className="bg-red-600 px-7 py-4 text-[11px] font-black uppercase hover:bg-red-700"
          >
            Objednať projekt
          </Link>
        </div>
      </div>
    </header>
  );
}