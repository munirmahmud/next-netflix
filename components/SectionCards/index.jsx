import Link from "next/link";
import React from "react";
import Card from "./Card";
import styles from "./sectioncards.module.css";

const SectionCards = (props) => {
  const { title, videos, size } = props;

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>{title}</h2>

      <div className={styles.cardWrapper}>
        {videos?.map((video, idx) => (
          <Link href={`/video/${video.id}`} key={video.id}>
            <a>
              <Card id={idx} imgUrl={video.imgUrl} size={size} />
            </a>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default SectionCards;
