"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterSimple from '@/components/sections/footer/FooterSimple';

export default function ContactPage() {
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
        <NavbarStyleCentered
          navItems={[
            { name: "Home", id: "/" },
            { name: "Contact", id: "#contact" },
          ]}
          brandName="UTLogistics"
        />
        
        <div id="contact">
          <ContactSplit
            tag="Contact Us"
            title="Get in Touch with UTLogistics"
            description="Scale your logistics operation. Contact us today to discuss partnership opportunities."
            background={{ variant: 'canvas-reveal' }}
            useInvertedBackground={true}
            mediaPosition="right"
            imageSrc="http://img.b2bpic.net/free-photo/storehouse-manager-looking-merchandise-boxes-analyzing-clients-orders-before-start-shipping-products-warehouse-african-american-employee-checking-distribution-details-laptop-computer_482257-66143.jpg"
          />
        </div>

        <FooterSimple
          columns={[
            { title: "Navigation", items: [{ label: "Home", href: "/" }, { label: "Contact", href: "#contact" }] },
          ]}
          bottomLeftText="© 2025 UTLogistics. All rights reserved."
          bottomRightText="Optimized for Growth."
        />
      </ReactLenis>
    </ThemeProvider>
  );
}