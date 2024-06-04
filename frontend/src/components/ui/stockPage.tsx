"use client"

import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import {
    Table,
    TableBody,
    TableCell,
    TableRow,
  } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { Separator } from '@radix-ui/react-separator';
import { Button } from '@/components/ui/button';


ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

interface StockChart {
    className : string;
}

const StockChart = ({ className } : StockChart) => {
  // Generate fake sample data
  const generateData = () => {
    const data = [];
    const labels = [];
    const now = new Date();
    for (let i = 30; i >= 0; i--) {
      const date = new Date(now);
      date.setDate(date.getDate() - i);
      labels.push(date.toLocaleDateString());
      data.push((Math.random() * 10 + 400).toFixed(2)); // Fake stock price data between 400 and 410
    }
    return { labels, data };
  };

  const { labels, data } = generateData();

  const chartData = {
    labels,
    datasets: [
      {
        label: 'MSFT Stock Price',
        data,
        borderColor: '#A43D12',
        backgroundColor: 'rgba(164, 61, 18, 0.5)',
        fill: false,
        tension: 0.4, // Increased tension for a smoother curve
        pointRadius: 0, // Hides the data points (dots)
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        mode: 'index',
        intersect: false,
      },
    },
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
        beginAtZero: false,
      },
    },
  };

  return <Line data={chartData} options={options} className={className}/>;
};

function BuyBox() {
    return (

        <div>Buy
            <Select>
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Order type" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                </SelectContent>
            </Select>
            <Input placeholder='Shares'/>
            <Input placeholder='Amount'/>
            <Select>
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Account" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
            </SelectContent>
            </Select>
            <label>Available Cash: $40,543 USD</label>
            <hr className="my-4" />
            <Button>Review</Button>
        </div>
        
    );
}

const StockPage = () => {
  return (
    <div>
        <div>
            <h2>MSFT</h2><p>Microsoft Corporation</p>
            <h1>$409.91</h1><h4>USD</h4>
        </div>
      
      <div className='main-section'>
        <StockChart className="stock-chart"/>
        <BuyBox/>
      </div>
      <div className='market-data'>
        <Table>
            <TableBody>
                <TableRow>
                <TableCell className="font-medium">Bid</TableCell>
                <TableCell className="text-right">$250.00</TableCell>
                </TableRow>
                <TableRow>
                <TableCell className="font-medium">Ask</TableCell>
                <TableCell className="text-right">$250.00</TableCell>
                </TableRow>
                <TableRow>
                <TableCell className="font-medium">Last sale</TableCell>
                <TableCell className="text-right">$250.00</TableCell>
                </TableRow>
                <TableRow>
                <TableCell className="font-medium">Open</TableCell>
                <TableCell className="text-right">$250.00</TableCell>
                </TableRow>
                <TableRow>
                <TableCell className="font-medium">High</TableCell>
                <TableCell className="text-right">$250.00</TableCell>
                </TableRow>
                <TableRow>
                <TableCell className="font-medium">Low</TableCell>
                <TableCell className="text-right">$250.00</TableCell>
                </TableRow>
                <TableRow>
                <TableCell className="font-medium">Exchange</TableCell>
                <TableCell className="text-right">$250.00</TableCell>
                </TableRow>
            </TableBody>
        </Table>
        <Table>
            <TableBody>
                <TableRow>
                <TableCell className="font-medium">Market Cap</TableCell>
                <TableCell className="text-right">$250.00</TableCell>
                </TableRow>
                <TableRow>
                <TableCell className="font-medium">P/E Ratio</TableCell>
                <TableCell className="text-right">$250.00</TableCell>
                </TableRow>
                <TableRow>
                <TableCell className="font-medium">52 Week High</TableCell>
                <TableCell className="text-right">$250.00</TableCell>
                </TableRow>
                <TableRow>
                <TableCell className="font-medium">52 Week Low</TableCell>
                <TableCell className="text-right">$250.00</TableCell>
                </TableRow>
                <TableRow>
                <TableCell className="font-medium">Volume</TableCell>
                <TableCell className="text-right">$250.00</TableCell>
                </TableRow>
                <TableRow>
                <TableCell className="font-medium">Average Volume</TableCell>
                <TableCell className="text-right">$250.00</TableCell>
                </TableRow>
                <TableRow>
                <TableCell className="font-medium">Yield</TableCell>
                <TableCell className="text-right">$250.00</TableCell>
                </TableRow>
            </TableBody>
        </Table>
      </div>
    </div>
  );
};

export {StockPage};
