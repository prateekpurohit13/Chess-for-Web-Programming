import React from "react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-2xl font-bold mb-4 md:mb-0">
            MY<span className="text-amber-700">CHESS</span>
          </div>
          {}
          <div className="flex-1"></div>
          <div className="text-sm text-gray-400 text-center">
            © {new Date().getFullYear()} MyChess by PDA
            <br />
            Made with love by Adidev, Aditya, and Prateek
          </div>
        </div>
      </div>
    </footer>
  );
}
