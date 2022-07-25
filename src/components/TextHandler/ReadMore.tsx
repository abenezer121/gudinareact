import React, { useState }  from "react"

const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className="text">
      {isReadMore ? text.slice(0, 500) : text}
      <div className="flex flex-col">
        <span
          onClick={toggleReadMore}
          className="read-or-hide uppercase text-sm"
        >
          <p className="mt-10 uppercase">
            {isReadMore ? "+ read more" : "- show less"}
          </p>
        </span>
      </div>
    </p>
  );
};

export default ReadMore;