import { supabase } from '@/lib/supabaseClient';

export default async function MinecraftModsPage() {
  const { data, error } = await supabase
    .from('articles')
    .select('id, title, content, author')
    .eq('work_type', 'minecraft:mods');

  if (error) return <div>Error: {error.message}</div>;
  if (!data?.length) return <div>No articles found</div>;

  return (
    <>
      <div id="^main-title">
        <h1>作品一覧 | Minecraft Mods</h1>
      </div>
      {data.map(article => (
        <article key={article.id}>
          <h2>{article.title}</h2>
          <div dangerouslySetInnerHTML={{ __html: article.content }} />
        </article>
      ))}
    </>
  );
}