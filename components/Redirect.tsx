"use client";
import { useEffect } from "react";

type Props = {
  params: { id: string; no: string };
};

export default function Redirect({ params }: Props) {
  useEffect(() => {
    window.location.replace(
      `https://m.dcinside.com/board/${params.id}/${params.no}`
    );
  }, [params.id, params.no]);

  return <div></div>;
}
