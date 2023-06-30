// 모바일 메인, 마이너 갤러리
import { Metadata } from "next";
import Redirect from "@/components/Redirect";

type Props = {
  params: { id: string; no: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = params.id;
  const no = params.no;

  const meta = await fetch(`https://fixdcinside.com/api/${id}/${no}`, {
    cache: "no-store",
  }).then((res) => res.json());

  return {
    title: meta.title + "test",
    description: meta.description || "",
    openGraph: {
      title: meta.title,
      description: meta.description || "",
      images: meta.image || "",
      type: "website",
    },
    twitter: {
      title: meta.title,
      description: meta.description || "",
      images: meta.image || "",
      card: "summary",
    },
  };
}

export default function Page({ params }: Props) {
  return <Redirect params={params} />;
}
