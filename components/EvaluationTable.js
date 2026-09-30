export default function EvaluationTable() {
  const evaluations = [
    {
      criterion: "Clarity",
      v0: "Low",
      v1: "High",
      v2: "High",
    },
    {
      criterion: "Audience Fit",
      v0: "Low",
      v1: "High",
      v2: "High",
    },
    {
      criterion: "Brand Voice",
      v0: "Unclear",
      v1: "Defined",
      v2: "Defined",
    },
    {
      criterion: "Structure",
      v0: "Unstructured",
      v1: "Structured",
      v2: "Structured",
    },
    {
      criterion: "CTA",
      v0: "Undefined",
      v1: "Required",
      v2: "Required",
    },
    {
      criterion: "Factuality",
      v0: "Uncontrolled",
      v1: "Controlled",
      v2: "Controlled",
    },
  ];

  return (
    <section className="container">

      <div className="section-header">
        <p className="eyebrow">EVALUATION</p>

        <h2>Prompt performance across iterations</h2>
      </div>

      <div className="table-wrapper">

        <table>

          <thead>
            <tr>
              <th>Criterion</th>
              <th>V0</th>
              <th>V1</th>
              <th>V2</th>
            </tr>
          </thead>

          <tbody>

            {evaluations.map((item) => (
              <tr key={item.criterion}>

                <td>{item.criterion}</td>
                <td>{item.v0}</td>
                <td>{item.v1}</td>
                <td>{item.v2}</td>

              </tr>
            ))}

          </tbody>

        </table>

      </div>

    </section>
  );
}