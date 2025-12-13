import { CalendarPlus2, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ConcertHeaderBtn() {
  return (
    <div className="button flex w-full gap-4">
      <Button
        className="bg-point-main flex-1 cursor-pointer"
        variant="default"
        size="lg"
        asChild={false}
      >
        <ExternalLink />
        티켓 예매하기
      </Button>
      <Button
        className="bg-point-sub border-border-point flex-1 cursor-pointer"
        variant="outline"
        size="lg"
        asChild={false}
      >
        <CalendarPlus2 />
        플래너 만들기
      </Button>
    </div>
  );
}
