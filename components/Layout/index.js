import './layout.scss';
import Header from '../Header';

const Layout = props => (
  <div className="content">
    <Header />
    {props.children}
  </div>
);

export default Layout;
