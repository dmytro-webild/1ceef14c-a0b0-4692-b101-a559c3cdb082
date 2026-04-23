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
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "Metrics",
          id: "metrics",
        },
        {
          name: "Services",
          id: "services",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="UTLogistics"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroCarouselLogo
      logoText="UTLogistics"
      description="Leading the future of Amazon Relay transportation. Reliable, scalable, and data-driven logistics solutions."
      buttons={[
        {
          text: "Explore Growth",
          href: "#metrics",
        },
        {
          text: "Contact Us",
          href: "#contact",
        },
      ]}
      slides={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/empty-storage-room-filled-with-many-cardboard-boxes-racks-empty-warehouse-with-office-space-used-ship-merchandise-orders-quality-control-storehouse-with-goods-logistics-work_482257-66552.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/technological-futuristic-holograms-logistics-means-transport_23-2151663036.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/storage-room-with-racks-filled-containers-merchandise_482257-83414.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/industrial-warehouse-stacking-packages-with-order-invoices_482257-83355.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-man-holding-tablet_23-2149214307.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/storehouse-manager-looking-merchandise-boxes-analyzing-clients-orders-before-start-shipping-products-warehouse-african-american-employee-checking-distribution-details-laptop-computer_482257-66143.jpg",
        },
      ]}
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardThree
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      metrics={[
        {
          id: "m1",
          icon: TrendingUp,
          title: "Gross Revenue",
          value: "$12.4M",
        },
        {
          id: "m2",
          icon: Truck,
          title: "Loads Delivered",
          value: "45,000+",
        },
        {
          id: "m3",
          icon: Clock,
          title: "Efficiency Rate",
          value: "99.8%",
        },
      ]}
      title="Logistics Growth & Performance"
      description="Driving exponential success across the network."
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardTwentyOne
      useInvertedBackground={true}
      title="Smart Logistics Services"
      description="Advanced Amazon Relay operations built for scale."
      accordionItems={[
        {
          id: "s1",
          title: "Relay Optimization",
          content: "Advanced routing algorithms.",
        },
        {
          id: "s2",
          title: "Fleet Management",
          content: "24/7 dedicated support team.",
        },
        {
          id: "s3",
          title: "Real-time Tracking",
          content: "Complete visibility for all shipments.",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/futuristic-data-interface_23-2152011741.jpg"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardThree
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        {
          id: "p1",
          name: "Line Haul",
          price: "$12,000/mo",
          imageSrc: "http://img.b2bpic.net/free-photo/shipping-center-features-products-delivery-procedures-transit_482257-83354.jpg",
        },
        {
          id: "p2",
          name: "Local Distribution",
          price: "$8,000/mo",
          imageSrc: "http://img.b2bpic.net/free-photo/arranging-order-deliveries-using-invoice-identification-codes_482257-83415.jpg",
        },
        {
          id: "p3",
          name: "Warehouse Management",
          price: "$15,000/mo",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-female-warehouse-worker-supervisor-working-storage-department_342744-1519.jpg",
        },
        {
          id: "p4",
          name: "Cross Docking",
          price: "$9,500/mo",
          imageSrc: "http://img.b2bpic.net/free-photo/warehouse-laborers-starting-shift_482257-75340.jpg",
        },
        {
          id: "p5",
          name: "Cold Chain",
          price: "$18,000/mo",
          imageSrc: "http://img.b2bpic.net/free-photo/warehouse-team-reviewing-goods-packs-organizing-products-boxes-before-retail-store-orders-distribution-diverse-colleagues-working-depot-space-stock-logistics-handheld-shot_482257-72277.jpg",
        },
        {
          id: "p6",
          name: "Express Relay",
          price: "$20,000/mo",
          imageSrc: "http://img.b2bpic.net/free-photo/variety-people-multitasking-3d-cartoon-scene_23-2151294524.jpg",
        },
      ]}
      title="Operational Excellence"
      description="Core competencies of UTLogistics."
    />
  </div>

  <div id="team" data-section="team">
      <TeamCardTen
      useInvertedBackground={true}
      title="Expert Leadership Team"
      tag="Meet the Team"
      membersAnimation="slide-up"
      members={[
        {
          id: "t1",
          name: "John Doe",
          imageSrc: "http://img.b2bpic.net/free-photo/happy-auto-repairman-pulling-rack-with-car-tires-looking-camera-workshop_637285-7542.jpg",
        },
        {
          id: "t2",
          name: "Jane Smith",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-grey-haired-businessman-standing_74855-10324.jpg",
        },
        {
          id: "t3",
          name: "Robert Lee",
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-smiley-man-wearing-helmet_23-2149214302.jpg",
        },
      ]}
      memberVariant="card"
    />
  </div>

  <div id="social" data-section="social">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      names={[
        "Amazon",
        "Relay",
        "FedEx",
        "DHL",
        "UPS",
        "Maersk",
        "C.H. Robinson",
      ]}
      title="Trusted Partners"
      description="Working with industry leaders."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTen
      textboxLayout="split"
      useInvertedBackground={true}
      testimonials={[
        {
          id: "1",
          title: "Excellence",
          quote: "Top tier relay support.",
          name: "Alice J.",
          role: "Logistics Lead",
          imageSrc: "http://img.b2bpic.net/free-photo/confident-male-worker-standing-warehouse_107420-96550.jpg",
        },
        {
          id: "2",
          title: "Speed",
          quote: "Always on time.",
          name: "Bob K.",
          role: "Supply Chain Mgr",
          imageSrc: "http://img.b2bpic.net/free-photo/successful-woman-with-laptop-smiling-looking-side_259150-56871.jpg",
        },
        {
          id: "3",
          title: "Growth",
          quote: "UTLogistics scales well.",
          name: "Sarah P.",
          role: "CEO",
          imageSrc: "http://img.b2bpic.net/free-photo/pensive-mature-businessman-standing-near-forklift-warehouse-speaking-cell-phone-shelves-with-goods-background-business-logistics-concept_74855-14257.jpg",
        },
        {
          id: "4",
          title: "Reliability",
          quote: "Unmatched consistency.",
          name: "Tom L.",
          role: "Ops Mgr",
          imageSrc: "http://img.b2bpic.net/free-photo/businesswoman-working-warehouse_329181-12785.jpg",
        },
        {
          id: "5",
          title: "Partner",
          quote: "Great team support.",
          name: "Mike R.",
          role: "Logistics Coord",
          imageSrc: "http://img.b2bpic.net/free-photo/positive-confident-businesswoman-wearing-formal-suit-standing-with-arms-folded_74855-10328.jpg",
        },
      ]}
      title="Client Success Stories"
      description="What our partners say."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqDouble
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "f1",
          title: "Coverage?",
          content: "Nationwide Amazon Relay.",
        },
        {
          id: "f2",
          title: "Support?",
          content: "Available 24/7.",
        },
        {
          id: "f3",
          title: "Safety?",
          content: "Safety first.",
        },
      ]}
      title="Logistics Questions"
      description="Information on UTLogistics operations."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={true}
      background={{
        variant: "canvas-reveal",
      }}
      text="Ready to scale your logistics network? Contact UTLogistics today."
      buttons={[
        {
          text: "Email Us",
          href: "mailto:info@utlogistics.com",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterSimple
      columns={[
        {
          title: "Company",
          items: [
            {
              label: "About",
              href: "#",
            },
            {
              label: "Services",
              href: "#services",
            },
          ],
        },
        {
          title: "Legal",
          items: [
            {
              label: "Privacy",
              href: "#",
            },
            {
              label: "Terms",
              href: "#",
            },
          ],
        },
      ]}
      bottomLeftText="© 2024 UTLogistics. All rights reserved."
      bottomRightText="Driven by success."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
