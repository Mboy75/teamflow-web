export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-black text-white flex">
      {/* Sidebar */}
      <aside className="w-64 border-r border-white/10 p-6 hidden md:flex flex-col">
        <h1 className="text-2xl font-bold mb-10">TeamFlow AI</h1>

        <nav className="space-y-3">
          <button className="w-full text-left px-4 py-3 rounded-xl bg-white/10">
            Dashboard
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

          <button className="w-full text-left px-4 py-3 rounded-xl hover:bg-white/10 transition">
            Team
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <section className="flex-1">
        {/* Topbar */}
        <header className="h-20 border-b border-white/10 flex items-center justify-between px-8">
          <div>
            <h2 className="text-2xl font-semibold">
              Dashboard
            </h2>

            <p className="text-zinc-400 text-sm mt-1">
              Welcome back, Massi 👋
            </p>
          </div>

          <div className="w-10 h-10 rounded-full bg-white/10" />
        </header>

        {/* Dashboard Content */}
        <div className="p-8">
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-white/10 bg-zinc-900 p-6">
              <p className="text-zinc-400 text-sm">
                Active Projects
              </p>

              <h3 className="text-4xl font-bold mt-4">
                12
              </h3>
            </div>

            <div className="rounded-2xl border border-white/10 bg-zinc-900 p-6">
              <p className="text-zinc-400 text-sm">
                Tasks Completed
              </p>

              <h3 className="text-4xl font-bold mt-4">
                84
              </h3>
            </div>

            <div className="rounded-2xl border border-white/10 bg-zinc-900 p-6">
              <p className="text-zinc-400 text-sm">
                Team Members
              </p>

              <h3 className="text-4xl font-bold mt-4">
                18
              </h3>
            </div>
          </div>

          {/* Recent Tasks */}
          <div className="mt-10 rounded-2xl border border-white/10 bg-zinc-900 p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold">
                Recent Tasks
              </h3>

              <button className="px-4 py-2 rounded-xl bg-white text-black text-sm font-medium">
                New Task
              </button>
            </div>

            <div className="mt-6 space-y-4">
              <div className="p-4 rounded-xl bg-black border border-white/10">
                Design onboarding flow
              </div>

              <div className="p-4 rounded-xl bg-black border border-white/10">
                Build AI assistant API
              </div>

              <div className="p-4 rounded-xl bg-black border border-white/10">
                Add Stripe subscriptions
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
