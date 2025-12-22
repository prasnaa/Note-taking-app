import React from "react";
import { Tags, Trash2} from "lucide-react";

const NoteCard = () => {
  return (
    <div className="w-65 sm:w-70 bg-gray-200 rounded-xl overflow-hidden shadow-sm ml-8">
      <div className="p-4 space-y-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">Untitled Note</h3>
        <p className="text-gray-700 mb-6">.....</p>

        {/* Tag,priority and trashicon */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            {/* space in text and icon*/}
            <div className="flex items-center space-x-3 text-gray-800">
              {/* simple tag icon */}
              <Tags size={18} /> 
              <span className="text-sm">General</span>
            </div>
            <span className="text-sm text-gray-800">Medium</span>
          </div>

          {/* Trash icon on right */}
          <button className="p-1.5 rounded hover:bg-gray-300">
            <Trash2 size={18} />
          </button>
        </div>
      </div>

      {/* Divider + footer */}
      <div className="border-t border-gray-300 bg-gray-200">
        <div className="py-3 text-center text-sm text-gray-800">
          Updated 12/4/2025
        </div>
      </div>
    </div>
  );
};

export default NoteCard;
