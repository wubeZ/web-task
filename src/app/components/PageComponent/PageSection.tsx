"use client";

import React, { useState } from "react";
import Button from "../Button/Button";

const PageSection = () => {
  const [selectAllChecked, setAllChecked] = useState<boolean>(false);
  const [pages, setPages] = useState([
    { id: 1, name: "Page 1", checked: false },
    { id: 2, name: "Page 2", checked: false },
    { id: 3, name: "Page 3", checked: false },
    { id: 4, name: "Page 4", checked: false },
  ]);

  const handleSelectAll = () => {
    const newCheckedState = !selectAllChecked;
    setAllChecked(newCheckedState);
    setPages(pages.map(page => ({ ...page, checked: newCheckedState })));
  };

  const handleIndividualChange = (id: number) => {
    const updatedPages = pages.map(page =>
      page.id === id ? { ...page, checked: !page.checked } : page
    );
    setPages(updatedPages);
    setAllChecked(updatedPages.every(page => page.checked));
  };

  return (
    <section className="w-96 rounded-lg border border-br-secondary shadow-custom-heavy p-5">
      <div className="flex justify-between border-b-[0.7px] border-br-primary pb-4">
        <p className="text-sm text-txt-primary">All pages</p>
        <label className="relative cursor-pointer flex items-center">
          <input
            type="checkbox"
            className="sr-only"
            checked={selectAllChecked}
            onChange={() => handleSelectAll()}
          />
          <div className={`w-6 h-6 border rounded-md flex items-center justify-center relative transition-colors duration-300 
            ${selectAllChecked ? 'bg-blue-500 border-blue-500' : 'bg-white border-gray-300 hover:border-br-tertiary'} group`}>
            <svg
              className={`w-6 h-6 absolute transition-opacity duration-300  text-white ${!selectAllChecked && 'hover:text-[#878787]'} ${selectAllChecked || 'group-hover:opacity-50 opacity-0'}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M4 12l4 4L20 6" />
            </svg>
          </div>
        </label>
      </div>
      <div className="flex flex-col gap-6 border-b-[0.7px] border-br-primary py-4">
        {pages.map((page) => (
          <div key={page.id} className="flex justify-between items-center">
            <p className="text-sm text-txt-primary">{page.name}</p>
            <label className="relative cursor-pointer flex items-center">
              <input
                type="checkbox"
                className="sr-only"
                checked={page.checked}
                onChange={() => handleIndividualChange(page.id)}
              />
              <div className={`w-6 h-6 border rounded-md flex items-center justify-center relative transition-colors duration-300 
                ${page.checked ? 'bg-blue-500 border-blue-500' : 'bg-white border-gray-300 hover:border-br-tertiary'} group`}>
                <svg
                  className={`w-6 h-6 absolute transition-opacity duration-300 text-white ${!page.checked && 'hover:text-[#878787]'} ${page.checked || 'group-hover:opacity-50 opacity-0'}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M4 12l4 4L20 6" />
                </svg>
              </div>
            </label>
          </div>
        ))}
      </div>
      <div className="pt-4">
        <Button text="Done" />
      </div>
    </section>
  );
};

export default PageSection;
