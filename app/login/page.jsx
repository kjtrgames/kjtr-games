export const metadata = {
  title: "Home",
  description: 'KIJITORAGAMESは、IT愛好会みたいな何かです。うん。とりまアクセスしよう!',
}

export default function Home() {
    return (
      <>
        <div id="^main-title">
          <h1>ログイン</h1>
        </div>
        <article>
　　　　　　　<button id="login_github">GitHubでログイン</button>
           <button id="logout">ログアウト</button>
           <div id="user"></div>

           <script>
    // SupabaseプロジェクトのURLとanonキーをセット
    const SUPABASE_URL = 'https://azoprigwlixblpfxeqjs.supabase.co'; // あなたのSupabaseプロジェクトURL
    const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF6b3ByaWd3bGl4YmxwZnhlcWpzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTgxODQwMTMsImV4cCI6MjA3Mzc2MDAxM30.3gdN5k1j7p0Cc--20Fo7-Y_GJ3626Yl7qrl_BIB4S5E'; // anonキー
    const sb_client = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

    // ログイン
    document.getElementById('login_github').onclick = async () => {
      const { error } = await sb_client.auth.signInWithOAuth({
        provider: 'github',
        options: {
          redirectTo: 'https://kjtrgames.github.io/repo_login/login/callback.html' // 認証後にリダイレクトするURL
        }
      });
      if (error) alert(error.message);
    };

    // ログアウト
    document.getElementById('logout').onclick = async () => {
      await sb_client.auth.signOut();
      location.reload();
    };

    // セッション確認
    supabase.auth.onAuthStateChange((event, session) => {
      if (session) {
        document.getElementById('user').innerText = `こんにちは, ${session.user.email}`;
      } else {
        document.getElementById('user').innerText = '未ログイン';
      }
    });
        </script>
      </article>
    </>
  )
}
