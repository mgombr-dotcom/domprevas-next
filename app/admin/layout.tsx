export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      
      {/* SIDEBAR */}
      <aside className="w-64 bg-black text-white p-6">
        <h2 className="text-xl font-bold mb-6">Admin</h2>

        <nav className="flex flex-col gap-3">
          <a href="/admin">Dashboard</a>
          <a href="/admin/projekty">Projekty</a>
        </nav>
      </aside>

      {/* CONTENT */}
      <main className="flex-1 p-8 bg-gray-100">
        {children}
      </main>

    </div>
  );
}