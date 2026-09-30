"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((value) => (value >= 100 ? 0 : value + 1));
    }, 45);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">

      <div className="hero-grid"></div>

      <div className="container hero-content">

        <div className="hero-topline">
          <span>AI / PROMPT ENGINEERING / 001</span>

          <span>
            SYSTEM STATUS{" "}
            <i className="status-dot"></i>
            ONLINE
          </span>
        </div>

        <div className="hero-main">

          <div className="hero-copy">

            <p className="eyebrow">
              AI PROMPT DEVELOPMENT LAB
            </p>

            <h1>
              I don't just
              <br />
              <em>write prompts.</em>
              <br />
              I engineer them.
            </h1>

            <p className="hero-description">
              A practical prompt engineering system that transforms
              an ambiguous AI instruction into a structured,
              testable and production-ready workflow.
            </p>

            <div className="hero-actions">

              <a href="#case" className="gold-button">
                EXPLORE CASE
                <span>↗</span>
              </a>

              <a href="#playground" className="outline-button">
                RUN PLAYGROUND
                <span>⌘</span>
              </a>

            </div>

          </div>

          <div className="hero-terminal">

            <div className="terminal-head">

              <div className="terminal-dots">
                <i></i>
                <i></i>
                <i></i>
              </div>

              <span>prompt-engine.js</span>

              <span className="terminal-live">
                LIVE
              </span>

            </div>

            <div className="terminal-body">

              <div>
                <span className="code-number">01</span>
                <span className="purple">const</span>{" "}
                <span className="blue">prompt</span> = {"{"}
              </div>

              <div className="indent">
                <span className="green">role</span>:{" "}
                <span className="yellow">
                  "fashion copywriter"
                </span>
              </div>

              <div className="indent">
                <span className="green">audience</span>:{" "}
                <span className="yellow">
                  "Bangladeshi men"
                </span>
              </div>

              <div className="indent">
                <span className="green">tone</span>:{" "}
                <span className="yellow">
                  "premium, modern"
                </span>
              </div>

              <div className="indent">
                <span className="green">constraints</span>: [
              </div>

              <div className="double-indent">
                <span className="yellow">
                  "no unsupported claims"
                </span>
              </div>

              <div className="double-indent">
                <span className="yellow">
                  "natural Bangla"
                </span>
              </div>

              <div className="indent">]</div>

              <div>{"};"}</div>

              <div className="terminal-progress">

                <span>
                  OPTIMIZATION
                </span>

                <div className="progress-track">
                  <div
                    style={{ width: `${count}%` }}
                  ></div>
                </div>

                <span>
                  {count}%
                </span>

              </div>

            </div>

          </div>

        </div>

        <div className="hero-bottom">

          <div>
            <span className="metric-number">03</span>
            <span>Prompt Versions</span>
          </div>

          <div>
            <span className="metric-number">05</span>
            <span>Evaluation Criteria</span>
          </div>

          <div>
            <span className="metric-number">04</span>
            <span>Test Scenarios</span>
          </div>

          <div>
            <span className="metric-number">01</span>
            <span>Production System</span>
          </div>

        </div>

      </div>

    </section>
  );
}