const stats = [
  {
    number: '500+',
    label: 'Daily Deliveries',
  },
  {
    number: '120+',
    label: 'Fleet Vehicles',
  },
  {
    number: '24/7',
    label: 'Customer Support',
  },
]

function MainBody() {
  return (
    <section className="relative overflow-hidden bg-[#0b1731] py-24">
      <div className="absolute inset-0 bg-linear-to-b from-[#0a1428] via-[#0d1b38] to-[#081126] opacity-95" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
              Fast & Reliable Logistics
            </p>

            <h2 className="mb-6 text-4xl font-bold leading-tight text-white md:text-5xl">
              Moving Businesses Forward With Smart Transport Solutions
            </h2>

            <p className="mb-8 max-w-xl text-lg leading-8 text-slate-300">
              Crownway Logistics delivers seamless transportation, secure cargo
              handling, and real-time shipment tracking for businesses across
              India. Our modern fleet ensures safe and on-time delivery every
              single day.
            </p>

            <div className="grid gap-5 sm:grid-cols-3">
              {stats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md transition duration-300 hover:-translate-y-2 hover:border-cyan-400/40"
                >
                  <h3 className="text-3xl font-bold text-cyan-400">
                    {item.number}
                  </h3>
                  <p className="mt-2 text-sm text-slate-300">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex h-105 items-center justify-center overflow-hidden rounded-4xl border border-white/10 bg-[#101f40] shadow-2xl shadow-cyan-500/10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.2),transparent_60%)]" />

            <div className="absolute bottom-16 left-0 h-2 w-full bg-slate-700/70" />
            <div className="absolute bottom-14.5 left-0 h-0px w-full border-t border-dashed border-slate-400/40" />

            <div className="absolute bottom-16 left-[-40%] animate-[truckMove_12s_linear_infinite]">
              <div className="relative h-16 w-48 rounded-xl bg-cyan-400 shadow-lg shadow-cyan-500/40">
                <div className="absolute left-4 top-4 h-8 w-16 rounded-md bg-[#081126]" />
                <div className="absolute right-0 top-5 h-10 w-20 rounded-r-xl bg-cyan-300" />

                <div className="absolute -bottom-4 left-5 h-8 w-8 rounded-full border-4 border-slate-900 bg-slate-300" />
                <div className="absolute -bottom-4 right-5 h-8 w-8 rounded-full border-4 border-slate-900 bg-slate-300" />
              </div>
            </div>

            <div className="absolute bottom-32 left-[-55%] animate-[truckMove_16s_linear_infinite] opacity-70">
              <div className="relative h-12 w-36 rounded-lg bg-orange-400 shadow-lg shadow-orange-500/30">
                <div className="absolute left-3 top-3 h-6 w-12 rounded bg-[#081126]" />
                <div className="absolute right-0 top-4 h-8 w-14 rounded-r-lg bg-orange-300" />

                <div className="absolute -bottom-3 left-4 h-6 w-6 rounded-full border-4 border-slate-900 bg-slate-300" />
                <div className="absolute -bottom-3 right-4 h-6 w-6 rounded-full border-4 border-slate-900 bg-slate-300" />
              </div>
            </div>

            <div className="absolute top-14 right-10 rounded-2xl border border-cyan-400/20 bg-white/5 px-5 py-4 backdrop-blur-md">
              <p className="text-sm text-slate-300">Live Shipment Tracking</p>
              <h4 className="mt-2 text-2xl font-bold text-white">98.7%</h4>
              <p className="mt-1 text-xs text-cyan-300">
                On-time delivery performance
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>
        {`
          @keyframes truckMove {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(180%);
            }
          }
        `}
      </style>
    </section>
  )
}

export default MainBody
