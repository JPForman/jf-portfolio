import React, { useState } from "react";

import "../css/neato.css";

const Neato = () => {
  const [backColor, setBackColor] = useState("61304B");
  const [blockNumber, setBlockNumber] = useState(5);

  const coolColors = ["5C0029", "61304B", "857C8D", "94BFBE", "ACF7C1", '785964', '82A7A6', '000000', '9ED0E6', 'B796AC', 'E56399', 'DE6E4B', '7FD1B9', '7A6563'];

  const blocks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

  const blockClickHandler = () => {
    const randBlock = Math.floor(Math.random() * 16) + 1  
    const randColor = Math.floor(Math.random() * coolColors.length)  

    setBackColor(coolColors[randColor]);
    setBlockNumber(randBlock);
  }

  return (
    <div className="neato">
      {blocks.map((block, i) =>
        blockNumber === block ? (
          <div
            className="neato-block selected-block"
            style={{ backgroundColor: `#${backColor}` }}
            onClick={blockClickHandler}
            key={i}
          ></div>
        ) : (
          <div className="neato-block" key={i}></div>
        )
      )}
    </div>
  );
};

export default Neato;
