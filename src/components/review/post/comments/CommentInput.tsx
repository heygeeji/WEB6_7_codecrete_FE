import { SortSelect } from "@/components/common/SortSelect";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function CommentInput() {
  return (
    <>
      <div className={"flex justify-between"}>
        <h3 className={"text-xl font-bold"}>Comments (38)</h3>
        <SortSelect />
      </div>
      <div className={"flex gap-4"}>
        <Avatar className={"h-10 w-10"}>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className={"flex flex-1 flex-col gap-3"}>
          <Textarea
            placeholder={"Share your thoughts or ask a question..."}
            className={"h-24 resize-none"}
          />
          <div className={"flex justify-between"}>
            <span className={"text-text-sub text-sm"}>Be respectful and constructive</span>
            <Button size={"lg"}>Post Comment</Button>
          </div>
        </div>
      </div>

      <Separator />
    </>
  );
}
