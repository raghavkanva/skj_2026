export type Locale = "en" | "ta" | "hi";

export interface ProgrammeItemLocale {
  time: string;
  title: string;
  period: "morning" | "evening";
}

export interface LocaleContent {
  locale: Locale;

  hero: {
    heading: string;
    year: string;
    date: string;
    venue: string;
    mainInvitation: string;
    supportingCopy: string;
    ctaProgramme: string;
    ctaSeva: string;
  };

  personalInvitation: {
    heading: string;
    openingGreeting: string;
    paragraphs: string[];
    closingGreeting: string;
  };

  eventEssentials: {
    tagline: string;
    cards: {
      date: { kicker: string; value: string; label: string };
      timing: { kicker: string; value: string; label: string };
      venue: { kicker: string; value: string; label: string };
      prasadam: { kicker: string; value: string; label: string };
    };
  };

  celebrationIntro: {
    heading: string;
    body: string;
  };

  highlights: {
    kicker: string;
    heading: string;
    subheading: string;
    body: string;
    joinLine: string;
  };

  programme: {
    heading: string;
    morningLabel: string;
    eveningLabel: string;
    items: ProgrammeItemLocale[];
  };

  venue: {
    heading: string;
    name: string;
    city: string;
    mapsLabel: string;
    note: string;
  };

  dressContest: {
    heading: string;
    age: string;
    badge: string;
    body: string;
  };

  feastPrasadam: {
    heading: string;
    paragraphs: string[];
  };

  prasadamSeva: {
    heading: string;
    desc: string;
    costHighlight: string;
    customHeading: string;
    customInputLabel: string;
    customHelper: string;
    customValidation: string;
    summaryLabel: string;
    donateNow: string;
  };

  donationSection: {
    heading: string;
    accountDetailsHeading: string;
    selectedSevaLabel: string;
    netBankingTitle: string;
    netBankingBody: string;
    noteLines: string[];
    whatsappBtn: string;
  };

  officialInvitation: {
    heading: string;
    viewFullLabel: string;
    downloadLabel: string;
    items: { caption: string; alt: string }[];
    founderName: string;
    founderRole: string;
  };

  shareInvitation: {
    heading: string;
    desc: string;
    viewFullLabel: string;
    downloadLabel: string;
    shareWithImagesBtn: string;
    shareWhatsAppBtn: string;
    copyMessageBtn: string;
    downloadAllBtn: string;
    sharingLabel: string;
    copiedLabel: string;
    sharedLabel: string;
    fallbackNote: string;
    items: { caption: string }[];
    eventUrl: string;
  };

  stayConnected: {
    heading: string;
    desc: string;
    eventSiteLabel: string;
    websiteLabel: string;
    linksLabel: string;
    contactLabel: string;
    chatLabel: string;
  };

  finalInvitation: {
    heading: string;
    body: string;
    closing: string;
  };
}
