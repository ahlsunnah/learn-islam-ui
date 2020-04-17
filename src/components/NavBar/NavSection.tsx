import { Link } from 'gatsby';
import _get from 'lodash/get';
import cx from 'classnames';
import React, { useCallback, useMemo } from 'react';
import Button from '../Button';
import structure from './structure';
import { TTracksPageOtherTranslationsFragment } from '../../graphqlTypes';
import { useTranslation } from 'react-i18next';

interface IProps {
  className?: string;
  otherLanguagePath: string;
  otherLocaleTranslations: TTracksPageOtherTranslationsFragment;
}

const NavSection = ({ className, otherLanguagePath, otherLocaleTranslations }: IProps) => {
  const { t, i18n } = useTranslation();

  const otherLanguage = useMemo(() => _get(otherLocaleTranslations, 'locale'), [otherLocaleTranslations]);

  const changeLanguage = useCallback(() => {
    i18n.changeLanguage(otherLanguage);
  }, [otherLanguage, i18n]);

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
          <Link className="ph2 no-underline" to={otherLanguagePath}>
            <Button rounded outlined onClick={changeLanguage}>
              {otherLocaleTranslations.localeName}
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
