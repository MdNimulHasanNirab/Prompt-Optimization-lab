"use client";

import { useState } from "react";

export default function PromptVersion({
  version,
  prompt,
  description,
  weaknesses,
  improvements,
  output,
}) {
  const [copied, setCopied] = useState(false);

  async function copyPrompt() {
    try {
      await navigator.clipboard.writeText(prompt);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 1800);
    } catch (error) {
      console.error("Copy failed:", error);
    }
  }

  const isV0 = version?.includes("V0");

  return (
    <article className="prompt-version-card reveal-on-scroll">
      <div className="prompt-card-header">
        <div>
          <span className="eyebrow">
            {isV0 ? "BASELINE" : "OPTIMIZATION"}
          </span>

          <h3>{version}</h3>

          <p>{description}</p>
        </div>

        <button
          className="copy-button"
          onClick={copyPrompt}
          type="button"
        >
          {copied ? "✓ Copied" : "Copy Prompt"}
        </button>
      </div>

      <div className="prompt-box">
        <div className="prompt-box-top">
          <span>INPUT / PROMPT</span>

          <span className="prompt-dot">
            <i />
            PROMPT
          </span>
        </div>

        <pre>{prompt}</pre>
      </div>

      {weaknesses?.length > 0 && (
        <div className="analysis-grid">
          <div className="analysis-box danger-box">
            <div className="analysis-title">
              <span>×</span>
              Weaknesses
            </div>

            <ul>
              {weaknesses.map((item) => (
                <li key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {improvements?.length > 0 && (
        <div className="analysis-grid">
          <div className="analysis-box success-box">
            <div className="analysis-title">
              <span>✓</span>
              Improvements
            </div>

            <ul>
              {improvements.map((item) => (
                <li key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {output && (
        <div className="output-box">
          <div className="output-label">
            MODEL OUTPUT
          </div>

          <p>{output}</p>
        </div>
      )}
    </article>
  );
}