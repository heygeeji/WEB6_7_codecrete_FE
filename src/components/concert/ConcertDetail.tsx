import { twMerge } from "tailwind-merge";
import ConcertDetailVenue from "./ConcertDetailVenue";
import ConcertDetailReview from "./ConcertDetailReview";
import ConcertDetailInfo from "./ConcertDetailInfo";
import ConcertDetailSideBar from "./ConcertDetailSideBar";

export default function ConcertDetail() {
  return (
    <section className={twMerge(`header bg-bg-main flex gap-8 px-40 py-20`)}>
      <div className={twMerge(`left flex w-full flex-col gap-12`)}>
        <ConcertDetailInfo />
        <ConcertDetailVenue />
        <ConcertDetailReview />
      </div>

      <div className="right">
        <ConcertDetailSideBar />
      </div>
    </section>
  );
}
