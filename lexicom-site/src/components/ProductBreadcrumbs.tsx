import { Link } from 'react-router-dom';

type ProductBreadcrumbsProps = {
  current: string;
};

export function ProductBreadcrumbs({ current }: ProductBreadcrumbsProps) {
  return (
    <nav className="product-breadcrumbs" aria-label="Хлебные крошки">
      <ol>
        <li>
          <Link to="/">Главная</Link>
        </li>
        <li>
          <Link to="/#products">Продукты</Link>
        </li>
        <li>
          <span aria-current="page">{current}</span>
        </li>
      </ol>
    </nav>
  );
}
