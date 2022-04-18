import React from "react";

const Title = (props) => {
  return (
    <>
      <div class="flex flex-col text-center w-full mb-20 border-b-2 border-solid border-red-600">
        <p class="text-4xl font-bold text-center text-red-600 mx-auto ">
          {props.title}
        </p>
        <br></br>
      </div>
    </>
  );
};

export default Title;
