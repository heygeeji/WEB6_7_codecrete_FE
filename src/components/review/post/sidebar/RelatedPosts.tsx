import { Card, CardTitle } from "@/components/ui/card";
import { mockRelatedPosts } from "@/components/review/post/sidebar/relatedPosts.mock";
import { Item, ItemContent, ItemTitle } from "@/components/ui/item";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function RelatedPosts() {
  return (
    <Card className={"flex flex-col gap-4 p-6"}>
      <CardTitle className={"text-lg"}>Related Posts</CardTitle>
      {mockRelatedPosts.map((post, index) => {
        const isLast = index === mockRelatedPosts.length - 1;

        return (
          // TODO: 호버 시 패딩까지 호버가 적용되는거 수정하기
          <Item key={post.id} className="p-0 hover:bg-transparent focus:bg-transparent" asChild>
            <Link href={`/review/${post.id}`} className="block">
              <ItemContent className={cn(!isLast && "border-border border-b pb-4")}>
                <ItemTitle className="font-normal">{post.title}</ItemTitle>

                <div className="text-text-sub flex gap-3 text-sm">
                  <span>{post.author}</span>
                  <span>•</span>
                  <span>{post.date}</span>
                </div>
              </ItemContent>
            </Link>
          </Item>
        );
      })}
    </Card>
  );
}
