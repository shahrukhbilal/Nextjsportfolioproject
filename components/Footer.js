const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 mt-10">
      <div className="container mx-auto text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Shahrukh Bilal. All rights reserved.</p>
        <p className="mt-2">Built with ❤️ using Next.js & TailwindCSS</p>
      </div>
    </footer>
  );
};

export default Footer;
