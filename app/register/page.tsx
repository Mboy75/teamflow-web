export default function RegisterPage() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-zinc-900 p-8">
        <h1 className="text-3xl font-bold">
          Create account
        </h1>

        <p className="text-zinc-400 mt-2">
          Start using TeamFlow AI
        </p>

        <form className="mt-8 space-y-4">
          <input
            type="text"
            placeholder="Full name"
            className="w-full rounded-xl bg-black border border-white/10 px-4 py-3 outline-none"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-xl bg-black border border-white/10 px-4 py-3 outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full rounded-xl bg-black border border-white/10 px-4 py-3 outline-none"
          />

          <button className="w-full rounded-xl bg-white text-black py-3 font-semibold">
            Create Account
          </button>
        </form>
      </div>
    </main>
  )
}