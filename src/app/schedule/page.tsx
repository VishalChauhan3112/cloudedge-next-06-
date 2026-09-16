import ScheduleForm from "@/components/ScheduleForm";

export const metadata = { title: "Schedule a Call" };

export default function SchedulePage() {
  return (
    <div className="container section">
      <h1 className="text-3xl font-semibold">Schedule a 30-minute consultation</h1>
      <p className="mt-2 text-slate-600">Pick a date and slot. We will confirm with a calendar invite.</p>
      <div className="mt-6">
        <ScheduleForm />
      </div>
    </div>
  );
}
