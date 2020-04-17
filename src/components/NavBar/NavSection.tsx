import { Link } from 'gatsby';
import cx from 'classnames';
import React from 'react';
import Button from '../Button';
import structure from './structure';
import { INavBarTranslations } from '../../types/navbar';
import { TTracksPageOtherTranslationsFragment } from '../../graphqlTypes';
import { useTranslation } from 'react-i18next';

interface IProps {
  className?: string;
  otherLanguagePath: string;
  otherLocaleTranslations: TTracksPageOtherTranslationsFragment;
  t: INavBarTranslations;
}

const NavSection = ({ className, otherLanguagePath, otherLocaleTranslations }: IProps) => {
  const { t } = useTranslation();
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
            <Button rounded outlined>
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
