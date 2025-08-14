// CloudSection.jsx
import Section from "../common/Section"; import { Title } from "../common/Title"; import { Card } from "../common/Card"; import { Btn } from "../common/Btn";
export default function CloudSection(){
  return (
    <Section id="Cloud" bg="bg-[url('/images/bg/cloud-blur.jpg')] bg-cover bg-center">
      <Title title="제조업에 필요한 모든 기능을 갖춘 Cloud ERP" subtitle="No Hardware, No Hassle" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="p-6">
          <div className="flex items-center gap-3 mb-3">
            <img src="/images/main/main_top_qad_logo.png" alt="" className="h-6" />
            <h4 className="font-semibold">AERP</h4>
          </div>
          <p className="text-slate-600 text-sm mb-4">QAD Adaptive ERP는 변화하는 시장 요구에…</p>
          <Btn href="https://orcait.net/theme/basic/solution/qad_aerp.php?nav=1-1-2">상세보기</Btn>
        </Card>
        <Card className="p-6">
          <div className="flex items-center gap-3 mb-3">
            <img src="/images/main/main_top_qad_logo.png" alt="" className="h-6" />
            <h4 className="font-semibold">O³</h4>
          </div>
          <p className="text-slate-600 text-sm mb-4">QAD ERP O³는 AWS 기반의 최신 기술과…</p>
          <Btn href="https://orcait.net/theme/basic/solution/qad_o3.php?nav=1-1-2">상세보기</Btn>
        </Card>
      </div>
      <p className="mt-6 text-center text-slate-700 text-sm">QAD AERP와 QAD O³는 Cloud/On-Premise 지원</p>
    </Section>
  );
}
