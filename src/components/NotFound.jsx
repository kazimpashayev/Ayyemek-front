import { Link } from 'react-router-dom';
import notFound from '../assets/not_found.svg';

function NotFound() {
  return (
    <div className="container">
      <div className="row d-flex justify-content-center">
        <div className="col-xl-12 text-center mt-4">
          <img src={notFound} alt="" />
          <h3 className="mt-4">Səhifə tapılmadı..</h3>
          <span>Əsas səhifəyə </span>
          <Link to="/">QAYIT</Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
