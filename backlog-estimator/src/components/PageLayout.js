import { useRouter } from "next/router";
import Navbar from "./Navbar/Navbar";

export default function PageLayout({ children }) {
  const router = useRouter();

  return (
    <>
      <Navbar currentPage={router.pathname} />
      <main>{children}</main>
    </>
  );
}
