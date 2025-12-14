import { Card, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Link2, Twitter } from "lucide-react";
import AuthorCard from "@/components/review/post/sidebar/AuthorCard";
import RelatedPosts from "@/components/review/post/sidebar/RelatedPosts";

export default function ReviewPostSidebar() {
  return (
    <aside className={"sticky top-34 flex w-125 shrink-0 flex-col gap-12 self-start"}>
      <AuthorCard />

      <RelatedPosts />
      <Card className={"flex flex-col gap-4 p-6"}>
        <CardTitle>Share This Post</CardTitle>
        <div className={"flex flex-col gap-1.5"}>
          <div className={"flex gap-1.5"}>
            <Button variant={"outline"} size={"lg"} className={"flex-1"}>
              <Twitter /> Twitter
            </Button>
            <Button variant={"outline"} size={"lg"} className={"flex-1"}>
              <Facebook /> Facebook
            </Button>
          </div>
          <div className={"flex gap-1.5"}>
            <Button variant={"outline"} size={"lg"} className={"flex-1"}>
              <Instagram /> Instagram
            </Button>
            <Button variant={"outline"} size={"lg"} className={"flex-1"}>
              <Link2 /> Copy Link
            </Button>
          </div>
        </div>
      </Card>
    </aside>
  );
}
