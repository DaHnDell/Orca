// src/components/layout/Header.jsx
import { Link} from "react-router-dom";
import { useState } from "react";
import HeaderLogo from "../common/HeaderLogo";
import useCloseMenuOnRouteChange from "../../hooks/useCloseMenuOnRouteChange.jsx";


const NAV = [
  {
    label: "Solution",
    href: "/solution",
    children: [
      { label: "QAD",         href: "/solution#content"  },
      { label: "Cloud",       href: "/solution#content1" },
      { label: "스마트공장",  href: "/solution#content2" },
      { label: "MMOG/LE",     href: "/solution#mmog"     },
      { label: "OrCore",      href: "/solution#OrCore"   },
      { label: "Progress",    href: "/solution#Progress" },
      { label: "ERP 성공사례", href: "/solution#Erp"     },
    ],
  },
  {
    label: "Service",
    href: "/service",
    children: [
      { label: "컨설팅 서비스",  href: "/service#ser1" },
      { label: "아웃소싱 서비스", href: "/service#ser2" },
      { label: "Cloud 서비스",   href: "/service#ser3" },
      { label: "교육 서비스",    href: "/service#ser4" },
      { label: "교육 신청",      href: "/service#apply" }, // 내부 앵커(페이지에 id="apply" 추가)
    ],
  },
  {
    label: "Contact",
    href: "/contact",
    children: [
      { label: "고객지원업무",     href: "/contact#intro"   },
      { label: "자료실",           href: "/contact#library" },
      { label: "고객지원포탈사이트", href: "/contact#portal"  },
      { label: "문의/방문 요청",    href: "/contact#request" },
    ],
  },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "기업개요",   href: "/about#overview"  },
      { label: "CEO 인사말", href: "/about#ceo"       },
      { label: "비젼",       href: "/about#vision"    },
      { label: "CI",        href: "/about#ci"        },
      { label: "고객사",     href: "/about#customers" },
      { label: "협력사",     href: "/about#partners"  },
      { label: "입사지원",   href: "/about#jobs"      },
      { label: "홍보 및 새소식", href: "/about#news"  },
      { label: "오시는길",   href: "/about#location"  },
    ],
  },
];

/* -------------------------------------------
   Header
------------------------------------------- */
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openIdx, setOpenIdx] = useState(null); // 모바일 아코디언 열림 인덱스
  useCloseMenuOnRouteChange(setMenuOpen, setOpenIdx);

  return (
    <header className="w-full sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/70">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16">
          {/* 로고 */}
          <div className="flex items-center space-x-3">
            <HeaderLogo />
            <h1 className="font-bold text-sky-800 text-xl font-shadow">O r c a . I T</h1>
          </div>

          {/* 햄버거 */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 -mr-2 text-gray-700 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* 데스크톱 네비 */}
          <nav className="hidden md:flex items-center gap-6">
            {NAV.map((item) => (
              <div key={item.label} className="relative group">
                {/* 1차 메뉴 */}
                <Link
                  to={item.href || "#"}
                  className="px-1 py-2 text-gray-700 hover:text-slate-900 font-medium
                             relative after:absolute after:left-0 after:-bottom-0.5 after:h-0.5 after:w-full
                             after:scale-x-0 after:origin-left after:bg-sky-500 after:transition-transform
                             group-hover:after:scale-x-100"
                >
                  {item.label}
                </Link>

                {/* 드롭다운 */}
                {item.children && (
                  <div
                    className="pointer-events-none absolute left-1/2 top-full -translate-x-1/2 pt-3 z-30 w-56
                               opacity-0 -translate-y-1 scale-95 transition-all duration-150 ease-out
                               group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100 group-hover:pointer-events-auto"
                  >
                    <div className="rounded-xl bg-white shadow-xl ring-1 ring-black/5 overflow-hidden">
                      <ul className="py-2">
                        {item.children.map((c) => (
                          <li key={c.label}>
                            <Link
                              to={c.href}
                              className="block px-4 py-2.5 text-sm text-slate-700 hover:bg-blue-50 hover:text-slate-900"
                            >
                              {c.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>

        {/* 모바일 드로어 */}
        <div className={`md:hidden transition-all duration-500 ease-in-out overflow-hidden ${menuOpen ? "max-h-screen opacity-100 visible" : "max-h-0 opacity-0 invisible"}`}>
          <ul className="flex flex-col divide-y">
            {NAV.map((item, idx) => {
              const expanded = openIdx === idx;
              const hasChild = !!item.children?.length;
              return (
                <li key={item.label} className="py-1">
                  <div className="flex items-center justify-between">
                    <Link to={item.href || "#"} className="py-3 font-medium text-gray-900" onClick={() => setMenuOpen(false)}>
                      {item.label}
                    </Link>

                    {hasChild && (
                      <button
                        className="p-3 text-gray-600"
                        aria-expanded={expanded}
                        onClick={(e) => {
                          e.preventDefault();
                          setOpenIdx(expanded ? null : idx);
                        }}
                      >
                        <svg className={`transition-transform ${expanded ? "rotate-180" : ""}`} width="18" height="18" viewBox="0 0 20 20">
                          <path d="M5 7l5 5 5-5" stroke="currentColor" fill="none" />
                        </svg>
                      </button>
                    )}
                  </div>

                  {hasChild && (
                    <div className={`overflow-hidden transition-all ${expanded ? "max-h-96" : "max-h-0"}`}>
                      <ul className="pl-3 pb-2">
                        {item.children.map((c) => (
                          <li key={c.label}>
                            <Link
                              to={c.href}
                              className="block py-2.5 text-sm text-slate-700 hover:text-slate-900"
                              onClick={() => setMenuOpen(false)}
                            >
                              {c.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </header>
  );
}
