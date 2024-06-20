import Image from "next/image";
import Link from "next/link";

const ToolCard = () => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl glass">
      <figure className="px-10 pt-10">
        <Image
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          alt="Shoes"
          width={300}
          height={200}
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">
          UUID Generator <div className="badge badge-secondary">NEW</div>{" "}
        </h2>
        <p>Generate a random UUID for your use!</p>
        <div className="card-actions">
          <button className="btn btn-primary"><Link href={"/uuid-generator"}>Try It!</Link></button>
        </div>
      </div>
    </div>
  );
};
export default ToolCard;
