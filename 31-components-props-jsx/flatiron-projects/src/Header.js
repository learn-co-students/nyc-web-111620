import React from "react";

function Header() {
  return <h1>Header</h1>;
}

// but actually:
// function Header() {
//   return /*#__PURE__*/ React.createElement("h1", null, "Header");
// }

export default Header;
