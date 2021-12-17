import Link from "next/link";
import Container from "../Container";

import styled from "styled-components";

import { useI18n } from "../../contexts/i18nContext";

const Header = () => {
  const i18n = useI18n();

  return (
    <Container>
      <StyledHeader>
        <span>Logo</span>

        <nav>
          <ul>
            {i18n.topmenu.map((menuItem, index) => (
              <li key={index}>
                <Link href={menuItem.url}>
                  <a>{menuItem.name}</a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </StyledHeader>
    </Container>
  );
};
export default Header;

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ul {
    display: flex;
    list-style: none;
    li {
      margin: 5px;
    }
  }
`;
