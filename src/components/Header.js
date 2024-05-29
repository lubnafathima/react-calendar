const Header = () => {
  const today = new Date();
  const currentMonth = today.toLocaleString('default', { month: 'long' });
  const currentYear = today.getFullYear();

  return (
    <div className="header">
      <p className="header_para">
        {currentMonth}, {currentYear}
      </p>
      <button className="header_today">Today</button>
    </div>
  );
};
export default Header;