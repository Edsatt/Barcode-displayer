import React from 'react';

function barcode({src}) {
    return (
      <div>
        <img src={require("./assets/" +src +".png")}/>
      </div>
    );
};
export default barcode;
