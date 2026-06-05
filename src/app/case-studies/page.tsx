import { Metadata } from "next";
import CaseStudiesPage from "./CaseStudiesPage";

export const metadata: Metadata = {
  title: "Our Results — Real Client Success Stories | Business Volunteers",
  description:
    "See how we helped businesses generate leads, increase admissions, and grow revenue with websites, marketing, dashboards, and strategy.",
  alternates: {
    canonical: "https://businessvolunteers.online/case-studies",
  },
};

export default function Page() {
  return <CaseStudiesPage />;
}
