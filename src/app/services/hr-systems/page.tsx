import { Metadata } from "next";
import HRSystemsPage from "./HRSystemsPage";

export const metadata: Metadata = {
  title: "HR Systems & People Management Solutions | Business Volunteers",
  description:
    "Employee handbooks, attendance, leave, performance review, and onboarding systems. Starting ₹1,500.",
  alternates: {
    canonical: "https://businessvolunteers.online/services/hr-systems",
  },
};

export default function Page() {
  return <HRSystemsPage />;
}
