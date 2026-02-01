import React from "react";

/* React.createElement ქმნის ელემენტს jsx-ში jsx-ის გამოყენების გარეშე js ფაილიდან */
const heading = React.createElement(
  "h1",
  null,
  "Hello without JSX"
);

export default heading;