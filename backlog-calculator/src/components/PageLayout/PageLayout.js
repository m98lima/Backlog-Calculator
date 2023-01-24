import Head from "next/head";
import { useRouter } from "next/router";
import Navbar from "../Navbar/Navbar";
import { TitleContainer } from "./PageLayout.styles";

export default function PageLayout({ children }) {
  const router = useRouter();

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css?family=Hahmlet"
          rel="stylesheet"
        />
      </Head>
      <Navbar currentPage={router.pathname} />
      <TitleContainer currentPage={router.pathname}>
        Backlog estimator
      </TitleContainer>
      <main>{children}</main>
    </>
  );
}
