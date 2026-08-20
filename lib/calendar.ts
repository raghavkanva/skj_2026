import {
  GOOGLE_CALENDAR_EVENT_TITLE,
  GOOGLE_CALENDAR_DESCRIPTION,
  GCal_START_UTC,
  GCal_END_UTC,
} from "./constants";
import { eventData } from "@/data/eventData";

export function buildGoogleCalendarUrl(): string {
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: GOOGLE_CALENDAR_EVENT_TITLE,
    dates: `${GCal_START_UTC}/${GCal_END_UTC}`,
    details: GOOGLE_CALENDAR_DESCRIPTION,
    location: eventData.venue,
  });
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

export const ICS_CONTENT = [
  "BEGIN:VCALENDAR",
  "VERSION:2.0",
  "PRODID:-//ISKCON Salem//Janmashtami 2026//EN",
  "CALSCALE:GREGORIAN",
  "METHOD:PUBLISH",
  "BEGIN:VEVENT",
  "UID:janmashtami-2026-iskcon-salem@iskconsalem",
  "DTSTART;TZID=Asia/Kolkata:20260904T080000",
  "DTEND;TZID=Asia/Kolkata:20260904T235900",
  `SUMMARY:${GOOGLE_CALENDAR_EVENT_TITLE}`,
  `DESCRIPTION:${GOOGLE_CALENDAR_DESCRIPTION.replace(/,/g, "\\,")}`,
  `LOCATION:Sona College Ground\\, Salem`,
  "URL:https://maps.app.goo.gl/h4jugsJbuYzx3Gzc9",
  "END:VEVENT",
  "END:VCALENDAR",
].join("\r\n");

export function buildIcsDataUri(): string {
  return `data:text/calendar;charset=utf-8,${encodeURIComponent(ICS_CONTENT)}`;
}
