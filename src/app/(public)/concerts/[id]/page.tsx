import BreadcrumbNav from "@/components/common/BreadcrumbNav";
import ConcertDetail from "@/components/concert/ConcertDetail";
import ConcertHeader from "@/components/concert/ConcertHeader";

export default function Page() {
  return (
    <>
      <BreadcrumbNav itemType="공연" itemDetail="2025 Christmas Concert" />
      <ConcertHeader />
      <ConcertDetail />
      <section className="similar bg-bg-sub"></section>
    </>
  );
}
