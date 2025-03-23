import { LandingFooter } from '@/components/landing/footer/LandingFooter';
import { LandingFooterColumn } from '@/components/landing/footer/LandingFooterColumn';
import { LandingFooterLink } from '@/components/landing/footer/LandingFooterLink';
import Image from 'next/image';
import { getBaseUrl } from '@/app/config';
export default function FooterSection() {
  const baseUrl = getBaseUrl();
  return (
    <LandingFooter
      title="Beautiful landing pages in minutes"
      description="The easiest way to make a landing page for your startup: SaaS, iOS/Android app, directory, personal page and more."
      footnote="© 2025 Page AI. All rights reserved."
      withBackgroundGlow
      variant="secondary"
      logoComponent={
        <div className="flex items-center gap-3 justify-start">
          <Image src={`${baseUrl}/images/logo.png`} alt="VoiceBot Logo" width={64} height={64} />
          <span className="text-2xl font-bold">
            VoiceBot
          </span>
        </div>
      }
    >
      <LandingFooterColumn title="Product">
        <LandingFooterLink href="#">Features</LandingFooterLink>
        <LandingFooterLink href="#">Pricing</LandingFooterLink>
        <LandingFooterLink href="#">Integrations</LandingFooterLink>
        <LandingFooterLink href="#">FAQ</LandingFooterLink>
      </LandingFooterColumn>

      <LandingFooterColumn title="Company">
        <LandingFooterLink href="#">About</LandingFooterLink>
        <LandingFooterLink href="#">Careers</LandingFooterLink>
        <LandingFooterLink href="#">Press</LandingFooterLink>
        <LandingFooterLink href="#">Blog</LandingFooterLink>
      </LandingFooterColumn>
    </LandingFooter>
  );
}
