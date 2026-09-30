"use client";

import { useState } from "react";

export default function TestCases({ testCases }) {
  const [selected, setSelected] = useState(0);

  return (
    <section className="test-section">

      <div className="section-header">
        <p className="eyebrow">PROMPT TESTING</p>

        <h2>Test the prompt against different scenarios.</h2>
      </div>

      <div className="test-layout">

        <div className="test-list">

          {testCases.map((test, index) => (
            <button
              key={test.id}
              onClick={() => setSelected(index)}
              className={
                selected === index
                  ? "test-item active"
                  : "test-item"
              }
            >
              <span>{test.id}</span>
              {test.name}
            </button>
          ))}

        </div>

        <div className="test-preview">

          <p className="eyebrow">
            {testCases[selected].id}
          </p>

          <h3>{testCases[selected].name}</h3>

          <p>
            {testCases[selected].scenario}
          </p>

        </div>

      </div>

    </section>
  );
}