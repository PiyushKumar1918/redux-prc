import React from "react";

function Header(props) {
  console.warn("home",props.data)
  return (
    <div>
        <div className="add-to-cart">
<span>{props.data.length}</span>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLQ69DfVC26sxNeVzy7-XYk1NXWPpXaGpGLA&usqp=CAU"/>

        </div>
     
    </div>
  );
}
export default Header;
