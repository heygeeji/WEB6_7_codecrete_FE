import PosterBox from "@/components/review/post/info/PosterBox";
import { Card, CardContent, CardTitle } from "@/components/ui/card";

export default function ReviewConcertCard() {
  return (
    <Card className={"p-6"}>
      <div className={"flex gap-6"}>
        <PosterBox />
        <CardContent className={"flex flex-1 flex-col gap-2"}>
          <p className={"text-text-sub"}>Concert Review</p>
          <CardTitle className={"text-xl"}>IU 2025 World Tour: The Golden Hour in Seoul</CardTitle>
          <div className={"flex flex-col gap-4"}>
            <div className={"flex justify-between gap-4"}>
              <div className={"flex flex-1 flex-col gap-1"}>
                <span className={"text-text-sub"}>Date</span>
                <p>March 15, 2025</p>
              </div>
              <div className={"flex flex-1 flex-col gap-1"}>
                <span className={"text-text-sub"}>Venue</span>
                <p>Olympic Gymnastics Arena</p>
              </div>
            </div>
            <div className={"flex justify-between gap-4"}>
              <div className={"flex flex-1 flex-col gap-1"}>
                <span className={"text-text-sub"}>Time</span>
                <p>7:00 PM</p>
              </div>
              <div className={"flex flex-1 flex-col gap-1"}>
                <span className={"text-text-sub"}>Section</span>
                <p>Standing A</p>
              </div>
            </div>
          </div>
        </CardContent>
      </div>
    </Card>
  );
}
