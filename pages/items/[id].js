import { useRouter } from 'next/router';
import axios from 'axios';

const Items = () => {
    const router = useRouter();
    console.log("router: ", router);
    const { q } = router.query;

    return <p>la query: { q }</p>
}

Items.getInitialProps = async ({ req }) => {
    const res = await axios.get('http://localhost:3000/api/items');
    console.log(res.data);
    return { data: res.data }
}

export default Items;