import { Github } from 'lucide-react'
const Footer = () => {


  return (
    <>
<footer className="text-center px-6 py-2 flex flex-row justify-center w-[90%] mx-auto gap-4">
  <p className="sm:text-xl xs:text-md  text-black font-bold font-doodle flex items-center">
    Built with
    <span className="inline-flex items-center mx-2">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heart duration-200 hover:fill-red-500">
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
      </svg>
    </span>
    by Faizan
  </p>
  <a href="https://github.com/faizanr27"><Github  className="mr-2 h-8 w-8" /></a>

</footer>

    </>
  );
};

export default Footer;
