export interface EventData {
  name: string;
  organiser: string;
  date: string;
  displayDate: string;
  startTime: string;
  endTime: string;
  timezone: string;
  venue: string;
  mapUrl: string;
  officialWebsite: string;
  officialLinks: string;
  contact: {
    name: string;
    phone: string;
    displayPhone: string;
  };
  upiId: string;
  whatsapp: string;
  videoUrl: string;
  videoEmbedId: string;
}
