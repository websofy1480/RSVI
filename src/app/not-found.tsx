import { Metadata } from "next";
import NotFound from "./(ui)/components/NotFound";

export const metadata: Metadata = {
  title: "404 Page | RSVI ",
};

const ErrorPage = () => {
  return <NotFound />
};

export default ErrorPage;
