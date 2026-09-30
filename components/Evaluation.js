"use client";

import { useEffect, useState } from "react";
import projectData from "../data/projectData";

export default function Evaluation() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="evaluation-section reveal-on-scroll">
      <div className="section-heading">
        <div>
          <span className="eyebrow">
            05 / EVALUATION
          </span>

          <h2>
            Measure the
            <span> improvement.</span>
          </h2>
        </div>

        <p>
          Each prompt version is evaluated against the same
          criteria to make the optimization process measurable.
        </p>
      </div>

      <div className="evaluation-table">
        <div className="evaluation-header">
          <span>METRIC</span>
          <span>V0</span>
          <span>V1</span>
          <span>V2</span>
        </div>

        {projectData.evaluation.map((item, index) => (
          <div
            className="evaluation-row"
            key={item.metric}
            style={{
              animationDelay: `${index * 80}ms`,
            }}
          >
            <strong>
              {item.metric}
            </strong>

            <Score
              value={item.v0}
              active={visible}
            />

            <Score
              value={item.v1}
              active={visible}
            />

            <Score
              value={item.v2}
              active={visible}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

function Score({
  value,
  active,
}) {
  return (
    <div className="score-cell">
      <span>
        {value}%
      </span>

      <div className="score-track">
        <div
          className="score-fill"
          style={{
            width: active
              ? `${value}%`
              : "0%",
          }}
        />
      </div>
    </div>
  );
}