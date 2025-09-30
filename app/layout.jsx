import "./globals.css";

export const metadata = {
  title: {
    template: '%s | KJGAMES',
    default: '作品一覧'
  },
  description: '作品投稿サイト',
  openGraph: {
    title: 'KIJITORAGAMES',
    description: 'KIJITORAGAMESは、あなたの作品を自由に発信できる場所です。とりあえず見ろ',
    url: 'https://kjtrgames.vercel.app',
    siteName: 'KIJITORA Games',
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KIJITORA Games',
    description: '――― ここは、数多の有志によってゲームが集う場所。―――',
    images: ['https://kjtrgames.github.io/resources/icon.svg'],
  }, 
}

export default function RootLayout({ children }) {
  return (
    <body>
      <noscript>
        <h1>お詫び</h1>
        <p>このサイトは、JavaScriptが必須となっております。ご迷惑をおかけします。</p>
      </noscript>  
      <header>
        <nav>
          <input type="checkbox" id="^hamburger-io" />
          <label for="^hamburger-io" id="^hamburger"><span></span></label>
          <ul>
            <li><a href="index.html" home>HOME</a></li>
            <li><a href="/minecraft">マイクラ</a>
              <ul>
                <li><a href="/minecraft/mods">MOD</a></li>
                <li><a href="/minecraft/maps">配布マップ</a></li>
                <li><a href="/minecraft/texturepacks">テクスチャ</a></li>
                <li><a href="/minecraft/addons">MOD追加パック</a></li>
                <li><a href="/minecraft/others">その他</a></li>
              </ul>
            </li>
            <li><a href="/games">他のゲーム</a>
              <ul>
                <li><a href="/games/js">JSゲーム</a></li>
                <li><a href="/games/kgscript">\(準備中\)</a></li>
              </ul>
            </li>
            <li><a href="/music">作曲</a>
              <ul>
                <li><a href="/music/original">オリジナル</a></li>
                <li><a href="/music/second">二次創作･RM</a></li>
                <li><a href="/music/others">その他</a></li>
              </ul>
            </li>
            <li><a href="/pictures">絵</a>
              <ul>
                <li><a href="/pictures/dots">ドット絵</a></li>
                <li><a href="/pictures/others">その他の絵</a></li>
              </ul>
            </li>
            <li><a href="https://forms.gle/VAdJjueZNdRPJi9aA">制作依頼</a></li>
          </ul>
        </nav>
      </header>
      <main>
        {children}
      </main>
    </body>
  )
}
