import { View, Text } from "react-native";
import React from "react";
import FAQItem from "./FAQItem";

export default function FAQList() {
  const faqList = [
    {
      key: 1,
      question: "How can I pay?",
      answer: "We accept all major credit cards, PayPal, and bank transfers.",
    },
    {
      key: 2,
      question: "Do you offer refunds?",
      answer: "Yes, refunds are available within 14 days of purchase.",
    },
    {
      key: 3,
      question: "Is my payment information secure?",
      answer: "Absolutely! We use SSL encryption and trusted payment gateways.",
    },
    {
      key: 4,
      question: "Do you ship internationally?",
      answer: "Yes, we ship to most countries worldwide.",
    },
    {
      key: 5,
      question: "How long does delivery take?",
      answer:
        "Delivery usually takes 3–7 business days depending on your location.",
    },
    {
      key: 6,
      question: "Can I track my order?",
      answer: "Yes, once your order is shipped, we provide a tracking number.",
    },
    {
      key: 7,
      question: "Do you have a mobile app?",
      answer: "Yes, our app is available on both iOS and Android platforms.",
    },
    {
      key: 8,
      question: "Can I change or cancel my order?",
      answer: "Yes, you can modify or cancel your order before it is shipped.",
    },
    {
      key: 9,
      question: "Do you offer customer support?",
      answer: "Yes, our support team is available 24/7 via chat and email.",
    },
    {
      key: 10,
      question: "Are there any discounts available?",
      answer:
        "We regularly offer promotions and discounts—check our website for updates.",
    },
  ];

  return (
    <View>
      {faqList.map((faq) => {
        return (
          <FAQItem question={faq.question} answer={faq.answer} key={faq.key} />
        );
      })}
    </View>
  );
}
