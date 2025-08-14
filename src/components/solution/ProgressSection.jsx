import Section from "../common/Section"; import { Title } from "../common/Title"; import { Btn } from "../common/Btn";
export default function ProgressSection(){
  return (
    <Section id="Progress" bg="bg-slate-50">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <img src="/images/sub/progresslogo.png" alt="Progress" className="h-10 mb-4" />
          <p className="text-slate-700 text-sm">어떠한 플랫폼에서도 비즈니스 앱이 안정적으로 구동될 수 있는 환경과 신속한 구축을 위한 개발 플랫폼</p>
          <div className="mt-6"><Btn href="https://orcait.net/theme/basic/solution/progress_oeplat.php?nav=1-3-0">상세보기</Btn></div>
        </div>
        <img src="/images/sub/computer.png" alt="" className="w-full" />
      </div>
    </Section>
  );
}
