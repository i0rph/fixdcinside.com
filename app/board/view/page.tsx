// PC버전 메인 갤러리
import { Metadata } from "next";
import Redirect from "@/components/Redirect";

type Props = {
  searchParams: { id: string; no: string };
};

export async function generateMetadata({
  searchParams,
}: Props): Promise<Metadata> {
  const id = searchParams.id;
  const no = searchParams.no;

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

export default function Page({ searchParams }: Props) {
  return <Redirect params={searchParams} />;
}
