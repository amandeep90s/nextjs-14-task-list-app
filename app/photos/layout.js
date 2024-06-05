import React from "react";

const PhotosLayout = ({ children }) => {
  return (
    <div className="max-w-xl">
      <div className="mockup-code">
        <pre data-prefix="$">
          <code>npx create-next-app@latest nextjs-tutorial</code>
        </pre>
      </div>
      {children}
    </div>
  );
};

export default PhotosLayout;
