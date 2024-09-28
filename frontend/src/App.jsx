// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { useState } from "react";

// function App() {
//   const [uri, setUri] = useState("");
//   const [isValidUrl, setIsValidUrl] = useState(true);
//   const [shortenedUrl, setShortenedUrl] = useState("");

//   const isUrlValid = (inputUrl) => {
//     try {
//       new URL(inputUrl);
//       return true;
//     } catch (err) {
//       return false;
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (isValidUrl) {
//       try {
//         const response = await fetch("/api/shorten", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({ uri }),
//         });

//         if (!response.ok) {
//           throw new Error("Network response was not ok");
//         }

//         const data = await response.json();
//         setShortenedUrl(data.newUrl);
//       } catch (error) {
//         console.error("There was a problem with the fetch operation:", error);
//         alert("An error occurred while shortening the URL.");
//       }
//     } else {
//       alert("Please enter a valid URL.");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center p-4 font-handwriting">
//       <h1 className="text-5xl font-extrabold text-center text-black mb-8 font-doodle">URL Shortener</h1>
//       <div className="w-full max-w-md bg-gray-50 rounded-lg shadow-md p-8 space-y-6 border border-gray-200 border-dashed">
//         <h2 className="text-3xl font-extrabold font-doodle text-center text-black mb-8">
//           Short.sy: Your Free URL Shortener
//         </h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <Input
//             className="w-full rounded-lg py-3 px-4 bg-gray-100 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-300 transition duration-300 ease-in-out font-handwriting"
//             type="url"
//             placeholder="https://example.com/my-long-url"
//             value={uri}
//             onBlur={(e) => {
//               const isValid = isUrlValid(e.target.value);
//               setIsValidUrl(isValid);
//             }}
//             onChange={(e) => {
//               setUri(e.target.value);
//               if (!isValidUrl) {
//                 setIsValidUrl(true);
//               }
//             }}
//           />
//           {!isValidUrl && (
//             <p className="text-red-500 text-sm">Invalid URL. Please enter a valid one.</p>
//           )}
//           <Button
//             className="w-full text-2xl rounded-lg py-3 bg-black text-white transition duration-300 ease-in-out hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-300 font-doodle"
//             type="submit"
//           >
//             Shorten URL
//           </Button>
//         </form>
//       </div>
//       {shortenedUrl && (
//         <div className="mt-8 p-4 bg-white rounded-lg shadow-md border border-gray-200 border-dashed">
//           <p className="text-black font-extrabold text-xl font-doodle">
//             Shortened URL:{" "}
//             <a
//               href={uri}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-blue-600 hover:text-blue-800 underline font-sans text-md"
//             >
//               {shortenedUrl}
//             </a>
//           </p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./pages/Singup";
import Signin from "./pages/Signin";
import ProtectedRoute from "./pages/ProtectedRoute";
// import Main from "./components/layout/main";
// import Navbar from "./components/layout/Navbar";
import Home from "./components/layout/Home";

function App() {
  const token = localStorage.getItem('token'); // manage authentication state
  // console.log(token)

  return (
    <Router>
      {/* <Navbar/> */}
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route
          path="/home"
          element={
            <ProtectedRoute token={token}>
              <Home />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;

