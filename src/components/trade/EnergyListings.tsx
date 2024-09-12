import React from 'react';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BorderBeam } from '@/components/ui/border-beam';

// Mock data for energy listings
const mockListings = [
  { id: 1, seller: '0x1234...5678', amount: 100, price: 0.05, unit: 'kWh' },
  { id: 2, seller: '0x8765...4321', amount: 50, price: 0.06, unit: 'kWh' },
  { id: 3, seller: '0x2468...1357', amount: 200, price: 0.04, unit: 'kWh' },
];

const EnergyListings: React.FC = () => {
  return (
    <div className="space-y-4">
      {mockListings.map((listing) => (
        <Card key={listing.id} className="relative overflow-hidden">
          <BorderBeam />
          <CardHeader>
            <CardTitle>Energy Listing #{listing.id}</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Seller: {listing.seller}</p>
            <p>
              Amount: {listing.amount} {listing.unit}
            </p>
            <p>
              Price: {listing.price} ETH/{listing.unit}
            </p>
          </CardContent>
          <CardFooter>
            <Button>Buy Energy</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default EnergyListings;
