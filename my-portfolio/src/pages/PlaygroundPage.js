// import React, { useState } from "react";
// import "./PlaygroundPage.css";

// const PlaygroundPage = () => {
//   const [input, setInput] = useState("");
//   const [output, setOutput] = useState("");

//   const runCode = () => {
//     try {
//       const result = eval(input); // ⚠️ Only use eval() for a safe demo; avoid in real apps
//       setOutput(result);
//     } catch (error) {
//       setOutput("Error: " + error.message);
//     }
//   };

//   return (
//     <div className="playground-container">
//       <h1>Interactive Playground</h1>
//       <p>Test JavaScript code below:</p>
//       <textarea
//         value={input}
//         onChange={(e) => setInput(e.target.value)}
//         placeholder="Enter JavaScript code..."
//       ></textarea>
//       <button onClick={runCode}>Run Code</button>
//       <div className="output-box">
//         <h3>Output:</h3>
//         <p>{output}</p>
//       </div>
//     </div>
//   );
// };

// export default PlaygroundPage;
