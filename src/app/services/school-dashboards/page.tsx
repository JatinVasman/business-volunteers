import { Metadata } from "next";
import SchoolDashboardsPage from "./SchoolDashboardsPage";

export const metadata: Metadata = {
  title:
    "School & Education Management Dashboards | Business Volunteers",
  description:
    "Admission tracking, student performance, fee collection, and teacher dashboards for schools. Starting ₹1,500.",
  alternates: {
    canonical: "https://businessvolunteers.online/services/school-dashboards",
  },
};

export default function Page() {
  return <SchoolDashboardsPage />;
}
