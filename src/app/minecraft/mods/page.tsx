import WorkArticles from '@/lib/workArticles';

export default function MinecraftModsPage() {

  return (
    <>
      <div id="^main-title">
        <h1>作品一覧 | Minecraft Mods</h1>
      </div>
      <WorkArticles work_type="minecraft:mods" />
    </>
  );
}