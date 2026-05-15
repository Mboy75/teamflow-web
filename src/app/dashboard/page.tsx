import DashboardLayout from "@/components/layout/dashboard-layout"

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="grid grid-cols-3 gap-6">
        <div className="rounded-2xl border border-white/10 p-6 bg-zinc-900">
          <h3 className="text-zinc-400 text-sm">Projects</h3>
          <p className="text-4xl font-bold mt-4">12</p>
        </div>

        <div className="rounded-2xl border border-white/10 p-6 bg-zinc-900">
          <h3 className="text-zinc-400 text-sm">Tasks</h3>
          <p className="text-4xl font-bold mt-4">84</p>
        </div>

        <div className="rounded-2xl border border-white/10 p-6 bg-zinc-900">
          <h3 className="text-zinc-400 text-sm">Members</h3>
          <p className="text-4xl font-bold mt-4">18</p>
        </div>
      </div>
    </DashboardLayout>
  )
}