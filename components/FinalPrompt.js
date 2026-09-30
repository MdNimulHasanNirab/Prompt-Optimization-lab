export default function FinalPrompt({ prompt }) {
  return (
    <section className="container final-prompt">

      <div className="section-header">

        <p className="eyebrow">
          PRODUCTION VERSION
        </p>

        <h2>
          V2 — Production Prompt
        </h2>

        <p>
          The final prompt is designed to be reusable across
          multiple Panjabi products.
        </p>

      </div>

      <div className="prompt-box final">

        <pre>{prompt}</pre>

      </div>

    </section>
  );
}