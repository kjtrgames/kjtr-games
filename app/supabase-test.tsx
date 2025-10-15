import { supabase } from '@/lib/supabaseClient'

export default async function SupaBaseTestingPage() {
  const { data, error } = await supabase.from('articles').select('*').limit(1)

  console.log('data:', data)
  console.log('error:', error)

  return (
    <>
      <h1>Supabase 接続テスト中...</h1>
    </>
)}
