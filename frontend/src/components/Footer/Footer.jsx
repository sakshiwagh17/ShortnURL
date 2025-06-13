import React from "react";

function Footer() {
  return (
    <footer className="bg-slate-900 w-full text-center text-sm text-slate-400 py-3 mt-10">
      © {new Date().getFullYear()} ShortnURL | Sakshi Wagh
    </footer>
  );
}

export default Footer;
