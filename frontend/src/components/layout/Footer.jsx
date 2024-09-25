
const Footer = () => {


  return (
    <>
      <footer className="bg-gray-100 text-he py-12 px-6 md:px-12 flex flex-col items-center rounded-t-lg shadow-lg"
      >
          <p className="text-xl text-black font-bold font-doodle">
            © {new Date().getFullYear()} Faizan Raza. All rights reserved.
          </p>
      </footer>
    </>
  );
};

export default Footer;
