"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitType, { TargetElement } from "split-type";

export default function Home() {
  const companyTtlRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    /***************************************
     * openingアニメーション
     ***************************************/
    const TARGET_ELM: TargetElement =
      companyTtlRef.current != null ? companyTtlRef.current : "";
    const SPLIT = new SplitType(TARGET_ELM, { types: "chars" });

    gsap.set("#content-wrapper", {
      display: "none",
    });

    const tl = gsap.timeline();
    gsap.from(SPLIT.chars, {
      opacity: 0,
      duration: 2,
      ease: "power2.out",
      stagger: 0.2,
    });
    tl.to(".opening-animation .company-icon .inner-rotate", {
      rotate: 360,
      duration: 3, // 処理時間
    });
    tl.to(".opening-animation", {
      delay: 0.5,
      y: "-100%",
      ease: "sine.out",
      display: "none",
    });
    tl.to("header", {
      display: "block",
    });
    tl.to("#content-wrapper", {
      display: "block",
      height: "100%!important",
    });
  }, []);

  return (
    <>
      <div className="h-full bg-[#00bfff] opening-animation">
        <div
          ref={companyTtlRef}
          className="company-title text-[25px] absolute top-[20%] left-1/2 
       transform -translate-x-1/2 -translate-y-12 whitespace-nowrap font-serif text-white"
        >
          住まいの総合リフォーム
        </div>
        <div
          className="company-icon w-[350px] h-[350px] bg-white absolute top-1/2 left-1/2 
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
      <div className="bg-site-main-color" id="content-wrapper">
        <div id="test">Hello World</div>
      </div>
    </>
  );
}
