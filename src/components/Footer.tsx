"use client";
import catchcp from "../../public/img/reform-catch-cp-logo.png";
import Image from "next/image";

type FooterProps = {
  list: { name: string; link: string }[];
};

const Footer = (props: FooterProps) => {
  const data: { name: string; link: string }[] = props.list;

  return (
    <footer className="bg-site-footer-color hidden p-2">
      <div className="text-white pl-5 pb-5">
        <div className="">
          <Image width={250} height={250} alt="" src={catchcp}></Image>
        </div>
        <nav>
          <ul className="mb-8 mt-6 flex text-xs gap-3">
            {data.map(
              (value: { name: string; link: string }, index: number) => (
                <li key={index} className="border-b border-orange-400">
                  <a href={value.link}>{value.name}</a>
                </li>
              )
            )}
          </ul>
        </nav>
        <div className="flex text-[11.5px] mb-6 leading-8 tracking-[1.4px]">
          <div
            className="text-center border border-orange-200 
          mr-4 [writing-mode:vertical-rl] tracking-[12px] pt-3"
          >
            住所
          </div>
          <div>
            〒166-0002<br></br>
            東京都杉並区高円寺北4-31-11<br></br>
            〇〇〇-〇〇〇〇-〇〇〇〇
          </div>
        </div>
        <p className="text-[10px] tracking-[1.2px]">
          © 2025 株式会社プラス1. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
