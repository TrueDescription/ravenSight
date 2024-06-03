import { ColumnDef } from "@tanstack/react-table";


export type Stock = {
    symbol: string;
    price: number;
    change: number;
    shares: number;
    avgCost: number;
    totalCost: number;
    marketValue: number;
    daysGain: number;
    return: number;
  };
  
  export const columns: ColumnDef<Stock>[] = [
    { accessorKey: "symbol", header: "Symbol" },
    { accessorKey: "price", header: "Price" },
    { accessorKey: "change", header: "% Change" },
    { accessorKey: "shares", header: "Shares" },
    { accessorKey: "avgCost", header: "Avg Cost" },
    { accessorKey: "totalCost", header: "Total Cost" },
    { accessorKey: "marketValue", header: "Market Value" },
    { accessorKey: "daysGain", header: "Day's Gain" },
    { accessorKey: "return", header: "Return" },
  ];
  