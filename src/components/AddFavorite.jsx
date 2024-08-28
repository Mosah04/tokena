import React, { useState } from "react";
import StarUnchecked from "@/icons/star-unchecked";

const AddFavorite = () => {
  const [checked, setChecked] = useState(false);
  return (
    <span
      onClick={(e) => {
        e.stopPropagation();
        setChecked((checked) => !checked);
      }}
      className="h-[20px] w-[20px]"
    >
      {checked ? (
        <img
          className="h-full w-full"
          src="/assets/icons/star-checked.svg"
          alt="Favorite"
        />
      ) : (
        <StarUnchecked className="h-full" />
      )}
    </span>
  );
};

export default AddFavorite;
