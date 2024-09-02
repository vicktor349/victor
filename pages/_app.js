import { FileProvider } from "@/components/FileContext";
import Layout from "@/components/Layout";
import "@/styles/globals.css";

export default function App({ Component, pageProps })
{
  return (
    <FileProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </FileProvider>
  )
}
