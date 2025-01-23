import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";

const fira_code = Fira_Code({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Welcome to my Portfolio",
  description:
    "Learn more about me and my expertise in the field of Front-End Web Development.",
  keywords:
    "Javascript, Front-End Web Development, Front-End Developer, frontend developer, Frontend Developer, front-end developer, frontend web development, Typescript, Python, Redux, Redux Toolkit, Version Control System, Git, GitHub, React, React.js, ReactJS, Next, NextJS, Next.js, Expertise in web accessibility and performance, Accessibility, Web accessibility, accessibility expert, Web Performance, Remote work, Hybrid work, Bengaluru based developer, Bachelor's degree, Computer Engineering, International Institute of Information Technology Bhubaneswar, IIIT-Bh, IIIT Bhubaneswar, Communication, Emotional Intelligence, Ability to work independently, Time management, React Developer, early professional, 1 year of experience in frontend development, ability to work in cross-functional teams, building UI/UX design",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={fira_code.className}>{children}</body>
    </html>
  );
}
