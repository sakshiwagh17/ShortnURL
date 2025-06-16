import axios from "axios";
import React from "react";
import { HiMiniClipboardDocument } from "react-icons/hi2";
import { MdDelete } from "react-icons/md";

const DataTable = ({ data, updateRelod }) => {
  const renderTableData = () => {
    if (!data.length) {
      return (
        <tr>
          <td colSpan="4" className="text-center text-white py-6">
            No data available
          </td>
        </tr>
      );
    }

    return data.map((item) => (
      <tr
        key={item._id}
        className="border-b text-white bg-gray-600 hover:bg-white-900"
      >
        <td className="px-6 py-6 break-words max-w-xs">
          <a href={item.fullUrl} target="_blank" rel="noreferrer noopener">
            {item.fullUrl}
          </a>
        </td>
        <td className="px-6 py-6 break-words max-w-xs text-blue-300 hover:underline">
          <a
            href={`http://localhost:5001/api/shorturl/${item.shortUrl}`}
            target="_blank"
            rel="noreferrer noopener"
          >
            {item.shortUrl}
          </a>
        </td>
        <td className="px-6 py-6 text-center">{item.clicks}</td>
        <td className="px-6 py-6">
          <div className="flex items-center gap-4 justify-start">
            <button
              onClick={() => copyToClipboard(item.shortUrl)}
              className="text-blue-400 text-xl hover:text-blue-600 transition duration-200 cursor-pointer"
              title="Copy short URL"
            >
              <HiMiniClipboardDocument />
            </button>
            <button
              onClick={() => deleteUrl(item._id)}
              className="text-red-400 text-2xl hover:text-red-600 transition duration-200 cursor-pointer"
              title="Delete URL"
            >
              <MdDelete />
            </button>
          </div>
        </td>
      </tr>
    ));
  };

  const copyToClipboard = async (shortUrl) => {
    const fullShortUrl = `http://localhost:5001/api/shorturl/${shortUrl}`;
    try {
      await navigator.clipboard.writeText(fullShortUrl);
      alert(`URL copied to clipboard: ${fullShortUrl}`);
    } catch (error) {
      console.error("Failed to copy URL:", error);
      alert("Failed to copy URL.");
    }
  };

  const deleteUrl = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this URL?"
    );
    if (!confirmDelete) return;

    try {
      const response = await axios.delete(
        `http://localhost:5001/api/shorturl/${id}`
      );
      console.log("Deleted:", response.data);
      alert("URL deleted successfully!");
      updateRelod(); // Trigger table reload
    } catch (error) {
      console.error("Failed to delete:", error);
      alert("Failed to delete URL. Please try again.");
    }
  };

  return (
    <div className="container mx-auto p-5 pt-2 pb-10">
      <div className="relative overflow-auto shadow-sm sm:rounded-lg">
        <table className="w-full table-fixed text-sm text-left bg-gray-500">
          <thead className="text-md text-sm text-gray-100 bg-slate-700">
            <tr>
              <th className="px-6 py-3">Full URL</th>
              <th className="px-6 py-3">Short URL</th>
              <th className="px-6 py-3 text-center">Clicks</th>
              <th className="px-6 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>{renderTableData()}</tbody>
        </table>
      </div>
    </div>
  );
};

export default DataTable;
