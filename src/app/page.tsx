"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import BlogCardOne from '@/components/sections/blog/BlogCardOne';
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FeatureHoverPattern from '@/components/sections/feature/featureHoverPattern/FeatureHoverPattern';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import HeroSplitKpi from '@/components/sections/hero/HeroSplitKpi';
import MetricCardFourteen from '@/components/sections/metrics/MetricCardFourteen';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TestimonialAboutCard from '@/components/sections/about/TestimonialAboutCard';
import TestimonialCardSix from '@/components/sections/testimonial/TestimonialCardSix';
import { Cloud, Code2, Globe, Layout, Sparkles } from "lucide-react";

export default function LandingPage() {
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
          name: "Services",
          id: "services",
        },
        {
          name: "Platforms",
          id: "platforms",
        },
        {
          name: "Case Studies",
          id: "case-studies",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="AERRATRIC TECHNOLOGY INC"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitKpi
      background={{
        variant: "radial-gradient",
      }}
      imagePosition="right"
      title="Intelligent Software Built for Sustainable Growth"
      description="AERRATRIC TECHNOLOGY INC designs modern SaaS platforms that streamline operations, enhance user experiences, and support long-term business scalability."
      kpis={[
        {
          value: "Scalable Systems",
          label: "Architecture",
        },
        {
          value: "Intelligent Automation",
          label: "Efficiency",
        },
        {
          value: "Seamless Integration",
          label: "Connectivity",
        },
      ]}
      enableKpiAnimation={true}
      buttons={[
        {
          text: "Start Your Project",
          href: "#contact",
        },
        {
          text: "Explore Solutions",
          href: "#platforms",
        },
      ]}
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BRQDoIB9NyK61wKPrMx774LuGA/a-minimalist-abstract-software-dashboard-1774469590789-37351c22.png?_wi=1"
      imageAlt="Abstract UI dashboard with organic lines"
      mediaAnimation="slide-up"
      marqueeItems={[
        {
          type: "text",
          text: "Enterprise Performance",
        },
        {
          type: "text",
          text: "Digital Transformation",
        },
        {
          type: "text",
          text: "AI & Analytics",
        },
        {
          type: "text",
          text: "Cloud Solutions",
        },
        {
          type: "text",
          text: "Strategic Partnerships",
        },
        {
          type: "text",
          text: "User Experience",
        },
      ]}
      marqueeSpeed={25}
      showMarqueeCard={true}
    />
  </div>

  <div id="services" data-section="services">
      <FeatureHoverPattern
      animationType="scale-rotate"
      textboxLayout="default"
      useInvertedBackground={true}
      features={[
        {
          icon: Layout,
          title: "Strategy",
          description: "Defining clear roadmaps and innovative solutions that align with your long-term business objectives.",
        },
        {
          icon: Layout,
          title: "Product Design",
          description: "Crafting intuitive, engaging, and high-performing digital products with user-centric design principles.",
        },
        {
          icon: Code2,
          title: "Engineering",
          description: "Building robust, scalable, and secure software platforms using cutting-edge technologies and best practices.",
        },
        {
          icon: Cloud,
          title: "Cloud & DevOps",
          description: "Implementing agile development, seamless deployment, and optimized cloud infrastructure for peak performance.",
        },
        {
          icon: Sparkles,
          title: "AI & Automation",
          description: "Integrating intelligent automation and AI solutions to enhance efficiency, drive insights, and unlock new capabilities.",
        },
      ]}
      title="Our Expert Services"
      description="Leveraging technology, intelligence, and structure for your organic growth across every stage of your digital journey."
    />
  </div>

  <div id="platforms" data-section="platforms">
      <ProductCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="bento-grid"
      useInvertedBackground={false}
      products={[
        {
          id: "saas-platforms",
          name: "SaaS Platforms",
          price: "Custom",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BRQDoIB9NyK61wKPrMx774LuGA/a-clean-high-end-ui-mockup-for-a-saas-pl-1774469591483-eef4a293.png",
          imageAlt: "SaaS platform UI mockup",
        },
        {
          id: "workflow-automation",
          name: "Workflow Automation",
          price: "Custom",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BRQDoIB9NyK61wKPrMx774LuGA/a-clean-ui-mockup-illustrating-workflow--1774469591275-5dbbd655.png",
          imageAlt: "Workflow automation UI mockup",
        },
        {
          id: "ai-integrations",
          name: "AI Integrations",
          price: "Custom",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BRQDoIB9NyK61wKPrMx774LuGA/a-clean-ui-mockup-for-ai-integrations-sh-1774469591777-e54e3a7a.png",
          imageAlt: "AI integrations UI mockup",
        },
        {
          id: "data-systems",
          name: "Data Systems",
          price: "Custom",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BRQDoIB9NyK61wKPrMx774LuGA/a-clean-ui-mockup-for-robust-data-system-1774469592098-1838c03e.png",
          imageAlt: "Data systems UI mockup",
        },
      ]}
      title="Our Intelligent Platforms & Capabilities"
      description="Building the scalable digital foundations that empower your business evolution and drive transformative results."
    />
  </div>

  <div id="case-studies" data-section="case-studies">
      <BlogCardOne
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      carouselMode="buttons"
      title="Impactful Case Studies"
      description="Discover how AERRATRIC TECHNOLOGY INC empowers businesses with AI-driven solutions and comprehensive digital transformation."
      blogs={[
        {
          id: "ai-analytics",
          category: "AI & Data",
          title: "Transforming Decisions with AI Analytics",
          excerpt: "Implemented an advanced AI analytics platform, enhancing data-driven decision-making and operational efficiency for a global enterprise.",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BRQDoIB9NyK61wKPrMx774LuGA/a-soft-high-end-visual-for-an-ai-analyti-1774469591983-61d3a17a.png",
          imageAlt: "AI Analytics Platform UI mockup",
          authorName: "AERRATRIC Team",
          authorAvatar: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BRQDoIB9NyK61wKPrMx774LuGA/a-minimalist-abstract-software-dashboard-1774469590789-37351c22.png",
          date: "October 26, 2023",
        },
        {
          id: "enterprise-automation",
          category: "Automation",
          title: "Streamlining Operations with Enterprise Automation",
          excerpt: "Developed a robust enterprise automation system that optimized critical workflows, reducing manual effort and improving resource utilization.",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BRQDoIB9NyK61wKPrMx774LuGA/a-soft-high-end-visual-for-an-enterprise-1774469591234-82fd9a72.png",
          imageAlt: "Enterprise Automation System UI mockup",
          authorName: "AERRATRIC Team",
          authorAvatar: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BRQDoIB9NyK61wKPrMx774LuGA/a-minimalist-abstract-software-dashboard-1774469590789-37351c22.png",
          date: "November 15, 2023",
        },
        {
          id: "saas-dashboard",
          category: "SaaS Solutions",
          title: "Elevating User Experience with a New SaaS Dashboard",
          excerpt: "Designed and engineered an intuitive SaaS dashboard solution, significantly boosting user engagement and product adoption for a growing startup.",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BRQDoIB9NyK61wKPrMx774LuGA/a-soft-high-end-visual-for-a-saas-dashbo-1774469593515-5cac0778.png",
          imageAlt: "SaaS Dashboard Solution UI mockup",
          authorName: "AERRATRIC Team",
          authorAvatar: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BRQDoIB9NyK61wKPrMx774LuGA/a-minimalist-abstract-software-dashboard-1774469590789-37351c22.png",
          date: "December 01, 2023",
        },
      ]}
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardFourteen
      useInvertedBackground={false}
      title="Driving Impact & Innovation"
      tag="Our Achievements"
      metrics={[
        {
          id: "solutions",
          value: "100+",
          description: "Solutions Delivered",
        },
        {
          id: "development",
          value: "End-to-End",
          description: "SaaS Development",
        },
        {
          id: "infrastructure",
          value: "Scalable",
          description: "Infrastructure",
        },
      ]}
      metricsAnimation="entrance-slide"
    />
  </div>

  <div id="about" data-section="about">
      <TestimonialAboutCard
      useInvertedBackground={true}
      tag="Our Story"
      title="Partnership for Sustainable Growth"
      description="AERRATRIC TECHNOLOGY INC is a modern SaaS company that blends technology, intelligence, structure, and organic growth. We forge long-term partnerships and deliver with clarity and execution across diverse industries, including Technology, Healthcare, Logistics, Finance, Construction, Education, and Retail."
      subdescription="Our strategic approach and calm confidence ensure your digital transformation journey is grounded, successful, and tailored to empower enterprise performance."
      icon={Globe}
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BRQDoIB9NyK61wKPrMx774LuGA/an-abstract-high-end-visual-representing-1774469591098-59167e7b.png?_wi=1"
      imageAlt="Abstract organic shapes representing growth and partnership"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardSix
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          name: "Sarah Johnson",
          handle: "@sarahj",
          testimonial: "AERRATRIC TECHNOLOGY INC delivered beyond expectations. Their intelligent approach transformed our operations and set us on a path of sustainable growth.",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BRQDoIB9NyK61wKPrMx774LuGA/professional-headshot-of-a-smiling-femal-1774469590711-21dcb0bd.png?_wi=1",
          imageAlt: "Sarah Johnson",
        },
        {
          id: "2",
          name: "Michael Chen",
          handle: "@michaelc",
          testimonial: "The team at AERRATRIC TECHNOLOGY INC brought calm confidence and deep expertise. Their SaaS platform is a game-changer for our enterprise.",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BRQDoIB9NyK61wKPrMx774LuGA/professional-headshot-of-a-smiling-male--1774469591086-83cddd50.png?_wi=1",
          imageAlt: "Michael Chen",
        },
        {
          id: "3",
          name: "Emily Rodriguez",
          handle: "@emilyr",
          testimonial: "Exceptional product design and engineering. AERRATRIC TECHNOLOGY INC truly understands how to build scalable, user-centric solutions.",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BRQDoIB9NyK61wKPrMx774LuGA/professional-headshot-of-a-smiling-femal-1774469590887-ed9e97c0.png?_wi=1",
          imageAlt: "Emily Rodriguez",
        },
        {
          id: "4",
          name: "David Kim",
          handle: "@davidk",
          testimonial: "Working with AERRATRIC TECHNOLOGY INC was a strategic decision that paid off. Their AI integration brought new levels of efficiency and insight.",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BRQDoIB9NyK61wKPrMx774LuGA/professional-headshot-of-a-smiling-male--1774469591183-492a2c26.png?_wi=1",
          imageAlt: "David Kim",
        },
      ]}
      title="What Our Partners Say"
      description="Trusted insights from leaders we've empowered through intelligent software solutions and strategic digital transformation."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
      useInvertedBackground={true}
      background={{
        variant: "radial-gradient",
      }}
      tag="Get in Touch"
      title="Ready to Transform Your Business?"
      description="Reach out to us to start your project and explore how intelligent software can drive your sustainable growth.\n\nAddress: 3404 North Cascade Avenue, Colorado Springs, CO 80907\nPhone: (866) 319-3883\nEmail: hello@aerrartictechnology.com"
      buttons={[
        {
          text: "Start Your Project",
          href: "mailto:hello@aerrartictechnology.com",
        },
      ]}
      buttonAnimation="slide-up"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseReveal
      columns={[
        {
          title: "Company",
          items: [
            {
              label: "About Us",
              href: "/about",
            },
            {
              label: "Services",
              href: "/services",
            },
            {
              label: "Case Studies",
              href: "/case-studies",
            },
          ],
        },
        {
          title: "Solutions",
          items: [
            {
              label: "SaaS Platforms",
              href: "/platforms#saas-platforms",
            },
            {
              label: "AI & Automation",
              href: "/platforms#ai-integrations",
            },
            {
              label: "Cloud & DevOps",
              href: "/services#cloud-devops",
            },
          ],
        },
        {
          title: "Contact",
          items: [
            {
              label: "Get in Touch",
              href: "/contact",
            },
            {
              label: "hello@aerrartictechnology.com",
              href: "mailto:hello@aerrartictechnology.com",
            },
            {
              label: "(866) 319-3883",
              href: "tel:+18663193883",
            },
          ],
        },
      ]}
      copyrightText="© 2023 AERRATRIC TECHNOLOGY INC. All rights reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
