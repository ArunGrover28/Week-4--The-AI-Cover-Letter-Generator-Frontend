import React from "react";

export default function ResultBox({ result }) {
  if (!result) return null;

  return (
    <div className="w-full max-w-3xl mt-6 bg-slate-800 p-6 rounded-xl shadow-lg">
      <h2 className="text-xl font-semibold mb-3">
        Generated Cover Letter
      </h2>

      <pre className="whitespace-pre-wrap text-sm bg-slate-900 p-4 rounded">
        {result}
      </pre>

      <button
        onClick={() => navigator.clipboard.writeText(result)}
        className="mt-4 bg-green-600 hover:bg-green-700 px-4 py-2 rounded"
      >
        Copy to Clipboard
      </button>
    </div>
  );
}
