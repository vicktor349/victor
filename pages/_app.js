import { FileProvider } from "@/components/FileContext";
import Layout from "@/components/Layout";
import "@/styles/globals.css";
import { MantineProvider } from "@mantine/core";
import { Notifications } from '@mantine/notifications';

export default function App({ Component, pageProps })
{
  return (
    <MantineProvider>
      <Notifications />
      <FileProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </FileProvider>
    </MantineProvider>
  )
}
