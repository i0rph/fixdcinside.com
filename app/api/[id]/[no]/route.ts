import { NextResponse } from "next/server";
import axios from "axios";
import * as cheerio from "cheerio";

export async function GET(
  request: Request,
  {
    params,
  }: {
    params: {
      id: string;
      no: string;
    };
  }
) {
  const response = await axios.get(
    `https://m.dcinside.com/board/${params.id}/${params.no}`
  );

  let title, description, image;

  if (response.status === 200) {
    const $ = cheerio.load(response.data);
    title = $("title").text();
    description = $("meta[name='description']").attr("content");
    image = $("meta[property='og:image']").attr("content");
  } else {
    title = "크롤링 중 오류가 발생했습니다.";
    description = "불편을 드려 죄송합니다.";
    image = "";
  }

  return NextResponse.json(
    { title, description, image },
    {
      status: 200,
    }
  );
}
