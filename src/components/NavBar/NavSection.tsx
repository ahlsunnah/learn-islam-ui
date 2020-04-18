import { Link } from 'gatsby';
import cx from 'classnames';
import React, { useCallback } from 'react';
import Button from '../Button';
import structure from './structure';
import { useTranslation } from 'react-i18next';

type Props = {
  className?: string;
};

const NavSection = ({ className }: Props) => {
  const { t, i18n } = useTranslation();

  const changeLanguage = useCallback(() => {
    i18n.changeLanguage(t('otherTranslationsLocale'));
  }, [i18n, t]);

  return (
    <nav className={cx('flex1', className)}>
      <ul className="list flex flex-wrap justify-around items-center">
        {structure.map(({ title, link }) => (
          <li key={title}>
            <Link activeClassName="bb b--blue" className="ph2 no-underline" to={`${t('localePath')}${link}`}>
              <span>{t(`${title}`) as string}</span>
            </Link>
          </li>
        ))}
        <li>
          <Link className="ph2 no-underline" to={t('otherTranslationsLocalePath')}>
            <Button rounded outlined onClick={changeLanguage}>
              {t('otherTranslationsLocaleName')}
            </Button>
          </Link>
        </li>
        {/* <li>
      <Button rounded>{t.connect}</Button>
    </li> */}
      </ul>
    </nav>
  );
};
export default NavSection;
