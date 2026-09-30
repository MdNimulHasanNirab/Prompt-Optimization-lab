export default function CaseIntro() {
  return (
    <section id="case" className="case-section">

      <div className="container">

        <div className="section-label">
          <span>01</span>
          THE CASE
        </div>

        <div className="case-grid">

          <div>

            <p className="eyebrow">
              CLIENT SCENARIO
            </p>

            <h2>
              A Bangladeshi fashion brand needs
              <span> consistent AI-generated content.</span>
            </h2>

          </div>

          <div className="case-description">

            <p>
              The initial instruction appears simple. But
              production-quality AI output requires much more
              than a one-line request.
            </p>

            <div className="quote-card">

              <div className="quote-mark">"</div>

              <p>
                Write a Facebook post for our new panjabi.
                Make it attractive and professional.
              </p>

              <span>
                ORIGINAL CLIENT INSTRUCTION
              </span>

            </div>

          </div>

        </div>

        <div className="diagnostics">

          <div className="diagnostic-intro">
            <span className="diagnostic-icon">!</span>

            <div>
              <strong>
                PROMPT DIAGNOSTICS
              </strong>

              <p>
                Critical information is missing.
              </p>
            </div>
          </div>

          <div className="diagnostic-item">
            <span>01</span>
            <strong>Audience</strong>
            <small>UNDEFINED</small>
          </div>

          <div className="diagnostic-item">
            <span>02</span>
            <strong>Tone</strong>
            <small>AMBIGUOUS</small>
          </div>

          <div className="diagnostic-item">
            <span>03</span>
            <strong>Structure</strong>
            <small>MISSING</small>
          </div>

          <div className="diagnostic-item">
            <span>04</span>
            <strong>CTA</strong>
            <small>MISSING</small>
          </div>

          <div className="diagnostic-item">
            <span>05</span>
            <strong>Constraints</strong>
            <small>UNDEFINED</small>
          </div>

        </div>

      </div>

    </section>
  );
}