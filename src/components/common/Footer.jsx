export default function Footer() {
  return (
    <footer className="bg-[#0057a5] text-white py-10 px-6">
      <div className="max-w-screen-xl mx-auto grid md:grid-cols-2 gap-6">
        {/* 왼쪽 회사 정보 */}
        <div>
          <img src="../src/assets/OrcaIT.png" alt="OrcaIT Logo" className="w-40 mb-4 " />
          <p className="text-sm leading-6">
            (주)오르카아이티 | 대표자 : 김승조<br />
            사업자등록번호 : 107-86-35726<br />
            (13814) 경기도 과천시 뒷골로 26 그레이스 1층(과천동 371-1)<br />
            TEL: 02-572-4720 | FAX: 02-572-4739
          </p>
        </div>

        {/* 오른쪽 링크 모음 */}
        <div className="grid grid-cols-2 md:grid-cols-4 text-sm gap-4">
          <div>
            <h4 className="font-semibold mb-2">회사</h4>
            <ul className="space-y-1">
              <li><a href="#" className="hover:underline">About</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">서비스</h4>
            <ul className="space-y-1">
              <li><a href="#" className="hover:underline">솔루션 소개</a></li>
              <li><a href="#" className="hover:underline">고객사례</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">지원</h4>
            <ul className="space-y-1">
              <li><a href="#" className="hover:underline">자료실</a></li>
              <li><a href="#" className="hover:underline">고객지원</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">정책</h4>
            <ul className="space-y-1">
              <li><a href="#" className="hover:underline">개인정보처리방침</a></li>
              <li><a href="#" className="hover:underline">이용약관</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-xs text-gray-300 border-t border-gray-600 pt-4">
        Copyright © 2025 OrcaIT CO.,Ltd. All Rights Reserved.
      </div>
    </footer>
  )
}
