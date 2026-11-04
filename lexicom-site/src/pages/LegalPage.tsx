import { Footer } from '../components/Footer';
import { MotionLink as Link } from '../components/ui/MotionLink';
import { companyLegal } from '../data/company';
import { legalDocuments, legalRevision, type LegalDocument } from '../data/legal';
import '../styles/legal.css';

export function LegalPage({ doc }: { doc: LegalDocument }) {
  const related = legalDocuments.filter((item) => item !== doc);

  return (
    <div
      className="page-view page-view--legal"
      style={{ viewTransitionName: 'page-content' } as React.CSSProperties}
    >
      <main>
        <article className="section legal" aria-labelledby="legal-title">
          <div className="container legal__inner">
            <header className="section-header section-header--left">
              <p className="section-header__eyebrow">{companyLegal.shortName}</p>
              <h1 id="legal-title" className="section-header__title">
                {doc.title}
              </h1>
              <p className="legal__revision">{legalRevision}</p>
              <p className="section-header__description">{doc.lead}</p>
            </header>

            {doc.sections.map((section) => (
              <section key={section.title} className="legal__section">
                <h2>{section.title}</h2>
                {section.paragraphs?.map((text) => <p key={text}>{text}</p>)}
                {section.items ? (
                  <ul>
                    {section.items.map((text) => (
                      <li key={text}>{text}</li>
                    ))}
                  </ul>
                ) : null}
                {section.note ? <p>{section.note}</p> : null}
              </section>
            ))}

            <nav className="legal__related" aria-label="Другие документы">
              <h2>Другие документы</h2>
              <ul>
                {related.map((item) => (
                  <li key={item.meta.canonicalPath}>
                    <Link to={item.meta.canonicalPath}>{item.title}</Link>
                  </li>
                ))}
                <li>
                  <Link to="/company">Сведения о компании и реквизиты</Link>
                </li>
              </ul>
            </nav>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
