import fetch from 'isomorphic-unfetch';
import Layout from '../../components/Layout';

const Item = (props) => {
    console.log("las props de /items/id: ", props);
    return (
        <Layout>
            <p>Page de /items/:id</p>
        </Layout>
    )
}

Item.getInitialProps = async (context) => {
    const {
        query: { id },
    } = context;
    
    const response = await fetch(`http://localhost:3000/api/items/${id}`);
    const data = await response.json();
    //console.log(data);
    return { data }
}

export default Item;