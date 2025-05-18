// lib/gtag.ts
export const gtag_report_conversions = (conversionId: string, url?: string) => {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    const callback = () => {
      if (url) window.location.href = url;
    };
    window.gtag("event", "conversion", {
      send_to: conversionId,
      event_callback: callback,
    });
  }
};
