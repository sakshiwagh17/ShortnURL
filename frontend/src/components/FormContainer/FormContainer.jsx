import React from "react";

const FormContainer = () => {
  return (
    <div className="container mx-auto p-2">
      <div className="bg-slate-600 rounded-xl ">
        <div className="h-full w-full rounded-xl p-14">
          <h2 className="text-center text-2xl pb-2 text-white">URL Shortner</h2>
          <p className="text-center text-white pb-2 text-sm">
            Paste your untidy link to Shorten it!
          </p>
          <p className="text-center text-white pb-4 text-sm">
            Free tool to shorten a url or reduce link. Use our Url Shortner to
            create a short & neat link making it easy to use.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FormContainer;
