/* eslint-disable react/jsx-no-undef */

import Link from 'next/link';
import Image from 'next/image';
import { Bricolage_Grotesque } from 'next/font/google';

import { Wrapper, Container, Icons } from '@/components';
import Marquee from '@/components/ui/marquee';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import SectionBadge from '@/components/ui/section-badge';
import { BorderBeam } from '@/components/ui/border-beam';
import { LampContainer } from '@/components/ui/lamp';
import AnimatedGradientText from '@/components/ui/animated-gradient-text';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import { cn } from '@/lib/utils';

import { features, perks, pricingCards, reviews } from '@/constants';

import { ArrowRight, ChevronRight, UserIcon, Zap } from 'lucide-react';

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  display: 'swap',
});

export default function HomePage() {
  const firstRow = reviews.slice(0, reviews.length / 2);
  const secondRow = reviews.slice(reviews.length / 2);

  const heroTitle = `Decentralized Energy Trading For Everyone`;

  return (
    <section className="relative flex w-full flex-col items-center justify-center px-4 py-8 md:px-0">
      {/* Hero */}
      <Wrapper>
        <div className="absolute inset-0 -z-10 h-[150vh] bg-[linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] dark:bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)]" />

        <Container>
          <div className="flex h-full flex-col items-center justify-center py-20">
            <button className="group relative grid overflow-hidden rounded-full bg-gradient-to-tr from-primary/40 shadow-[0_1000px_0_0_hsl(0_0%_20%)_inset] transition-colors duration-200">
              <span className="absolute inset-x-0 bottom-0 h-full w-full bg-gradient-to-tr from-primary/40 blur-md" />
              <AnimatedGradientText className="bg-neutral-950">
                ✨ <hr className="mx-2 h-4 w-[1px] shrink-0 bg-gray-300" />{' '}
                <span
                  className={cn(
                    `inline animate-gradient bg-gradient-to-r from-[#FFAA40] via-[#9C40FF] to-[#FFAA40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
                  )}
                >
                  Launching Soon
                </span>
                <ChevronRight className="ml-2 h-4 w-4" />
              </AnimatedGradientText>
            </button>

            {/* <button className="group relative grid overflow-hidden rounded-full px-4 py-1 shadow-[0_1000px_0_0_hsl(0_0%_20%)_inset] transition-colors duration-200">
                            <span>
                                <span className="spark mask-gradient absolute inset-0 h-[100%] w-[100%] animate-flip overflow-hidden rounded-full [mask:linear-gradient(white,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] before:animate-rotate before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]" />
                            </span>
                            <span className="backdrop absolute inset-[1px] rounded-full bg-neutral-950 transition-colors duration-200 group-hover:bg-neutral-900" />
                            <span className="h-full w-full blur-md absolute bottom-0 inset-x-0 bg-gradient-to-tr from-primary/40" />
                            <span className="z-10 py-0.5 text-sm text-neutral-100 flex items-center justify-center gap-1.5">
                                <Image src="/icons/sparkles-dark.svg" alt="✨" width={24} height={24} className="w-4 h-4" />
                                Introducing WattX
                                <ChevronRight className="w-4 h-4" />
                            </span>
                        </button> */}

            <div className="mt-8 flex w-11/12 max-w-3xl flex-col items-center md:w-full">
              <div className={`${bricolage.className}`}>
                <TextGenerateEffect words={heroTitle} title={true} />
              </div>

              {/* <h1 className="text-4xl md:text-6xl lg:textxl md:!leading-snug font-semibold text-center bg-clip-text bg-gradient-to-b from-gray-50 to-gray-50 text-transparent">
                                Build your next idea and ship your dream site
                            </h1> */}

              <p className="mt-6 text-center text-base text-foreground/80 md:text-lg">
                Buy, sell, and store energy effortlessly through our
                decentralized platform, while contributing to sustainability
                with footfall-powered energy.
              </p>

              <div className="relative mt-8 hidden w-full items-center justify-center md:mt-12 md:flex">
                <Link
                  href="/sign-up"
                  className="shadow-3xl flex w-max cursor-pointer select-none items-center justify-center gap-2 rounded-full border-t border-foreground/30 bg-white/20 px-2 py-1 shadow-background/40 backdrop-blur-lg md:gap-8 md:py-2"
                >
                  <p className="pl-4 pr-4 text-center text-sm font-medium text-foreground md:text-base lg:marker:pr-0">
                    ✨ {'  '} Join the Future of Energy Trading Now!
                  </p>
                  <Button
                    size="sm"
                    className="hidden rounded-full border border-foreground/20 lg:flex"
                  >
                    Get Started
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative mx-auto flex w-full items-center justify-center py-10 md:py-20">
              <div className="gradient absolute inset-0 left-1/2 top-1/2 -z-10 h-3/4 w-3/4 -translate-x-1/2 -translate-y-1/2 blur-[10rem]"></div>
              <div className="-m-2 rounded-xl bg-opacity-50 p-2 ring-1 ring-inset ring-foreground/20 backdrop-blur-3xl lg:-m-4 lg:rounded-2xl">
                <Image
                  src="/assets/dashboard.png"
                  alt="Dashboard image"
                  width={1200}
                  height={1200}
                  quality={100}
                  className="left-1/2 rounded-md bg-foreground/10 shadow-2xl ring-1 ring-border lg:rounded-xl"
                />

                <BorderBeam size={250} duration={12} delay={9} />
              </div>
            </div>
          </div>
        </Container>
      </Wrapper>
      {/* How it works... */}
      <Wrapper className="relative flex flex-col items-center justify-center py-12">
        <Container>
          <div className="max-w-md text-start md:mx-auto md:text-center">
            <SectionBadge title="The Process" />
            <div className={`${bricolage.className}`}>
              <h2 className="mt-6 text-3xl font-semibold lg:text-4xl">
                Three Simple Steps to Start Trading Energy
              </h2>
            </div>
            <p className="mt-6 text-muted-foreground">
              Begin your energy trading journey in just 3 easy steps
            </p>
          </div>
        </Container>
        <Container>
          <div className="flex w-full flex-col items-center justify-center py-10 md:py-20">
            <div className="grid w-full grid-cols-1 divide-x-0 divide-y divide-gray-900 first:border-gray-900 md:grid-cols-2 md:divide-x md:divide-y-0 lg:grid-cols-3 lg:first:border-none">
              {perks.map((perk) => (
                <div
                  key={perk.title}
                  className="flex flex-col items-start px-4 py-4 md:px-6 lg:px-8 lg:py-6"
                >
                  <div className="flex items-center justify-center">
                    <perk.icon className="h-8 w-8" />
                  </div>
                  <h3 className="mt-4 text-lg font-medium">{perk.title}</h3>
                  <p className="mt-2 text-start text-muted-foreground">
                    {perk.info}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Wrapper>
      {/* Features */}
      <Wrapper className="relative flex flex-col items-center justify-center py-12">
        <div className="absolute -right-1/3 top-0 -z-10 hidden h-72 w-72 rounded-full bg-primary blur-[10rem] md:block"></div>
        <div className="absolute -left-1/3 bottom-0 -z-10 hidden h-72 w-72 rounded-full bg-indigo-600 blur-[10rem] md:block"></div>
        <Container>
          <div className="mx-auto max-w-md text-start md:text-center">
            <SectionBadge title="Features" />
            <div className={`${bricolage.className}`}>
              <h2 className="mt-6 text-3xl font-semibold lg:text-4xl">
                Explore Our Cutting-Edge Features
              </h2>
            </div>
            <p className="mt-6 text-muted-foreground">
              Our platform provides powerful tools to revolutionize energy
              trading and sustainability
            </p>
          </div>
        </Container>
        <Container>
          <div className="mx-auto mt-8 flex items-center justify-center">
            <Icons.feature className="h-80 w-auto" />
          </div>
        </Container>
        <Container>
          <div className="flex w-full flex-col items-center justify-center py-10 md:px-10 md:py-20">
            <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="flex flex-col items-start px-0 md:px-0 lg:items-start"
                >
                  <div className="flex items-center justify-center">
                    <feature.icon className="h-8 w-8" />
                  </div>
                  <h3 className="mt-4 text-lg font-medium">{feature.title}</h3>
                  <p className="mt-2 text-start text-muted-foreground lg:text-start">
                    {feature.info}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Wrapper>

      {/* Pricing */}
      {/*
      <Wrapper className="relative flex flex-col items-center justify-center py-12">
        <Container>
          <div className="max-w-md text-start md:mx-auto md:text-center">
            <SectionBadge title="Pricing" />
            <h2 className="mt-6 text-3xl font-semibold lg:text-4xl">
              Unlock the right plan for your business
            </h2>
            <p className="mt-6 text-muted-foreground">
              Choose the best plan for your business and start building your
              dream website today
            </p>
          </div>
        </Container>
        <Container className="flex items-center justify-center">
          <div className="grid w-full max-w-4xl grid-cols-1 flex-wrap gap-5 py-10 md:gap-8 md:py-20 lg:grid-cols-3">
            {pricingCards.map((card) => (
              <Card
                key={card.title}
                className={cn(
                  'flex w-full flex-col border-neutral-700',
                  card.title === 'Unlimited Saas' && 'border-2 border-primary'
                )}
              >
                <CardHeader className="border-2 border-border">
                  <span>{card.title}</span>
                  <CardTitle
                    className={cn(
                      card.title !== 'Unlimited Saas' && 'text-muted-foreground'
                    )}
                  >
                    {card.price}
                  </CardTitle>
                  <CardDescription>{card.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3 pt-6">
                  {card.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2">
                      <Zap className="2-4 h-4 fill-primary text-primary" />
                      <p>{feature}</p>
                    </div>
                  ))}
                </CardContent>
                <CardFooter className="mt-auto w-full">
                  <Link
                    href="#"
                    className={cn(
                      'w-full rounded-md bg-primary p-2 text-center text-sm font-medium text-primary-foreground',
                      card.title !== 'Unlimited Saas' &&
                        '!bg-foreground !text-background'
                    )}
                  >
                    {card.buttonText}
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </Container>
      </Wrapper>
      */}

      {/* Testimonials */}
      <Wrapper className="relative flex flex-col items-center justify-center py-12">
        <div className="absolute -left-1/3 -top-1/4 -z-10 hidden h-72 w-72 rounded-full bg-indigo-500 blur-[10rem] md:block"></div>
        <Container>
          <div className="mx-auto max-w-md text-start md:text-center">
            <SectionBadge title="Our Customers" />
            <div className={`${bricolage.className}`}>
              <h2 className="mt-6 text-3xl font-semibold lg:text-4xl">
                What people are saying
              </h2>
            </div>
            <p className="mt-6 text-muted-foreground">
              See how WattX empowers people of all backgrounds. Here&apos;s what
              real people are saying
            </p>
          </div>
        </Container>
        <Container>
          <div className="w-full py-10 md:py-20">
            <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden py-10">
              <Marquee pauseOnHover className="select-none [--duration:20s]">
                {firstRow.map((review) => (
                  <figure
                    key={review.name}
                    className={cn(
                      'relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4',
                      'over:bg-zinc-50/[.15] border-zinc-50/[.1] bg-background'
                    )}
                  >
                    <div className="flex flex-row items-center gap-2">
                      <UserIcon className="h-6 w-6" />
                      <div className="flex flex-col">
                        <figcaption className="text-sm font-medium">
                          {review.name}
                        </figcaption>
                        <p className="text-xs font-medium text-muted-foreground">
                          {review.username}
                        </p>
                      </div>
                    </div>
                    <blockquote className="mt-2 text-sm">
                      {review.body}
                    </blockquote>
                  </figure>
                ))}
              </Marquee>
              <Marquee
                reverse
                pauseOnHover
                className="select-none [--duration:20s]"
              >
                {secondRow.map((review) => (
                  <figure
                    key={review.name}
                    className={cn(
                      'relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4',
                      'over:bg-zinc-50/[.15] border-zinc-50/[.1] bg-background'
                    )}
                  >
                    <div className="flex flex-row items-center gap-2">
                      <UserIcon className="h-6 w-6" />
                      <div className="flex flex-col">
                        <figcaption className="text-sm font-medium">
                          {review.name}
                        </figcaption>
                        <p className="text-xs font-medium text-muted-foreground">
                          {review.username}
                        </p>
                      </div>
                    </div>
                    <blockquote className="mt-2 text-sm">
                      {review.body}
                    </blockquote>
                  </figure>
                ))}
              </Marquee>
              <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-background"></div>
              <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-background"></div>
            </div>
          </div>
        </Container>
      </Wrapper>
      {/* Newsletter */}
      <Wrapper className="relative flex flex-col items-center justify-center">
        <Container>
          <LampContainer>
            <div className="relative flex w-full flex-col items-center justify-center text-center">
              <div className={`${bricolage.className}`}>
                <h2 className="mt-8 text-4xl font-semibold lg:text-5xl lg:!leading-snug xl:text-6xl">
                  Our Vision
                </h2>
              </div>
              <p className="mx-auto mt-6 max-w-md text-muted-foreground">
                Revolutionize energy trading with effortless smart contracts and
                sustainability through piezoelectricity.
              </p>
              <Button variant="white" className="mt-6" asChild>
                <Link href="/sign-in">
                  Connect Wallet
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </LampContainer>
        </Container>
        <Container className="relative z-[999999]">
          <div className="-mt-40 flex w-full items-center justify-center">
            <div className="flex w-full flex-col items-start justify-start rounded-lg border border-border/80 px-4 py-4 md:flex-row md:items-center md:justify-between md:px-8 md:py-8 lg:rounded-2xl">
              <div className="flex w-full flex-col items-start gap-4">
                <h4 className="text-xl font-semibold md:text-2xl">
                  Join our newsletter
                </h4>
                <p className="text-base text-muted-foreground">
                  Get the latest updates on our innovative energy platform.
                </p>
              </div>
              <div className="mt-5 flex w-full flex-col items-start gap-2 md:mt-0 md:w-max md:min-w-80">
                <form
                  action="#"
                  className="flex w-full flex-col items-center gap-2 md:max-w-xs md:flex-row"
                >
                  <Input
                    required
                    type="email"
                    placeholder="Enter your email"
                    className="w-full duration-300 focus-visible:border-primary focus-visible:ring-0 focus-visible:ring-transparent"
                  />
                  <Button
                    type="submit"
                    size="sm"
                    variant="secondary"
                    className="w-full md:w-max"
                  >
                    Subscribe
                  </Button>
                </form>
                <p className="text-xs text-muted-foreground">
                  By subscribing you agree with our{' '}
                  <Link href="#">Privacy Policy</Link>
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Wrapper>
    </section>
  );
}
