import './Logo.css';
import logo from '../../img/logo.svg';

export default function Logo() {
  return (
    <div className="Logo">
      <img src={logo} />
      <div>TasteBuds</div>
    </div>
  );
};