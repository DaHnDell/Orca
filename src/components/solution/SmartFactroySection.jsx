import Section from "../common/Section"; import { Title } from "../common/Title"; import { Btn } from "../common/Btn";
export default function SmartFactorySection(){
  return (
    <Section id="SmartFactory" bg="bg-slate-50">
      <Title title="스마트공장 / Industry 4.0" subtitle="QAD Automation Solutions는 인더스트리 4.0을 가능하게 하는 핵심 기능입니다." />
      <div className="overflow-hidden rounded-2xl border bg-white p-4">
        <img src="/images/main/main_smart_pc.png" alt="" className="w-full" />
      </div>
      <div className="mt-8 text-center"><Btn href="https://orcait.net/theme/basic/solution/qad_smart.php?nav=1-1-9">상세보기</Btn></div>
    </Section>
  );
}
