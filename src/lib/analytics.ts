declare function gtag(...args: unknown[]): void;

export function trackEvent(eventName: string, params?: Record<string, string>) {
  if (typeof gtag !== "undefined") {
    gtag("event", eventName, params);
  }
}
