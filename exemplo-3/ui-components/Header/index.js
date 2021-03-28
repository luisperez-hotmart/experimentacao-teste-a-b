import Link from 'next/link';
import styles from './Header.module.scss';

const Header = (props) => {
  return (
    <header className={styles.header}>
      <div className={styles.header__logo}>
        <Link href="/">
          <a>
            <img
              className={styles.header__logo__image}
              src="/hotmart.svg"
              alt="Hotmart Co."
              style={{ maxWidth: '100px' }}
            />
          </a>
        </Link>
      </div>
    </header>
  );
};

export default Header;
