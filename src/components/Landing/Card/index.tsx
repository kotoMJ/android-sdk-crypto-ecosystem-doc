import Heading from "@theme/Heading";
import styles from "./styles.module.css";

export const Card = ({
    title,
    children,
    imageToLeft = false,
    src,
  }) => (
    <section
      className={styles.card}
      style={{
        flexDirection: imageToLeft ? "row-reverse" : "row",
        display: "flex",
      }}
    >
      <div>
        <Heading className={styles.sectionHeading} as="h1">
          {title}
        </Heading>
        {children}
      </div>
      {src && (
        <>
          <div className={styles.sectionSpacer} />
          <div className={styles.sectionImageWrapper}>
            <img className={styles.sectionImage} src={src} />
          </div>
        </>
      )}
    </section>
  );