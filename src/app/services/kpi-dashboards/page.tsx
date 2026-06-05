import { Metadata } from "next";
import KPIDashboardsPage from "./KPIDashboardsPage";

export const metadata: Metadata = {
  title:
    "KPI Dashboards & Business Trackers — Custom Excel & Google Sheets | Business Volunteers",
  description:
    "Custom-built KPI dashboards and business reporting systems for startups, schools, agencies, and enterprises. Starting ₹1,500.",
  alternates: {
    canonical: "https://businessvolunteers.online/services/kpi-dashboards",
  },
};

export default function Page() {
  return <KPIDashboardsPage />;
}
