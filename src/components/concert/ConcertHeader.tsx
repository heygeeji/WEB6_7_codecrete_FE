import Image from "next/image";
import { twMerge } from "tailwind-merge";
import ConcertHeaderTitle from "./ConcertHeaderTitle";
import ConcertHeaderInfo from "./ConcertHeaderInfo";
import ConcertHeaderArtist from "./ConcertHeaderArtist";
import ConcertHeaderBtn from "./ConcertHeaderBtn";

export default function ConcertHeader() {
  return (
    <section className="header bg-bg-sub flex gap-8 px-40 py-20">
      {/* className = "left" */}
      <Image
        src="/ConcertPoster.png"
        alt="Concert Poster"
        width={470}
        height={690}
        className="left min-h-[690px] rounded-2xl shadow-md"
      />

      <div
        className={twMerge(
          `right bg-bg-main flex flex-1 flex-col gap-8 rounded-2xl p-10 shadow-md`
        )}
      >
        <ConcertHeaderTitle />
        <ConcertHeaderInfo />
        <ConcertHeaderArtist />
        <ConcertHeaderBtn />
      </div>
    </section>
  );
}
