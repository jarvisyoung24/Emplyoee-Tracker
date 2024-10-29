import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <ul style={styles.navList}>
        <li style={styles.navItem}>
          <Link to="/" style={styles.link}>Candidate Search</Link>
        </li>
        {/* <li style={styles.navItem}>
          <Link to="/SavedCandidates" style={styles.link}>Saved Candidates</Link>
        </li> */}
      </ul>
    </nav>
  );
};

const styles = {
  navbar: {
    backgroundColor: '#282c34',
    padding: '1rem',
  },
  navList: {
    display: 'flex',
    listStyle: 'none',
    margin: 0,
    padding: 0,
  },
  navItem: {
    marginRight: '1rem',
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '1.2rem',
  }
};

export default Navbar;
