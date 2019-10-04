import fetch from 'isomorphic-unfetch';
import Layout from '../../components/Layout';
import Breadcrumb from '../../components/Breadcrumb';
import ProductDetail from '../../components/ProductDetail';

const Item = props => {
    const { item, categories } = props;

    return (
        <Layout>
            <Breadcrumb links={categories} />
            <ProductDetail item={item} />
        </Layout>
    )
}

Item.getInitialProps = async context => {
    const {
        query: { id },
    } = context;
    
    const response = await fetch(`http://localhost:3000/api/items/${id}`);
    const data = await response.json();
    return data;
}

export default Item;