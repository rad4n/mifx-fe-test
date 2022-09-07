import type { NextPage } from 'next'
import { useRouter } from 'next/router';
import Head from 'next/head'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import Carousel from '../../components/caraousel';
import Ratings from '../../components/ratings'
import { MdAddShoppingCart } from "react-icons/md";


const Product: NextPage = ({ data }: any) => {
    const router = useRouter();
    let { id } = router.query;
    const selectedProduct = data.find((o: any) => o.id == id);
    const carauselProps = {
        dataSlide: selectedProduct.images
    }
    console.log(data)
    return (
        <div>
            <Head>
                <title>Dadan - MIFX Frontend Test</title>
                <meta name="description" content="Test Frontend" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Container>
                <Row>
                    <Col xs={8}>
                        <Carousel {...carauselProps} />
                    </Col>
                    <Col xs={4} className="pt-5">
                        <span className='sale'>SALE</span>
                        <h4 className="price mt-2">{selectedProduct.name}</h4>
                        <Ratings rating={selectedProduct.rating} reviewCount={selectedProduct.reviewCount} />

                        <h4 className="price"><span>{selectedProduct.price}</span></h4>
                        <div className="action">
                            <Button variant="warning" type="button"> <MdAddShoppingCart /> Add to cart</Button>
                            <Button variant="success" type="button">Buy Now</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export async function getServerSideProps() {
    let post_body = {
        "email": "user@test.io",
        "password": "Test123."
    }
    const login = await axios.post(`https://fe.dev.dxtr.asia/api/login`, post_body)
        .then((res) => res.data.token);

    const config = {
        headers: { Authorization: `Bearer ${login}` }
    };

    const data = await axios.get(`https://fe.dev.dxtr.asia/api/products`, config)
        .then((res) => res.data);

    return {
        props: {
            data
        }
    }
}

export default Product
