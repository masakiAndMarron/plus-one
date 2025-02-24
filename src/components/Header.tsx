"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import CompanyLogo from "../../public/img/com-name-dec.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

type HeaderProps = {
  list: { name: string; link: string }[];
};

const Header = (props: HeaderProps) => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const data: { name: string; link: string }[] = props.list;

  const menuFunction = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <header className="p-2 hidden fixed top-0 left-0 z-20 w-full bg-white">
      <nav className="flex">
        <div className="flex-none md:mt-7 sm:flex-1 md:flex-1 lg:flex-1 xl:flex-1">
          <Link href="/">
            <Image src={CompanyLogo} width={150} height={150} alt=""></Image>
          </Link>
        </div>
        {openMenu ? (
          <div className="flex flex-row z-10 top-0 right-0 fixed h-[100vh] w-full">
            <div className="basis-full bg-hamburger-bg text-[wheat]">
              <ul className="text-center h-[40%] flex flex-col gap-5">
                <li className="text-right">
                  <FontAwesomeIcon
                    width={40}
                    height={60}
                    className="transform scale-150 mt-5"
                    icon={faXmark}
                    onClick={menuFunction}
                  />
                </li>
                {data.map(
                  (value: { name: string; link: string }, index: number) => (
                    <li key={index} className="font-">
                      <a href={value.link} onClick={() => menuFunction()}>
                        {value.name}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        ) : undefined}
        <div className="flex-initial text-[#abc5c5] font-bold m-5 ">
          <ul className="md:flex  hidden flex-initial text-left">
            {data.map(
              (value: { name: string; link: string }, index: number) => (
                <li key={index} className="p-4">
                  <a href={value.link}>{value.name} </a>
                </li>
              )
            )}
          </ul>
        </div>
        <button
          onClick={menuFunction}
          className="flex-initial absolute top-0 right-0 md:hidden"
        >
          <FontAwesomeIcon
            width={40}
            height={60}
            className="transform scale-150 mt-5"
            icon={faBars}
          />
        </button>
      </nav>
    </header>
  );
};

export default Header;
