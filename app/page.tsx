import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import StickyFooter from "@/components/layout/StickyFooter";
import WhatsAppFloat from "@/components/layout/WhatsAppFloat";
import Hero from "@/components/hero/Hero";
import PersonalInvitation from "@/components/invitation/PersonalInvitation";
import EventEssentials from "@/components/event/EventEssentials";
import CelebrationIntro from "@/components/event/CelebrationIntro";
import ProgrammeSection from "@/components/event/ProgrammeSection";
import DressContest from "@/components/event/DressContest";
import FeastPrasadam from "@/components/prasadam/FeastPrasadam";
import SevaSection from "@/components/prasadam/SevaSection";
import OfficialInvitationGallery from "@/components/invitation/OfficialInvitationGallery";
import VideoInvitation from "@/components/media/VideoInvitation";
import StayConnected from "@/components/community/StayConnected";
import FinalInvitation from "@/components/community/FinalInvitation";

export default function HomePage() {
  return (
    <>
      <a href="#main-content" className="sr-only">
        Skip to main content
      </a>
      <Header />
      <main id="home">
        <Hero />
        <PersonalInvitation />
        <EventEssentials />
        <CelebrationIntro />
        <ProgrammeSection />
        <DressContest />
        <FeastPrasadam />
        <SevaSection />
        <OfficialInvitationGallery />
        <VideoInvitation />
        <StayConnected />
        <FinalInvitation />
      </main>
      <Footer />
      <div className="mobile-footer-spacer" />
      <StickyFooter />
      <WhatsAppFloat />
    </>
  );
}
