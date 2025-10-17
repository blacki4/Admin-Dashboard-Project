"use client";

import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Search, HelpCircle } from "lucide-react";

export default function FAQ() {
  const [expanded, setExpanded] = React.useState(false);
  const [searchTerm, setSearchTerm] = React.useState("");

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const questions = [
    {
      question: "How do I reset my password?",
      answer:
        "You can reset your password by clicking on the 'Forgot Password' link on the login page. You'll receive an email with instructions to create a new password.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for enterprise customers.",
    },
    {
      question: "How can I upgrade my plan?",
      answer:
        "You can upgrade your plan at any time from your account settings. The changes will take effect immediately, and you'll be billed the prorated amount.",
    },
    {
      question: "Is there a mobile app available?",
      answer:
        "Yes! We have mobile apps available for both iOS and Android devices. You can download them from the App Store and Google Play Store.",
    },
    {
      question: "How do I contact customer support?",
      answer:
        "You can reach our customer support team 24/7 through the in-app chat, email at support@company.com, or by phone at 1-800-HELP-NOW.",
    },
    {
      question: "Can I export my data?",
      answer:
        "Yes, you can export your data in various formats (CSV, JSON, PDF) from the settings page. Enterprise customers have additional export options.",
    },
    {
      question: "What's your refund policy?",
      answer:
        "We offer a 30-day money-back guarantee for all our plans. If you're not satisfied, contact our support team for a full refund.",
    },
    {
      question: "How secure is my data?",
      answer:
        "We use enterprise-grade security including AES-256 encryption, SOC 2 compliance, and regular security audits to protect your data.",
    },
  ];

  const filteredQuestions = questions.filter(
    (q) =>
      q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex justify-center w-full bg-gradient-to-br from-indigo-50 to-purple-50 min-h-screen py-10">
      <div className="w-[85%] md:w-[70%] lg:w-[60%]">
        <div className="text-center mb-8 animate-fade-in">
          <div className="flex justify-center mb-4">
            <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center">
              <HelpCircle className="text-indigo-600" size={40} />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-indigo-800 mb-2">
            Frequently Asked Questions
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            Find answers to common questions about our platform
          </p>

          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto mb-8">
            <Search
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={20}
            />
            <input
              type="text"
              placeholder="Search questions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-white border border-gray-200 rounded-2xl shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
            />
          </div>
        </div>

        <div className="flex flex-col gap-4 animate-fade-in-up">
          {filteredQuestions.map((item, index) => (
            <Accordion
              key={index}
              expanded={expanded === index}
              onChange={handleChange(index)}
              className="rounded-2xl border border-indigo-100 shadow-sm hover:shadow-lg transition-all duration-300 bg-white overflow-hidden"
              sx={{
                "&:before": { display: "none" },
                "&.Mui-expanded": { margin: "8px 0" },
              }}
            >
              <AccordionSummary
                expandIcon={
                  <ExpandMoreIcon className="text-indigo-600 transform transition-transform duration-200" />
                }
                aria-controls={`panel${index}-content`}
                id={`panel${index}-header`}
                sx={{
                  padding: "16px 24px",
                  "&.Mui-expanded": {
                    minHeight: "48px",
                    borderBottom: "1px solid #E5E7EB",
                  },
                }}
              >
                <Typography className="font-semibold text-indigo-800 text-lg">
                  {item.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  padding: "24px",
                  backgroundColor: "#F8FAFC",
                }}
              >
                <Typography className="text-gray-600 leading-relaxed text-base">
                  {item.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}

          {filteredQuestions.length === 0 && (
            <div className="text-center py-12 animate-fade-in">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="text-gray-400" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">
                No questions found
              </h3>
              <p className="text-gray-500">Try adjusting your search terms</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
