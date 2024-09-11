import { Metadata } from 'next';

export const SITE_CONFIG: Metadata = {
  title: {
    default: 'WattX - Decentralized Energy Trading',
    template: `%s | WattX`,
  },
  description:
    'WattX empowers you to trade and store energy seamlessly. No technical expertise required. Start your journey towards sustainable energy today!',
  icons: {
    icon: [
      {
        url: '/icons/favicon.ico',
        href: '/icons/favicon.ico',
      },
    ],
  },
  openGraph: {
    title: 'WattX - Decentralized Energy Trading',
    description:
      'WattX empowers you to trade and store energy seamlessly. No technical expertise required. Start your journey towards sustainable energy today!',
    images: [
      {
        url: '/assets/og-image.png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@shydev69',
    title: 'WattX - Decentralized Energy Trading',
    description:
      'WattX empowers you to trade and store energy seamlessly. No technical expertise required. Start your journey towards sustainable energy today!',
    images: [
      {
        url: '/assets/og-image.png',
      },
    ],
  },
  metadataBase: new URL('https://astra-ai-galembeck.vercel.app'),
};
