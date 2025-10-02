'use client'

import { useState, useEffect } from 'react'
import { supabase } from '../../lib/supabaseClient'
import { useRouter } from 'next/navigation'  // App Router用

export default function LoginPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [user, setUser] = useState(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) setUser(session.user)
    })
  }, [])

  const handleLogin = async (provider) => {
    setLoading(true)
    const { error } = await supabase.auth.signInWithOAuth({
      provider,
      options: { redirectTo: `https://kjtrgames.vercel.app` },
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
