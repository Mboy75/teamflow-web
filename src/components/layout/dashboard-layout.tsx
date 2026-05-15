import { ReactNode } from "react"

interface Props {
  children: ReactNode
}

export default function DashboardLayout({ children }: Props) {
  return (
    <div className="min-h-screen bg-black text-white flex">
      <aside className="w-64 border-r border-white/10 p-6">
        <h2 className="text-2xl font-bold mb-10">TeamFlow AI</h2>

        <nav className="space-y-3">
          <button className="w-full text-left px-4 py-3 rounded-xl hover:bg-white/10 transition">
            Dashboard
          </button>

          <button className="w-full text-left px-4 py-3 rounded-xl hover:bg-white/10 transition">
            Workspaces
          </button>

          <button className="w-full text-left px-4 py-3 rounded-xl hover:bg-white/10 transition">
            Projects
          </button>

          <button className="w-full text-left px-4 py-3 rounded-xl hover:bg-white/10 transition">
            Tasks
          </button>

          <button className="w-full text-left px-4 py-3 rounded-xl hover:bg-white/10 transition">
            Documents
          </button>
        </nav>
      </aside>

      <main className="flex-1">
        <header className="h-20 border-b border-white/10 flex items-center justify-between px-8">
          <h1 className="text-2xl font-semibold">Dashboard</h1>

          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-white/10" />
          </div>
        </header>

        <div className="p-8">{children}</div>
      </main>
    </div>
  )
}