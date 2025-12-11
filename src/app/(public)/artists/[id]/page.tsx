import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { DiscAlbum, Heart, Instagram, Twitter, Youtube } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { DiscographyItems } from "@/components/artist/DiscographyItems";

export default function page() {
  return (
    <>
      <nav className={"px-13 py-4"}>
        <Breadcrumb className={"mx-auto max-w-400"}>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href={"/home"}>홈</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href={"/artists"}>아티스트 목록</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>아티스트</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </nav>
      {/*프로필 파트*/}
      <section className={"bg-bg-sub flex h-100 items-center gap-12 border-y px-13 py-16"}>
        <div className={"mx-auto flex w-full max-w-400 gap-12"}>
          {/*프로필 이미지 파트*/}
          <div
            className={"bg-text-sub flex h-64 w-64 items-center justify-center rounded-full"}
          ></div>
          {/*이름, 태그, 팔로우 부분*/}
          <div className={"flex flex-1 flex-col gap-6"}>
            <div className={"flex justify-between gap-4"}>
              <div className={"flex flex-col gap-4"}>
                <h2 className={"text-5xl"}>Kim Min-ji</h2>
                <div className={"flex gap-3"}>
                  <Badge className={"bg-text-point-sub text-text-main text-sm"}>Solo Artist</Badge>
                  <Badge className={"bg-text-point-sub text-text-main text-sm"}>Pop</Badge>
                  <Badge className={"bg-text-point-sub text-text-main text-sm"}>R&B</Badge>
                </div>
              </div>
              <Button className={"cursor-pointer text-base"} size={"lg"}>
                <Heart /> <span>Follow</span>
              </Button>
            </div>
            {/*팔로워 수, 다가올 콘서트 부분*/}
            <div className={"flex gap-8"}>
              <div className={"flex flex-col gap-1"}>
                <span className={"text-text-main text-3xl"}>12.4K</span>
                <span className={"text-text-sub"}>Followers</span>
              </div>
              <Separator orientation={"vertical"} />
              <div className={"flex flex-col gap-1"}>
                <span className={"text-text-main text-3xl"}>24</span>
                <span className={"text-text-sub"}>Upcoming Concerts</span>
              </div>
            </div>
            {/*소셜 버튼 모음 부분*/}
            <div className={"flex gap-2"}>
              <Button
                className={"bg-bg-sub hover:bg-text-point-sub cursor-pointer border"}
                size={"icon"}
              >
                {<Instagram className={"text-text-main"} />}
              </Button>
              <Button
                className={"bg-bg-sub hover:bg-text-point-sub cursor-pointer border"}
                size={"icon"}
              >
                {<Twitter className={"text-text-main"} />}
              </Button>
              <Button
                className={"bg-bg-sub hover:bg-text-point-sub cursor-pointer border"}
                size={"icon"}
              >
                {<Youtube className={"text-text-main"} />}
              </Button>
              <Button
                className={"bg-bg-sub hover:bg-text-point-sub cursor-pointer border"}
                size={"icon"}
              >
                {<DiscAlbum className={"text-text-main"} />}
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/*Overview 파트*/}
      <section className={"mx-auto flex w-full max-w-400 gap-12 py-16"}>
        {/*왼쪽 파트*/}
        <div className={"flex flex-col gap-12"}>
          {/*아티스트 설명 파트*/}
          <div className={"flex flex-col gap-6"}>
            <h3 className={"text-2xl font-bold"}>About the Artist</h3>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. A alias culpa, debitis ipsa
              iste nobis veniam! Culpa, dolorem eius enim hic id illum nam obcaecati praesentium
              quos recusandae sint vitae.Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
              alias culpa, debitis ipsa iste nobis veniam! Culpa, dolorem eius enim hic id illum nam
              obcaecati praesentium quos recusandae sint vitae.Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. A alias culpa, debitis ipsa iste nobis veniam! Culpa,
              dolorem eius enim hic id illum nam obcaecati praesentium quos recusandae sint
              vitae.Lorem ipsum dolor sit amet, consectetur adipisicing elit. A alias culpa, debitis
              ipsa iste nobis veniam! Culpa, dolorem eius enim hic id illum nam obcaecati
              praesentium quos recusandae sint vitae.
            </span>
          </div>
          {/*디스코그라피 파트*/}
          <div className={"flex flex-col gap-6"}>
            <h3 className={"text-2xl font-bold"}>Discography</h3>
            <DiscographyItems />
          </div>
        </div>
        {/*오른쪽 파트*/}
        <div className={"flex w-125 shrink-0 flex-col gap-12"}>
          <div>
            <h3 className={"text-xl font-bold"}>Quick Stats</h3>
          </div>
          <div>
            <h3 className={"text-xl font-bold"}>Hot Track</h3>
          </div>
          <h3 className={"text-xl font-bold"}>Similar Artists</h3>
        </div>
      </section>
    </>
  );
}
