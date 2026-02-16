import React from 'react'
import CryptoStatsCard from '../components/crypto/components/cryptostats/CryptoStatsCard';
import BestCryptoStats from '../components/crypto/components/cryptostats/BestCryptoStats';
import CryptoTable from '../components/crypto/components/cryptotables/CryptoTable';
import { Divider } from "antd";
import Profile from './Profile';


const Dashboard = () => {
  return (
    <div>
      <Divider>TOP-STATS</Divider>
      <CryptoStatsCard/>
      <Divider>BEST-COINS</Divider>
      <BestCryptoStats/>
      <Divider>CRYPTO-TABLE</Divider>
      <CryptoTable/>
      
    </div>
  )
}

export default Dashboard