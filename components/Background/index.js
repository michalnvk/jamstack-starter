export default function Background({ type, children }) {
  return (
    <>
      <div className={type}>{children}</div>
    </>
  );
}
