import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Item, ItemContent } from "@/components/ui/item";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Heart, MoreHorizontalIcon } from "lucide-react";
import { mockComments } from "@/components/review/post/comments/comments.mock";

export default function CommentItem() {
  return (
    <>
      {mockComments.map((comment, index) => {
        const isLast = index === mockComments.length - 1;

        return (
          <Item key={comment.id} className="p-0">
            <ItemContent className={cn(!isLast && "border-border border-b pb-6")}>
              <div className="flex gap-4">
                <Avatar className="h-10 w-10">
                  <AvatarImage src={comment.avatar} alt={comment.author} />
                  <AvatarFallback>{comment.author[0]}</AvatarFallback>
                </Avatar>

                <div className="flex flex-1 flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <div className={"flex items-center gap-4"}>
                      <span>{comment.author}</span>
                      <span className={"text-text-sub text-xs"}>{comment.createdAt}</span>
                    </div>

                    <DropdownMenu modal={false}>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="ghost"
                          size="icon-sm"
                          className="text-text-sub hover:bg-transparent"
                          aria-label="More options"
                        >
                          <MoreHorizontalIcon />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="w-40" align="end">
                        <DropdownMenuItem>Report</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>

                  <p>{comment.content}</p>

                  <div className="text-text-sub flex items-center gap-1 text-xs">
                    <Heart size={12} />
                    {comment.likes}
                  </div>
                </div>
              </div>
            </ItemContent>
          </Item>
        );
      })}

      <div className={"flex justify-center"}>
        <Button variant={"outline"} size={"lg"}>
          Load More Comments
        </Button>
      </div>
    </>
  );
}
