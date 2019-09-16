import { useRouter } from 'next/router';

const Items = () => {
    const router = useRouter();
    console.log("router: ", router);
    const { q } = router.query;

    return <p>query: { q }</p>
}

/* Items.getInitialProps = async ({ req }) => {
    
} */

export default Items;