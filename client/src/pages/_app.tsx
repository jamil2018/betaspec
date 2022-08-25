import { CssBaseline, ThemeProvider } from "@mui/material";
import type { AppProps } from "next/app";
import { QueryClientWrapper, ReduxClientWrapper } from "../components/data";
import { theme } from "../theme/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ReduxClientWrapper>
        <QueryClientWrapper>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Component {...pageProps} />
          </ThemeProvider>
        </QueryClientWrapper>
      </ReduxClientWrapper>
    </>
  );
}

export default MyApp;
