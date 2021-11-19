import { AppProps } from "next/app";
import { ThemeProvider } from "../components/theme/themeContext";
import "../styles/global.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
