import React from "react";
import Card from "./Card";
import styles from "./sectioncards.module.css";

const SectionCards = (props) => {
  const { title } = props;
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>{title}</h2>

      <div className={styles.cardWrapper}>
        <Card title="Movie Card" imgUrl="/assets/card1.jpg" size="large" />
        <Card title="Movie Card" imgUrl="/assets/card1.jpg" size="large" />
        <Card title="Movie Card" imgUrl="/assets/card1.jpg" size="large" />
        <Card title="Movie Card" imgUrl="/assets/card1.jpg" size="large" />
        <Card title="Movie Card" imgUrl="/assets/card1.jpg" size="large" />
        <Card title="Movie Card" imgUrl="/assets/card1.jpg" size="large" />
        <Card title="Movie Card" imgUrl="/assets/card1.jpg" size="large" />
        <Card title="Movie Card" imgUrl="/assets/card1.jpg" size="large" />
        <Card title="Movie Card" imgUrl="/assets/card1.jpg" size="large" />
        <Card title="Movie Card" imgUrl="/assets/card1.jpg" size="large" />
        <Card title="Movie Card" imgUrl="/assets/card1.jpg" size="large" />
      </div>
    </section>
  );
};

export default SectionCards;
