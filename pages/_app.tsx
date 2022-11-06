import { FC } from "react";
import { EmotionCache } from "@emotion/react";
import { AppProps } from "next/app";
import '../styles/globals.scss'
import PageProvider from "../src/components/helpers/PageProvider";

export interface MUIAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const App: FC<MUIAppProps> = ({ Component, pageProps, emotionCache }) => (
  <PageProvider emotionCache={emotionCache}>
    <Component {...pageProps} />
  </PageProvider>
);

export default App;
