"use client";

import { useMemo, useState } from "react";

export default function RoiCalculator() {
  const [employees, setEmployees] = useState(50);
  const [hourlyCost, setHourlyCost] = useState(800);
  const [downtimeHours, setDowntimeHours] = useState(6);
  const [itSpend, setItSpend] = useState(200000);

  const result = useMemo(() => {
    const annualDowntimeCost = employees * hourlyCost * downtimeHours * 12;
    const potentialSavings = annualDowntimeCost * 0.3;
    const estimatedRoi = itSpend > 0 ? (potentialSavings / itSpend) * 100 : 0;
    return { annualDowntimeCost, potentialSavings, estimatedRoi };
  }, [employees, hourlyCost, downtimeHours, itSpend]);

  return (
    <div className="card p-6">
      <div className="grid gap-4 md:grid-cols-2">
        <label className="text-sm">
          Employees
          <input
            type="number"
            min={1}
            value={employees}
            onChange={(e) => setEmployees(Number(e.target.value) || 1)}
            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"
          />
        </label>
        <label className="text-sm">
          Hourly cost per employee (₹)
          <input
            type="number"
            min={1}
            value={hourlyCost}
            onChange={(e) => setHourlyCost(Number(e.target.value) || 1)}
            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"
          />
        </label>
        <label className="text-sm">
          Monthly downtime hours
          <input
            type="number"
            min={0}
            value={downtimeHours}
            onChange={(e) => setDowntimeHours(Number(e.target.value) || 0)}
            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"
          />
        </label>
        <label className="text-sm">
          Annual IT spend (₹)
          <input
            type="number"
            min={1}
            value={itSpend}
            onChange={(e) => setItSpend(Number(e.target.value) || 1)}
            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"
          />
        </label>
      </div>

      <div className="mt-6 grid gap-3 md:grid-cols-3">
        <div className="rounded-lg bg-slate-50 p-4">
          <p className="text-xs text-slate-500">Estimated annual downtime cost</p>
          <p className="mt-1 text-xl font-semibold">₹{Math.round(result.annualDowntimeCost).toLocaleString("en-IN")}</p>
        </div>
        <div className="rounded-lg bg-slate-50 p-4">
          <p className="text-xs text-slate-500">Potential savings (estimate)</p>
          <p className="mt-1 text-xl font-semibold">₹{Math.round(result.potentialSavings).toLocaleString("en-IN")}</p>
        </div>
        <div className="rounded-lg bg-slate-50 p-4">
          <p className="text-xs text-slate-500">Estimated ROI</p>
          <p className="mt-1 text-xl font-semibold">{Math.max(0, result.estimatedRoi).toFixed(1)}%</p>
        </div>
      </div>

      <p className="mt-4 text-xs text-slate-500">This calculator provides directional estimates only and is not a pricing quote.</p>
    </div>
  );
}
