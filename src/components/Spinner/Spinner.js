import React, { useState } from "react";
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const Spinner = () => {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("");

  return (
    <div className="sweet-loading">
      <button onClick={() => setLoading(!loading)}> </button>
      <input value={color} onChange={(input) => setColor(input.target.value)} />

      <ClipLoader color={color} loading={loading} css={override} size={150} />
    </div>
  );
};

export default Spinner;