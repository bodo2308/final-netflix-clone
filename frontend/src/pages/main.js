import React, { useState } from "react";
import Header from "../components/Header";
import Card from "../components/Card";
import Footer from "../components/Footer";
import FAQ from "../components/FAQ";

const Main = () => {
  const statements = [
    {
      title: "Enjoy on your TV.",
      content:
        "Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.",
      video: "../images/video1.mp4 ",
    },
    {
      title: "Download your shows to watch offline.",
      content: "Save your favorites easily and always have something to watch.",
      video: "../images/video2.mp4",
    },
    {
      title: "Watch everywhere.",
      content:
        "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.",
      video: "../images/video3.mp4",
    },
  ];

  const [faqs, setfaqs] = useState([
    {
      question: "What is Netflix?",
      answer:
        "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices. ",
      open: false,
    },
    {
      question: "How much does Netflix cost?",
      answer:
        "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from $8.99 to $15.99 a month. No extra costs, no contracts.",
      open: false,
    },
    {
      question: "What can I watch on Netflix?",
      answer:
        "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want. Join free for 30 days to see everything Netflix has to offer",
      open: false,
    },
    {
      question: "Where can I watch?",
      answer:
        "Watch anywhere, anytime, on an unlimited number of devices. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.",
      open: false,
    },
    {
      question: "How do I cancel?",
      answer:
        "Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
      open: false,
    },
  ]);

  const toggleFAQ = (index) => {
    setfaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }
        return faq;
      })
    );
  };

  return (
    <div>
      {/* Header section */}
      <Header />

      {/* Body Section */}
      <div className="Cards">
        {statements.map((statement, i) => (
          <Card statement={statement} index={i} key={i} />
        ))}
      </div>

      {/* Accordion Section */}

      <div className="faqs">
        <h1>Frequently Asked Questions</h1>
        {faqs.map((faq, i) => (
          <FAQ faq={faq} index={i} toggleFAQ={toggleFAQ} key ={i} />
        ))}
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default Main;
