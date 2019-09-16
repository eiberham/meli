import fetch from 'isomorphic-unfetch';

const Items = (props) => {
    console.log("las props de /items:", props);
    return (
        <div>Page de /items</div>
    )
};

Items.getInitialProps = async ({ req }) => {
    const {
        query: { search },
    } = req;

    const response = await fetch(`http://localhost:3000/api/items?q=${search}`);
    const data = await response.json();
    return { data };
}

export default Items;