import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function AuthorCard() {
  return (
    <Card className={"flex flex-col gap-4 p-6"}>
      <CardTitle>About the Author</CardTitle>
      <div className={"flex gap-4"}>
        <Avatar className={"h-16 w-16"}>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className={"flex flex-col justify-center gap-2"}>
          <span>Kim Ji-soo</span>
          <div className={"text-text-sub flex gap-1 text-xs"}>
            <span>127 posts</span>
            <span>·</span>
            <span>2.4k followers</span>
          </div>
        </div>
      </div>
      <CardContent className="text-text-sub px-0">
        {
          "Music lover and concert regular. I've attended over 200 live shows across Korea and love sharing tips with fellow concert-goers."
        }
      </CardContent>
    </Card>
  );
}
