import React from "react";
import "../styles/globals.css";
import PageLayout from "@/components/PageLayout";
import { AuthProvider } from "../context/AuthContext";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <PageLayout>
        <Component {...pageProps} />
      </PageLayout>
    </AuthProvider>
  );
}

export default MyApp;
