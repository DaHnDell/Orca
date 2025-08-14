// src/components/solution/QadSection.jsx
import Section from "../common/Section";
import { Title } from "../common/Title";
import { Card } from "../common/Card";
import { Btn } from "../common/Btn";

const INDUSTRIES = [
  { label: "자동차",    icon: "/images/sub/qad1.png" },
  { label: "소비재",    icon: "/images/sub/qad2.png" },
  { label: "식음료",    icon: "/images/sub/qad3.png" },
  { label: "전기전자",  icon: "/images/sub/qad4.png" },
  { label: "일반산업",  icon: "/images/sub/qad5.png" },
  { label: "생명과학",  icon: "/images/sub/qad6.png" },
];

const MODULES = [
  { label: "생산",   icon: "/images/main/production.png", href: "https://orcait.net/theme/basic/solution/qad_production.php?nav=1-1-3" },
  { label: "고객",   icon: "/images/main/customer.png",   href: "https://orcait.net/theme/basic/solution/qad_customer.php?nav=1-1-4" },
  { label: "공급망", icon: "/images/main/supply.png",     href: "https://orcait.net/theme/basic/solution/qad_supply.php?nav=1-1-5" },
  { label: "회계",   icon: "/images/main/accounting.png", href: "https://orcait.net/theme/basic/solution/qad_account.php?nav=1-1-6" },
  { label: "분석",   icon: "/images/main/analysis.png",   href: "https://orcait.net/theme/basic/solution/qad_analysis.php?nav=1-1-7" },
  { label: "통합",   icon: "/images/main/combine.png",    href: "https://orcait.net/theme/basic/solution/qad_interg.php?nav=1-1-8" },
];

export default function QadSection() {
  return (
    <Section id="Qad" bg="bg-white">
      <div className="flex flex-col items-center">
        <img src="/images/sub/QADlogo.png" alt="QAD" className="h-12 mb-4" />
        <Title
          overline="SOLUTION"
          title="효과적인 기업 구축을 위한 ERP"
          subtitle="기업의 모든 비즈니스 프로세스가 최상의 효율로 움직이도록 돕는 QAD 솔루션"
        />

        {/* 산업 아이콘 */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 w-full mb-10">
          {INDUSTRIES.map((it) => (
            <div key={it.label} className="rounded-xl border border-slate-200 p-4 text-center">
              <img src={it.icon} alt={it.label} className="mx-auto h-10 object-contain" />
              <p className="mt-2 text-sm text-slate-700">{it.label}</p>
            </div>
          ))}
        </div>

        {/* 모듈 카드 */}
        <h3 className="text-xl font-semibold text-ink mb-4">QAD 모듈</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {MODULES.map((m) => (
            <a key={m.label} href={m.href} className="group">
              <Card className="p-5 hover:-translate-y-0.5 transition-transform">
                <div className="flex items-center gap-4">
                  <img src={m.icon} alt={m.label} className="h-10 w-10 object-contain" />
                  <div className="flex-1">
                    <p className="font-medium text-ink">{m.label}</p>
                    <p className="text-xs text-slate-500">자세히 보기</p>
                  </div>
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity">➜</span>
                </div>
              </Card>
            </a>
          ))}
        </div>

        <div className="mt-8">
          <Btn href="https://orcait.net/theme/basic/solution/qad_intro.php?nav=1-1-0">상세보기</Btn>
        </div>
      </div>
    </Section>
  );
}
