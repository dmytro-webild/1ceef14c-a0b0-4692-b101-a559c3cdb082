"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FeatureCardTwentyOne from '@/components/sections/feature/FeatureCardTwentyOne';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import HeroCarouselLogo from '@/components/sections/hero/heroCarouselLogo/HeroCarouselLogo';
import MetricCardThree from '@/components/sections/metrics/MetricCardThree';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TeamCardTen from '@/components/sections/team/TeamCardTen';
import TestimonialCardTen from '@/components/sections/testimonial/TestimonialCardTen';
import { Clock, TrendingUp, Truck } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="expand-hover"
        defaultTextAnimation="entrance-slide"
        borderRadius="rounded"
        contentWidth="mediumLarge"
        sizing="mediumLargeSizeLargeTitles"
        background="noiseDiagonalGradient"
        cardStyle="gradient-radial"
        primaryButtonStyle="diagonal-gradient"
        secondaryButtonStyle="glass"
        headingFontWeight="medium"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        { name: "Home", id: "hero" },
        { name: "Stats", id: "metrics" },
        { name: "Services", id: "services" },
        { name: "Contact", id: "/contact" },
      ]}
      brandName="UTLogistics"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroCarouselLogo
      logoText="UTLogistics"
      description="Premier Amazon Relay logistics partner showcasing high-growth operations and data-driven infrastructure."
      buttons={[
        { text: "View Performance", href: "#metrics" },
        { text: "Contact Us", href: "/contact" },
      ]}
      slides={[
        { imageSrc: "http://img.b2bpic.net/free-photo/technological-futuristic-holograms-logistics-means-transport_23-2151663036.jpg" },
        { imageSrc: "http://img.b2bpic.net/free-photo/empty-storage-room-filled-with-many-cardboard-boxes-racks-empty-warehouse-with-office-space-used-ship-merchandise-orders-quality-control-storehouse-with-goods-logistics-work_482257-66552.jpg" },
      ]}
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardThree
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      metrics={[
        { id: "m1", icon: TrendingUp, title: "Gross Throughput", value: "$24.8M" },
        { id: "m2", icon: Truck, title: "Growth Rate", value: "42% YoY" },
        { id: "m3", icon: Clock, title: "Operational Scale", value: "92k Loads" },
      ]}
      title="UTLogistics Company Statistics"
      description="Aggressive expansion metrics powering the Amazon Relay network."
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardTwentyOne
      useInvertedBackground={true}
      title="Our Logistics Capabilities"
      description="We optimize relay cycles through data-driven logistics and precision engineering."
      accordionItems={[
        { id: "s1", title: "Relay Scaling", content: "Optimized load management for high-volume Amazon Relay corridors." },
        { id: "s2", title: "Gross Revenue Growth", content: "Strategic operational enhancements driving continuous YOY financial improvements." },
        { id: "s3", title: "Network Integrity", content: "Maintained 99% load acceptance and delivery throughput efficiency." },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/futuristic-data-interface_23-2152011741.jpg"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterSimple
      columns={[
        { title: "Navigation", items: [{ label: "Home", href: "/" }, { label: "Contact", href: "/contact" }] },
        { title: "About", items: [{ label: "Our Growth", href: "#metrics" }, { label: "Services", href: "#services" }] },
      ]}
      bottomLeftText="© 2025 UTLogistics. All rights reserved."
      bottomRightText="Optimized for Growth."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}