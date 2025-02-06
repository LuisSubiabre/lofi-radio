import Background from "@/components/background";
import MusicPlayer from "@/components/musicplayer";
import DefaultLayout from "@/layouts/default";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <Background />
        <MusicPlayer />
      </section>
    </DefaultLayout>
  );
}
