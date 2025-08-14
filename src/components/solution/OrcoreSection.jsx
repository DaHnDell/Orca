import Section from "../common/Section"; import { Title } from "../common/Title"; import { Btn } from "../common/Btn";
export default function OrCoreSection(){
  return (
    <Section id="OrCore">
      <Title title="OrCore" subtitle="국가/산업별 특화 기능을 QAD와 함께 제공하는 현지화 솔루션" align="left" />
      <ul className="space-y-3 text-slate-700">
        <li><b>OrCore-i</b> : 인사급여, VAT, 실제원가, 품질/설비, 경영기획, EIS 등 내부관리</li>
        <li><b>OrCore-e</b> : 공급자포털, 사급자 관리 등 외부 사용자 솔루션</li>
      </ul>
      <div className="mt-6"><Btn href="https://orcait.net/theme/basic/solution/orcore.php?nav=1-2-0">상세보기</Btn></div>
    </Section>
  );
}
