import { Link, useLocation } from "react-router-dom";

export function Btn({ href = "#", children, className = "", base }) {
  const loc = useLocation();
  const isExternal = /^https?:\/\//i.test(href);
  const isHashOnly = href.startsWith("#");

  const to = isHashOnly
    ? `${base ?? loc.pathname}${href}`
    : href;

  const classes = `
    inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium
    bg-ink text-white hover:bg-brand transition-colors ${className}
  `;

  if (isExternal) {
    return (
      <a href={href} className={classes} target="_blank" rel="noreferrer">
        {children}
      </a>
    );
  }

  return (
    <Link to={to} className={classes}>
      {children}
    </Link>
  );
}
