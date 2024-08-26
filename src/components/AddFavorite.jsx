import React, { useState } from "react";
import StarUnchecked from "@/icons/star-unchecked";

const AddFavorite = () => {
  const [checked, setChecked] = useState(false);
  return (
    <span
      onClick={() => {
        setChecked((checked) => !checked);
      }}
    >
      {checked ? (
        <img src="/assets/icons/star-checked.svg" alt="Favorite" />
      ) : (
        <StarUnchecked />
      )}
    </span>
  );
};

export default AddFavorite;
