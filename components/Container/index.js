import styled from "styled-components";

const Container = ({ narrow, center, children }) => {
  return (
    <StyledContainer narrow={narrow} center={center}>
      {children}
    </StyledContainer>
  );
};
export default Container;

const StyledContainer = styled.div`
  margin: 0 auto;
  padding: 0 var(--space-md);
  max-width: ${(props) =>
    props.narrow ? "var(--content-narrow-width)" : "var(--content-max-width)"};

  ${(props) =>
    props.center &&
    `
      text-align: center;
  `}
`;
