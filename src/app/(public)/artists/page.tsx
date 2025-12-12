import BreadcrumbNav from "@/components/common/BreadcrumbNav";
import Link from "next/link";

export default function page() {
  return (
    <>
      <BreadcrumbNav itemType="아티스트" />
      <h1>page Component</h1>
      <Link href={"/home"}></Link>
    </>
  );
}
