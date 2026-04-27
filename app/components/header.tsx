import Link from "next/link";

export default function Header() {
  return (
    <header className="absolute left-0 top-0 z-50 w-full">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-6">
        
        <Link href="/">
          <img src="/logo.png" className="h-10" />
        </Link>

        <nav className="flex gap-6 text-white text-sm">
          <Link href="/">Domov</Link>
          <Link href="/projekty/rodinny-dom-1">Projekty</Link>
          <Link href="/#kontakt">Kontakt</Link>
        </nav>

      </div>
    </header>
  );
}