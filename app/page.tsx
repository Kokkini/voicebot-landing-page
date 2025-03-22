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

  return (
    <>
      <LandingSocialProofBand invert={false} className="hidden md:flex">
        <LandingSocialProofBandItem>
          Used by industry leaders
        </LandingSocialProofBandItem>

        <LandingSocialProofBandItem>
          24/7 customer support
        </LandingSocialProofBandItem>

        <LandingSocialProofBandItem graphic="rating">
          99% customer satisfaction
        </LandingSocialProofBandItem>
      </LandingSocialProofBand>

      <LandingPrimaryVideoCtaSection
        title="Transform Your Business Today"
        description="Say goodbye to inefficiencies and hello to success with our groundbreaking AI app. Streamline your workflow, boost productivity, and maximize revenue effortlessly."
        autoPlay
        controls={false}
        videoSrc="https://cache.shipixen.com/features/11-pricing-page-builder.mp4"
        withBackground
        withBackgroundGlow
        variant="secondary"
        backgroundGlowVariant="secondary"
        leadingComponent={<LandingProductHuntAward />}
      >
        <Button size="xl" variant="secondary" asChild>
          <a href={`${baseUrl}/#pricing`}>Buy Now</a>
        </Button>

        <Button size="xl" variant="outlineSecondary">
          <a href={`${baseUrl}/#features`}>Learn More</a>
        </Button>

        <LandingDiscount
          discountValueText="$350 off"
          discountDescriptionText="for the first 10 customers (2 left)"
        />

        <LandingSocialProof
          className="w-full mt-12"
          showRating
          numberOfUsers={99}
          suffixText="happy users"
          avatarItems={avatarItems}
        />
      </LandingPrimaryVideoCtaSection>

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
