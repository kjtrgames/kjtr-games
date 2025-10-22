import { supabase } from '@/lib/supabaseClient';

export default async function WorksPage({ work_type }: { work_type: String }) {
  const { data, error } = await supabase
    .from('articles')
    .select('id, title, content, author')
    .eq('work_type', work_type);

  if (error) return <div>ｴﾗｰ⤴︎: {error.message}</div>;
  if (!data?.length) return <div>何も投稿されていません。<br />…は？何も投稿されてない訳ないだろムッコロスぞテメー</div>;

  return data.map(article => (
    <article key={article.id}>
      <h2>{article.title}</h2>
      <div dangerouslySetInnerHTML={{ __html: article.content }} />
    </article>
  ));
}
