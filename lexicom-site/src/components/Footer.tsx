import { Link } from 'react-router-dom';
import { footerCompany, footerDirections, footerLegal, footerPlatform } from '../data/footer';
import { Logo } from './ui/Logo';

export function Footer() {
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
              <li key={item}>
                <a href="#platform">{item}</a>
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
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="site-footer__contacts">
          <h3 className="site-footer__heading">Контакты</h3>
          <p>
            <a href="tel:+74999578132">+7 (499) 957-81-32</a>
          </p>
          <p>
            <a href="mailto:info@lexicom.ai">info@lexicom.ai</a>
          </p>
          <p className="site-footer__address">
            121205, г. Москва, территория Сколково Инновационного Центра, ул. Нобеля, дом 7, помещение 75
          </p>
        </div>
      </div>

      <div className="container site-footer__legal">
        <ul className="site-footer__legal-links">
          {footerLegal.map((item) => (
            <li key={item.label}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>

        <div className="site-footer__status">
          <p>Lexicom Omnichannel Platform включена в Реестр российского программного обеспечения под №11115.</p>
          <p>Lexicom — резидент ИТ-кластера Фонда «Сколково».</p>
          <p>Деятельность осуществляется при грантовой поддержке Фонда «Сколково».</p>
        </div>

        <p className="site-footer__copy">© Lexicom. Все права защищены.</p>
      </div>
    </footer>
  );
}
