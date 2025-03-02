"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitType, { TargetElement } from "split-type";
import topPic1 from "../../public/img/topPic1.jpg";
import topPic2 from "../../public/img/topPic2.jpg";
import topPic3 from "../../public/img/topPic3.jpg";
import aboutPic from "../../public/img/construction.svg";
import { horizontalLoop } from "@/common/Utils";
import works1 from "../../public/img/works1.jpg";
import works2 from "../../public/img/works2.jpg";
import works3 from "../../public/img/works3.jpg";
import works4 from "../../public/img/works4.jpg";
import works5 from "../../public/img/works5.jpg";
import works6 from "../../public/img/works6.jpg";

import Image from "next/image";
import { Tangerine, Frank_Ruhl_Libre } from "next/font/google";
import Link from "next/link";
import { WORKS_IMG_HEIGHT, WORKS_IMG_WIDTH } from "@/common/CommonConsts";
import { useSearchParams } from "next/navigation";

const ACCENT_ENGLISH = Tangerine({
  weight: "400",
  subsets: ["latin"],
});

const SECTION_TITLE = Frank_Ruhl_Libre({
  weight: "400",
  subsets: ["latin"],
});

const Home = () => {
  const companyTtlRef = useRef<HTMLDivElement>(null);
  const searchParams = useSearchParams();

  useEffect(() => {
    console.log(searchParams.get("srcDiv"));
    /***************************************
     * openingアニメーション
     ***************************************/
    const TARGET_ELM: TargetElement =
      companyTtlRef.current != null ? companyTtlRef.current : "";

    const SPLIT = new SplitType(TARGET_ELM, { types: "chars" });
    gsap.from(SPLIT.chars, {
      opacity: 0,
      duration: 2,
      ease: "power2.out",
      stagger: 0.2,
    });

    gsap.set(companyTtlRef.current, {
      opacity: 1,
    });
    gsap.set(".company-icon", {
      opacity: 1,
    });
    gsap.set("header", {
      y: "20px",
      opacity: 0,
    });
    gsap.set("#content-wrapper", {
      y: "20px",
      opacity: 0,
    });
    gsap.set("footer", {
      display: "none",
    });

    const openTl = gsap.timeline();
    openTl
      .to(".opening-animation .company-icon .inner-rotate", {
        rotate: 360,
        duration: 3, // 処理時間
      })
      .to(".opening-animation", {
        delay: 0.5,
        y: "-100%",
        duration: 0.4,
        ease: "power2.out",
        display: "none",
      })
      .to("header", {
        display: "block",
        y: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power1.in",
      })
      .to("main", {
        display: "block",
      })
      .to("#content-wrapper", {
        display: "block",
        height: "100%!important",
        y: 0,
        opacity: 1,
        duration: 0.5,
        ease: "sine.in",
      })
      .to("footer", {
        display: "block",
      })
      .call(() =>
        horizontalLoop(document.querySelectorAll(".marquee-item"), {
          repeat: -1,
          paddingRight: 5,
          speed: 0.5,
        })
      );

    /***************************************
     * トップページ 画像切り替え アニメーション
     ***************************************/
    const topPicTl = gsap.timeline({
      repeat: -1,
      delay: 2,
      defaults: {
        duration: 4,
        ease: "power1.out",
      },
    });

    topPicTl.to(".top-pic-1", {
      opacity: 0,
    });
    topPicTl.to(
      ".top-pic-2",
      {
        opacity: 1,
      },
      "<"
    );
    topPicTl.to(".top-pic-2", {
      opacity: 0,
    });
    topPicTl.to(
      ".top-pic-3",
      {
        opacity: 1,
      },
      "<"
    );
    topPicTl.to(".top-pic-3", {
      opacity: 0,
    });
    topPicTl.to(
      ".top-pic-1",
      {
        opacity: 1,
      },
      "<"
    );
  }, []);

  return (
    <>
      <div className="h-[100vh] bg-[#00bfff] opening-animation">
        <div
          ref={companyTtlRef}
          className="opacity-0 company-title text-[22px] absolute top-[20%] left-1/2 
       transform -translate-x-1/2 -translate-y-12 whitespace-nowrap font-serif text-white"
        >
          住まいの総合リフォーム
        </div>
        <div
          className="company-icon opacity-0 w-[350px] h-[350px] bg-white absolute top-1/2 left-1/2 
      translate transform -translate-x-1/2 -translate-y-2/4
      rounded-[50%] p-2
      "
        >
          <div className="w-full h-full border-[6px] border-[#00bfff] rounded-[50%]">
            <div className="inner-rotate w-full h-full bg-[#00bfff] rounded-[50%] relative">
              <div className="w-full h-full border-[6px] border-white rounded-[50%] absolute"></div>
              {/* 縦線 */}
              <div
                className="w-[97%] h-[29%] ml-[5px] top-[35.5%] bg-white absolute rounded-[11px]
            transform rotate-90"
              ></div>
              {/* 横線 */}
              <div className="w-[97%] left-[5px] p-2 top-[35%] bg-white absolute rounded-[11px]">
                <div className="w-full h-[80px] text-[#00bfff] font-bold tracking-[10px]">
                  <div className="text-center text-[110px] leading-[83px] tracking-[20px] pl-[5px]">
                    ONE
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="content-wrapper" className="hidden">
        <div className="bg-site-sub-color h-[167.73vw] pt-40 relative">
          <h4 className="absolute top-[75px] text-base font-japanese-basic z-10 ml-5 text-site-accent-color tracking-wider leading-8">
            今よりもっと快適な暮らしを<br></br>一緒に考えませんか？
          </h4>
          <div className="h-[70%] w-[90%] m-auto bg-site-sub-color clip-triangle relative">
            <Image
              className="top-pic-1 absolute top-0 left-0"
              src={topPic1}
              width={400}
              height={400}
              alt=""
            ></Image>
            <Image
              className="top-pic-2 absolute opacity-0 top-0 left-0"
              src={topPic2}
              width={400}
              height={400}
              alt=""
            ></Image>
            <Image
              className="top-pic-3 absolute opacity-0 top-0 left-0"
              src={topPic3}
              width={400}
              height={400}
              alt=""
            ></Image>
          </div>
          <h2
            className={`absolute right-[10%] bottom-[5%] text-3xl text-gray-400 ml-10 ${ACCENT_ENGLISH.className}`}
          >
            Let’s create<br></br> your dream home—together
          </h2>
        </div>
        {/* About */}
        <section className="font-japanese-basic pl-5 pr-5 pb-12">
          <header className="pt-16">
            <span className="text-xs">-私たちについて</span>
            <h2
              className={`text-2xl ${SECTION_TITLE.className} tracking-[4px]`}
            >
              About
            </h2>
          </header>
          <div className="text-sm leading-10 mt-6">
            私たちは、お客様の理想の住まいをカタチにする
            <br></br>
            リフォーム会社です。
            <br></br>
            長年の経験と確かな技術で、暮らしをより快適に、より美しくするお手伝いをしています。
            <br></br>
            住まいのお悩みやご希望に寄り添い、一人ひとりに最適なリフォームプランをご提案。
            <br></br>
            安心してお任せいただけるサービスを提供します。
          </div>
          <div className="mt-12">
            <Image width={400} height={400} src={aboutPic} alt=""></Image>
          </div>
        </section>
        {/* Service */}
        <section className="bg-site-sub-color font-japanese-basic pl-5 pr-5 pb-12">
          <header className="pt-16">
            <span className="text-xs">-私たちのサービス</span>
            <h2
              className={`text-2xl ${SECTION_TITLE.className} tracking-[4px]`}
            >
              Service
            </h2>
          </header>
          <div className="mt-4">
            <div className="flex justify-center items-center mt-6">
              <div className="flex-1 mr-4">
                <Image src={works1} alt=""></Image>
              </div>
              <div className="flex-1">
                <h3 className="mb-4 text-sm phrase-emphasis">
                  お客様の想いをカタチにするご提案
                </h3>
                <p className="text-[0.5rem]">
                  住まいに関するお悩みやご要望をじっくりとお伺いし、
                  お客様に最適なリフォームプランをご提案します。
                  デザイン性・機能性・コストバランスを考え抜いたご提案で、理想の暮らしを実現します。
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center mt-12">
              <div className="flex-1 mr-4">
                <h3 className="mb-4 text-sm phrase-emphasis">
                  確かな技術と豊富な実績
                </h3>
                <p className="text-[0.5rem]">
                  私たちは経験豊富な職人と専門スタッフが一丸となり、高品質な施工をお約束します。
                  長年培ってきた技術と最新の施工方法を活かし、安全で耐久性の高いリフォームを行います。
                </p>
              </div>
              <div className="flex-1">
                <Image src={works2} alt=""></Image>
              </div>
            </div>
            <div className="flex justify-center items-center mt-12">
              <div className="flex-1 mr-4">
                <Image src={works3} alt=""></Image>
              </div>
              <div className="flex-1">
                <h3 className="mb-4 text-sm phrase-emphasis">
                  素材・デザインにこだわったご提案
                </h3>
                <p className="text-[0.5rem]">
                  お住まいの雰囲気やライフスタイルに合わせた最適な素材・デザインをご提案。
                  流行を取り入れつつも、長く愛される住まいづくりを目指します。
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center mt-12">
              <div className="flex-1  mr-4">
                <h3 className="mb-4 text-sm phrase-emphasis">
                  予算に合わせた柔軟なプランニング
                </h3>
                <p className="text-[0.5rem]">
                  リフォームは大きな投資。だからこそ、お客様のご予算に合わせた最適なプランをご提案します。
                  コストを抑えながらも、品質を損なわない工夫を取り入れます。
                </p>
              </div>
              <div className="flex-1">
                <Image src={works4} alt=""></Image>
              </div>
            </div>
          </div>
        </section>
        {/* Works */}
        <section className="h-[167.73vw] font-japanese-basic pl-5 pr-5">
          <header className="pt-16">
            <span className="text-xs">-施工事例</span>
            <h2
              className={`text-2xl ${SECTION_TITLE.className} tracking-[4px]`}
            >
              Works
            </h2>
          </header>
          <div className="mt-14 marquee flex gap-[5px] relative overflow-hidden">
            <div className="marquee-item">
              <Image
                width={WORKS_IMG_WIDTH}
                height={WORKS_IMG_HEIGHT}
                src={works1}
                alt=""
              ></Image>
              <p className="mt-1 mb-1 font-bold text-sm tracking-[1.1px] text-center w-full">
                桜木町 ○○邸
              </p>
              <div className="ml-1">
                <p className="mt-2 text-xs tracking-[1.1px]">費用：700万円</p>
                <p className="mt-2 text-xs tracking-[1.1px]">内容：外装</p>
              </div>
            </div>
            <div className="marquee-item">
              <Image
                width={WORKS_IMG_WIDTH}
                height={WORKS_IMG_HEIGHT}
                src={works2}
                alt=""
              ></Image>
              <p className="mt-1 mb-1 font-bold text-sm tracking-[1.1px] text-center w-full">
                桜木町 ○○邸 2号
              </p>
              <div className="ml-1">
                <p className="mt-2 text-xs tracking-[1.1px]">費用：700万円</p>
                <p className="mt-2 text-xs tracking-[1.1px]">内容：内装</p>
              </div>
            </div>
            <div className="marquee-item">
              <Image
                width={WORKS_IMG_WIDTH}
                height={WORKS_IMG_HEIGHT}
                src={works3}
                alt=""
              ></Image>
              <p className="mt-1 mb-1 font-bold text-sm tracking-[1.1px] text-center w-full">
                桜木町 ○○邸
              </p>
              <div className="ml-1">
                <p className="mt-2 text-xs tracking-[1.1px]">費用：700万円</p>
                <p className="mt-2 text-xs tracking-[1.1px]">
                  内容：クリーニング
                </p>
              </div>
            </div>
            <div className="marquee-item">
              <Image
                width={WORKS_IMG_WIDTH}
                height={WORKS_IMG_HEIGHT}
                src={works4}
                alt=""
              ></Image>
              <p className="mt-1 mb-1 font-bold text-sm tracking-[1.1px] text-center w-full">
                桜木町 ○○邸 3号
              </p>
              <div className="ml-1">
                <p className="mt-2 text-xs tracking-[1.1px]">費用：300万円</p>
                <p className="mt-2 text-xs tracking-[1.1px]">内容：外装</p>
              </div>
            </div>
            <div className="marquee-item">
              <Image
                width={WORKS_IMG_WIDTH}
                height={WORKS_IMG_HEIGHT}
                src={works5}
                alt=""
              ></Image>
              <p className="mt-1 mb-1 font-bold text-sm tracking-[1.1px] text-center w-full">
                桜木町 ○○邸 8号
              </p>
              <div className="ml-1">
                <p className="mt-2 text-xs tracking-[1.1px]">費用：200万円</p>
                <p className="mt-2 text-xs tracking-[1.1px]">内容：解体</p>
              </div>
            </div>
            <div className="marquee-item">
              <Image
                width={WORKS_IMG_WIDTH}
                height={WORKS_IMG_HEIGHT}
                src={works6}
                alt=""
              ></Image>
              <p className="mt-1 mb-1 font-bold text-sm tracking-[1.1px] text-center w-full">
                桜木町 ○○邸 別
              </p>
              <div className="ml-1">
                <p className="mt-2 text-xs tracking-[1.1px]">費用：1,200万円</p>
                <p className="mt-2 text-xs tracking-[1.1px]">
                  内容：リフォーム
                </p>
              </div>
            </div>
          </div>
          <div className="h-52 flex justify-center items-center">
            <Link href={"/works"}>
              <button className="group relative h-12 overflow-hidden bg-site-accent-color opacity-80 px-6 text-neutral-50 transition">
                <span className="relative tracking-[3px]">View more</span>
                <div className="animate-shine-infinite absolute inset-0 -top-[20px] flex h-[calc(100%+40px)] w-full justify-center blur-[12px]">
                  <div className="relative h-full w-8 bg-white/30"></div>
                </div>
              </button>
              {/* <button className="tracking-[5px] border p-3">View more</button> */}
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};
export default Home;
