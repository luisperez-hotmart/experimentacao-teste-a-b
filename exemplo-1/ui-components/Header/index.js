import styles from './Header.module.scss';

const Header = (props) => {
  return (
    <header className={styles.header}>
      <div className={styles.header__logo}>
        <img
          className={styles.header__logo__image}
          src="/hotmart.svg"
          alt="Hotmart Co."
          style={{ maxWidth: '100px' }}
        />
      </div>
    </header>
  );
};

export default Header;
