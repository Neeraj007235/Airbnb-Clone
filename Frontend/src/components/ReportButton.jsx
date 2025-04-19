import React, { useState } from "react";
import { FaFlag } from "react-icons/fa";
import ReportDialog from "./ReportDialog";

const ReportButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="flex justify-center">
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 text-sm underline text-neutral-500 hover:underline hover:cursor-pointer"
        >
          <FaFlag className="text-base" />
          Report this listing
        </button>
      </div>

      <ReportDialog isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default ReportButton;
