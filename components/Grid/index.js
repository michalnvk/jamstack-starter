import breakpoints from "../../styles/breakpoints";

export default function Grid({ type, verticalCenter, children }) {
  return (
    <>
      <div className={`${type}${verticalCenter ? " vcenter" : ""}`}>{children}</div>
      <style jsx>{`
        div {
          display: grid;
          gap: var(--space-xl);
        }
        div + div {
          margin-top: var(--space-xl);
        }

        .grid2,
        .grid3 {
          grid-template-columns: 1fr;
        }

        .vcenter {
          align-items: center;
        }
        @media ${breakpoints.min.sm} {
          .grid3 {
            grid-template-columns: 1fr 1fr 1fr;
          }
          .grid2 {
            grid-template-columns: 1fr 1fr;
          }
        }
      `}</style>
    </>
  );
}
