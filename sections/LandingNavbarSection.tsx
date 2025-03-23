import ThemeSwitch from '@/components/shared/ThemeSwitch';
import { LandingHeader } from '@/components/landing/navigation/LandingHeader';
import { LandingHeaderMenuItem } from '@/components/landing/navigation/LandingHeaderMenuItem';
import Image from 'next/image';
import { getBaseUrl } from '@/app/config';
import { SearchIcon } from 'lucide-react';

export default function LandingNavbarSection() {
  const baseUrl = getBaseUrl();
  return (
    <>
      <div className="h-20" /> {/* Spacer to prevent content overlap */}
      <div className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto">
          <LandingHeader
            logoComponent={
              <>
                <Image src={`${baseUrl}/images/logo.png`} alt="VoiceBot Logo" width={64} height={64} />
                <div className="hidden text-2xl font-semibold font-display sm:flex gap-2 h-full">
                  VoiceBot
                </div>
              </>
            }
            withBackground={false}
          >
            <div className="flex items-center gap-6">
              <LandingHeaderMenuItem href="#" label="Home" type="link" />
              <LandingHeaderMenuItem href="#" label="Pricing" type="link" />
              <LandingHeaderMenuItem href="#" label="Articles" type="link" />
              <LandingHeaderMenuItem href="#" label="Sign In" type="button" />
              <LandingHeaderMenuItem href="#" label={<SearchIcon />} type="icon-button" variant="ghost" />
              <ThemeSwitch />
            </div>
          </LandingHeader>
        </div>
      </div>
    </>
  );
}
