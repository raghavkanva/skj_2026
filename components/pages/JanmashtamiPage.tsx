import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import StickyFooter from "@/components/layout/StickyFooter";
import WhatsAppFloat from "@/components/layout/WhatsAppFloat";
import FloatingLanguageSwitcher from "@/components/layout/FloatingLanguageSwitcher";
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
import type { LocaleContent, Locale } from "@/content/types";
import { localizedImages } from "@/lib/localizedImages";
import { eventData } from "@/data/eventData";

interface Props {
  content: LocaleContent;
  locale: Locale;
}

export default function JanmashtamiPage({ content, locale }: Props) {
  const imgs = localizedImages[locale];

  const galleryImages = {
    front: imgs.invitationFront,
    programme: imgs.programme,
    seva: imgs.seva,
    prabhupadaPanel: imgs.prabhupadaPanel,
  };

  const shareImages = {
    front: imgs.invitationFront,
    programme: imgs.programme,
    seva: imgs.seva,
  };

  return (
    <>
      <a href="#home" className="sr-only">
        Skip to main content
      </a>
      <Header locale={locale} />
      <main id="home">
        <Hero content={content.hero} />
        <PersonalInvitation content={content.personalInvitation} />
        <EventEssentials content={content.eventEssentials} />
        <CelebrationIntro content={content.celebrationIntro} />
        <JanmashtamiHighlights content={content.highlights} />
        <ProgrammeSection
          content={content.programme}
          venue={content.venue.name + ", " + content.venue.city}
          date={content.hero.date}
        />
        <VenueSection content={content.venue} date={content.hero.date} />
        <DressContest content={content.dressContest} imageSrc={imgs.dressContest} />
        <FeastPrasadam content={content.feastPrasadam} />
        <SevaSection
          sevaContent={content.prasadamSeva}
          donationContent={content.donationSection}
        />
        <OfficialInvitationGallery
          content={content.officialInvitation}
          images={galleryImages}
        />
        <ShareInvitation
          content={content.shareInvitation}
          images={shareImages}
        />
        <StayConnected content={content.stayConnected} />
        <FinalInvitation
          content={content.finalInvitation}
          date={content.hero.date}
          venue={content.hero.venue}
        />
      </main>
      <Footer />
      <div className="mobile-footer-spacer" />
      <StickyFooter />
      <FloatingLanguageSwitcher currentLocale={locale} />
      <WhatsAppFloat />
    </>
  );
}
