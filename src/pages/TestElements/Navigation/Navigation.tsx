import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav
      style={{
        borderBottom: 'solid 1px',
        paddingBottom: '1rem',
      }}
    >
      <Link to="/"> Main </Link>
      <Link to="/users">| Users </Link>
      <Link to="/about">| About </Link>
    </nav>
  );
};

export default Navigation