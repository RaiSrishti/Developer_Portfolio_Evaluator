import { useState } from "react";

export default function ShareButton() {
  const [open, setOpen] = useState(false);

  const url = window.location.href;

  const copy = () => {
    navigator.clipboard.writeText(url);
    alert("Copied!");
  };

  return (
    <div className="mt-6 text-center">
      <button
        onClick={() => setOpen(true)}
        className="bg-blue-600 px-5 py-2 rounded-lg"
      >
        🔗 Share Report
      </button>

      {open && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center">
          <div className="bg-slate-900 p-6 rounded-xl text-white w-80">
            <p className="mb-3 text-sm break-all">{url}</p>

            <button
              onClick={copy}
              className="bg-green-500 px-4 py-2 rounded mr-2"
            >
              Copy
            </button>

            <button
              onClick={() => setOpen(false)}
              className="bg-red-500 px-4 py-2 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}