import './globals.css'

export const metadata = {
  title: 'KJTR Games',
  description: '作品投稿サイト',
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
            <li><a href="/programming">&emsp;プログラミング&emsp;</a>
              <ul>
                <li><a href="/programming/js">Java Script</a></li>
                <li><a href="/programming/scratch">Scratch</a></li>
              </ul>
            </li>
            <li><a href="/minecraft">マイクラ</a>
              <ul>
                <li><a href="/minecraft/building">建築</a></li>
                <li><a href="/minecraft/redstone">赤石</a></li>
                <li><a href="/minecraft/rtm">RealTrainMod</a></li>
                <li><a href="/minecraft/others">その他のMOD</a></li>
              </ul>
            </li>
            <li><a href="/music">作曲</a>
              <ul>
                <li><a href="/music/original">オリジナル</a></li>
                <li><a href="/music/second">二次創作</a></li>
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