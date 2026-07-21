const Footer = () => {
  return (
    <footer>
      <div className="bg-amber-100 flex justify-between items-center py-3 px-1">
        <div>
          <h2>Tanyny</h2>
          <p>Academy Ballroom · Buckhead, Atlanta</p>
        </div>
        <div>
          <div className="flex flex-col items-end">
            <a href="mailto:jmu1@hotmail.com">jmu1@hotmail.com</a>
            <a href="tel:4042598083">(404) 259-8083</a>
            <p>© {new Date().getFullYear()} Jari Muller</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
