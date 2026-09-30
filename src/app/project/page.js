"use client";

import { useEffect } from "react";
import PromptVersion from "../../components/PromptVersion";
import Evaluation from "../../components/Evaluation";
import PromptWorkbench from "../../components/PromptWorkbench";
import projectData from "../../data/projectData";

export default function ProjectPage() {
  useEffect(() => {
    const handleMouseMove = (event) => {
      document.documentElement.style.setProperty(
        "--mouse-x",
        `${event.clientX}px`
      );

      document.documentElement.style.setProperty(
        "--mouse-y",
        `${event.clientY}px`
      );
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );
    };
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll(
      ".reveal-on-scroll"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      {
        threshold: 0.12,
      }
    );

    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main className="project-page">
      <div className="mouse-glow" />

      {/* HERO */}

      <section className="project-hero">
        <div className="hero-grid" />

        <div className="hero-content">
          <div className="status-pill">
            <span className="status-dot" />
            PROMPT ENGINEERING CASE STUDY
          </div>

          <div className="hero-index">
            PROJECT / 001
          </div>

          <h1>
            Prompt
            <br />
            <span>Optimization</span>
            <br />
            Lab
          </h1>

          <p className="hero-description">
            {projectData.description}
          </p>

          <div className="hero-actions">
            <a
              href="#pipeline"
              className="primary-button"
            >
              Explore Case Study
              <span>↓</span>
            </a>

            <a
              href="#workbench"
              className="secondary-button"
            >
              Open Workbench
            </a>
          </div>

          <div className="hero-stats">
            <div>
              <strong>03</strong>
              <span>PROMPT VERSIONS</span>
            </div>

            <div>
              <strong>04</strong>
              <span>TEST CASES</span>
            </div>

            <div>
              <strong>06</strong>
              <span>EVALUATION METRICS</span>
            </div>

            <div>
              <strong>94%</strong>
              <span>FINAL SCORE</span>
            </div>
          </div>
        </div>
      </section>

      {/* PIPELINE */}

      <section
        id="pipeline"
        className="pipeline-section reveal-on-scroll"
      >
        <div className="section-heading">
          <div>
            <span className="eyebrow">
              01 / OPTIMIZATION PIPELINE
            </span>

            <h2>
              From vague
              <span> to precise.</span>
            </h2>
          </div>

          <p>
            The prompt was not rewritten randomly. Each
            iteration addresses a specific failure identified
            during analysis.
          </p>
        </div>

        <div className="pipeline">
          <PipelineStep
            number="01"
            version="V0"
            title="Weak Prompt"
            description="Identify missing context and ambiguous instructions."
          />

          <PipelineLine />

          <PipelineStep
            number="02"
            version="V1"
            title="Structured Prompt"
            description="Add audience, tone, constraints and output structure."
          />

          <PipelineLine />

          <PipelineStep
            number="03"
            version="V2"
            title="Production Prompt"
            description="Add reusable inputs, quality controls and safeguards."
          />
        </div>
      </section>

      {/* V0 */}

      <section className="version-section">
        <div className="version-label">
          <span>02 / BASELINE</span>

          <div className="version-line" />
        </div>

        <PromptVersion
          version={projectData.v0.name}
          prompt={projectData.v0.prompt}
          description={projectData.v0.objective}
          weaknesses={projectData.v0.weaknesses}
          output={projectData.v0.output}
        />
      </section>

      {/* V1 */}

      <section className="version-section">
        <div className="version-label">
          <span>03 / OPTIMIZATION</span>

          <div className="version-line" />
        </div>

        <PromptVersion
          version={projectData.v1.name}
          prompt={projectData.v1.prompt}
          description={projectData.v1.objective}
          improvements={projectData.v1.improvements}
          output={projectData.v1.output}
        />
      </section>

      {/* V2 */}

      <section className="version-section production-section">
        <div className="version-label">
          <span>04 / PRODUCTION</span>

          <div className="version-line" />
        </div>

        <PromptVersion
          version={projectData.v2.name}
          prompt={projectData.v2.prompt}
          description={projectData.v2.objective}
          improvements={projectData.v2.improvements}
          output={projectData.v2.output}
        />
      </section>

      {/* EVALUATION */}

      <Evaluation />

      {/* WORKBENCH */}

      <div id="workbench">
        <PromptWorkbench />
      </div>

      {/* TEST CASES */}

      <section className="test-section reveal-on-scroll">
        <div className="section-heading">
          <div>
            <span className="eyebrow">
              06 / TEST CASES
            </span>

            <h2>
              Test the
              <span> system.</span>
            </h2>
          </div>

          <p>
            The production prompt is tested against different
            input conditions instead of relying on one example.
          </p>
        </div>

        <div className="test-grid">
          {projectData.testCases.map((test, index) => (
            <article
              className="test-card"
              key={test.id}
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <div className="test-card-top">
                <span>{test.id}</span>

                <span>TEST</span>
              </div>

              <h3>{test.name}</h3>

              <div className="test-field">
                <span>INPUT</span>
                <p>{test.input}</p>
              </div>

              <div className="test-field">
                <span>EXPECTED BEHAVIOR</span>
                <p>{test.expected}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* FINAL */}

      <section className="final-section reveal-on-scroll">
        <div className="final-card">
          <div className="final-card-content">
            <span className="eyebrow">
              FINAL SYSTEM
            </span>

            <h2>
              I don't just write prompts.
              <br />
              <span>I engineer and evaluate them.</span>
            </h2>

            <p>
              This case study demonstrates a repeatable process:
              analyze → structure → test → evaluate → improve.
            </p>

            <div className="final-tags">
              <span>Prompt Design</span>
              <span>Optimization</span>
              <span>Evaluation</span>
              <span>Testing</span>
              <span>AI Workflows</span>
            </div>
          </div>

          <div className="final-number">
            001
          </div>
        </div>
      </section>
    </main>
  );
}

function PipelineStep({
  number,
  version,
  title,
  description,
}) {
  return (
    <div className="pipeline-step">
      <div className="pipeline-number">
        {number}
      </div>

      <span className="pipeline-version">
        {version}
      </span>

      <h3>{title}</h3>

      <p>{description}</p>
    </div>
  );
}

function PipelineLine() {
  return (
    <div className="pipeline-connector">
      <span />
      <span />
      <span />
      <span />
      <span />
    </div>
  );
}