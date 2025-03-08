"use client";
import Image from "next/image";
import consultationSvg from "../../../public/img/consultation.svg";
import magnifyingGlassSvg from "../../../public/img/magnifyingGlass.svg";
import rdesignSvg from "../../../public/img/rdesign.svg";
import handshakeSvg from "../../../public/img/handshake.svg";
import startConstructionSvg from "../../../public/img/startConstruction.svg";
import readySvg from "../../../public/img/ready.svg";
import hooraySvg from "../../../public/img/hooray.svg";
import afterSupportSvg from "../../../public/img/afterSupport.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesDown, faBackward } from "@fortawesome/free-solid-svg-icons";
import { M_PLUS_1p, Playfair_Display } from "next/font/google";

const M_PLUS_1P = M_PLUS_1p({
  subsets: ["latin"],
  weight: "400",
});

const PLAYFAIR_DISPLAY = Playfair_Display({
  subsets: ["latin"],
  weight: "400",
});

const Services = () => {
  return (
    <div className="pt-16 font-japanese-basic">
      <div className="relative h-60 bg-site-sub-color">
        <h1
          className="content-title absolute top-0 font-semibold"
          data-en="Service"
        >
          サービス
        </h1>
      </div>
      <div className="p-8">
        <h2 className="text-xl border-b-[1px] inline-block pl-2 pr-2">
          サービス概要
        </h2>
        <div className={`mt-10 ${M_PLUS_1P.className}`}>
          <div className="mt-4">
            <div className="flex justify-center gap-6 text-sm relative h-20 bg-service-overview-color p-3">
              <Image
                width={100}
                className="transform scale-[.9]"
                src={consultationSvg}
                alt=""
              />
              <div className="flex items-center pr-3 w-32">
                相談・問い合わせ
              </div>
              <span className="absolute h-full w-full border -left-[8px] -top-2"></span>
              <span
                className={`${PLAYFAIR_DISPLAY.className} absolute -left-1 -top-5 bg-white font-bold tracking-widest text-service-overview-color-st`}
              >
                STEP.1
              </span>
            </div>
            <div className="opacity-30 text-center mt-2 transform scale-105">
              <FontAwesomeIcon icon={faAnglesDown} />
            </div>
          </div>
          <div className="mt-4">
            <div className="flex justify-center gap-6 text-sm relative h-20 bg-service-overview-color p-3">
              <Image width={100} src={magnifyingGlassSvg} alt="" />
              <div className="flex items-center pr-3 w-32">現地調査</div>
              <span className="absolute h-full w-full border -left-[8px] -top-2"></span>
              <span
                className={`${PLAYFAIR_DISPLAY.className} absolute -left-1 -top-5 bg-white font-bold tracking-widest text-service-overview-color-st`}
              >
                STEP.2
              </span>
            </div>
            <div className="opacity-30 text-center mt-2 transform scale-105">
              <FontAwesomeIcon icon={faAnglesDown} />
            </div>
          </div>
          <div className="mt-4">
            <div className="flex justify-center gap-6 text-sm relative h-20 bg-service-overview-color p-3">
              <Image
                width={100}
                className="transform scale-[.8]"
                src={rdesignSvg}
                alt=""
              />
              <div className="flex items-center pr-3 w-32">見積もり作成</div>
              <span className="absolute h-full w-full border -left-[8px] -top-2"></span>
              <span
                className={`${PLAYFAIR_DISPLAY.className} absolute -left-1 -top-5 bg-white font-bold tracking-widest text-service-overview-color-st`}
              >
                STEP.3
              </span>
            </div>
            <div className="opacity-30 text-center mt-2 transform scale-105">
              <FontAwesomeIcon icon={faAnglesDown} />
            </div>
          </div>
          <div className="mt-4">
            <div className="flex justify-center gap-6 text-sm relative h-20 bg-service-overview-color p-3">
              <Image
                width={100}
                className="transform scale-[.7]"
                src={handshakeSvg}
                alt=""
              />
              <div className="flex items-center pr-3 w-32">契約締結</div>
              <span className="absolute h-full w-full border -left-[8px] -top-2"></span>
              <span
                className={`${PLAYFAIR_DISPLAY.className} absolute -left-1 -top-5 bg-white font-bold tracking-widest text-service-overview-color-st`}
              >
                STEP.4
              </span>
            </div>
            <div className="opacity-30 text-center mt-2 transform scale-105">
              <FontAwesomeIcon icon={faAnglesDown} />
            </div>
          </div>
          <div className="mt-4">
            <div className="flex justify-center gap-6 text-sm relative h-20 bg-service-overview-color p-3">
              <Image width={100} src={readySvg} alt="" />
              <div className="flex items-center w-32">施工準備・近隣挨拶</div>
              <span className="absolute h-full w-full border -left-[8px] -top-2"></span>
              <span
                className={`${PLAYFAIR_DISPLAY.className} absolute -left-1 -top-5 bg-white font-bold tracking-widest text-service-overview-color-st`}
              >
                STEP.5
              </span>
            </div>
            <div className="opacity-30 text-center mt-2 transform scale-105">
              <FontAwesomeIcon icon={faAnglesDown} />
            </div>
          </div>
          <div className="mt-4">
            <div className="flex justify-center gap-6 text-sm relative h-20 bg-service-overview-color p-3">
              <Image width={100} src={startConstructionSvg} alt="" />
              <div className="flex items-center w-32">工事着工</div>
              <span className="absolute h-full w-full border -left-[8px] -top-2"></span>
              <span
                className={`${PLAYFAIR_DISPLAY.className} absolute -left-1 -top-5 bg-white font-bold tracking-widest text-service-overview-color-st`}
              >
                STEP.6
              </span>
            </div>
            <div className="opacity-30 text-center mt-2 transform scale-105">
              <FontAwesomeIcon icon={faAnglesDown} />
            </div>
          </div>
          <div className="mt-4">
            <div className="flex justify-center gap-6 text-sm relative h-20 bg-service-overview-color p-3">
              <Image width={100} src={hooraySvg} alt="" />
              <div className="flex items-center w-32">完成・引き渡し</div>
              <span className="absolute h-full w-full border -left-[8px] -top-2"></span>
              <span
                className={`${PLAYFAIR_DISPLAY.className} absolute -left-1 -top-5 bg-white font-bold tracking-widest text-service-overview-color-st`}
              >
                STEP.7
              </span>
            </div>
            <div className="opacity-30 text-center mt-2 transform scale-105">
              <FontAwesomeIcon icon={faAnglesDown} />
            </div>
          </div>
          <div className="mt-4">
            <div className="flex justify-center gap-6 text-sm relative h-20 bg-service-overview-color p-3">
              <Image width={100} src={afterSupportSvg} alt="" />
              <div className="flex items-center w-32">アフターサポート</div>
              <span className="absolute h-full w-full border -left-[8px] -top-2"></span>
              <span
                className={`${PLAYFAIR_DISPLAY.className} absolute -left-1 -top-5 bg-white font-bold tracking-widest text-service-overview-color-st`}
              >
                STEP.8
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="p-8">
        <h2 className="text-xl border-b-[1px] inline-block pl-2 pr-2">
          サービス内容
        </h2>
      </div>
      <div className="mb-4">
        <div className="p-4 mb-4">
          <div className="bg-site-sub-color rounded-md relative p-7">
            <span className="text-4xl absolute -top-5 left-2 text-text-main-color tracking-widest font-mono">
              01
            </span>
            <div className="flex justify-center">
              <div className="mt-4 h-32 w-32 flex justify-center items-center rounded-full bg-site-main-color">
                <Image
                  width={100}
                  height={100}
                  src={consultationSvg}
                  alt=""
                ></Image>
              </div>
            </div>
            <h3 className="mt-4 text-lg text-center text-text-main-color font-bold">
              相談・問い合わせ
            </h3>
            <div className="m-4 border-b-[2px] opacity-45 border-white"></div>
            <div className="text-sm pl-6 pr-6 tracking-widest leading-7">
              お客様からのご相談には、経験豊富な専門スタッフが対応。<br></br>
              <br></br>
              <span className="marker-orange">
                「どこに相談すればいいかわからない」
              </span>
              といったお悩みも、一つひとつ丁寧にヒアリングし、最適なご提案をいたします。
            </div>
          </div>
        </div>
        <div className="text-center mb-4">
          <FontAwesomeIcon
            className="text-text-main-color transform -rotate-90 scale-[3]"
            icon={faBackward}
          />
        </div>
      </div>
      <div className="mb-4">
        <div className="p-4 mb-4">
          <div className="bg-site-sub-color rounded-md relative p-7">
            <span className="text-4xl absolute -top-5 left-2 text-text-main-color tracking-widest font-mono">
              02
            </span>
            <div className="flex justify-center">
              <div className="mt-4 h-32 w-32 flex justify-center items-center rounded-full bg-site-main-color">
                <Image
                  width={50}
                  height={50}
                  className="ml-1"
                  src={magnifyingGlassSvg}
                  alt=""
                ></Image>
              </div>
            </div>
            <h3 className="mt-4 text-lg text-center text-text-main-color font-bold">
              現地調査
            </h3>
            <div className="m-4 border-b-[2px] opacity-45 border-white"></div>
            <div className="text-sm pl-6 pr-6 tracking-widest leading-7">
              実際に現場を訪問し、建物の構造・劣化状況を詳しく確認。<br></br>
              <br></br>
              お客様のご要望を叶えるために、プロの目線で
              <span className="marker-orange">「最適なリフォーム方法」</span>や
              <span className="marker-orange">
                「将来のメンテナンスを見据えた提案」
              </span>
              を行います。
            </div>
          </div>
        </div>
        <div className="text-center mb-4">
          <FontAwesomeIcon
            className="text-text-main-color transform -rotate-90 scale-[3]"
            icon={faBackward}
          />
        </div>
      </div>
      <div className="mb-4">
        <div className="p-4 mb-4">
          <div className="bg-site-sub-color rounded-md relative p-7">
            <span className="text-4xl absolute -top-5 left-2 text-text-main-color tracking-widest font-mono">
              03
            </span>
            <div className="flex justify-center">
              <div className="mt-4 h-32 w-32 flex justify-center items-center rounded-full bg-site-main-color">
                <Image
                  width={70}
                  height={70}
                  className="ml-4"
                  src={rdesignSvg}
                  alt=""
                ></Image>
              </div>
            </div>
            <h3 className="mt-4 text-lg text-center text-text-main-color font-bold">
              見積もり作成
            </h3>
            <div className="m-4 border-b-[2px] opacity-45 border-white"></div>
            <div className="text-sm pl-6 pr-6 tracking-widest leading-7">
              お客様のライフスタイルや予算に合わせたリフォームプランをご提案。
              <br></br>
              <br></br>
              見積書には、費用の内訳を明確に記載し、
              <span className="marker-orange">
                「どの工事にどのくらいの費用がかかるのか」
              </span>
              をしっかりご説明します。
            </div>
          </div>
        </div>
        <div className="text-center mb-4">
          <FontAwesomeIcon
            className="text-text-main-color transform -rotate-90 scale-[3]"
            icon={faBackward}
          />
        </div>
      </div>
      <div className="mb-4">
        <div className="p-4 mb-4">
          <div className="bg-site-sub-color rounded-md relative p-7">
            <span className="text-4xl absolute -top-5 left-2 text-text-main-color tracking-widest font-mono">
              04
            </span>
            <div className="flex justify-center">
              <div className="mt-4 h-32 w-32 flex justify-center items-center rounded-full bg-site-main-color">
                <Image
                  width={100}
                  height={100}
                  className="ml-1"
                  src={handshakeSvg}
                  alt=""
                ></Image>
              </div>
            </div>
            <h3 className="mt-4 text-lg text-center text-text-main-color font-bold">
              契約締結
            </h3>
            <div className="m-4 border-b-[2px] opacity-45 border-white"></div>
            <div className="text-sm pl-6 pr-6 tracking-widest leading-7">
              工事内容やスケジュール、アフターサービスについてしっかりご説明し、ご納得いただいた上で契約を締結します。
            </div>
          </div>
        </div>
        <div className="text-center mb-4">
          <FontAwesomeIcon
            className="text-text-main-color transform -rotate-90 scale-[3]"
            icon={faBackward}
          />
        </div>
      </div>
      <div className="mb-4">
        <div className="p-4 mb-4">
          <div className="bg-site-sub-color rounded-md relative p-7">
            <span className="text-4xl absolute -top-5 left-2 text-text-main-color tracking-widest font-mono">
              05
            </span>
            <div className="flex justify-center">
              <div className="mt-4 h-32 w-32 flex justify-center items-center rounded-full bg-site-main-color">
                <Image
                  width={70}
                  height={70}
                  className="mr-2"
                  src={readySvg}
                  alt=""
                ></Image>
              </div>
            </div>
            <h3 className="mt-4 text-lg text-center text-text-main-color font-bold">
              施工準備・近隣挨拶
            </h3>
            <div className="m-4 border-b-[2px] opacity-45 border-white"></div>
            <div className="text-sm pl-6 pr-6 tracking-widest leading-7">
              工事前に、周囲への影響を考慮して近隣住民の方々へご挨拶を行います。
              <br></br>
              <br></br>
              また、資材の搬入や作業工程を事前にしっかり計画し、スムーズな工事進行を実現します。
            </div>
          </div>
        </div>
        <div className="text-center mb-4">
          <FontAwesomeIcon
            className="text-text-main-color transform -rotate-90 scale-[3]"
            icon={faBackward}
          />
        </div>
      </div>
      <div className="mb-4">
        <div className="p-4 mb-4">
          <div className="bg-site-sub-color rounded-md relative p-7">
            <span className="text-4xl absolute -top-5 left-2 text-text-main-color tracking-widest font-mono">
              06
            </span>
            <div className="flex justify-center">
              <div className="mt-4 h-32 w-32 flex justify-center items-center rounded-full bg-site-main-color">
                <Image
                  width={70}
                  height={70}
                  className="mr-2"
                  src={startConstructionSvg}
                  alt=""
                ></Image>
              </div>
            </div>
            <h3 className="mt-4 text-lg text-center text-text-main-color font-bold">
              工事着工
            </h3>
            <div className="m-4 border-b-[2px] opacity-45 border-white"></div>
            <div className="text-sm pl-6 pr-6 tracking-widest leading-7">
              工事中も進捗状況を随時ご報告し、お客様に安心していただけるよう努めます。
              <br></br>
              <br></br>
              <span className="marker-orange">現場の清掃や安全管理を徹底</span>
              し、快適な環境で作業を行います。
            </div>
          </div>
        </div>
        <div className="text-center mb-4">
          <FontAwesomeIcon
            className="text-text-main-color transform -rotate-90 scale-[3]"
            icon={faBackward}
          />
        </div>
      </div>
      <div className="mb-4">
        <div className="p-4 mb-4">
          <div className="bg-site-sub-color rounded-md relative p-7">
            <span className="text-4xl absolute -top-5 left-2 text-text-main-color tracking-widest font-mono">
              07
            </span>
            <div className="flex justify-center">
              <div className="mt-4 h-32 w-32 flex justify-center items-center rounded-full bg-site-main-color">
                <Image
                  width={90}
                  height={90}
                  className="ml-1"
                  src={hooraySvg}
                  alt=""
                ></Image>
              </div>
            </div>
            <h3 className="mt-4 text-lg text-center text-text-main-color font-bold">
              完成・引き渡し
            </h3>
            <div className="m-4 border-b-[2px] opacity-45 border-white"></div>
            <div className="text-sm pl-6 pr-6 tracking-widest leading-7">
              工事完了後、仕上がりをお客様と一緒に確認し、問題がないかチェック。
              <br></br>
              <br></br>
              <span className="marker-orange">
                設備の使用方法やお手入れのポイントについても詳しくご説明します。
              </span>
            </div>
          </div>
        </div>
        <div className="text-center mb-4">
          <FontAwesomeIcon
            className="text-text-main-color transform -rotate-90 scale-[3]"
            icon={faBackward}
          />
        </div>
      </div>
      <div className="mb-4">
        <div className="p-4 mb-4">
          <div className="bg-site-sub-color rounded-md relative p-7">
            <span className="text-4xl absolute -top-5 left-2 text-text-main-color tracking-widest font-mono">
              08
            </span>
            <div className="flex justify-center">
              <div className="mt-4 h-32 w-32 flex justify-center items-center rounded-full bg-site-main-color">
                <Image
                  width={90}
                  height={90}
                  className="ml-1"
                  src={afterSupportSvg}
                  alt=""
                ></Image>
              </div>
            </div>
            <h3 className="mt-4 text-lg text-center text-text-main-color font-bold">
              アフターサポート
            </h3>
            <div className="m-4 border-b-[2px] opacity-45 border-white"></div>
            <div className="text-sm pl-6 pr-6 tracking-widest leading-7">
              リフォーム後も定期点検を実施し、不具合がないか確認。
              <br></br>
              <br></br>
              <span className="marker-orange">
                万が一トラブルが発生した際も、迅速に対応いたします。
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Services;
