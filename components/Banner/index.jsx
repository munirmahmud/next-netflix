import Image from "next/image";
import React from "react";
import styles from "./banner.module.css";

const Banner = (props) => {
  const { title, subTitle, imgUrl } = props;

  const handlePlay = () => {};

  return (
    <div className={styles.container}>
      <div className={styles.leftWrapper}>
        <div className={styles.left}>
          <div className={styles.nseriesWrapper}>
            <p className={styles.firstLetter}>N</p>
            <p className={styles.series}>S E R I E S</p>
          </div>
          <h3 className={styles.title}>{title}</h3>
          <h3 className={styles.subTitle}>{subTitle}</h3>

          <div className={styles.playBtnWrapper}>
            <button
              type="button"
              className={styles.btnWithIcon}
              onClick={handlePlay}
            >
              <Image
                src="/assets/play_arrow.svg"
                alt="Play"
                width={32}
                height={32}
              />
              <span className={styles.playText}>Play</span>
            </button>
          </div>
        </div>
      </div>

      <div
        className={styles.bannerImg}
        style={{
          backgroundImage: `url(${imgUrl})`,
        }}
      ></div>
    </div>
  );
};

export default Banner;
