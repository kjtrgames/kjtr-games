export const metadata = {
  title: "マイクラ作品一覧",
  description: 'マイクラ関連の作品投稿サイト',
  openGraph: {
    title: 'マイクラ関連作品一覧',
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
    images: ['https://kjtrgames.vercel.app/resources/icon0.svg'],
  }, 
}

export default function PageMinecraft() {
  return (
    <article>
      <h1>MINECRAFT</h1>
      <p>
        マイクラは楽しいですよね、<br />
        楽しいですよね、<br />
        楽しいですよね！！！(急にどうした)<br />
        さて、KIJITORAGAMESでは、
        <ul>
          <li>MOD</li>
          <li>配布マップ</li>
          <li>テクスチャパック</li>
        </ul>
        や、
        <ul>
          <li>シェーダーパック</li>
          <li>RealTrainModの追加パック</li>
        </ul>
        なんかも投稿されます。(唐突な正気)
      </p>
      <p>
        そんなわけで、このページに一覧を紹介したら見づらいので、<br />
        人気の作品やオススメ作品のみ、ここに掲示します。<br />
        個々のカテゴリーで一覧が見たい方は、上に表示されているメニューから選んでください。<br />
        トラブルがあった時用リンク<br />
        <a href="./mods">MOD</a><br />
        <a href="./maps">配布マップ</a><br />
        <a href="./texturepacks">テクスチャパック</a><br />
        <a href="./others">他改造物</a><br />
      </p>
      <h2>作品紹介</h2>
      <div id="works">
      </div>
    </article>
  )
}