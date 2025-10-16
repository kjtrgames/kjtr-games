import { supabase } from '@/lib/supabaseClient';
import NotFound from "@/app/not-found.jsx";

interface Article {
  id: string;
  title: string;
  content: string;
  author: string;
}

export default async function MinecraftModWorkPage({ searchParams }: { searchParams?: { id?: string } }) {
  const articleId = searchParams?.id;

  let query = supabase
    .from('articles')
    .select('id, title, content, author')
    .eq('id', articleId)
    .maybeSingle();

  const { data, error } = await query;

  if (error) return <><article /><article>Error: {error.message}</article></>;
  if (!data || (Array.isArray(data) && data.length === 0)) return <NotFound />;

  return (
    <>
      <main>
        <div id="^main-title">
          <h1>{data.title}</h1>
          <p>{data.author}</p>
        </div>
        <article dangerouslySetInnerHTML={{ __html: data.content }}>
        </article>
      </main>
    </>
  );
}