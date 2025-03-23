import { LandingPricingSection } from '@/components/landing/pricing/LandingPricingSection';
import { LandingPricingPlan } from '@/components/landing/pricing/LandingPricingPlan';

export default function PricingSection() {
  return (
    <LandingPricingSection
      title="Simple, scalable pricing"
      description="Affordable pricing plans tailored to your needs. Choose a plan that works best for you."
      withBackground
      withBackgroundGlow
      variant="secondary"
    >
      <LandingPricingPlan
        title="Free"
        description="For small teams & personal use."
        price="$0"
      >
        <p>Up to 5 users</p>
        <p>Basic features</p>
        <p>Discord access</p>
      </LandingPricingPlan>

      <LandingPricingPlan
        title="Pro"
        description="For larger teams or businesses."
        ctaText="Upgrade now"
        price="$20"
        priceSuffix="/mo"
        highlighted
      >
        <p>Unlimited users</p>
        <p>AI features</p>
        <p>Priority support</p>
      </LandingPricingPlan>
    </LandingPricingSection>
  );
}
