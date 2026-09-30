"use client";

import { useState } from "react";

export default function Playground() {
  const [product, setProduct] =
    useState("Premium Panjabi");

  const [fabric, setFabric] =
    useState("Premium Cotton");

  const [color, setColor] =
    useState("Navy Blue");

  const [audience, setAudience] =
    useState("Bangladeshi men aged 18–35");

  const [generated, setGenerated] =
    useState(false);

  function generate() {
    setGenerated(false);

    setTimeout(() => {
      setGenerated(true);
    }, 500);
  }

  return (
    <section id="playground" className="playground-section">

      <div className="container">

        <div className="section-label">
          <span>06</span>
          PROMPT PLAYGROUND
        </div>

        <div className="playground-heading">

          <div>

            <p className="eyebrow">
              INTERACTIVE DEMO
            </p>

            <h2>
              Put the prompt
              <br />
              <span>to work.</span>
            </h2>

          </div>

          <p>
            Modify the variables and see how structured
            prompt inputs influence the generated content.
          </p>

        </div>

        <div className="playground">

          <div className="playground-input">

            <div className="panel-heading">

              <div>
                <span>INPUT</span>
                <strong>PRODUCT VARIABLES</strong>
              </div>

              <small>
                V2.0
              </small>

            </div>

            <div className="fields">

              <label>
                PRODUCT NAME

                <input
                  value={product}
                  onChange={(e) =>
                    setProduct(e.target.value)
                  }
                />

              </label>

              <label>
                FABRIC

                <input
                  value={fabric}
                  onChange={(e) =>
                    setFabric(e.target.value)
                  }
                />

              </label>

              <label>
                COLOR

                <input
                  value={color}
                  onChange={(e) =>
                    setColor(e.target.value)
                  }
                />

              </label>

              <label>
                TARGET AUDIENCE

                <input
                  value={audience}
                  onChange={(e) =>
                    setAudience(e.target.value)
                  }
                />

              </label>

            </div>

            <button
              className="run-button"
              onClick={generate}
            >
              <span>RUN PROMPT</span>
              <b>→</b>
            </button>

          </div>

          <div className="playground-output">

            <div className="panel-heading">

              <div>
                <span>OUTPUT</span>
                <strong>GENERATED CONTENT</strong>
              </div>

              <small>
                {generated ? "COMPLETE" : "WAITING"}
              </small>

            </div>

            {!generated ? (

              <div className="output-empty">

                <div className="output-symbol">
                  ✦
                </div>

                <p>
                  Configure the variables
                  and run the prompt.
                </p>

                <small>
                  OUTPUT WILL APPEAR HERE
                </small>

              </div>

            ) : (

              <div className="generated-output">

                <span className="output-label">
                  FACEBOOK POST
                </span>

                <h3>
                  আপনার স্টাইল,
                  আপনার পরিচয়।
                </h3>

                <p>
                  {product} — তৈরি করা হয়েছে
                  {audience.toLowerCase()}-এর জন্য।
                  {fabric} এর আরাম এবং
                  {color.toLowerCase()}-এর
                  sophisticated look এটিকে
                  আপনার traditional wardrobe-এর
                  একটি versatile choice করে তোলে।
                </p>

                <p>
                  নিজের style-এ traditional
                  confidence যোগ করুন।
                </p>

                <strong>
                  আজই আপনার পছন্দেরটি বেছে নিন।
                </strong>

                <div className="output-meta">

                  <span>
                    ✓ STRUCTURE
                  </span>

                  <span>
                    ✓ CTA
                  </span>

                  <span>
                    ✓ AUDIENCE
                  </span>

                </div>

              </div>

            )}

          </div>

        </div>

        <div className="playground-footer">

          <span>
            PROMPT ENGINE: V2.0
          </span>

          <span>
            MODE: STRUCTURED GENERATION
          </span>

          <span>
            STATUS:
            <i></i>
            READY
          </span>

        </div>

      </div>

    </section>
  );
}