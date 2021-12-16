import breakpoints from "../../styles/breakpoints";

export default function Container({ type, className, children }) {
  return (
    <>
      <div className={`${type ? type : ""}${className ? " " + className : ""}`}>{children}</div>
    </>
  );
}
