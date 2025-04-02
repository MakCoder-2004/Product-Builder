"use client";

import { Listbox } from "@headlessui/react";
import { ChevronUpDownIcon } from "@heroicons/react/24/solid";
import { CheckIcon } from "@heroicons/react/24/solid";
import { ProductCategories } from "../../data/index";

interface SelectMenuProps {
  selected: typeof ProductCategories[0];
  setSelected: (category: typeof ProductCategories[0]) => void;
}

function SelectMenue({ selected, setSelected }: SelectMenuProps) {
  return (
    <Listbox value={selected} onChange={setSelected}>
      <div className="relative mt-2">
        <Listbox.Button className="grid w-full cursor-default grid-cols-1 rounded-md bg-white py-1.5 pr-2 pl-3 text-left text-gray-900 outline outline-3 outline-gray-300 focus:outline-indigo-600 sm:text-sm">
          <span className="col-start-1 row-start-1 flex items-center gap-3 pr-6">
            <img alt="" src={selected.imageURL} className="size-5 shrink-0 rounded-full" />
            <span className="block truncate">{selected.categoryName}</span>
          </span>
          <ChevronUpDownIcon aria-hidden="true" className="col-start-1 row-start-1 size-5 self-center justify-self-end text-gray-500 sm:size-4" />
        </Listbox.Button>

        <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base ring-1 shadow-lg ring-black/5 focus:outline-none sm:text-sm">
          {ProductCategories.map((category) => (
            <Listbox.Option
              key={category.id}
              value={category}
              className={({ active, selected }) =>
                `relative cursor-default py-2 pr-9 pl-3 select-none ${
                  active ? "bg-indigo-600 text-white" : "text-gray-900"
                }`
              }
            >
              {({ selected, active }) => (
                <>
                  <div className="flex items-center">
                    <img alt="" src={category.imageURL} className="size-5 shrink-0 rounded-full" />
                    <span className={`ml-3 block truncate font-medium ${
                      active ? "text-white" : "text-gray-700"
                    }`}>
                      {category.categoryName}
                    </span>
                  </div>
                  {selected && (
                    <span className={`absolute inset-y-0 right-0 flex items-center pr-4 ${
                      active ? "text-white" : "text-blue-600"
                    }`}>
                      <CheckIcon aria-hidden="true" className="size-5" />
                    </span>
                  )}
                </>
              )}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </div>
    </Listbox>
  );
}

export default SelectMenue;