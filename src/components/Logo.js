import logoImg from '../img/logo-cropped.png';

function Logo() {
  return (
    <div className="logo">
      <img className="logo-image" src={logoImg} alt="Nails by Falguni" />
    </div>
  );
}

export default Logo;
