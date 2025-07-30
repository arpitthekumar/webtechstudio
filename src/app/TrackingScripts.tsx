"use client";

import Script from "next/script";

export default function TrackingScripts() {
  return (
    <>
      {/* Microsoft Clarity */}
      <Script id="clarity-init" strategy="afterInteractive">
        {`
          (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "sdlqym662t");
        `}
      </Script>

      {/* Google Ads */}
      {/* <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-16974052698"
        strategy="lazyOnload"
      />
      <Script id="gtag-init" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-16974052698');
        `}
      </Script> */}

      {/* Google Analytics (if needed) */}
      {/* <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-C075N9LL5R"
        strategy="lazyOnload"
      />
      <Script id="ga-init" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-C075N9LL5R');
        `}
      </Script> */}
    </>
  );
}
