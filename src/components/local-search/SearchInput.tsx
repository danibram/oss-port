import { SearchIcon } from "@primer/octicons-react";
import React, { FunctionComponent } from "react";
import debouncePromise from "../../utils/debouncePromise";

type Props = {
  refine: (search: string) => void;
  debounceDelay?: number;
};

const SearchInput: FunctionComponent<Props> = ({
  refine,
  debounceDelay = 300,
}) => {
  const debounceRefine = debouncePromise(refine, debounceDelay);
  return (
    <form className="mb-4 relative mx-auto max-w-full" style={{ width: 400 }}>
      <label className="hidden" aria-hidden htmlFor="search">
        Search for open-source projects
      </label>
      <input
        id="search"
        type="search"
        className="mx-auto border border-black-100 bg-black-50 rounded p-2 pl-9 block mb-2 text-black-300 text-sm w-full"
        placeholder="Find your next open-source project"
        onChange={(e) => debounceRefine(e.target.value)}
      />
      <SearchIcon
        size={16}
        className="absolute top-1/2 -mt-2 left-3 text-black-200 pointer-events-none"
      />
    </form>
  );
};

export default SearchInput;