export default function Block({ className, children }) {
  return (
    <>
      <div className={className}>{children}</div>
    </>
  );
}
