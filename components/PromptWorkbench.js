"use client";

import { useState } from "react";
import projectData from "../data/projectData";

export default function PromptWorkbench() {
  const [version, setVersion] = useState("v0");
  const [copied, setCopied] = useState(false);

  const currentVersion =
    projectData[version];

  async function copyPrompt() {
    try {
      await navigator.clipboard.writeText(
        currentVersion.prompt
      );

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 1800);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <section
      className="workbench-section reveal-on-scroll"
    >
      <div className="section-heading">
        <div>
          <span className="eyebrow">
            05 / PROMPT WORKBENCH
          </span>

          <h2>
            Explore every
            <span> iteration.</span>
          </h2>
        </div>

        <p>
          Compare how the prompt evolves from a vague
          instruction into a reusable production system.
        </p>
      </div>

      <div className="workbench">
        <div className="workbench-tabs">
          {["v0", "v1", "v2"].map(
            (item) => (
              <button
                key={item}
                type="button"
                className={
                  version === item
                    ? "workbench-tab active"
                    : "workbench-tab"
                }
                onClick={() => {
                  setVersion(item);
                  setCopied(false);
                }}
              >
                <span>
                  {item.toUpperCase()}
                </span>

                <small>
                  {item === "v0"
                    ? "BASELINE"
                    : item === "v1"
                    ? "STRUCTURED"
                    : "PRODUCTION"}
                </small>
              </button>
            )
          )}
        </div>

        <div className="workbench-content">
          <div className="workbench-title-row">
            <div>
              <span className="eyebrow">
                CURRENT VERSION
              </span>

              <h3>
                {currentVersion.name}
              </h3>
            </div>

            <button
              className="copy-button"
              onClick={copyPrompt}
              type="button"
            >
              {copied
                ? "✓ Copied"
                : "Copy Prompt"}
            </button>
          </div>

          <div className="large-prompt">
            <div className="code-window-header">
              <div className="window-dots">
                <span />
                <span />
                <span />
              </div>

              <span>
                prompt.txt
              </span>

              <span>
                AI / PROMPT
              </span>
            </div>

            <pre>
              {currentVersion.prompt}
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}