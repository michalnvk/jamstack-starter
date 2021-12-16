import Link from "next/link";
import styled from "styled-components";
import { useI18n } from "../../contexts/i18nContext";

export default function Header() {
  const i18n = useI18n();

  return (
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
  );
}

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
