export default function FailureAnalysis() {
  const failures = [
    {
      issue: "Audience ambiguity",
      problem: "The AI does not know who the content is targeting.",
      solution: "Define age group, market and customer context.",
    },

    {
      issue: "Tone ambiguity",
      problem: "Attractive and professional can be interpreted differently.",
      solution: "Define specific voice characteristics.",
    },

    {
      issue: "Output inconsistency",
      problem: "Every generation may follow a different structure.",
      solution: "Define an explicit output structure.",
    },

    {
      issue: "Unsupported claims",
      problem: "The AI may invent product benefits.",
      solution: "Add factuality constraints.",
    },

    {
      issue: "Weak CTA",
      problem: "The generated post may not encourage action.",
      solution: "Define the required CTA behavior.",
    },
  ];

  return (
    <section className="container">

      <div className="section-header">
        <p className="eyebrow">ANALYSIS</p>

        <h2>Why the original prompt fails</h2>
      </div>

      <div className="failure-grid">

        {failures.map((failure, index) => (
          <article className="failure-card" key={failure.issue}>

            <span>0{index + 1}</span>

            <h3>{failure.issue}</h3>

            <p>
              <strong>Problem:</strong>{" "}
              {failure.problem}
            </p>

            <p>
              <strong>Solution:</strong>{" "}
              {failure.solution}
            </p>

          </article>
        ))}

      </div>

    </section>
  );
}