import {
  ModalProvider,
} from "react-declarative";

import App from "./components/App";
import { CacheProvider } from "@emotion/react";
import THEME_DARK from "./config/theme";
import { ThemeProvider } from "@mui/material/styles";
import { TssCacheProvider } from "tss-react";
import { createRoot } from "react-dom/client";
import createCache from "@emotion/cache";

const container = document.getElementById("root")!;

const muiCache = createCache({
  key: "mui",
  prepend: true,
});

const tssCache = createCache({
  key: "tss",
});

const wrappedApp = (
  <CacheProvider value={muiCache}>
    <TssCacheProvider value={tssCache}>
      <ThemeProvider theme={THEME_DARK}>
        <App />
      </ThemeProvider>
    </TssCacheProvider>
  </CacheProvider>
);

const root = createRoot(container);

root.render(wrappedApp);