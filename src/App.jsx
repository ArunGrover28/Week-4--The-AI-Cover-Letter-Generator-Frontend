import React, { useState } from "react";

import CoverForm from "./component/CoverForm";
import ResultBox from "./component/ResultBox";


export default function App() {
  const [result, setResult] = useState("");

  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col items-center py-10 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">
        AI Cover Letter Generator
      </h1>

      <div className="w-full max-w-3xl bg-slate-800 p-6 rounded-xl shadow-lg">
        <CoverForm setResult={setResult} />
      </div>

      <ResultBox result={result} />
    </div>
  );
}
