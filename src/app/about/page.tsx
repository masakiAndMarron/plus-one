import Image from "next/image";
import aboutTop from "../../../public/img/about-top.jpg";
import { Klee_One } from "next/font/google";
import philosophyImg from "../../../public/img/managementPhilosophy.jpg";
import silhouetteImg from "../../../public/img/silhouette.png";

const KLEE_ONE = Klee_One({
  subsets: ["latin"],
  weight: "400",
});

const About = () => {
  return (
    <div className="pt-16 font-japanese-basic">
      <div className="relative">
        <Image className="opacity-30" src={aboutTop} alt=""></Image>
        <h1
          className="content-title absolute top-0 font-semibold"
          data-en="Works"
        >
          会社概要
        </h1>
        {/* <h3 className="leading-8 p-6 top-0 absolute w-full font-bold text-site-accent-color tracking-[3.5px]">
          <span className="vertical-rl ml-20 float-left">
            長年の実績と信頼で
          </span>
          <br></br>
          <span className="vertical-rl mr-20 float-right">
            住まいを進化させる。
          </span>
        </h3> */}
      </div>
      <div className="bg-site-sub-color p-8 tracking-wider">
        <h2 className="company-about-heading">ご挨拶</h2>
        <div className="mb-16 relative">
          <Image className="-translate-x-4" src={silhouetteImg} alt=""></Image>
          <h3 className="leading-8 top-0 absolute w-full font-bold text-site-accent-color tracking-[4px]">
            <span className="vertical-rl pr-3 float-left">
              長年の実績と信頼で
            </span>
            <br></br>
            <span className="vertical-rl pt-16 float-right">
              住まいを進化させる。
            </span>
          </h3>
        </div>
        <div className="text-sm leading-7">
          <p>
            私たち株式会社プラス1は、
            <span className="marker-orange">
              「暮らしをより快適に、より美しく」
            </span>
            をモットーに、
            お客様の理想の住まいづくりをお手伝いしております。住まいは、人生を豊かにする大切な空間です。
            だからこそ、私たちは一つひとつのご要望に真摯に向き合い、
            <span className="marker-orange">
              最適なリフォームプランをご提案
            </span>
            いたします。
          </p>
          <p>
            長年の経験と確かな技術を活かし、内装・外装・水回り・耐震補強など幅広いリフォームに対応しております。
            また、施工後のアフターサポートも充実させ、長く安心して暮らしていただける住まいを提供することをお約束いたします。
          </p>
          <p>
            お客様の「こんな暮らしがしたい」という思いを大切にし、
            夢をカタチにするお手伝いをさせていただきます。
            <span className="marker-yellow">
              どんな小さなことでも、お気軽にご相談ください。
            </span>
          </p>
        </div>
      </div>
      <div className="mt-4 p-8 tracking-wider">
        <h2 className="company-about-heading">経営理念</h2>
        <div className="text-sm leading-7">
          <p>
            私たちは、お客様の夢や想いを大切にし、心から満足いただけるリフォームを提供します。
          </p>
          <p>
            対話を重視し、一つひとつのご要望に真摯に向き合いながら、安心・快適な住まいづくりを実現します。
          </p>
        </div>
        <div className="mt-12">
          <Image
            className="transform scale-125 opacity-60"
            src={philosophyImg}
            alt=""
          ></Image>
        </div>
      </div>
      <div className="mt-12 pb-14 p-8 bg-site-sub-color tracking-wider">
        <h2 className="company-about-heading">会社概要</h2>
        <table
          className={`w-full border-collapse company-about-table text-sm ${KLEE_ONE.className}`}
        >
          <tr>
            <th>会社名</th>
            <td>株式会社プラス1</td>
          </tr>
          <tr>
            <th>創業</th>
            <td>2020年8月</td>
          </tr>
          <tr>
            <th>TEL</th>
            <td>〇〇-〇〇〇〇-〇〇〇〇</td>
          </tr>
          <tr>
            <th>代表</th>
            <td>田中太郎</td>
          </tr>
          <tr>
            <th>事業内容</th>
            <td>住まいの総合リフォーム</td>
          </tr>
          <tr>
            <th>所在地</th>
            <td>
              〒166-0002<br></br>
              東京都杉並区<br></br>高円寺北4-31-1
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default About;
