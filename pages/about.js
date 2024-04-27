// import Head from "next/head";
import Layout from "../components/layout";
import React from "react";
import styles from "../styles/About.module.css";

export default function about() {
  return (
    <Layout>
      <div className={styles.about_me_page}>
        <h2>About Me</h2>
        <div className={styles.about_me_content}>
          <img
            src="https://via.placeholder.com/150"
            alt="Hair Stylist"
            className="about-me-image"
          />
          <p>
            Hi, I'm [Your Name]! I'm a passionate hair stylist with [X] years of
            experience in the industry. I specialize in [specific services or
            techniques], and I love helping my clients achieve their dream
            hairstyles.
          </p>
          <p>
            My journey in the world of hair styling began [mention any relevant
            experiences or milestones]. Since then, I've had the pleasure of
            working with clients from all walks of life, and each day I'm
            grateful for the opportunity to do what I love.
          </p>
          <p>
            At [Your Salon Name], we believe in providing top-notch service in a
            welcoming and comfortable environment. Whether you're looking for a
            fresh cut, a vibrant color, or a stunning updo for a special
            occasion, I'm here to make your vision a reality.
          </p>
          <p>
            When I'm not behind the chair, you can find me [mention any hobbies
            or interests related to hair styling or personal interests]. I'm
            dedicated to staying updated on the latest trends and techniques in
            the industry to ensure that my clients receive the best possible
            service.
          </p>
          <p>
            Thank you for considering [Your Salon Name] for your hair care
            needs. I can't wait to meet you and help you look and feel your
            absolute best!
          </p>
        </div>
      </div>
    </Layout>
  );
}
