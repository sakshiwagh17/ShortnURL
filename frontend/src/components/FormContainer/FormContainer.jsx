import React, { useState } from "react";

const FormContainer = () => {
  const [fullUrl,setFullUrl]=useState("");
  const handleSubmit=async (e)=>{
    e.preventDefault();
    try {
      
    } catch (error) {
      
      
    }


  }
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="bg-slate-800 rounded-2xl shadow-md max-w-2xl mx-auto">
        <div className="p-10">
          <h2 className="text-center text-3xl font-semibold text-white mb-2">
            ShortnURL
          </h2>
          <p className="text-center text-slate-300 text-sm mb-1">
            Paste your long URL and shorten it instantly.
          </p>
          <p className="text-center text-slate-400 text-sm mb-6">
            Clean, simple, and free URL shortener for quick sharing.
          </p>

          <form className="flex flex-col sm:flex-row items-center gap-3 justify-center" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Paste your link here..."
              value={fullUrl}
              onChange={(e)=>setFullUrl(e.target.value)}
              className="w-full sm:w-2/3 px-4 py-2 rounded-xl text-sm bg-slate-700 text-white placeholder-slate-400 focus:outline-none focus:ring-2"
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-400 text-white hover:text-black px-5 py-2 rounded-xl text-sm">
              Shorten URL
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormContainer;
