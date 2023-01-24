import PageLayout from "@/components/PageLayout/PageLayout";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <PageLayout>
      <Component {...pageProps} />
    </PageLayout>
  );
}
