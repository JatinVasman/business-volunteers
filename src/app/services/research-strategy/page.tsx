import { Metadata } from "next";
import ResearchStrategyPage from "./ResearchStrategyPage";

export const metadata: Metadata = {
  title:
    "Research & Strategy Consulting — Market Research & Business Growth | Business Volunteers",
  description:
    "Data-driven research, competitor analysis, and growth strategy for businesses. Full package ₹9,999.",
  alternates: {
    canonical: "https://businessvolunteers.online/services/research-strategy",
  },
};

export default function Page() {
  return <ResearchStrategyPage />;
}
