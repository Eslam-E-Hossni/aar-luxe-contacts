/*
      MEWO! >(.)__
             (___/
*/

import type { Metadata } from "next";
import { IBM_Plex_Sans_Arabic, Chakra_Petch } from "next/font/google";
import "@/styles/globals.css";
import Footer from "@/components/layout/footer";

const ibmPlexSansArabic = IBM_Plex_Sans_Arabic({
  variable: "--font-plex-arabic",
  subsets: ["arabic"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

const chakraPetch = Chakra_Petch({
  variable: "--font-chakra-patch",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "احمي سيارتك بأعلى معايير الجودة",
  description:
    "aar-aarluxe احمي سيارتك بأعلى معايير الجودة مع خدماتنا الفاخرة. نقدم تلميع وتغطية سيارات بضمان حتى 7 سنوات. اكتشف أفضل خدمات العناية بالسيارات في.",
};

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <meta
        name="keywords"
        content="عناية بالسيارات, حماية السيارات, خدمات سيارات, تلميع سيارات, تغطية السيارات, ضمان حماية السيارات, أفضل خدمات السيارات, عناية فاخرة بالسيارات, حماية سيارات فاخرة, خدمات سيارات عالية الجودة, تلميع سيارات محترف, تغطية سيارات بضمان, عناية سيارات بأعلى معايير, حماية سيارات لمدة 7 سنوات"
      />
      <meta property="og:title" content="احمي سيارتك بأعلى معايير الجودة" />
      <meta
        property="og:description"
        content="احمي سيارتك بأعلى معايير الجودة مع خدماتنا الفاخرة. نقدم تلميع وتغطية سيارات بضمان حتى 7 سنوات."
      />
      <meta
        property="og:image"
        content="https://aarluxe.online/assets/images/logo.svg"
      />
      <meta property="og:url" content="https://aarluxe.online" />
      <meta
        name="twitter:card"
        content="https://aarluxe.online/assets/images/landing-bg-02.jpg"
      />
      <meta name="twitter:title" content="احمي سيارتك بأعلى معايير الجودة" />
      <meta
        property="og:site_name"
        content="احمي سيارتك بأعلى معايير الجودة - aarluxe car care"
      ></meta>
      <meta
        name="twitter:description"
        content="احمي سيارتك بأعلى معايير الجودة مع خدماتنا الفاخرة. نقدم تلميع وتغطية سيارات بضمان حتى 7 سنوات."
      />
      <meta
        name="twitter:image"
        content="https://aarluxe.online/assets/images/landing-bg-02.jpg"
      />
      <meta
        name="google-site-verification"
        content="rZplCzD4MObzqAdvNbc1T1wm6QeQ7lLkVkYE403Amhc"
      />
      <link rel="canonical" href="https://aarluxe.online" />
      <body
        className={`${ibmPlexSansArabic.variable} ${chakraPetch.variable} antialiased overflow-x-hidden`}
        cz-shortcut-listen="true"
      >
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
