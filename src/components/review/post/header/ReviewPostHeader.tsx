import { Clock4, Eye, MoreHorizontalIcon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

export default function ReviewPostHeader() {
  return (
    <header className={"flex flex-col gap-4"}>
      <h1 className={"text-4xl"}>Essential Tips for First-Time Concert Goers at Olympic Park</h1>
      <div className={"flex justify-between"}>
        <div className={"flex gap-6"}>
          <div className={"text-text-sub flex gap-6"}>
            <div className={"flex items-center gap-2"}>
              <Clock4 size={14} />
              <p>March 15, 2025</p>
            </div>
            <div className={"flex items-center gap-2"}>
              <Eye size={14} />
              <p>1,247</p>
            </div>
          </div>
        </div>
        <DropdownMenu modal={false}>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="icon-sm"
              className="text-text-sub cursor-pointer hover:bg-transparent"
              aria-label="More options"
            >
              <MoreHorizontalIcon />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-40" align="end">
            <DropdownMenuLabel>File Actions</DropdownMenuLabel>
            <DropdownMenuGroup>
              <DropdownMenuItem>New File...</DropdownMenuItem>
              <DropdownMenuItem>Share...</DropdownMenuItem>
              <DropdownMenuItem disabled>Download</DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
