import fetch from 'isomorphic-unfetch';

const Item = (props) => {
    console.log("las props de /items/id: ", props);
    return <p>Page de /items/:id</p>
}

Item.getInitialProps = async ({ req }) => {
    const {
        query: { id },
    } = req;
    const response = await fetch(`http://localhost:3000/api/items/${id}`);
    const data = await response.json();
    console.log(data);
    return { data }
}

export default Item;