import BreadcrumbNav from "@/components/common/BreadcrumbNav";
import ConcertHeader from "@/components/concert/ConcertHeader";

export default function Page() {
  return (
    <>
      <BreadcrumbNav itemType="공연" itemDetail="2025 Christmas Concert" />
      <ConcertHeader />
      <section className="content bg-bg-main"></section>
      <section className="similar bg-bg-sub"></section>
    </>
  );
}
