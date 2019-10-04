import { Fragment } from 'react';
import fetch from 'isomorphic-unfetch';
import Layout from '../../components/Layout';
import Breadcrumb from '../../components/Breadcrumb';
import ProductList from '../../components/ProductList';
import Loading from '../../components/Loading';
import { withRouter } from 'next/router';

const Items = props => {
    const { items, router, categories } = props;

    const onItemSelect = (id) => {
        router.push(`/items/${id}`)
    }

    return (
        <Layout>
            { (items) ? (
                <Fragment>
                    <Breadcrumb links={categories} />
                    <ProductList items={items} onItemSelect={onItemSelect}/>
                </Fragment>
            ) : (
                <Loading size="massive" show />
            )}
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