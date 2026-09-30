"use client";

import { useState } from "react";

const stages = [
  {
    number: "01",
    label: "BASELINE",
    title: "Weak Prompt",
    description:
      "Capture the initial instruction and establish a baseline.",
  },

  {
    number: "02",
    label: "ANALYZE",
    title: "Failure Analysis",
    description:
      "Identify ambiguity, missing constraints and output risks.",
  },

  {
    number: "03",
    label: "STRUCTURE",
    title: "V1 Prompt",
    description:
      "Introduce role, audience, tone, structure and constraints.",
  },

  {
    number: "04",
    label: "TEST",
    title: "Test Cases",
    description:
      "Run the prompt against different product scenarios.",
  },

  {
    number: "05",
    label: "EVALUATE",
    title: "Performance",
    description:
      "Evaluate outputs against defined quality criteria.",
  },

  {
    number: "06",
    label: "PRODUCTION",
    title: "V2 Prompt",
    description:
      "Build a reusable production-ready prompt system.",
  },
];

export default function Pipeline() {
  const [active, setActive] = useState(0);

  return (
    <section id="pipeline" className="pipeline-section">

      <div className="container">

        <div className="section-label">
          <span>02</span>
          DEVELOPMENT PIPELINE
        </div>

        <div className="pipeline-heading">

          <h2>
            From vague instruction
            <br />
            to <span>production system.</span>
          </h2>

          <p>
            Every iteration exists for a reason.
            The prompt evolves through analysis,
            testing and evaluation.
          </p>

        </div>

        <div className="pipeline-wrapper">

          <div className="pipeline-sidebar">

            {stages.map((stage, index) => (

              <button
                key={stage.number}
                className={
                  active === index
                    ? "pipeline-item active"
                    : "pipeline-item"
                }
                onClick={() => setActive(index)}
              >

                <span>{stage.number}</span>

                <div>
                  <small>{stage.label}</small>
                  <strong>{stage.title}</strong>
                </div>

                <b>→</b>

              </button>

            ))}

          </div>

          <div className="pipeline-display">

            <div className="display-grid"></div>

            <div className="display-content">

              <div className="display-number">
                {stages[active].number}
              </div>

              <p className="eyebrow">
                {stages[active].label}
              </p>

              <h3>
                {stages[active].title}
              </h3>

              <p>
                {stages[active].description}
              </p>

              <div className="display-line"></div>

              <div className="display-meta">
                <span>PIPELINE STAGE</span>
                <strong>
                  {String(active + 1).padStart(2, "0")} / 06
                </strong>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}