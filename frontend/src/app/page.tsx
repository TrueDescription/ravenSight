import React, { useState } from 'react';


import { PerformanceGraph } from '@/components/ui/PerformanceGraph';
import { PortfolioBox } from '@/components/ui/portfolioBox';
import { DataTable } from '@/components/ui/stockList';
import { columns, Stock } from '@/components/ui/columns';
import { Login } from "@/components/ui/login";








function Dashboard() {
  const data = [
    { symbol: "AAPL", price: 150, change: 0.5, shares: 10, avgCost: 145, totalCost: 1450, marketValue: 1500, daysGain: 5, return: 50 },
    { symbol: "MSFT", price: 150, change: 0.5, shares: 10, avgCost: 145, totalCost: 1450, marketValue: 1500, daysGain: 5, return: 50 },
  ];

  return (
    <div>
      <div className="info-cards">
        <PortfolioBox title="Today's Return" />
        <PortfolioBox title="Overall Return" />
        <PortfolioBox title="Market Value" />
        <PortfolioBox title="Portfolio Cost" />
        <PortfolioBox title="Dividends" />
      </div>
      <div>
        <PerformanceGraph/>
        <DataTable columns={columns} data={data} />

      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div>
      <Login/>
      <Dashboard />
    </div>
  )
}

