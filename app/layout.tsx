import './global.css';
import { RootProvider } from 'fumadocs-ui/provider';
import { I18nProvider } from "fumadocs-ui/i18n";
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';

const inter = Inter({
  subsets: ['latin'],
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <I18nProvider locale="fr" translations={{
            toc: "Sur cette page",
            search: "Rechercher",
            lastUpdate: "Mis à jour le",
            searchNoResult: "Aucun résultat trouvé",
            previousPage: "Précédent",
            nextPage: "Suivant",
            chooseTheme: "Thème de l'interface",
            tocNoHeadings: "Aucun titre sur la page",
            editOnGithub: "Éditer sur GitHub",
          }}>
          <RootProvider>{children}</RootProvider>
        </I18nProvider>
      </body>
    </html>
  );
}
