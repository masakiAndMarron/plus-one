import Image from "next/image";
import worksTopImg from "../../../public/img/works-top.jpg";
import WorkCard from "@/components/WorkCard";
import { WORKS_LIST } from "@/common/CommonConsts";

const Works = () => {
  return (
    <div className="pt-16 font-japanese-basic">
      <div className="relative h-60 bg-site-sub-color">
        <h1
          className="content-title absolute top-0 font-semibold"
          data-en="Works"
        >
          施工事例
        </h1>
      </div>
      <div className="p-8 mb-12">
        {WORKS_LIST.map((data, index) => (
          <WorkCard
            buildingName={data.buildingName}
            content={data.content}
            cost={data.cost}
            img={data.img}
            type={data.type}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Works;
