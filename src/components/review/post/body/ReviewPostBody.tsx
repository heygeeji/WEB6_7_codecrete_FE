import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

export default function ReviewPostBody() {
  return (
    <>
      <div>
        <p className={"mb-4"}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A architecto, autem consectetur
          consequatur culpa, debitis eius exercitationem fuga fugiat hic impedit incidunt, minus
          natus possimus provident quas sequi similique sint.
        </p>
        <span className={"text-base"}>Setlist Highlights</span>
        <br />
        <br />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus expedita, molestiae.
          Aut eaque et fugit incidunt necessitatibus obcaecati possimus quisquam, repellat veniam.
          Ad cumque iste itaque pariatur quidem sit vel. top.
        </p>
        <br />
        <div className={"flex h-100 items-center justify-center bg-gray-300"}>
          <span className={"text-text-sub"}>Concert Stage Photo</span>
        </div>
      </div>

      <Separator />

      <div>
        <Button variant={"outline"}>
          <Heart /> 124
        </Button>
      </div>

      <Separator />
    </>
  );
}
