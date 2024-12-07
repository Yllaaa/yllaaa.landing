/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import Image from "next/image";

type Props = {
  img1?: string | any;
  img2?: string | any;
  img3?: string | any;
  img4?: string | any;
  img5?: string | any;
  img6?: string | any;
  img7?: string | any;
  img8?: string | any;
};
function Icons(props: Props) {
  const { img1, img2, img3, img4, img5, img6, img7, img8 } = props;

  return (
    <>
      <div style={{ display: "flex" }}>
        <div style={{margin:"auto 40px"}}>
          <Image src={img1} alt="1" />
        </div>
        <div style={{margin:"auto 40px"}}>
          <Image src={img2} alt="1" />
        </div>
        <div style={{margin:"auto 40px"}}>
          <Image src={img3} alt="1" />
        </div>
        <div style={{margin:"auto 40px"}}>
          <Image src={img4} alt="1" />
        </div>
      {/* </div> */}
      {/* <div style={{ display: "flex" }}> */}
        <div style={{margin:"auto 40px"}}>
          <Image src={img5} alt="1" />
        </div>
        <div style={{margin:"auto 40px"}}>
          <Image src={img6} alt="1" />
        </div>
        <div style={{margin:"auto 40px"}}>
          <Image src={img7} alt="1" />
        </div>
        {img8 && (
          <div style={{margin:"auto 40px"}}>
            <Image src={img8} alt="1" />
          </div>
        )}
      </div>
    </>
  );
}

export default Icons;
