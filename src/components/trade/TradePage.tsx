import React from 'react';
import EnergyListings from './EnergyListings';
import ListEnergyForm from './ListEnergyForm';
import { Container, Wrapper } from '@/components';
import { Bricolage_Grotesque } from 'next/font/google';
import { Zap } from 'lucide-react';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  display: 'swap',
});

const TradePage: React.FC = () => {
  const heroTitle = 'Trade Energy';

  return (
    <Wrapper className="relative flex flex-col items-center justify-center py-12">
      <Container>
        <div className={`${bricolage.className} text-center`}>
          <div className="mb-8 mt-6 flex items-center justify-center text-3xl font-semibold lg:text-4xl">
            <Zap className="mr-2" />
            <TextGenerateEffect words={heroTitle} title={true} />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-2xl font-semibold">
              Available Energy Listings
            </h2>
            <EnergyListings />
          </div>
          <div>
            <h2 className="mb-4 text-2xl font-semibold">List Your Energy</h2>
            <ListEnergyForm />
          </div>
        </div>
      </Container>
    </Wrapper>
  );
};

export default TradePage;
