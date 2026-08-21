import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import StickyFooter from "@/components/layout/StickyFooter";
import WhatsAppFloat from "@/components/layout/WhatsAppFloat";
import Hero from "@/components/hero/Hero";
import PersonalInvitation from "@/components/invitation/PersonalInvitation";
import EventEssentials from "@/components/event/EventEssentials";
import CelebrationIntro from "@/components/event/CelebrationIntro";
import JanmashtamiHighlights from "@/components/media/JanmashtamiHighlights";
import ProgrammeSection from "@/components/event/ProgrammeSection";
import VenueSection from "@/components/event/VenueSection";
import DressContest from "@/components/event/DressContest";
import FeastPrasadam from "@/components/prasadam/FeastPrasadam";
import SevaSection from "@/components/prasadam/SevaSection";
import OfficialInvitationGallery from "@/components/invitation/OfficialInvitationGallery";
import ShareInvitation from "@/components/share/ShareInvitation";
import StayConnected from "@/components/community/StayConnected";
import FinalInvitation from "@/components/community/FinalInvitation";

export default function HomePage() {
  return (
    <>
      <a href="#home" className="sr-only">
        Skip to main content
      </a>
      <Header />
      <main id="home">
        {/* 01 Hero */}
        <Hero />
        {/* 02 Personal Invitation */}
        <PersonalInvitation />
        {/* 03 Event Essentials */}
        <EventEssentials />
        {/* 04 Celebration Intro */}
        <CelebrationIntro />
        {/* 05 2025 Highlights Video */}
        <JanmashtamiHighlights />
        {/* 06 Programme */}
        <ProgrammeSection />
        {/* 07 Venue */}
        <VenueSection />
        {/* 08 Dress Contest */}
        <DressContest />
        {/* 09 Feast Prasadam */}
        <FeastPrasadam />
        {/* 10 Prasadam Seva + 11 Donation (rendered inside SevaSection) */}
        <SevaSection />
        {/* 12 Official Invitation Gallery */}
        <OfficialInvitationGallery />
        {/* 13 Share Invitation */}
        <ShareInvitation />
        {/* 14 Stay Connected */}
        <StayConnected />
        {/* 15 Final Invitation */}
        <FinalInvitation />
      </main>
      <Footer />
      <div className="mobile-footer-spacer" />
      <StickyFooter />
      <WhatsAppFloat />
    </>
  );
}
