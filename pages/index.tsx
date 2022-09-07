import type { NextPage } from 'next'
import Head from 'next/head'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios'
import Carousel from '../components/caraousel'
import Ratings from '../components/ratings'
import Button from 'react-bootstrap/Button';
import Link from 'next/link';



const Home: NextPage = ({ data }: any) => {
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
          <ul>
            {data.map((v: any, k: any) => {
              return (<li key={k}><Link href={`product/${v.id}`}><a>{v.name}</a></Link></li>)
            })}
          </ul>
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

export default Home
