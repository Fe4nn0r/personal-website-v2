import '../styles/globals.css'
import { appWithTranslation } from 'next-i18next';
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="main">
      <Component {...pageProps} />
    </div>
  )
}

export default appWithTranslation(MyApp, {
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr']
  },
  react: {
    transSupportBasicHtmlNodes: true,
    transKeepBasicHtmlNodesFor: ['u', 'a', 'em']
  }
});