
// pages/login.jsx
import { supabase } from '../lib/supabaseClient'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

export const metadata = {
  title: "Login",
  description: 'ログインページ',
}

export default function Login() {
  const [loading, setLoading] = useState(false)
  const [user, setUser] = useState(null)
  const router = useRouter()

  // 初回ロード時にログイン済みなら取得
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        setUser(session.user)
      }
    })
  }, [])

  const handleLogin = async (provider) => {
    setLoading(true)
    const { error } = await supabase.auth.signInWithOAuth({
      provider: provider,
      options: {
        redirectTo: `${window.location.origin}/login`, // ログイン後戻るURL
      },
    })
    if (error) alert(error.message)
    setLoading(false)
  }

  const handleLogout = async () => {
    await supabase.auth.signOut()
    setUser(null)
  }

  if (user) {
    return (
      <div style={styles.container}>
        <h1>ようこそ {user.email || user.user_metadata.name} さん</h1>
        <button onClick={handleLogout} style={styles.logout}>
          ログアウト
        </button>
      </div>
    )
  }

  return (
    <div style={styles.container}>
      <h1>ログイン</h1>
      <button onClick={() => handleLogin('google')} style={styles.button} disabled={loading}>
        Googleでログイン
      </button>
      <button onClick={() => handleLogin('github')} style={styles.button} disabled={loading}>
        GitHubでログイン
      </button>
      <button onClick={() => handleLogin('twitter')} style={styles.button} disabled={loading}>
        Twitterでログイン
      </button>
      <button onClick={() => handleLogin('apple')} style={styles.button} disabled={loading}>
        Appleでログイン
      </button>
    </div>
  )
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '1rem',
    marginTop: '5rem',
  },
  button: {
    padding: '0.5rem 1rem',
    fontSize: '1rem',
    cursor: 'pointer',
  },
  logout: {
    marginTop: '2rem',
    padding: '0.5rem 1rem',
    fontSize: '1rem',
    backgroundColor: '#f55',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
  },
}
