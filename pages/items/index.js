import fetch from 'isomorphic-unfetch';
import Layout from '../../components/Layout';
import Breadcrumb from '../../components/Breadcrumb';
import ProductList from '../../components/ProductList';
import { withRouter } from 'next/router';

const Items = (props) => {
    console.log("las props de /items: ", props);
    const { items } = props;

    const onItemSelect = () => {

    }

    return (
        <Layout>
            <Breadcrumb />
            <ProductList items={items} onItemSelect={() => console.log("product selected")}/>
        </Layout>
    );
};

Items.getInitialProps = async (context) => {
    const {
        query: { search },
    } = context;
    
    const response = await fetch(`http://localhost:3000/api/items?q=${search}`);
    const data = await response.json();
    return data;
}

export default withRouter(Items);