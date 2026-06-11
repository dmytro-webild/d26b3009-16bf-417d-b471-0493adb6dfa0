"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import AboutMetric from '@/components/sections/about/AboutMetric';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import HeroBillboardGallery from '@/components/sections/hero/HeroBillboardGallery';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import PricingCardEight from '@/components/sections/pricing/PricingCardEight';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import { Lightbulb, ShoppingCart, Sparkles, TrendingUp, Users, Zap } from "lucide-react";

export default function LandingPage() {
  const handleEmailSubmit = (email: string) => {
    console.log(`Sending email from ${email} to casreid15@gmail.com`);
    alert(`Thank you for your submission! We'll reach out to you at ${email}.`);
    // In a real application, you would send this email to a backend API
    // or use a third-party service like Formspree, EmailJS, etc.
  };

  return (
    <ThemeProvider
        defaultButtonVariant="shift-hover"
        defaultTextAnimation="reveal-blur"
        borderRadius="pill"
        contentWidth="mediumLarge"
        sizing="mediumSizeLargeTitles"
        background="noiseDiagonalGradient"
        cardStyle="gradient-radial"
        primaryButtonStyle="double-inset"
        secondaryButtonStyle="glass"
        headingFontWeight="light"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        {
          name: "Home",          id: "#home"},
        {
          name: "Services",          id: "#services"},
        {
          name: "Pricing",          id: "#pricing"},
        {
          name: "FAQ",          id: "#faq"},
      ]}
      button={{
        text: "Get a Quote",        href: "#contact"}}
      logoSrc="http://img.b2bpic.net/free-vector/environmental-logo-vector-with-ecology-text_53876-112041.jpg"
      logoAlt="Digital Spark Logo"
      brandName="Digital Spark"
    />
  </div>

  <div id="home" data-section="home">
      <HeroBillboardGallery
      background={{
        variant: "downward-rays-animated"}}
      title="Digital Spark: Igniting Your Online Presence"
      description="We craft stunning, highly interactive websites that captivate your audience and drive business growth for small businesses in Bowie, Maryland and beyond."
      buttons={[
        {
          text: "Get a Free Quote",          href: "#contact"},
      ]}
      mediaItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/representation-user-experience-interface-design_23-2150169849.jpg",          imageAlt: "Digital Spark Web Analytics Dashboard"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-female-hand-using-digital-tablet-tablet_1262-16042.jpg",          imageAlt: "Responsive Website Design on Tablet"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/working-table-with-computer_93675-133811.jpg",          imageAlt: "Developer Workstation with Code and Live Preview"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-beautiful-optical-fiber-details_23-2149212554.jpg",          imageAlt: "Abstract Digital Spark Illustration"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/green-screen-mockup-laptop-accountant-working-office_482257-126537.jpg",          imageAlt: "Digital Spark Web Analytics Dashboard"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/closeup-african-american-entrepreneur-analyzing-company-profit_482257-20207.jpg",          imageAlt: "Responsive Website Design on Tablet"},
      ]}
      mediaAnimation="opacity"
    />
  </div>

  <div id="about" data-section="about">
      <AboutMetric
      useInvertedBackground={true}
      title="Fueling Small Business Success with Digital Expertise"
      metrics={[
        {
          icon: Sparkles,
          label: "Years of Sparking Growth",          value: "8+"},
        {
          icon: Users,
          label: "Satisfied Clients",          value: "150+"},
        {
          icon: Zap,
          label: "Projects Completed",          value: "200+"},
      ]}
      metricsAnimation="slide-up"
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="two-columns-alternating-heights"
      useInvertedBackground={false}
      features={[
        {
          title: "Custom Web Design",          description: "Unique, branded designs that stand out and perfectly represent your business.",          imageSrc: "http://img.b2bpic.net/free-photo/blooming-floral-arts-crafts-nature_53876-124885.jpg",          imageAlt: "Custom Web Design Illustration"},
        {
          title: "SEO Optimization",          description: "Boost your visibility and rank higher on search engines to reach more customers.",          imageSrc: "http://img.b2bpic.net/free-photo/vision-goals-inspiration-mission-motivation-ideas-concept_53876-15851.jpg",          imageAlt: "SEO Optimization Illustration"},
        {
          title: "Mobile Responsiveness",          description: "Flawless performance and aesthetics on any device, from desktops to smartphones.",          imageSrc: "http://img.b2bpic.net/free-vector/abstract-background-design_361591-1809.jpg",          imageAlt: "Mobile Responsiveness Illustration"},
        {
          title: "E-commerce Integration",          description: "Secure, user-friendly online stores to sell your products and grow your revenue.",          imageSrc: "http://img.b2bpic.net/free-photo/online-shopping-concept_23-2151896838.jpg",          imageAlt: "E-commerce Integration Illustration"},
        {
          title: "Content Management (CMS)",          description: "Easy-to-use systems that empower you to manage your website content effortlessly.",          imageSrc: "http://img.b2bpic.net/free-photo/blank-laptop-with-box-twitter-icon-work-desk_23-2147841358.jpg",          imageAlt: "Content Management System Illustration"},
        {
          title: "Ongoing Support & Maintenance",          description: "Reliable support to keep your website secure, updated, and performing optimally.",          imageSrc: "http://img.b2bpic.net/free-photo/older-woman-college-student-interacting-with-professor-webinar-laptop-studying-library_482257-136324.jpg",          imageAlt: "Ongoing Support Illustration"},
      ]}
      title="Tailored Web Solutions, Tangible Results"
      description="From custom designs to robust e-commerce platforms, we build websites that perform."
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardEight
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      plans={[
        {
          id: "starter",          badge: "Perfect Start",          badgeIcon: Lightbulb,
          price: "$1,500",          subtitle: "Basic Website Package",          buttons: [
            {
              text: "Get Started",              href: "#contact"},
          ],
          features: [
            "5-Page Custom Website",            "Mobile Responsive Design",            "Basic SEO Setup",            "1 Month Free Support",            "Contact Form Integration"],
        },
        {
          id: "growth",          badge: "Most Popular",          badgeIcon: TrendingUp,
          price: "$3,500",          subtitle: "Growth-Focused Website",          buttons: [
            {
              text: "Choose Plan",              href: "#contact"},
          ],
          features: [
            "10-Page Custom Website",            "Advanced SEO Optimization",            "Blog/News Section",            "3 Months Free Support",            "Social Media Integration",            "Google Analytics Setup"],
        },
        {
          id: "ecommerce",          badge: "Business Boost",          badgeIcon: ShoppingCart,
          price: "$6,000",          subtitle: "E-commerce Powerhouse",          buttons: [
            {
              text: "Request Demo",              href: "#contact"},
          ],
          features: [
            "Unlimited Product Pages",            "Full E-commerce Functionality",            "Secure Payment Gateway",            "6 Months Free Support",            "Inventory Management",            "CRM Integration"],
        },
      ]}
      title="Transparent Pricing, Powerful Websites"
      description="Choose a plan that fits your business needs and budget. All plans are designed to help you succeed online."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardTwo
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      animationType="slide-up"
      metrics={[
        {
          id: "client-growth",          value: "30%+",          description: "Average Client Growth Achieved"},
        {
          id: "conversion",          value: "15%+",          description: "Increase in Website Conversion Rates"},
        {
          id: "engagement",          value: "90%",          description: "Client Satisfaction Score"},
        {
          id: "roi",          value: "2X+",          description: "Average Client ROI on Investment"},
      ]}
      title="Numbers That Speak Volumes"
      description="Our dedication translates into measurable success for your business."
    />
  </div>

  <div id="social-proof" data-section="social-proof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      names={[
        "Local Bake Shop",        "Bowie Law Group",        "Paws & Claws Grooming",        "Petal Pushers Florist",        "Elite Fitness Studio",        "Bowie Realty Pros",        "The Daily Grind Coffee"]}
      title="Trusted by Local Businesses"
      description="We partner with diverse businesses to help them thrive in the digital landscape."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitText
      useInvertedBackground={true}
      faqs={[
        {
          id: "q1",          title: "How long does it take to build a website?",          content: "The timeline varies based on complexity and features. A basic website can take 3-4 weeks, while a more complex e-commerce site might take 8-12 weeks."},
        {
          id: "q2",          title: "What's involved in the website development process?",          content: "Our process includes discovery, design, development, testing, launch, and ongoing support. We ensure you're involved every step of the way."},
        {
          id: "q3",          title: "Do you offer website maintenance after launch?",          content: "Yes, we offer various maintenance packages to keep your website secure, updated, and performing optimally, ensuring peace of mind."},
        {
          id: "q4",          title: "Can you help with updating my old website?",          content: "Absolutely! We specialize in revamping outdated websites, improving their design, functionality, and SEO to bring them up to modern standards."},
      ]}
      sideTitle="Frequently Asked Questions"
      sideDescription="Find answers to common questions about our web development services and process."
      faqsAnimation="slide-up"
      textPosition="left"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplit
      useInvertedBackground={false}
      background={{
        variant: "downward-rays-static"}}
      tag="Let's Connect"
      title="Ignite Your Online Presence Today"
      description="Ready to spark higher interest and interaction for your business? Contact us for a free consultation and quote!"
      imageSrc="http://img.b2bpic.net/free-photo/multiethnic-tech-venture-company-securing-funding-pioneering-software_482257-125200.jpg"
      imageAlt="Digital Spark team collaborating"
      mediaAnimation="opacity"
      inputPlaceholder="Enter your email"
      buttonText="Send Message"
      termsText="Owner: Cassius Reid | Email: casreid15@gmail.com | Phone: 301-404-2665"
      onSubmit={handleEmailSubmit}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseReveal
      logoSrc="http://img.b2bpic.net/free-vector/environmental-logo-vector-with-ecology-text_53876-112041.jpg"
      logoAlt="Digital Spark Logo"
      logoText="Digital Spark"
      columns={[
        {
          title: "Services",          items: [
            {
              label: "Custom Design",              href: "#services"},
            {
              label: "SEO Optimization",              href: "#services"},
            {
            "label": "E-commerce",            "href": "#services"},
            {
              label: "Maintenance",              href: "#services"},
          ],
        },
        {
          title: "Company",          items: [
            {
              label: "About Us",              href: "#about"},
            {
              label: "Pricing",              href: "#pricing"},
            {
              label: "FAQ",              href: "#faq"},
          ],
        },
        {
          title: "Contact",          items: [
            {
              label: "Get a Quote",              href: "#contact"},
            {
              label: "casreid15@gmail.com",              href: "mailto:casreid15@gmail.com"},
            {
              label: "301-404-2665",              href: "tel:+13014042665"},
            {
              label: "Bowie, Maryland",              href: "#"},
          ],
        },
      ]}
      copyrightText="© 2024 Digital Spark. All rights reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}