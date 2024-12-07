"use client";
import Image from "next/image";
import btnArrowStart from "../../../public/icons/btnArrowStart.svg";
import styles from "./buttonFlip.module.css";
import { ScreenBreakpoints } from "@/Utils/screenBreakPoints/ScreenBreakPoints";
import { useRouter } from "next/navigation";
type Props = {
  lable?: string;
  pathname?: string;
};
function ButtonFlip(props: Props) {
  const { lable, pathname } = props;
  const router = useRouter();
  const { isDesktop } = ScreenBreakpoints();

  return (
    <>
      <div onClick={() => {
        router.push(`${pathname}`);
      }} className={styles.buttonFlip}>
        <p>{lable}</p>
        {isDesktop && <Image src={btnArrowStart} alt="btnArrowStart" />}
      </div>
    </>
  );
}

export default ButtonFlip;
