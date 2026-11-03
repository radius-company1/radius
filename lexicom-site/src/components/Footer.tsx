import { useLocation } from 'react-router-dom';
import { MotionLink as Link } from './ui/MotionLink';
import { companyContacts, companyLegal, companySoftwareRights } from '../data/company';
import { footerCompany, footerDirections, footerLegal, footerPlatform } from '../data/footer';
import { Logo } from './ui/Logo';

function sectionHref(hash: string, isHome: boolean) {
  if (hash.startsWith('/')) return hash;
  const clean = hash.startsWith('#') ? hash : `#${hash}`;
  return isHome ? clean : `/${clean}`;
}

export function Footer() {
  const location = useLocation();
  const isHome = location.pathname === '/' || location.pathname === '';

  return (
    <footer className="site-footer">
      <div className="container site-footer__grid">
        <div className="site-footer__brand">
          <Logo variant="light" />
          <p>Российский вендор собственной ИИ-платформы для работы с обращениями.</p>
        </div>

        <div>
          <h3 className="site-footer__heading">Платформа</h3>
          <ul className="site-footer__list">
            {footerPlatform.map((item) => (
              <li key={item.label}>
                <Link to={item.to ?? sectionHref('#products', isHome)}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="site-footer__heading">Направления</h3>
          <ul className="site-footer__list">
            {footerDirections.map((item) => (
              <li key={item.href}>
                <Link to={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="site-footer__heading">Компания</h3>
          <ul className="site-footer__list">
            {footerCompany.map((item) => (
              <li key={item.label}>
                <Link to={sectionHref(item.href, isHome)}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="site-footer__contacts">
          <h3 className="site-footer__heading">Контакты</h3>
          <p>
            <a href={companyContacts.phoneHref}>{companyContacts.phone}</a>
          </p>
          <p>
            <a href={`mailto:${companyContacts.email}`}>{companyContacts.email}</a>
          </p>
          <p className="site-footer__address">{companyLegal.address}</p>
        </div>
      </div>

      <div className="container site-footer__legal">
        <ul className="site-footer__legal-links">
          {footerLegal.map((item) => (
            <li key={item.label}>
              {item.href.startsWith('/') ? (
                <Link to={item.href}>{item.label}</Link>
              ) : (
                <a href={item.href}>{item.label}</a>
              )}
            </li>
          ))}
        </ul>

        <div className="site-footer__status">
          <p>
            Lexicom Omnichannel Platform включена в{' '}
            <a href={companySoftwareRights.registryUrl} target="_blank" rel="noreferrer">
              единый реестр российских программ
            </a>{' '}
            под № 11115 от 20.07.2021, классы 05.08 и 05.09.
          </p>
          <p>Lexicom — резидент ИТ-кластера Фонда «Сколково».</p>
          <p>Деятельность осуществляется при грантовой поддержке Фонда «Сколково».</p>
          <p>
            {companyLegal.shortName} · ИНН {companyLegal.inn} · КПП {companyLegal.kpp} · ОГРН {companyLegal.ogrn}
          </p>
        </div>

        <p className="site-footer__copy">© {companyLegal.shortName}. Все права защищены.</p>
      </div>
    </footer>
  );
}
