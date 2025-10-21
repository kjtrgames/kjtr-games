import { supabase } from "@/lib/supabaseClient";

export default async function TestPage() {
  const { data, error } = await supabase.from('articles').select('*').limit(1)

  console.log('data:', data)
  console.log('error:', error)

  return (
    <>
      <h1>色々テストするためのページ</h1>
      <main>
        <article>
          <label>
            <input type="radio" name="menu" />
            メニュー1
          </label>
          <label>
            <input type="radio" name="menu" />
            メニュー2
          </label>
          <label>
            <input type="radio" name="menu" />
            メニュー3
          </label>
        </article>
      </main>
    </>
)}
