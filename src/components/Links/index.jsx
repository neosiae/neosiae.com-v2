import './links.css';

const Links = () => {
  return (
    <div className="links">
      <ul>
        <li>
          <a href="/posts">blog</a>
        </li>
        <li>
          <a href="https://github.com/neosiae" target="_blank">
            github
          </a>
        </li>
        <li>
          <a href="https://soundcloud.com/asyncftw" target="_blank">
            soundcloud
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Links;
