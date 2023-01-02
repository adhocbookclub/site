import { CacheProvider, EmotionCache } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import type { AppProps } from "next/app";
import CustomThemeProvider from "../providers/CustomThemeProvider";
import createEmotionCache from "../utils/createEmotionCache";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const App = (props: MyAppProps) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <CustomThemeProvider>
        <CssBaseline />
        <Component {...pageProps} />
      </CustomThemeProvider>
    </CacheProvider>
  );
};

export default App;
