import Section from "../common/Section"; import { Title } from "../common/Title"; import { Btn } from "../common/Btn";
const CASES = [
  { img:"/images/sub/erp1.png", title:"어떻게 단기간에 성공적으로 사용할 수 있었을까?", desc:"H사는 … 한국 4법인과 중국 1개법인을 단기간에 구축", href:"https://orcait.net/theme/basic/solution/erp_success.php?nav=1-4-0#Hands" },
  { img:"/images/sub/erp2.png", title:"MES와 결합된 ERP는 어떤 모습일까?", desc:"ERP와 MES 결합으로 현장/사무실 모두 만족", href:"https://orcait.net/theme/basic/solution/erp_success.php?nav=1-4-0#Global" },
  { img:"/images/sub/erp3.png", title:"Cloud/ITO로 안정적 유지관리 및 TCO 최소화", desc:"P사는 … Cloud/ITO로 해결", href:"https://orcait.net/theme/basic/solution/erp_success.php?nav=1-4-0#Pcb" },
];
export default function ErpSuccessSection(){
  return (
    <Section id="Erp" bg="bg-[url('/images/bg/erp-pattern.jpg')] bg-cover">
      <Title title="ERP 성공사례" />
      <div className="space-y-6">
        {CASES.map(c => (
          <div key={c.title} className="grid md:grid-cols-[140px_1fr_auto] items-center gap-6 rounded-xl bg-white/90 p-4 ring-1 ring-black/5">
            <img src={c.img} alt="" className="w-32 h-32 object-contain mx-auto md:mx-0" />
            <div>
              <h4 className="font-semibold text-ink">{c.title}</h4>
              <p className="text-slate-600 text-sm mt-1">{c.desc}</p>
            </div>
            <Btn href={c.href}>상세보기</Btn>
          </div>
        ))}
      </div>
    </Section>
  );
}
