import React from 'react'
import useHashScroll from "../hooks/useHashScroll.jsx";
import QadSection from "../components/solution/QADSection.jsx";
import CloudSection from "../components/solution/CloudSection.jsx";
import SmartFactorySection from "../components/solution/SmartFactroySection.jsx";
import MmogleSection from "../components/solution/MogleSection.jsx";
import OrCoreSection from "../components/solution/OrcoreSection.jsx";
import ProgressSection from "../components/solution/ProgressSection.jsx";
import ErpSuccessSection from "../components/solution/ErpSuccessSection.jsx";

export default function Solution() {
  useHashScroll();
  return (
    <main className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
      <QadSection />
      <CloudSection />
      <SmartFactorySection />
      <MmogleSection />
      <OrCoreSection />
      <ProgressSection />
      <ErpSuccessSection />
    </main>
  );
}
