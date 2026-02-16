// src/components/Courses.jsx
import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';

const courses = [
  {
    title: 'Bitcoin Basics',
    description: 'Learn how Bitcoin works, from wallets to mining and transactions.',
    image: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png',
    level: 'Beginner',
  },
  {
    title: 'Ethereum & Smart Contracts',
    description: 'Explore Ethereum blockchain, dApps, and Solidity smart contracts.',
    image: 'https://assets.coingecko.com/coins/images/279/large/ethereum.png',
    level: 'Intermediate',
  },
  {
    title: 'NFTs 101',
    description: 'Get started with NFTs, marketplaces, minting, and security tips.',
    image: '/assets/nft.jpg',
    level: 'Beginner',
  },
  {
    title: 'Crypto Trading Strategies',
    description: 'Master technical analysis, indicators, and risk management.',
    image: 'https://assets.coingecko.com/coins/images/975/large/cardano.png',
    level: 'Advanced',
  },
  {
    title: 'DeFi Essentials',
    description: 'Understand DeFi platforms like Aave, Compound, and yield farming.',
    image: '/assets/defi.jpg',
    level: 'Intermediate',
  },
  {
    title: 'Polygon & Layer 2',
    description: 'Learn about Layer 2 scaling, Polygon architecture, and use cases.',
    image: 'https://assets.coingecko.com/coins/images/4713/large/matic-token-icon.png',
    level: 'Intermediate',
  },
  {
    title: 'Stablecoins Explained',
    description: 'Dive into USDT, USDC, DAI and how stablecoins maintain their value.',
    image: 'https://assets.coingecko.com/coins/images/6319/large/USD_Coin_icon.png',
    level: 'Beginner',
  },
  {
    title: 'Solana Development',
    description: 'Build fast, scalable apps on Solana using Rust and Solana CLI.',
    image: 'https://assets.coingecko.com/coins/images/4128/large/solana.png',
    level: 'Advanced',
  },
  {
    title: 'Web3 & Wallet Integration',
    description: 'Learn to connect Web3 wallets like MetaMask to your dApps.',
    image: '/assets/web3.jpg',
    level: 'Intermediate',
  },
  {
    title: 'Crypto Tax & Regulations',
    description: 'Understand crypto taxation, global regulations, and compliance.',
    image: 'https://cdn-icons-png.flaticon.com/512/5977/5977585.png',
    level: 'Advanced',
  },
];

const Courses = () => {
  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">📚 Crypto Courses</h2>
      <Row>
        {courses.map((course, index) => (
          <Col key={index} sm={12} md={6} lg={4} xl={3} className="mb-4">
            <Card className="h-100 shadow-sm border-0 rounded-4">
              <Card.Img
                variant="top"
                src={course.image}
                alt={course.title}
                style={{ height: '180px', objectFit: 'contain', padding: '10px' }}
              />
              <Card.Body>
                <Card.Title>{course.title}</Card.Title>
                <Card.Text>{course.description}</Card.Text>
                <span className="badge bg-primary">{course.level}</span>
              </Card.Body>
              <Card.Footer className="bg-white border-0">
                <Button variant="outline-success" className="w-100">
                  View Course
                </Button>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Courses;
