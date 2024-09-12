'use client';

import React from 'react';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { BorderBeam } from '@/components/ui/border-beam';

const ListEnergyForm: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission (to be implemented)
    console.log('Energy listing submitted');
  };

  return (
    <Card className="relative overflow-hidden">
      <BorderBeam />
      <CardHeader></CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <Label htmlFor="amount">Amount (kWh)</Label>
              <Input
                id="amount"
                type="number"
                placeholder="Enter amount"
                required
              />
            </div>
            <div>
              <Label htmlFor="price">Price (ETH/kWh)</Label>
              <Input
                id="price"
                type="number"
                step="0.0001"
                placeholder="Enter price"
                required
              />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter>
        <Button type="submit">List Energy</Button>
      </CardFooter>
    </Card>
  );
};

export default ListEnergyForm;
