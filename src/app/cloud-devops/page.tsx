"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FeatureHoverPattern from '@/components/sections/feature/featureHoverPattern/FeatureHoverPattern';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import HeroSplitKpi from '@/components/sections/hero/HeroSplitKpi';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import { Server, Zap, Shield, GitBranch, Settings } from "lucide-react";

export default function CloudDevOpsPage() {
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
                name: "Services",                id: "services"},
              {
                name: "Platforms",                id: "platforms"},
              {
                name: "Cloud & DevOps",                id: "/cloud-devops"},
              {
                name: "Case Studies",                id: "case-studies"},
              {
                name: "About",                id: "about"},
              {
                name: "Contact",                id: "contact"},
              {
                name: "Privacy Policy",                id: "/privacy-policy"},
              {
                name: "Terms of Service",                id: "/terms-of-service"},
            ]}
            brandName="AERRATRIC TECHNOLOGY INC"
          />
        </div>

        <div id="hero" data-section="hero">
          <HeroSplitKpi
            background={{
              variant: "radial-gradient"}}
            imagePosition="right"
            title="Cloud & DevOps: Building Resilient and Scalable Infrastructure"
            description="Optimize your development lifecycle and deploy with confidence. Our Cloud & DevOps solutions ensure robust, automated, and secure operations."
            kpis={[
              {
                value: "CI/CD",                label: "Automation"},
              {
                value: "Scalability",                label: "Elasticity"},
              {
                value: "Security",                label: "Compliance"},
            ]}
            enableKpiAnimation={true}
            buttons={[
              {
                text: "Get Started",                href: "#contact"},
              {
                text: "Explore Services",                href: "#services"},
            ]}
            imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BRQDoIB9NyK61wKPrMx774LuGA/an-abstract-visual-representing-cloud-inf-1774469591098-59167e7b.png?_wi=2"
            imageAlt="Abstract visual representing cloud infrastructure"
            mediaAnimation="slide-up"
          />
        </div>

        <div id="services" data-section="services">
          <FeatureHoverPattern
            animationType="scale-rotate"
            textboxLayout="default"
            useInvertedBackground={true}
            features={[
              {
                icon: Server,
                title: "Scalable Infrastructure",                description: "Design and implement robust, cloud-native architectures that scale with your business needs."},
              {
                icon: GitBranch,
                title: "CI/CD Pipelines",                description: "Automate your build, test, and deployment processes for faster, more reliable software delivery."},
              {
                icon: Zap,
                title: "Containerization & Orchestration",                description: "Leverage Docker and Kubernetes for efficient application deployment, management, and scaling."},
              {
                icon: Settings,
                title: "Monitoring & Logging",                description: "Implement comprehensive monitoring and logging solutions for real-time performance insights and proactive issue detection."},
              {
                icon: Shield,
                title: "Security & Compliance",                description: "Ensure your cloud environment is secure and compliant with industry standards and best practices."},
            ]}
            title="Our Cloud & DevOps Expertise"
            description="We empower your business with advanced cloud infrastructure and agile development practices, driving efficiency and innovation."
          />
        </div>

        <div id="contact" data-section="contact">
          <ContactCTA
            useInvertedBackground={true}
            background={{
              variant: "radial-gradient"}}
            tag="Get in Touch"
            title="Ready to Elevate Your Cloud Strategy?"
            description="Connect with us to discuss how our Cloud & DevOps solutions can transform your operations."
            buttons={[
              {
                text: "Start Your Project",                href: "mailto:hello@aerrartictechnology.com"}
            ]}
            buttonAnimation="slide-up"
          />
        </div>

        <div id="footer" data-section="footer">
          <FooterBaseReveal
            columns={[
              {
                title: "Company",                items: [
                  {
                    label: "About Us",                    href: "/about"},
                  {
                    label: "Services",                    href: "/services"},
                  {
                    label: "Case Studies",                    href: "/case-studies"},
                ],
              },
              {
                title: "Solutions",                items: [
                  {
                    label: "SaaS Platforms",                    href: "/platforms#saas-platforms"},
                  {
                    label: "AI & Automation",                    href: "/platforms#ai-integrations"},
                  {
                    label: "Cloud & DevOps",                    href: "/cloud-devops"},
                ],
              },
              {
                title: "Legal",                items: [
                  {
                    label: "Privacy Policy",                    href: "/privacy-policy"},
                  {
                    label: "Terms of Service",                    href: "/terms-of-service"},
                ],
              },
              {
                title: "Contact",                items: [
                  {
                    label: "Get in Touch",                    href: "/contact"},
                  {
                    label: "hello@aerrartictechnology.com",                    href: "mailto:hello@aerrartictechnology.com"},
                  {
                    label: "(866) 319-3883",                    href: "tel:+18663193883"},
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