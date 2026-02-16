import React from 'react'
import { Table } from "antd";
import useCryptomarkets from '../../hooks/useCryptomarkets';
import millify from 'millify';
import useCryptoHistory from '../../hooks/useCryptoHistory';
import LineChart from '../graphs/LineChart';


const CryptoTable = () => {
    let { coins, isLoading, isError } = useCryptomarkets();
    console.log("table coins", coins)

    const columns = [
        {
            title: 'Rank',
            dataIndex: 'rank',
            key: 'rank',
            response: ["xs", "sm", "md", "lg", "xl", "xxl"],
            align: "center"
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            response: ["xs", "sm", "md", "lg", "xl", "xxl"],
            align: "center",
            render: (text, record) => (
                <div className='d-flex justify-content-evenly align-items-center'>
                    <img src={record.iconUrl} alt="" width={"30px"} height={"30px"} />
                    <div className='mx-2'>{record.name}  <br /> <div className='fw-bold'>{record.symbol}</div></div>

                </div>
            )
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
            response: ["xs", "sm", "md", "lg", "xl", "xxl"],
            align: "center",
            render: (text, record) => (millify(text))

        },
        {
            title: 'total24h',
            dataIndex: '24hVolume',
            key: '24hVolume',
            response: ["xs", "sm", "md", "lg", "xl", "xxl"],
            align: "center",
            render: (text, record) => (millify(text))
        },
        {
            title: 'MarketCap',
            dataIndex: 'marketCap',
            key: 'marketCap',
            response: ["xs", "sm", "md", "lg", "xl", "xxl"],
            align: "center",
            render: (text, record) => (millify(text))
        },
        {
            title: 'Graph',
            dataIndex: 'graph',
            key: 'graph',
            response: ["xs", "sm", "md", "lg", "xl", "xxl"],
            align: "center",
            render: (text, record) => (<HistoricalData coinid={record.uuid} />)
        },
    ];

    // function for getting each coin history to display the graph
    function HistoricalData({ coinid }) {
        console.log("coinid for History", coinid)
        const { history, isLoading, isError } = useCryptoHistory(coinid);
        console.log(history)

        if (isLoading) {
            return <span>Loading...</span>
        }
        if (isError) {
            return <span>Error...</span>
        }

        return <LineChart data={history} />
    }
    return (
        <div className='container-fluid p-3'>
            <Table dataSource={coins} key={coins.uuid} columns={columns} scroll={{ x: "max-content" }} bordered />;
        </div>
    )
}

export default CryptoTable
