import {
  ChromeIcon,
  FigmaIcon,
  GithubIcon,
  FramerIcon,
  TwitchIcon,
  TwitterIcon,
  GitlabIcon,
  InstagramIcon,
  SlackIcon,
  ThumbsUpIcon,
  LayersIcon,
  ZapIcon,
  SparklesIcon,
  LineChartIcon,
} from 'lucide-react';

import { LandingPrimaryVideoCtaSection } from '@/components/landing/cta/LandingPrimaryCta';
import { LandingSocialProof } from '@/components/landing/social-proof/LandingSocialProof';
import { LandingMarquee } from '@/components/landing/LandingMarquee';
import { getBaseUrl } from './config';

import { Button } from '@/components/shared/ui/button';
import { colors } from '@/data/config/colors';
import { LandingSocialProofBand } from '@/components/landing/social-proof/LandingSocialProofBand';
import { LandingSocialProofBandItem } from '@/components/landing/social-proof/LandingSocialProofBandItem';
import { LandingProductHuntAward } from '@/components/landing/social-proof/LandingProductHuntAward';
import { LandingDiscount } from '@/components/landing/discount/LandingDiscount';
import { LandingProductFeatureKeyPoints } from '@/components/landing/LandingProductFeatureKeyPoints';
import { LandingProductFeature } from '@/components/landing/LandingProductFeature';
import { LandingProductVideoFeature } from '@/components/landing/LandingProductVideoFeature';
import { LandingBandSection } from '@/components/landing/LandingBand';
import { LandingSaleCtaSection } from '@/components/landing/cta/LandingSaleCta';
import { LandingTestimonialReadMoreWrapper } from '@/components/landing/testimonial/LandingTestimonialReadMoreWrapper';
import { LandingTestimonialGrid } from '@/components/landing/testimonial/LandingTestimonialGrid';
import { LandingFeatureList } from '@/components/landing/feature/LandingFeatureList';
import FaqSection from '@/sections/FaqSection';
import PrimaryVideoCtaSection from '@/sections/PrimaryVideoCtaSection';
import FeatureSection from '@/sections/FeatureSection';
import FeatureVideoSection from '@/sections/FeatureVideoSection';
import OneFeatureSection from '@/sections/OneFeatureSection';
import RatingSummarySection from '@/sections/RatingSummarySection';
import TestimonialSection from '@/sections/TestimonialSection';
import BigFeatureListSection from '@/sections/BigFeatureListSection';
import TopSocialProofBandSection from '@/sections/TopSocialProofBandSection';
export default function Component() {
  const baseUrl = getBaseUrl();
  const avatarItems = [
    {
      imageSrc: 'https://picsum.photos/id/64/100/100',
      name: 'John Doe',
    },
    {
      imageSrc: 'https://picsum.photos/id/65/100/100',
      name: 'Jane Doe',
    },
    {
      imageSrc: 'https://picsum.photos/id/669/100/100',
      name: 'Alice Doe',
    },
  ];

  const testimonialItems = [
    {
      name: 'Mathew',
      text: 'After using this, I cannot imagine going back to the old way of doing things.',
      handle: '@heymatt_oo',
      imageSrc: 'https://picsum.photos/100/100.webp?random=2',
    },
    {
      name: 'Joshua',
      text: 'Perfect for my use case',
      handle: '@joshua',
      imageSrc: 'https://picsum.photos/100/100.webp?random=3',
    },
    {
      name: 'Parl Coppa',
      text: 'This is the best thing since sliced bread. I cannot believe I did not think of it myself.',
      handle: '@coppalipse',
      imageSrc: 'https://picsum.photos/100/100.webp?random=1',
      featured: true, // Feature this testimonial
    },
    {
      name: 'Mandy',
      text: 'Excellent product!',
      handle: '@mandy',
      imageSrc: 'https://picsum.photos/100/100.webp?random=4',
    },
    {
      name: 'Alex',
      text: 'Can easily recommend!',
      handle: '@alex',
      imageSrc: 'https://picsum.photos/100/100.webp?random=5',
    },
    {
      name: 'Sam',
      text: 'I am very happy with the results.',
      handle: '@sama',
      imageSrc: 'https://picsum.photos/100/100.webp?random=6',
    },
  ];

  const featureItems = [
    {
      title: 'Intuitive Interface',
      description:
        'Design and customize your app easily with our simple drag-and-drop interface.',
      icon: <SparklesIcon />,
    },
    {
      title: 'Seamless Integration',
      description:
        'Connect your app with other tools effortlessly for a smoother workflow.',
      icon: <GithubIcon />,
    },
    {
      title: 'Smart Analytics',
      description:
        'Gain valuable insights into user behavior and trends with our advanced analytics tools.',
      icon: <LineChartIcon />,
    },
    {
      title: 'Rock-Solid Security',
      description:
        'Rest assured, your data is safe with our top-notch security measures.',
      icon: <ThumbsUpIcon />,
    },
    {
      title: 'Automatic Updates',
      description:
        'Never miss out on the latest features - our app updates itself automatically!',
      icon: <ZapIcon />,
    },
    {
      title: 'Scalability on Demand',
      description:
        'Grow your app along with your business needs, effortlessly expanding to meet demand.',
      icon: <LayersIcon />,
    },
  ];

  return (
    <>
      <TopSocialProofBandSection />

      <PrimaryVideoCtaSection />

      <FeatureSection />

      <FeatureVideoSection />

      <OneFeatureSection />

      <RatingSummarySection />

      <LandingProductFeature
        title="One-click API Integration"
        descriptionComponent={
          <>
            With our API integration capability, seamlessly connect our app with
            all popular providers.
            <Button variant="outlineSecondary" asChild>
              <a href="#">Check out our SDK</a>
            </Button>
          </>
        }
        withBackground
        variant="secondary"
        imageSrc={`${baseUrl}/images/starsky.jpg`}
        imageAlt="Screenshot of the product"
        imagePosition="center"
        textPosition="center"
      />

      <LandingSaleCtaSection
        title="No more complexity, just simplicity"
        description="Our AI-powered task prioritization feature automatically organizes your to-do list based on deadlines, importance, and your work patterns, ensuring you focus on the most critical tasks first."
        ctaHref="https://gum.co/product"
        ctaLabel="Sign up now"
        withBackgroundGlow
      />

      <TestimonialSection />

      <BigFeatureListSection />

      <FaqSection />

      {/* Background gradient */}
      <div
        className="fixed top-0 left-0 w-full h-full -z-10"
        style={{
          backgroundImage: `url('data:image/svg+xml;utf8,${encodeURIComponent(
            ` <svg xmlns="http://www.w3.org/2000/svg"><defs><radialGradient id="a" cx="50%" cy="56.6%" r="50%" fx="50%" fy="56.6%" gradientUnits="userSpaceOnUse"><stop offset="0%" style="stop-color:${colors.primary.dark};stop-opacity:0.1"/><stop offset="54.99%" style="stop-color:${colors.primary.darker};stop-opacity:0.1"/><stop offset="100%" style="stop-color:${colors.secondary.darker};stop-opacity:0.1"/></radialGradient></defs><rect width="100%" height="100%" fill="url(#a)"/></svg>`,
          )}')`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
        }}
      ></div>
    </>
  );
}
