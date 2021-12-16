import Link from "next/link";
import { useI18n } from "../../contexts/i18nContext";

export default function Header() {
  const i18n = useI18n();

  return (
    <>
      <header>
        LOGO
        
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

      </header>
    </>
  );
}
