import ArtistDetailProfile from "@/components/artist/ArtistDetailProfile";
import ArtistDetailOverview from "@/components/artist/ArtistDetailOverview";
import ArtistDetailUpcoming from "@/components/artist/ArtistDetailUpcoming";
import ArtistDetailPast from "@/components/artist/ArtistDetailPast";
import BreadcrumbNav from "@/components/common/BreadcrumbNav";

{
  /*TODO: 하드코딩 한 부분 나중에 바꿔 끼우기*/
}

export default function page() {
  return (
    <>
      <BreadcrumbNav itemType="아티스트" itemDetail="김민지" />
      <ArtistDetailProfile />
      <ArtistDetailOverview />
      <ArtistDetailUpcoming />
      <ArtistDetailPast />
    </>
  );
}
