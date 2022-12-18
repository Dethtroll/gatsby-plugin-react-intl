declare module '@dethtroll/gatsby-plugin-react-intl' {
  import * as gatsby from 'gatsby';
  import React from 'react';

  export * from 'react-intl';

  export class Link<TState> extends React.Component<gatsby.GatsbyLinkProps<TState> & { language?: string, forceLang?: boolean }> {}
  export const navigate: typeof gatsby.navigate;
  export const changeLocale: (language: string, to?: string) => void;

  interface GatsbyPluginIntlShape extends IntlShape {
    language: string;
    languages: string[];
    routed: boolean;
    originalPath: string;
    redirect: boolean;
  }
  export const IntlContextProvider: React.Provider<GatsbyPluginIntlShape>;
  export const IntlContextConsumer: React.Consumer<GatsbyPluginIntlShape>;
}
