import React, { useState } from "react";
import { Link } from "react-router-dom";

const ConditionButton = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative inline-block text-left">
      {/* Button */}
      <button
        onClick={() => setOpen(!open)}
        className="inline-flex justify-center w-full rounded-md   shadow-sm px-4 py-2  text-sm font-medium text-white hover:bg-teal-700"
      >
        Condition Addressed
      </button>

      {/* Dropdown Menu */}
      {open && (
        <div
          className="absolute mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10"
        >
          <div className="py-1">
            <Link
              to="/multipage/anxiety"
              className="block px-4 py-2 text-gray-700 "
              onClick={() => setOpen(false)}
            >
              Anxiety
            </Link>
            <Link
              to="/multipage/depression"
              className="block px-4 py-2 text-gray-700 "
              onClick={() => setOpen(false)}
            >
              Depression
            </Link>
            <Link
              to="/multipage/infoPage"
              className="block px-4 py-2 text-gray-700 "
              onClick={() => setOpen(false)}
            >
              Emotional Over-Reactions
            </Link>
             <Link
              to="/multipage/learningpage"
              className="block px-4 py-2 text-gray-700 "
              onClick={() => setOpen(false)}
            >
              Learning Disorders
            </Link>
            <Link
              to="/multipage/motivation"
              className="block px-4 py-2 text-gray-700 "
              onClick={() => setOpen(false)}
            >
              Motivation Problems
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default ConditionButton;
