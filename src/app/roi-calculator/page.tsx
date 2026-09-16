import RoiCalculator from "@/components/RoiCalculator";

export const metadata = { title: "ROI Calculator" };

export default function RoiCalculatorPage() {
  return (
    <div className="container section">
      <h1 className="text-3xl font-semibold">IT Downtime ROI Calculator</h1>
      <p className="mt-2 text-slate-600">Estimate downtime cost and potential savings from improved IT operations.</p>
      <div className="mt-6">
        <RoiCalculator />
      </div>
    </div>
  );
}
