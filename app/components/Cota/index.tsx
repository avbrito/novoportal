import { useState } from "react";
import dynamic from "next/dynamic";
import { ArrowLeftBlue } from "../Icons/ArrowLeftBlue";
import { useRouter } from "next/navigation";


export default function Cota() {
  const [year, setYear] = useState("2025");
  const router = useRouter();
  const handleRedirect = () => {
    router.back();
  };

  return (
    <div className="min-h-screen bg-white px-6 py-4 text-blue-black">
      <div className="flex items-center mb-6">
        <span className="mt-1 cursor-pointer" onClick={handleRedirect}>
          <ArrowLeftBlue />
        </span>
        <h1 className="text-2xl font-sans text-blue-black pl-2">
          Cota Capital
        </h1>
      </div>

      <div className="mb-4">
        <label htmlFor="year" className="block text-gray-700 font-medium mb-1">
          Ano
        </label>
        <select
          id="year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          className="border border-gray-300 rounded-md p-2"
        >
          <option>2025</option>
          <option>2024</option>
          <option>2023</option>
        </select>
      </div>

      <div className="border rounded-lg overflow-hidden shadow">
        <iframe
          src="https://link.testfile.org/PDF10MB"
          className="w-full h-[800px] border border-gray-300 dark:border-gray-800 rounded-md shadow-md"
        ></iframe>
      </div>
    </div>
  );
}
