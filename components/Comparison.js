export default function Comparison() {
  return (
    <section className="comparison-section">

      <div className="container">

        <div className="section-label">
          <span>05</span>
          BEFORE / AFTER
        </div>

        <div className="comparison-heading">

          <p className="eyebrow">
            THE TRANSFORMATION
          </p>

          <h2>
            From a sentence
            <br />
            to a <span>system.</span>
          </h2>

        </div>

        <div className="comparison-grid">

          <article className="comparison-card weak">

            <div className="comparison-top">

              <span>V0</span>

              <small>
                BEFORE
              </small>

            </div>

            <h3>
              Write a Facebook post for
              our new panjabi.
            </h3>

            <div className="comparison-tags">

              <span>AMBIGUOUS</span>
              <span>UNSTRUCTURED</span>
              <span>INCONSISTENT</span>

            </div>

          </article>

          <div className="comparison-arrow">

            <div className="arrow-line"></div>
            <span>OPTIMIZE</span>
            <div className="arrow-line"></div>

          </div>

          <article className="comparison-card strong">

            <div className="comparison-top">

              <span>V2</span>

              <small>
                PRODUCTION
              </small>

            </div>

            <h3>
              Role + objective + inputs +
              audience + voice + structure
              + constraints + QA.
            </h3>

            <div className="comparison-tags">

              <span>STRUCTURED</span>
              <span>REUSABLE</span>
              <span>TESTABLE</span>

            </div>

          </article>

        </div>

      </div>

    </section>
  );
}