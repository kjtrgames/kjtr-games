export const metadata = {
  title: {
    absolute: "ホーム | キジトラゲームズ",
  },
  description: 'KIJITORAGAMESは、IT愛好会みたいな何かです。うん。とりまアクセスしよう!',
}

export default function Home() {
    return (
      <>
        <div id="^main-title">
          <h1>猫のように、自由気ままに。</h1>
        </div>
        <article>
        <p>
          どうも皆さんこんにちは、KIJITORA GAMESのキジトラニャンです。<br />
          KIJITORAGAMESでは主に、マイクラや作曲、ドット絵制作をしています。(現在会員1人w)
        </p>
      
        <h2>KIJITORAGAMESとは?</h2>
        <p>
          KIJITORAGAMESとは、私キジトラニャンが個人で開発・運営をしている作品投稿サイトです。<br />
          マイクラの追加パックや、オリジナルのゲームを制作・公開できます！<br />
          まだまだ発展途上のサイトですが、これからもよろしくお願いします！！！！！！！！！！！？！？！？？
        </p>
    
        <h2>キジトラニャンの概要</h2>
        <p>
          一人称は「猫」。<br />
          はてなブログの「<a href="https://kjtrgames.hatenablog.jp/">キジトラニャン</a>」、scratchの<a
            href="https://scratch.mit.edu/users/ryoichiro/">@ryoichiro</a>と同一人物です。一応会長…だよ？
        </p>
        <h2>KIJITORAGAMESのアイコン</h2>
        <div className="center"><img src="home.svg" alt="くそッ！画像を見せられてないじゃないか！" title="icon" /></div>
        <p>
          わ　た　し　が　つ　く　り　ま　し　た<br /><br />
          すごいじゃろすごいじゃろ？<br />
          いちにちでパパッとつくったのだ★☆彡
        </p>
        <p className="sover">自慢じゃないっすよ</p>    
      </article>
    </>
  )
}
