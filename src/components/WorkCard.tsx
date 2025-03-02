import {
  faCircleCheck,
  faHouseChimney,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Klee_One } from "next/font/google";

const KLEE_ONE = Klee_One({
  subsets: ["latin"],
  weight: "400",
});

type WorkCardProps = {
  buildingName: string;
  cost: string;
  type: string;
  content: string;
  img: string;
};

const WorkCard = (props: WorkCardProps) => {
  return (
    <div className="w-full border rounded-md shadow-lg mt-7">
      <div dangerouslySetInnerHTML={{ __html: props.img }}></div>
      <div className={`${KLEE_ONE.className} p-3`}>
        <p className="text-center text-lg leading-8 tracking-widest border-b-2 pb-2">
          <FontAwesomeIcon
            className="mr-2 pb-[.5px] text-gray-400"
            icon={faHouseChimney}
          />
          {props.buildingName}
        </p>
        <div className="text-sm p-1 pt-4">
          <table className="company-works-table w-full tracking-[0.5px]">
            <tr>
              <th>
                <FontAwesomeIcon
                  className="translate-y-[1.5px] pr-3 text-green-600"
                  icon={faCircleCheck}
                />
                費用
              </th>
              <td>{props.cost}</td>
            </tr>
            <tr>
              <th>
                <FontAwesomeIcon
                  className="translate-y-[1.5px] pr-3 text-green-600"
                  icon={faCircleCheck}
                />
                概要
              </th>
              <td>{props.type}</td>
            </tr>
            <tr>
              <th>
                <FontAwesomeIcon
                  className="translate-y-[1.5px] pr-3 text-green-600"
                  icon={faCircleCheck}
                />
                内容
              </th>
              <td>{props.content}</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
