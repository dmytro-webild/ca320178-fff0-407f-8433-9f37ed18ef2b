"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FeatureHoverPattern from '@/components/sections/feature/featureHoverPattern/FeatureHoverPattern';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import HeroSplitKpi from '@/components/sections/hero/HeroSplitKpi';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import { Cloud, Code2, Globe, Target, Palette, Sparkles } from "lucide-react";

export default function AiPlatformsPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="directional-hover"
        defaultTextAnimation="entrance-slide"
        borderRadius="pill"
        contentWidth="medium"
        sizing="mediumLargeSizeMediumTitles"
        background="noise"
        cardStyle="layered-gradient"
        primaryButtonStyle="flat"
        secondaryButtonStyle="glass"
        headingFontWeight="semibold"
    >
      <ReactLenis root>
        <div id="nav" data-section="nav">
          <NavbarStyleApple
            navItems={[
              {
                name: "Services",          id: "services"},
              {
                name: "Platforms",          id: "platforms"},
              {
                name: "AI Platforms",          href: "/ai-platforms"},
              {
                name: "Workflow Automation",          href: "/workflow-automation"},
              {
                name: "Data Systems",          href: "/data-systems"},
              {
                name: "Case Studies",          id: "case-studies"},
              {
                name: "About",          id: "about"},
              {
                name: "Contact",          id: "contact"},
            ]}
            brandName="AERRATRIC TECHNOLOGY INC"
          />
        </div>

        <div id="hero" data-section="hero">
          <HeroSplitKpi
            background={{
              variant: "radial-gradient"}}
            imagePosition="right"
            title="Revolutionary AI Platforms for Smarter Operations"
            description="Leverage cutting-edge artificial intelligence to transform your business processes, enhance decision-making, and unlock new levels of efficiency."
            kpis={[
              {
                value: "Intelligent Automation",          label: "AI-Powered Efficiency"},
              {
                value: "Predictive Analytics",          label: "Forward-Looking Insights"},
              {
                value: "Machine Learning",          label: "Continuous Improvement"},
            ]}
            enableKpiAnimation={true}
            buttons={[
              {
                text: "Explore AI Solutions",          href: "/#contact"},
              {
                text: "Get a Demo",          href: "mailto:hello@aerrartictechnology.com"},
            ]}
            imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BRQDoIB9NyK61wKPrMx774LuGA/a-clean-ui-mockup-for-ai-integrations-sh-1774469591777-e54e3a7a.png"
            imageAlt="AI Platforms UI mockup"
            mediaAnimation="slide-up"
          />
        </div>

        <div id="ai-features" data-section="ai-features">
          <FeatureHoverPattern
            animationType="scale-rotate"
            textboxLayout="default"
            useInvertedBackground={true}
            features={[
              {
                icon: Sparkles,
                title: "Advanced Machine Learning",                description: "Implement sophisticated ML models for complex data analysis and pattern recognition."
              },
              {
                icon: Globe,
                title: "Natural Language Processing",                description: "Enable computers to understand, interpret, and generate human language with ease."
              },
              {
                icon: Target,
                title: "Computer Vision",                description: "Empower systems to interpret and make sense of visual information from the world."
              },
              {
                icon: Code2,
                title: "Data-driven Insights",                description: "Transform raw data into actionable intelligence with powerful AI analytics."
              },
              {
                icon: Cloud,
                title: "Scalable AI Infrastructure",                description: "Build and deploy AI solutions on robust, elastic cloud infrastructure."
              },
            ]}
            title="Core AI Capabilities"
            description="Our AI platforms are built on a foundation of advanced technologies designed to deliver intelligent and impactful solutions."
          />
        </div>

        <div id="contact" data-section="contact">
          <ContactCTA
            useInvertedBackground={true}
            background={{
              variant: "radial-gradient"}}
            tag="Get Started"
            title="Ready to Integrate AI into Your Business?"
            description="Reach out to us to discover how our AI platforms can accelerate your digital transformation."
            buttons={[
              {
                text: "Start Your AI Project",          href: "mailto:hello@aerrartictechnology.com"}
            ]}
            buttonAnimation="slide-up"
          />
        </div>

        <div id="footer" data-section="footer">
          <FooterBaseReveal
            columns={[
              {
                title: "Company",          items: [
                  {
                    label: "About Us",              href: "/#about"},
                  {
                    label: "Services",              href: "/#services"},
                  {
                    label: "Case Studies",              href: "/#case-studies"},
                ],
              },
              {
                title: "Solutions",          items: [
                  {
                    label: "SaaS Platforms",              href: "/#platforms"},
                  {
                    label: "AI Platforms",              href: "/ai-platforms"},
                  {
                    label: "Workflow Automation",              href: "/workflow-automation"},
                  {
                    label: "Data Systems",              href: "/data-systems"},
                  {
                    label: "Cloud & DevOps",              href: "/#services"},
                ],
              },
              {
                title: "Contact",          items: [
                  {
                    label: "Get in Touch",              href: "/#contact"},
                  {
                    label: "hello@aerrartictechnology.com",              href: "mailto:hello@aerrartictechnology.com"},
                  {
                    label: "(866) 319-3883",              href: "tel:+18663193883"},
                ],
              },
            ]}
            copyrightText="© 2024 AERRATRIC TECHNOLOGY INC. All rights reserved."
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}