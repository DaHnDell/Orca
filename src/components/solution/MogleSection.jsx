import Section from "../common/Section"; import { Title } from "../common/Title"; import { Btn } from "../common/Btn";
export default function MmogleSection(){
  return (
    <Section id="Mmog" bg="bg-[#e5f0f7]">
      <Title title="MMOG/LE (자재 및 물류관리 평가기준)" subtitle="자동차산업에서 개발된… 공급업체 선정/평가 도구" />
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <img src="/images/sub/solution_main_logoWrap.png" alt="" className="w-full max-w-md mx-auto" />
        <ul className="text-slate-700 text-sm space-y-2">
          <li>- 재고수준과 납품성과 개선?</li>
          <li>- 경영 수준을 높일 차세대 성과 향상 툴?</li>
          <li>- 고객사의 MMOG/LE 요구에 합당한 솔루션?</li>
        </ul>
      </div>
      <div className="mt-8 text-center"><Btn href="https://orcait.net/theme/basic/solution/qad_mmog.php?nav=1-1-10">상세보기</Btn></div>
    </Section>
  );
}
