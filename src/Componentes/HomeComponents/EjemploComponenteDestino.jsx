import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function ExampleReviews() {
  const navigate=useNavigate();
  const location = useLocation();
  const [dataItemJson, setDataItemJson] = useState(null);

  function handleClick() {
    setDataItemJson(location.state);
  }
  function back() {
    navigate("/home");
  }
  return (
    <section>
      <button onClick={handleClick}>Mostrar datos JSON</button>
      <button onClick={back}>Atrassasdasd</button>
      <div className="dataJson">
        {dataItemJson && (
          <ul>
            {Object.entries(dataItemJson).map(([key, value]) => (
              <li key={key}>
                <strong>{key}:</strong> {value}
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
