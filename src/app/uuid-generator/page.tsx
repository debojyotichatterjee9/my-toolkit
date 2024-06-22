"use client";

import { useState } from "react";
import { v1, v3, v4, v5, NIL } from "uuid";
import { CopyToClipboard } from "react-copy-to-clipboard";

const UuidGenerator = () => {
  const [selectedVersion, setSelectedVersion] = useState<string | null>(null);
  const [selectedUuid, setSelectedUuid] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [namespace, setNamespace] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleVersionSelect = (version: string) => {
    setSelectedVersion(version);
    setSelectedUuid("");
    setName("");
    setNamespace("");
    setError("");
  };

  const generateUuid = () => {
    if (selectedVersion === "v3" || selectedVersion === "v5") {
      if (!name.trim() || !namespace.trim()) {
        setError("Name and Namespace cannot be empty");
        return;
      }
    }

    setError("");
    let newUuid = "";
    switch (selectedVersion) {
      case "v1":
        newUuid = v1();
        break;
      case "v3":
        newUuid = v3(namespace, name);
        break;
      case "v4":
        newUuid = v4();
        break;
      case "v5":
        newUuid = v5(namespace, name);
        break;
      case "NIL":
        newUuid = NIL;
        break;
      default:
        newUuid = "";
    }
    setSelectedUuid(newUuid);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(selectedUuid);
    alert("UUID has been copied to clipboard!");
  };

  const resetUuid = () => {
    setSelectedVersion(null);
    setSelectedUuid("");
    setName("");
    setNamespace("");
    setError("");
  };

  return (
    <div className="p-4 space-y-4">
      <div className="flex space-x-4 justify-center">
        {["NIL", "v1", "v3", "v4", "v5"].map((version) => (
          <button
            key={version}
            className={`btn ${
              selectedVersion === version
                ? "btn-primary"
                : "btn-outline btn-accent"
            }`}
            onClick={() => handleVersionSelect(version)}
          >
            {version}
          </button>
        ))}
      </div>

      {(selectedVersion === "v3" || selectedVersion === "v5") && (
        <div className="flex space-x-4 items-center justify-center">
          <input
            type="text"
            className="input input-bordered input-primary text-center"
            placeholder="Namespace"
            value={namespace}
            onChange={(e) => setNamespace(e.target.value)}
          />
          <kbd className="kbd kbd-sm">⌘</kbd>
          <input
            type="text"
            className="input input-bordered input-primary text-center"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
      )}
      {error && (
        <p className="flex text-red-500 items-center justify-center">{error}</p>
      )}

      <div className="mt-4 flex items-center justify-center">
        <input
          type="text"
          placeholder="Click on Generate!"
          className="input input-bordered input-lg input-warning w-full max-w-2xl text-2xl text-center"
          value={selectedUuid}
          readOnly
        />
      </div>

      <div className="flex space-x-4 justify-center">
        <CopyToClipboard text={selectedUuid}>
          <button className="btn btn-primary" onClick={copyToClipboard}>
            Copy
          </button>
        </CopyToClipboard>
        <button className="btn btn-primary" onClick={generateUuid}>
          {selectedUuid ? "Regenerate" : "Generate"}
        </button>
        <button className="btn btn-primary" onClick={resetUuid}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default UuidGenerator;
