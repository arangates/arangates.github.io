import 'styles/global.css';

import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import { SessionProvider } from 'next-auth/react';
import { useAnalytics } from 'lib/analytics';
import {
  KBarProvider,
  KBarPortal,
  KBarPositioner,
  KBarAnimator,
  KBarSearch,
  KBarResults
} from "kbar";
import PlausibleProvider from 'next-plausible'

export default function App({ Component, pageProps }: AppProps) {
  useAnalytics();
  const actions = [
    {
      id: "blog",
      name: "Blog",
      shortcut: ["b"],
      keywords: "writing words",
      perform: () => window.location.pathname = "blog"
    },
    {
      id: "contact",
      name: "Contact",
      shortcut: ["c"],
      keywords: "email",
      perform: () => window.location.pathname = "contact"
    }
  ];

  return (
    <PlausibleProvider domain="aranganathan.vercel.app">
    <KBarProvider actions={actions}>
      <KBarPortal>
        <KBarPositioner>
          <KBarAnimator>
            <KBarSearch />
            <KBarResults />
          </KBarAnimator>
        </KBarPositioner>
      </KBarPortal>
      <SessionProvider session={pageProps.session}>
        <ThemeProvider attribute="class">
          <Component {...pageProps} />
        </ThemeProvider>
      </SessionProvider>
    </KBarProvider>
    </PlausibleProvider>
  );
}
