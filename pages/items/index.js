import fetch from 'isomorphic-unfetch';
import Layout from '../../components/Layout';

const Items = (props) => {
    console.log("las props de /items: ", props);
    return (
        <Layout>
            Page de /items
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

export default Items;