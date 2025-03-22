import { Metadata } from "next";
import Header from "@/components/layout/header";
import SocialMedia from "@/components/social-media";
import CardList, { CardProps } from "@/components/global/card/card-list";
import Image from "next/image";

export const metadata: Metadata = {
  title: "احمي سيارتك بأعلى معايير الجودة | AAR LUXE CAR CARE",
  description:
    "نقدم لك تجربة فريدة في عالم العناية بالسيارات حيث الجودة والاحترافية تلتقيان لتوفير أفضل الخدمات لسيارتك بأفضل الخامات وبضمان حتى 7 سنوات",
};

// Define the supported locales
const locales = ["en", "ar"];

// Generate static params for supported locales
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

type BranchesData = {
  [key: string]: CardProps[];
};

const BRANCHES_DATA: BranchesData = {
  branch1: [
    {
      arText: "الحصول على الموقع",
      enText: "Get Location Directions",
      href: "https://g.co/kgs/A6izZGV",
      image: {
        alt: "location icon from https://aarluxe.online/",
        src: "/assets/images/location.svg",
      },
    },
    {
      arText: "التواصل من خلال الواتساب",
      enText: "Contact Via WhatsApp",
      href: "https://wa.me/+971544591090",
      image: {
        alt: "WhatsApp icon from https://aarluxe.online/",
        src: "/assets/images/whatsapp.svg",
        increaseWhatsapp: true,
      },
    },
  ],
  branch2: [
    {
      arText: "الحصول على الموقع",
      enText: "Get Location Directions",
      href: "https://g.co/kgs/7AFxF1a",
      image: {
        alt: "location icon from https://aarluxe.online/",
        src: "/assets/images/location.svg",
      },
    },
    {
      arText: "التواصل من خلال الواتساب",
      enText: "Contact Via WhatsApp",
      href: "https://wa.me/+971509536959",
      image: {
        alt: "WhatsApp icon from https://aarluxe.online/",
        src: "/assets/images/whatsapp.svg",
        increaseWhatsapp: true,
      },
    },
  ],
  branch3: [
    {
      arText: "الحصول على الموقع",
      enText: "Get Location Directions",
      href: "https://maps.app.goo.gl/w3V1ttWqqNqf5LdW9",
      image: {
        alt: "location icon from https://aarluxe.online/",
        src: "/assets/images/location.svg",
      },
    },
    {
      arText: "التواصل من خلال الواتساب",
      enText: "Contact Via WhatsApp",
      href: "https://wa.me/+971542111070",
      image: {
        alt: "WhatsApp icon from https://aarluxe.online/",
        src: "/assets/images/whatsapp.svg",
        increaseWhatsapp: true,
      },
    },
  ],
};

export default async function Home() {
  return (
    <div className="bg-background flex flex-col items-center pb-15">
      <Header />
      <SocialMedia />
      <div className="flex justify-center mb-10" dir="rtl">
        <CardList
          branchText={{
            arText: "فرع دبي",
            enText: "Dubai Branch",
          }}
          cards={BRANCHES_DATA.branch1}
        />
      </div>
      <div className="flex justify-center mb-10" dir="rtl">
        <CardList
          branchText={{
            arText: "فرع ابو ظبي",
            enText: "Abu Dhabi Branch",
          }}
          cards={BRANCHES_DATA.branch2}
        />
      </div>
      <div className="flex justify-center mb-10" dir="rtl">
        <CardList
          branchText={{
            arText: "فرع عجمان",
            enText: "Ajman Branch",
          }}
          cards={BRANCHES_DATA.branch3}
        />
      </div>
      <div className="bg-white text-primary py-2 px-5 text-center rounded-xl mb-5">
        <p className="font-heading-arabic text-xl font-semibold">
          حمل تطبيقنا الآن .. واستفد من جميع الخدمات
        </p>
        <p className="font-heading-en text-lg font-semibold">
          Download our app now... & Get all Our services
        </p>
      </div>
      <div className="flex items-center justify-between gap-x-4">
        <a href="#" target="_blank">
          <Image
            src="/assets/images/app-gellery.svg"
            width={130}
            height={130}
            alt="app-gellery from https://aarluxe.online/"
          />
        </a>
        <a
          href="https://play.google.com/store/apps/details?id=ae.aarluxe.app&pli=1"
          target="_blank"
        >
          <Image
            src="/assets/images/play-store.svg"
            width={130}
            height={130}
            alt="play-store from https://aarluxe.online/"
          />
        </a>
        <a
          href="https://apps.apple.com/ae/app/aarluxe-car-care/id6741390193"
          target="_blank"
        >
          <Image
            src="/assets/images/app-store.svg"
            width={140}
            height={140}
            alt="app-store from https://aarluxe.online/"
          />
        </a>
      </div>
    </div>
  );
}
