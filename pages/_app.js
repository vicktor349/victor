import { FileProvider } from "@/components/FileContext";
import Layout from "@/components/Layout";
import "@/styles/globals.css";
import { MantineProvider } from "@mantine/core";

export default function App({ Component, pageProps })
{
  return (
    <MantineProvider>
      <FileProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </FileProvider>
    </MantineProvider>
  )
}
