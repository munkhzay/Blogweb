import { Layout } from "@/components/Layout";
import { ThemeContextProvider } from "@/components/ThemeContext";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <ThemeContextProvider>
      {" "}
      <Layout>{<Component {...pageProps} />}</Layout>
    </ThemeContextProvider>
  );
}
