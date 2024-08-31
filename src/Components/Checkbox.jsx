import React, { useState } from 'react';
import axios from 'axios';
import { useRecoilState } from 'recoil';
import { deletedAtom } from '../store/atoms/deletedAtom';

export const DeleteCheckbox = ({ id, onDelete }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [deleted, setDeleted] = useRecoilState(deletedAtom);

  const handleCheckboxChange = async (event) => {
    const newCheckedState = event.target.checked;
    setIsChecked(newCheckedState);

    if (newCheckedState) {
      setIsDeleting(true);
    try {
        await axios.delete(`https://donor-backend.onrender.com/delete/${id}`);
        setDeleted(!deleted);
         if (onDelete) onDelete(id);  // Call the passed function on successful deletion
      } catch (err) {
        setIsChecked(false);
       } finally {
         setIsDeleting(false);
        
        }
    }
    
  };

  return (
    <div className="flex items-center space-x-2">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
        disabled={isDeleting}
        className="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 rounded focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
      />
      {isDeleting && (
        <svg className="animate-spin h-4 w-4 text-red-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      )}

    </div>
  );
};
