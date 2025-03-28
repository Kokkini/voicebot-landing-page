import { Button } from '@/components/shared/ui/button';
import { LandingProductFeature } from '@/components/landing/LandingProductFeature';
import { getBaseUrl } from '@/app/config';
export default function Component() {
  const baseUrl = getBaseUrl();
  return (
    <LandingProductFeature
      title="Smart Task Prioritization"
      descriptionComponent={
        <>
          <p>
            Our AI-powered task prioritization feature automatically organizes
            your to-do list based on deadlines, importance, and your work
            patterns, ensuring you focus on the most critical tasks first.
          </p>

          <Button className="mt-8" variant="secondary" asChild>
            <a href="#">Try now for free</a>
          </Button>

          <p className="text-sm">First month is on us.</p>
        </>
      }
      imageSrc={`${baseUrl}/images/starsky.jpg`}
      imageAlt="Craft Unique Solutions with Ease"
      imagePosition="left"
      imagePerspective="none"
      variant="secondary"
    />
  );
}
