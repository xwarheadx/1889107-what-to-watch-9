import Logo from '../logo/logo';
export default function Footer(): JSX.Element {
  return (
    <footer className="page-footer">
      <Logo isLinkLight/>

      <div className="copyright">
        <p>© 2019 What to watch Ltd.</p>
      </div>
    </footer>
  );
}
