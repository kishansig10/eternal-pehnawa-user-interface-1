import ProductsComponent from "./ProductsComponent";
import { useGetProductsQuery } from "../../redux/services/products";

const ProductsContainer = () => {
  const { data, error, isLoading } = useGetProductsQuery(200);
  return <ProductsComponent data={data} error={error} isLoading={isLoading} />;
};

export default ProductsContainer;
