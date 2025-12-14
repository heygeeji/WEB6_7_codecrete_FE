import { Card, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Link2, Twitter } from "lucide-react";

export default function SharePosts() {
  return (
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
  );
}
