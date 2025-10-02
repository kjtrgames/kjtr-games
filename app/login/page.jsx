'use client'
import { supabase } from '../../lib/supabaseClient'

export default function LoginPage() {
  const handleLogin = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'github',
      options: { redirectTo: 'http://kjtrgames.vercel.app/login' },
    })
  }

  return <button onClick={handleLogin}>GitHubでログイン</button>
}
