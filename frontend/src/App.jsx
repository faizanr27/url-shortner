import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

function App() {
  const [uri, setUri] = useState("");
  const [isValidUrl, setIsValidUrl] = useState(true);
  const [shortenedUrl, setShortenedUrl] = useState("");

  const isUrlValid = (inputUrl) => {
    try {
      new URL(inputUrl);
      return true;
    } catch (err) {
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isValidUrl) {
      try {
        const response = await fetch('/api/shorten', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ uri }),
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setShortenedUrl(data.newUrl);
      } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        alert("An error occurred while shortening the URL.");
      }
    } else {
      alert("Please enter a valid URL.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 flex flex-col justify-center items-center p-4 relative overflow-hidden">
      {/* Light effect elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-float animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-teal-500 rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-float animation-delay-4000"></div>
      </div>

      <div className="w-full max-w-md bg-gray-800 bg-opacity-30 backdrop-filter backdrop-blur-xl rounded-2xl shadow-xl p-8 space-y-6 border border-gray-700 z-10">
        <h1 className="text-3xl font-bold text-center text-gray-100 mb-8">
          Ching.ly: Your Free URL Shortener
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            className="w-full rounded-lg py-3 px-4 bg-gray-700 bg-opacity-50 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300 ease-in-out"
            type="url"
            placeholder="https://example.com/my-long-url"
            value={uri}
            onBlur={(e) => {
              const isValid = isUrlValid(e.target.value);
              setIsValidUrl(isValid);
            }}
            onChange={(e) => {
              setUri(e.target.value);
              if (!isValidUrl) {
                setIsValidUrl(true);
              }
            }}
          />
          {!isValidUrl && (
            <p className="text-red-400 text-sm">Invalid URL. Please enter a valid one.</p>
          )}
          <Button
            className="w-full rounded-lg py-3 bg-black bg-opacity-30 backdrop-filter backdrop-blur-xl hover:bg-opacity-25 text-gray-100 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="submit"
          >
            Shorten URL
          </Button>
        </form>
      </div>
      {shortenedUrl && (
        <div className="mt-8 p-4 bg-gray-800 bg-opacity-30 backdrop-filter backdrop-blur-xl rounded-xl shadow-lg border border-gray-700 z-10">
          <p className="text-gray-100">
            Shortened URL:{" "}
            <a
              href={uri}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 underline"
            >
              {shortenedUrl}
            </a>
          </p>
        </div>
      )}
    </div>
  );
}

export default App;