import Link from "next/link";

import breakpoints from "../../styles/breakpoints";

export default function Button({ href, color, size, children, onClick, mobileBlock }) {
  const classNames = `${color ? color : ""}${size ? " " + size : ""}${mobileBlock ? " block" : ""}`;

  return (
    <>
      {href ? (
        <Link href={href}>
          <a className={classNames}>{children}</a>
        </Link>
      ) : (
        <button className={classNames} onClick={onClick}>{children}</button>
      )}
    </>
  );
}
