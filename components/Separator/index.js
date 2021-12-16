export default function Separator() {
  return (
    <>
      <div></div>
      <style jsx>{`
        div {
          width: 70%;
          margin: var(--space-xl) auto;
          border-top: 1px solid var(--color-border);
        }
      `}</style>
    </>
  );
}
