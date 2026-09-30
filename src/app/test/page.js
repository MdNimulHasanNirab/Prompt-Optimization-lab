"use client";

import { useState } from "react";

export default function TestPage() {
  const [product, setProduct] = useState("");
  const [fabric, setFabric] = useState("");
  const [color, setColor] = useState("");
  const [audience, setAudience] = useState("");
  const [result, setResult] = useState("");

  function generatePreview() {
    const output = `✨ ${product || "Premium Panjabi"} — traditional style, modern confidence.

Crafted with ${
      fabric || "quality fabric"
    } in a refined ${color || "classic color"}.

Designed for ${
      audience || "men who appreciate modern traditional fashion"
    }.

Discover the collection and choose your style today.`;

    setResult(output);
  }

  return (
    <main className="container test-page">

      <p className="eyebrow">
        PROMPT PLAYGROUND
      </p>

      <h1>
        Test the Production Prompt
      </h1>

      <p>
        Change the input variables and preview how a structured
        prompt can control the output format.
      </p>

      <div className="form">

        <input
          placeholder="Product name"
          value={product}
          onChange={(e) => setProduct(e.target.value)}
        />

        <input
          placeholder="Fabric"
          value={fabric}
          onChange={(e) => setFabric(e.target.value)}
        />

        <input
          placeholder="Color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />

        <input
          placeholder="Target audience"
          value={audience}
          onChange={(e) => setAudience(e.target.value)}
        />

        <button
          onClick={generatePreview}
          className="button primary"
        >
          Generate Preview
        </button>

      </div>

      {result && (
        <div className="output-card">

          <p className="eyebrow">
            GENERATED OUTPUT
          </p>

          <p className="generated-text">
            {result}
          </p>

        </div>
      )}

    </main>
  );
}