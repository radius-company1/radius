import { Footer } from '../components/Footer';
import { Reveal } from '../components/ui/Reveal';
import {
  companyActivity,
  companyContacts,
  companyItActivityCodes,
  companyLicense,
  companyOkved,
  companyOsText,
  companyPricing,
  companyRequisites,
  companySoftwareRights,
  companyTechStack,
  companyTechText,
} from '../data/company';
import '../styles/company.css';

export function CompanyPage() {
  return (
    <div
      className="page-view page-view--company"
      style={{ viewTransitionName: 'page-content' } as React.CSSProperties}
    >
      <main>
        <section className="section company" aria-labelledby="company-title">
          <div className="container">
            <Reveal>
              <header className="section-header section-header--left">
                <p className="section-header__eyebrow">ООО «Лексиком»</p>
                <h1 id="company-title" className="section-header__title">
                  Сведения о компании
                </h1>
                <p className="section-header__description">{companyActivity}</p>
              </header>
            </Reveal>

            <div className="company__grid">
              <Reveal className="company__cell company__cell--wide">
                <article className="surface-plain company-card" aria-labelledby="company-requisites">
                  <h2 id="company-requisites">Реквизиты</h2>
                  <dl className="company-dl">
                    {companyRequisites.map((row) => (
                      <div key={row.label} className="company-dl__row">
                        <dt>{row.label}</dt>
                        <dd>{row.value}</dd>
                      </div>
                    ))}
                    <div className="company-dl__row">
                      <dt>Контактные данные</dt>
                      <dd>
                        <a href={`mailto:${companyContacts.email}`}>{companyContacts.email}</a>,{' '}
                        <a href={companyContacts.phoneHref}>{companyContacts.phone}</a>
                      </dd>
                    </div>
                  </dl>
                </article>
              </Reveal>

              <Reveal className="company__cell">
                <article className="surface-plain company-card" aria-labelledby="company-okved">
                  <h2 id="company-okved">Виды деятельности</h2>
                  <h3>Основной код ОКВЭД</h3>
                  <p>
                    <strong>{companyOkved.main.code}</strong> {companyOkved.main.title}
                  </p>
                  <h3>Дополнительные коды ОКВЭД</h3>
                  <ul className="company-list">
                    {companyOkved.additional.map((item) => (
                      <li key={item.code}>
                        <strong>{item.code}</strong> {item.title}
                      </li>
                    ))}
                  </ul>
                  <h3>Коды видов деятельности в области ИТ</h3>
                  <p>
                    {companyItActivityCodes.codes.join('; ')}{' '}
                    <span className="company-card__muted">({companyItActivityCodes.source})</span>
                  </p>
                </article>
              </Reveal>

              <Reveal className="company__cell">
                <article className="surface-plain company-card" aria-labelledby="company-tech">
                  <h2 id="company-tech">Технологии и среда работы</h2>
                  <p>{companyTechText}</p>
                  <ul className="company-tags" aria-label="Технологии">
                    {companyTechStack.map((tech) => (
                      <li key={tech}>{tech}</li>
                    ))}
                  </ul>
                  <p>{companyOsText}</p>
                </article>
              </Reveal>

              <Reveal className="company__cell">
                <article className="surface-plain company-card" aria-labelledby="company-rights">
                  <h2 id="company-rights">Права на программное обеспечение</h2>
                  <p>{companySoftwareRights.text}</p>
                  <p>{companySoftwareRights.registry}</p>
                  <p>
                    Портал:{' '}
                    <a href={companySoftwareRights.registryUrl} target="_blank" rel="noreferrer">
                      reestr.digital.gov.ru
                    </a>
                  </p>
                  <h3>Право использования</h3>
                  <p>{companyLicense}</p>
                </article>
              </Reveal>

              <Reveal className="company__cell">
                <article className="surface-plain company-card company-card--accent" aria-labelledby="company-price">
                  <h2 id="company-price">Стоимость</h2>
                  <p className="company-card__price">{companyPricing.from}</p>
                  <p>{companyPricing.text}</p>
                </article>
              </Reveal>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
