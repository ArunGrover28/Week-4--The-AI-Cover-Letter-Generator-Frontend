import React, { useState } from "react";
import axios from "axios";


export default function CoverForm({ setResult }) {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    role: "",
    skills: "",
    jobDescription: "",
  });
  const [resume, setResume] = useState(null);

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    const data = new FormData();
    Object.keys(formData).forEach((key) =>
      data.append(key, formData[key])
    );
    if (resume) data.append("resume", resume);

    try {
      const res = await axios.post(
        "http://localhost:5000/api/ai/generate",
        data
      );
      setResult(res.data.letter);
    } catch (err) {
      alert("Failed to generate cover letter");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        name="name"
        placeholder="Your Name"
        className="w-full p-2 rounded bg-slate-700"
        onChange={handleChange}
        required
      />

      <input
        name="company"
        placeholder="Company Name"
        className="w-full p-2 rounded bg-slate-700"
        onChange={handleChange}
        required
      />

      <input
        name="role"
        placeholder="Job Role"
        className="w-full p-2 rounded bg-slate-700"
        onChange={handleChange}
        required
      />

      <textarea
        name="skills"
        placeholder="Key Skills (comma separated)"
        className="w-full p-2 rounded bg-slate-700"
        onChange={handleChange}
        required
      />

      <textarea
        name="jobDescription"
        placeholder="Paste Job Description"
        className="w-full p-2 rounded bg-slate-700 h-28"
        onChange={handleChange}
        required
      />

      <input
        type="file"
        accept="application/pdf"
        onChange={(e) => setResume(e.target.files[0])}
        className="w-full text-sm"
      />

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-blue-600 hover:bg-blue-700 p-2 rounded font-semibold"
      >
        {loading ? "Generating..." : "Generate Cover Letter"}
      </button>
    </form>
  );
}
