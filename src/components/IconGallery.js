import React from "react";

function IconGallery({ icons }) {
  return (
    <div className="d-flex">
       {icons.map((icon, index) => {
          const IconComponent = icon.component;
          return (
            <div key={index} className="my-1 mx-1 icon-container">
              <IconComponent size={30} color={icon.color} />
            </div>
          );
        })}
    </div>
  );
}

export default IconGallery;
