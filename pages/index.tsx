import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Steps from '@/components/Steps';
import Introduction from '@/components/Introduction';
import Contact from '@/components/Contact';
import { Slogan } from '@/components/slogan';
import Demo from '@/components/Demo';
import Features from '@/components/Features';


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Introduction />
      <Steps />
      <Slogan/>
      <Demo/>
      <Features/>
      <Contact />
    </>
  );
}

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'common',
      ])),
    },
  }
}
