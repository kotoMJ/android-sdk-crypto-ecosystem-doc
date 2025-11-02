import React, { useEffect } from "react";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";
import Link from "@docusaurus/Link";
import styles from "./styles.module.css";
import cardStyles from "../components/Landing/Card/styles.module.css";
import { Card } from "../components/Landing/Card";

const PhoneImage = ({ src }) => (
  <div className={styles.imageContainer}>
    <div
      className={styles.image}
      style={{ backgroundImage: `url(${src})`, backgroundSize: "cover" }}
    />
  </div>
);

const ImageExamples = () => (
  <div className={`${styles.imageRowWrapper} animate-fade-in`}>
    <div className={styles.imageRow}>
      <PhoneImage src="img/crypto/image_1.png" />
      <PhoneImage src="img/crypto/image_2.png" />
      <PhoneImage src="img/crypto/image_8.png" />
      <PhoneImage src="img/crypto/image_4.png" />
      <PhoneImage src="img/crypto/image_5.png" />
      <PhoneImage src="img/crypto/image_6.png" />
      <PhoneImage src="img/crypto/image_7.png" />
    </div>
  </div>
);

export default function LandingPage() {
  useEffect(() => {
    const observerOptions = {
      root: null, // Use the viewport as the root
      rootMargin: "0px",
      threshold: 0.1, // Trigger when 10% of the element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in");
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll(`.${cardStyles.card}`);
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  useEffect(() => {
    // Add the class to the body element
    const root = document.getElementById("__docusaurus");
    root.classList.add("hide-navbar");
    return () => {
      root.classList.remove("hide-navbar");
    };
  }, []);

  return (
    <Layout
      title="CRYPTO SDK"
      description="CRYPTO SDK documentation site"
      wrapperClassName="landing"
    >
      <div className={styles.background}>
        <div className={styles.content}>
          <img src="img/crypto/logo_crypto_title.svg" />
          <Heading as="h1" className={styles.mainHeading}>
            Power your mobile apps with the CRYPTO SDKs
          </Heading>
          <div className={styles.buttons}>
            <Link to="docs/Get started/Android" className={styles.myButton}>
              <div
                className={styles.vendorLogo}
                style={{
                  mask: `url("img/android-logo.svg") no-repeat center / contain`,
                }}
              ></div>
              <div>Get started</div>
            </Link>
          </div>
        </div>
        <ImageExamples />
        <Card title="Tracker SDK" src="img/crypto/image_2_crop.png">
          <div
              className={styles.sectionContent}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Praesent scelerisque, sapien nec mattis maximus, magna sem lacinia enim,
            sed eleifend diam tellus ac ligula.

            <ul>
              <li>
                Duis et Nibh: Cras in nisi in, felis commodo
                semper.
              </li>
              <li>
                Aliquam Erat: Fusce dapibus, tellus ac cursus commodo, tortor
                mauris.
              </li>
              <li>
                Pellentesque Habitant: Donec et odio pellentesque, tristique
                nisi.
              </li>
            </ul>
            <p>
              For more information, visit our{" "}
              <Link to="docs/Get started/Tracker SDK/Introduction">Tracker SDK documentation.</Link>
            </p>
          </div>
        </Card>
        <Card title="News SDK" imageToLeft src="img/crypto/image_8_crop.png">
          <div className={styles.sectionContent}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.

            <ul>
              <li>
                Vestibulum Ante: Ipsum primis in faucibus orci luctus et
                ultrices.
              </li>
              <li>
                Nulla Facilisi: Donec eget ultricies, sapien nec
                sollicitudin.
              </li>
              <li>
                Mauris Eget: Nunc id eros, porta sit amet,
                consequat.
              </li>
            </ul>
            <p>
              Explore our <Link to="docs/Get started/News SDK/Introduction"> News SDK documentation.</Link>
            </p>
          </div>
        </Card>
        <Card title="Coindata SDK" src="img/crypto/image_9.png">
          <div className={styles.sectionContent}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes.

            <ul>
              <li>
                Cras Mollis: Nunc nonummy metus. Nullam vel sem.
              </li>
              <li>
                Aenean Tincidunt: Etiam rhoncus. Maecenas tempus, tellus eget.
              </li>
              <li>
                Phasellus Eget: Donec sodales sagittis magna. Sed
                consequat.
              </li>
            </ul>
            <p>
              Explore our <Link to="docs/Get started/Coindata SDK/Introduction"> Coindata SDK documentation.</Link>
            </p>
          </div>
        </Card>
        <Card title="" src="">
          <div
              className={styles.sectionContent}
              style={{
                alignItems: "center",
              flexDirection: "column",
            }}
          >
            <p>
              The CRYPTO SDK provides a comprehensive set of modules to connect to all major cryptocurrencies. Integrate powerful, real-time price feeds and access the rich, detailed data that crypto enthusiasts and developers demand.
            </p>
            <img src="img/crypto/logo_crypto_gold.png" style={{
              width: "60pt",
              filter: "brightness(0) invert(72%) sepia(51%) saturate(1021%) hue-rotate(1deg) brightness(85%) contrast(85%)"
            }} />
          </div>
        </Card>
      </div>
    </Layout>
  );
}
