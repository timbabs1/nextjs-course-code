import { useRouter } from 'next/router';

function PortfolioProjectPageFunction(props) {
    const router = useRouter()

    console.log(router.pathname);
    console.log(router.query);

    // send a request to some backend API
    // to fetch the piece of data with an ID of router.query.projectid
    return <div><h1>The Portfolio Project Page</h1></div>;
}

export default PortfolioProjectPageFunction;
