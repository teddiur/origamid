import React from "react";

export const useHead = (title = "") => {
  if (title) title = " | " + title;
  React.useEffect(() => {
    document.title = "Origamid" + title;
  }, [title]);
};
