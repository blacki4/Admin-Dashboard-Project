"use client";

import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function FAQ() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const questions = [
    "Question 1",
    "Question 2",
    "Question 3",
    "Question 4",
    "Question 5",
    "Question 6",
    "Question 7",
    "Question 8",
  ];

  return (
    <div className="flex justify-center w-full bg-indigo-50 min-h-screen py-10">
      <div className="w-[85%] md:w-[70%]">
        <h1 className="text-3xl font-bold text-indigo-800 mb-8 text-center">
          Frequently Asked Questions
        </h1>

        <div className="flex flex-col gap-4">
          {questions.map((question, index) => (
            <Accordion
              key={index}
              expanded={expanded === index}
              onChange={handleChange(index)}
              className="rounded-2xl border border-indigo-200 shadow-sm hover:shadow-md transition-shadow duration-200 bg-white"
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon className="text-indigo-700" />}
                aria-controls={`panel${index}-content`}
                id={`panel${index}-header`}
              >
                <Typography className="font-semibold text-indigo-800">
                  {question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className="text-gray-600 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      </div>
    </div>
  );
}
