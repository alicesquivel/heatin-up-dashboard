import { useMemo, useState } from "react";

/* Simple inline icons (no external packages) */
const IconGauge = (p) => (
  <svg viewBox="0 0 24 24" width="20" height="20" {...p}>
    <path fill="currentColor" d="M12 3a9 9 0 1 0 9 9h-2a7 7 0 1 1-7-7V3z" />
    <path fill="currentColor" d="M13 13.5 17 8l2 2-4.5 3.5z" />
  </svg>
);
const IconDrop = (p) => (
  <svg viewBox="0 0 24 24" width="20" height="20" {...p}>
    <path
      fill="currentColor"
      d="M12 2s5 6 5 10a5 5 0 1 1-10 0c0-4 5-10 5-10z"
    />
  </svg>
);
const IconWind = (p) => (
  <svg viewBox="0 0 24 24" width="20" height="20" {...p}>
    <path
      fill="currentColor"
      d="M3 8h11a2 2 0 1 0-2-2h-2a4 4 0 1 1 4 4H3zm0 8h14a2 2 0 1 0-2-2h-2a4 4 0 1 1 4 4H3z"
    />
  </svg>
);
const IconAlert = (p) => (
  <svg viewBox="0 0 24 24" width="20" height="20" {...p}>
    <path
      fill="currentColor"
      d="M1 21h22L12 2 1 21zm12-3h-2v2h2v-2zm0-8h-2v6h2V10z"
    />
  </svg>
);

const FIELDS = [
  { id: "field-a", name: "Field A - Stadium" },
  { id: "field-b", name: "Field B - Practice East" },
  { id: "field-c", name: "Field C - Track" },
];

const METRICS = [
  { key: "temp", label: "Temp", icon: IconGauge, value: "91.4", unit: "°F" },
  { key: "hum", label: "Humidity", icon: IconDrop, value: "61", unit: "%" },
  { key: "wind", label: "Wind", icon: IconWind, value: "3", unit: "mph" },
  {
    key: "hi",
    label: "Heat Index",
    icon: IconGauge,
    value: "103.8",
    unit: "°F",
  },
];

export default function App() {
  const [activeField, setActiveField] = useState(FIELDS[0].id);

  const series = useMemo(() => {
    const base = 88;
    return Array.from({ length: 15 }, (_, i) => ({
      t: i,
      green: base + Math.sin(i / 3) * 2 + 1,
      orange: base + Math.sin(i / 2.3) * 3 + (i % 4 === 0 ? 4 : 0),
    }));
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* Header */}
      <header className="mx-auto max-w-6xl px-4 py-5 flex items-center justify-between">
        <h1 className="text-xl font-semibold tracking-tight flex items-center gap-2">
          <span className="inline-grid place-items-center h-8 w-8 rounded-xl bg-cyan-100 text-cyan-700">
            <span className="h-2 w-2 rounded-full bg-cyan-700" />
          </span>
          Heatin-Up – Simple Dashboard
        </h1>
        <button
          onClick={() => window.location.reload()}
          className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-3 py-2 text-sm hover:bg-white shadow-sm"
          aria-label="Refresh"
        >
          <svg
            viewBox="0 0 24 24"
            width="16"
            height="16"
            className="text-slate-700"
          >
            <path
              fill="currentColor"
              d="M17 1v6h-2V5.08A7 7 0 1 0 19 12h2a9 9 0 1 1-3.38-7H17z"
            />
          </svg>
          Refresh
        </button>
      </header>

      {/* Alert strip */}
      <div className="w-full bg-rose-100/70 border-y border-rose-200">
        <div className="mx-auto max-w-6xl px-4 py-3 text-sm">
          <span className="inline-block bg-rose-200 text-rose-900 px-3 py-1 rounded-full font-medium mr-3">
            Extreme Caution
          </span>
          <span className="text-slate-800/90">
            Campus Avg Heat Index: <span className="font-semibold">93.4°F</span>
            <span className="mx-2">·</span> Temp 88.1°F
            <span className="mx-2">·</span> Hum 52.1%
            <span className="mx-2">·</span> Wind 11 mph
          </span>
        </div>
      </div>

      {/* Guidance */}
      <section className="mx-auto max-w-6xl px-4 py-4">
        <div className="rounded-2xl border border-rose-200 bg-rose-50/60 p-4">
          <div className="flex items-start gap-3">
            <IconAlert className="text-rose-600 mt-0.5" />
            <div>
              <h2 className="font-semibold text-slate-900">
                Extreme Caution – Practical Guidance
              </h2>
              <ul className="mt-2 list-disc pl-5 text-slate-600">
                <li>Hydrate frequently; schedule work/rest cycles.</li>
                <li>Shorten or move activities indoors/shade.</li>
                <li>Monitor at-risk athletes; watch for heat illness.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <nav className="mx-auto max-w-6xl px-4">
        <div className="flex gap-3">
          {FIELDS.map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveField(f.id)}
              className={
                "rounded-xl px-4 py-2 text-sm border " +
                (activeField === f.id
                  ? "bg-cyan-700 text-white border-cyan-700"
                  : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50")
              }
            >
              {f.name}
            </button>
          ))}
        </div>
      </nav>

      {/* Metric cards */}
      <section className="mx-auto max-w-6xl px-4 mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {METRICS.map((m) => (
          <div
            key={m.key}
            className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
          >
            <div className="flex items-center gap-3 text-slate-600">
              <m.icon />
              <span className="text-sm">{m.label}</span>
            </div>
            <div className="mt-2 text-2xl font-semibold tracking-tight">
              {m.value} <span className="text-base align-top">{m.unit}</span>
            </div>
          </div>
        ))}
      </section>

      {/* Chart */}
      <section className="mx-auto max-w-6xl px-4 mt-6 pb-8">
        <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
          <div className="text-sm text-slate-600 mb-2">
            <span className="font-medium">
              {FIELDS.find((f) => f.id === activeField)?.name}
            </span>{" "}
            · Last 2 hours
          </div>
          <MiniChart series={series} />
        </div>
      </section>

      <footer className="mx-auto max-w-6xl px-4 pb-10 text-xs text-slate-500">
        © 2025 Heatin-Up · Demo UI.
      </footer>
    </div>
  );
}

function MiniChart({ series }) {
  const w = 930,
    h = 280,
    pad = 40;
  const minY = 70,
    maxY = 120;
  const x = (i) => pad + (i * (w - pad * 2)) / (series.length - 1);
  const y = (v) =>
    pad + (h - pad * 2) - ((v - minY) / (maxY - minY)) * (h - pad * 2);

  const line = series
    .map((p, i) => `${i === 0 ? "M" : "L"} ${x(i)} ${y(p.orange)}`)
    .join(" ");
  const areaTop = series
    .map((p, i) => `${i === 0 ? "M" : "L"} ${x(i)} ${y(p.green)}`)
    .join(" ");
  const area = `${areaTop} L ${x(series.length - 1)} ${y(minY)} L ${x(0)} ${y(
    minY
  )} Z`;

  const gridX = Array.from(
    { length: 6 },
    (_, i) => pad + (i * (w - pad * 2)) / 5
  );
  const gridY = [minY, 90, 120].map((v) => y(v));

  return (
    <div className="overflow-x-auto">
      <svg width={w} height={h} className="min-w-[720px]">
        <rect
          x="1"
          y="1"
          width={w - 2}
          height={h - 2}
          rx="14"
          className="fill-slate-50"
        />
        {gridX.map((gx, i) => (
          <line
            key={`gx${i}`}
            x1={gx}
            y1={pad}
            x2={gx}
            y2={h - pad}
            className="stroke-slate-300/60"
            strokeDasharray="4 6"
          />
        ))}
        {gridY.map((gy, i) => (
          <line
            key={`gy${i}`}
            x1={pad}
            y1={gy}
            x2={w - pad}
            y2={gy}
            className="stroke-slate-300/60"
            strokeDasharray="4 6"
          />
        ))}
        <path d={area} className="fill-green-300/40" />
        <path
          d={line}
          className="stroke-orange-400"
          strokeWidth="3"
          fill="none"
        />
        <rect
          x={pad}
          y={pad}
          width={w - pad * 2}
          height={h - pad * 2}
          className="stroke-slate-400/60 fill-none"
          strokeDasharray="4 6"
        />
      </svg>
    </div>
  );
}
