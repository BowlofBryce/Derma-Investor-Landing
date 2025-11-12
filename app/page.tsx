import { Nav } from '@/components/Nav';
import { Hero } from '@/components/Hero';
import { ValueCard } from '@/components/ValueCard';
import { CustomerJourney } from '@/components/CustomerJourney';
import { MerchantJourney } from '@/components/MerchantJourney';
import { MerchantBenefits } from '@/components/MerchantBenefits';
import { FlowDiagram } from '@/components/FlowDiagram';
import { Economics } from '@/components/Economics';
import { Compliance } from '@/components/Compliance';
import { FAQ } from '@/components/FAQ';
import { FinalCTA } from '@/components/FinalCTA';
import { Footer } from '@/components/Footer';
import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import { siteContent } from '@/content/site';

export default function Home() {
  return (
    <main id="main-content" className="min-h-screen">
      <Nav />

      <Hero
        headline={siteContent.hero.headline}
        subhead={siteContent.hero.subhead}
        primaryCTA={siteContent.hero.primaryCTA}
      />

      <Section className="bg-[var(--surface)]">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {siteContent.valueProps.map((prop, idx) => (
              <ValueCard
                key={idx}
                title={prop.title}
                description={prop.description}
                icon={prop.icon}
                index={idx}
              />
            ))}
          </div>
        </Container>
      </Section>

      <MerchantBenefits
        title={siteContent.merchantBenefits.title}
        benefits={siteContent.merchantBenefits.benefits}
      />

      <CustomerJourney
        title={siteContent.customerJourney.title}
        steps={siteContent.customerJourney.steps}
        callout={siteContent.customerJourney.callout}
      />

      <MerchantJourney
        title={siteContent.merchantJourney.title}
        steps={siteContent.merchantJourney.steps}
        callout={siteContent.merchantJourney.callout}
      />

      <FlowDiagram />

      <Economics
        title={siteContent.economics.title}
        cards={siteContent.economics.cards}
      />

      <Compliance
        title={siteContent.compliance.title}
        subtitle={siteContent.compliance.subtitle}
        items={siteContent.compliance.items}
      />

      <FAQ items={siteContent.faq} />

      <FinalCTA
        headline={siteContent.finalCTA.headline}
        primaryCTA={siteContent.finalCTA.primaryCTA}
        secondaryCTA={siteContent.finalCTA.secondaryCTA}
      />

      <Footer
        company={siteContent.footer.company}
        email={siteContent.footer.email}
        links={siteContent.footer.links}
      />
    </main>
  );
}
