import { MotionLink as Link } from './ui/MotionLink';
import { productHref, productPageLinkLabel, type ProductId } from '../data/products';
import { Icon } from './ui/Icon';

type ProductPageLinkProps = {
  id: ProductId;
  className?: string;
};

export function ProductPageLink({ id, className = '' }: ProductPageLinkProps) {
  return (
    <Link className={`product-page-link ${className}`.trim()} to={productHref(id)}>
      {productPageLinkLabel[id]}
      <Icon name="arrow-right" />
    </Link>
  );
}
