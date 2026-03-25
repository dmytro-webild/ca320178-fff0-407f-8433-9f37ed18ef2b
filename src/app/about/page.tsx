"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FooterBase from '@/components/sections/footer/FooterBase';
import MetricSplitMediaAbout from '@/components/sections/about/MetricSplitMediaAbout';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import SplitAbout from '@/components/sections/about/SplitAbout';
import TeamCardFive from '@/components/sections/team/TeamCardFive';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import { Lightbulb, Medal, ShieldCheck, Zap, UnfoldVertical } from "lucide-react";

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
          name: "Services",          id: "services"},
        {
          name: "Platforms",          id: "platforms"},
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

  <div id="about" data-section="about">
      <SplitAbout
      textboxLayout="split-description"
      useInvertedBackground={true}
      title="Our Vision for Intelligent Software"
      description="AERRATRIC TECHNOLOGY INC is driven by a profound commitment to crafting innovative SaaS solutions that empower businesses for sustainable growth. We believe in the harmonious blend of advanced technology and human-centric design that delivers earth-tone luxury in every intelligent software experience."
      tag="Who We Are"
      tagIcon={Lightbulb}
      tagAnimation="slide-up"
      buttons={[
        {
          text: "Learn More",          href: "/about"},
        {
          text: "Our Story",          href: "/about#story"},
      ]}
      buttonAnimation="slide-up"
      bulletPoints={[
        {
          title: "Future-Proof Innovation",          description: "Leveraging cutting-edge AI and machine learning to build resilient platforms that anticipate tomorrow's challenges.",          icon: Zap,
        },
        {
          title: "Scalable Architectures",          description: "Designing cloud-native solutions that grow seamlessly with your business needs, ensuring long-term adaptability.",          icon: UnfoldVertical,
        },
        {
          title: "Ethical AI Integration",          description: "Prioritizing responsible AI development with transparency, user control, and data privacy at its core.",          icon: ShieldCheck,
        },
      ]}
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BRQDoIB9NyK61wKPrMx774LuGA/an-abstract-high-end-visual-representing-1774469591098-59167e7b.png?_wi=1"
      imageAlt="Abstract visual representing partnership and sustainable growth"
      mediaAnimation="blur-reveal"
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricSplitMediaAbout
      useInvertedBackground={false}
      title="Impactful Growth, Quantified"
      description="Our commitment to excellence and innovation translates into tangible results for our partners. Discover the measurable success achieved through our intelligent software solutions."
      metrics={[
        {
          value: "98%",          title: "Client Retention Rate"},
        {
          value: "+300%",          title: "Average ROI for Clients"},
        {
          value: "50+",          title: "Successful Platform Deployments"},
      ]}
      tag="Our Achievements"
      tagIcon={Medal}
      tagAnimation="slide-up"
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BRQDoIB9NyK61wKPrMx774LuGA/a-minimalist-abstract-software-dashboard-1774469590789-37351c22.png?_wi=1"
      imageAlt="A clean, high-end UI mockup for a SaaS platform"
      mediaAnimation="blur-reveal"
      metricsAnimation="slide-up"
    />
  </div>

  <div id="team" data-section="team">
      <TeamCardFive
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      title="Meet Our Visionary Team"
      description="Our diverse team of experts is dedicated to pushing the boundaries of technology, delivering intelligent solutions with an unwavering commitment to quality and client success. Each member brings unique skills and a shared passion for innovation."
      team={[
        {
          id: "1",          name: "Alice Smith",          role: "Chief Executive Officer",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BRQDoIB9NyK61wKPrMx774LuGA/professional-headshot-of-a-smiling-femal-1774469590711-21dcb0bd.png?_wi=1",          imageAlt: "Alice Smith"
        },
        {
          id: "2",          name: "Bob Johnson",          role: "Chief Technology Officer",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BRQDoIB9NyK61wKPrMx774LuGA/professional-headshot-of-a-smiling-male--1774469591086-83cddd50.png?_wi=1",          imageAlt: "Bob Johnson"
        },
        {
          id: "3",          name: "Carol White",          role: "Head of Product",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BRQDoIB9NyK61wKPrMx774LuGA/professional-headshot-of-a-smiling-femal-1774469590887-ed9e97c0.png?_wi=1",          imageAlt: "Carol White"
        }
      ]}
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwo
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      carouselMode="auto"
      testimonials={[
        {
          id: "1",          name: "Sophia Rodriguez",          role: "CEO, InnovateX Solutions",          testimonial: "AERRATRIC TECHNOLOGY INC revolutionized our workflow automation. Their platform is intuitive, powerful, and truly delivered on its promise of sustainable growth.",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BRQDoIB9NyK61wKPrMx774LuGA/professional-headshot-of-a-smiling-femal-1774469590711-21dcb0bd.png?_wi=2",          imageAlt: "Sophia Rodriguez, CEO"},
        {
          id: "2",          name: "David Chen",          role: "CTO, Global Dynamics",          testimonial: "The AI integration provided by AERRATRIC TECHNOLOGY INC is unparalleled. It's not just technology; it's a strategic partnership that drives real business value.",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BRQDoIB9NyK61wKPrMx774LuGA/professional-headshot-of-a-smiling-male--1774469591086-83cddd50.png?_wi=2",          imageAlt: "David Chen, CTO"},
        {
          id: "3",          name: "Emily White",          role: "Marketing Director, Horizon Brands",          testimonial: "Our data analytics capabilities have soared since implementing their solution. The insights are actionable, leading to smarter campaigns and significant ROI.",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BRQDoIB9NyK61wKPrMx774LuGA/professional-headshot-of-a-smiling-femal-1774469590887-ed9e97c0.png?_wi=2",          imageAlt: "Emily White, Marketing Director"},
        {
          id: "4",          name: "Michael Lee",          role: "Product Manager, Apex Innovations",          testimonial: "The team at AERRATRIC TECHNOLOGY INC understood our complex needs perfectly. Their product design and engineering expertise are truly top-tier.",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BRQDoIB9NyK61wKPrMx774LuGA/professional-headshot-of-a-smiling-male--1774469591183-492a2c26.png?_wi=1",          imageAlt: "Michael Lee, Product Manager"},
      ]}
      title="What Our Partners Say"
      description="Hear directly from the leaders who have transformed their operations and achieved new levels of growth with AERRATRIC TECHNOLOGY INC's intelligent software."
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBase
      columns={[
        {
          title: "Solutions",          items: [
            {
              label: "AI Platforms",              href: "/platforms#ai"},
            {
              label: "Workflow Automation",              href: "/platforms#automation"},
            {
              label: "Data Systems",              href: "/platforms#data"},
            {
              label: "Cloud & DevOps",              href: "/services#cloud-devops"},
          ],
        },
        {
          title: "Company",          items: [
            {
              label: "About Us",              href: "/about"},
            {
              label: "Careers",              href: "/careers"},
            {
              label: "Case Studies",              href: "/case-studies"},
            {
              label: "Contact",              href: "/contact"},
          ],
        },
        {
          title: "Resources",          items: [
            {
              label: "Blog",              href: "/blog"},
            {
              label: "Support",              href: "/support"},
            {
              label: "Privacy Policy",              href: "/privacy"},
            {
              label: "Terms of Service",              href: "/terms"},
          ],
        },
      ]}
      logoText="AERRATRIC TECHNOLOGY INC"
      copyrightText="© 2024 AERRATRIC TECHNOLOGY INC. All rights reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
