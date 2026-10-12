import { Link } from 'react-router-dom';
import { productHref, productPageLinkLabel, type ProductId } from '../data/products';

type ProductPageLinkProps = {
  id: ProductId;
  className?: string;
};

export function ProductPageLink({ id, className = '' }: ProductPageLinkProps) {
  return (
    <Link className={`product-page-link ${className}`.trim()} to={productHref(id)}>
      {productPageLinkLabel[id]}
      <span aria-hidden="true">→</span>
    </Link>
  );
}
