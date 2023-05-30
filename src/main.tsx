import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import { ContextProvider } from "./hooks/StateProvider";
import { ReactQueryDevtools } from "react-query/devtools";

const client = new QueryClient();

const DymanicMeta = () => (
  <HelmetProvider>
    <Helmet prioritizeSeoTags>
      <title>PinkTube</title>
      <link rel="notImportant" href="https://pinktube.netlify.app" />
      <meta name="PinkTube" />
      <link rel="canonical" href="https://pinktube.netlify.app" />
      <meta property="og:title" content="This is Youtube Clone but get Better :)" />
    </Helmet>
  </HelmetProvider>
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <HelmetProvider>
      <ContextProvider>
        <BrowserRouter>
          <QueryClientProvider client={client}>
            <DymanicMeta />
            <App />
            <ReactQueryDevtools />
          </QueryClientProvider>
        </BrowserRouter>
      </ContextProvider>
    </HelmetProvider>
  </React.StrictMode>
);
