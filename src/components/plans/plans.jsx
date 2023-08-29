import { StyledPlans } from '../styles/plans/StyledPlans.js';
import { useGetPlansQuery } from '../../store/index.js';
import { motion } from 'framer-motion';
import EkonomImg from '../../assets/plan.png';
import ArrowLeft from '../../assets/stroke-left.svg';
import ArrowRight from '../../assets/stroke-right.svg';
import { Link } from 'react-router-dom';

function Plans() {
  const { data: plans } = useGetPlansQuery();

  return (
    <StyledPlans>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="plans"
      >
        <div className="container">
          <div className="row">
            <div className="plans-title mt-5">
              <h2>Kateqoriya</h2>
              <p>
                Aşağıdakı paketlərdən birini seçərək sifarişinizi təsdiqləyə
                bilərsiniz
              </p>
            </div>
          </div>
          <div className="plans-content row justify-content-around">
            {plans?.map((plan) => (
              <div key={plan.id} className="col-xl-3 col-lg-3 col-md-4">
                <div className="card border-0">
                  <img src={EkonomImg} alt="the product" />
                  <div className="card-body">
                    <h2
                      className={`text-center ${
                        plan.title === 'Ekonom'
                          ? 'text-green'
                          : plan.title === 'Gold'
                          ? 'text-yellow'
                          : plan.title === 'Premium'
                          ? 'text-red'
                          : ''
                      }`}
                    >
                      {plan.title}
                    </h2>
                    <p className="text-center">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem{' '}
                    </p>
                    <div className="text-center mt-4">
                      <Link
                        to={`/plan/${plan.id}`}
                        className="btn btn-danger w-75 p-2"
                      >
                        Daha Ətraflı
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="row mt-7">
            <div className="col-12">
              <nav
                aria-label="Page navigation example"
                className="d-flex justify-content-center"
              >
                <ul className="pagination">
                  <li className="page-item">
                    <a className="page-link arrow-left rounded-3 mx-2" href="#">
                      <img src={ArrowLeft} alt="the arrow" />
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link border-0" href="#">
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link border-0" href="#">
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link border-0" href="#">
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link border-0" href="#">
                      4
                    </a>
                  </li>
                  <li className="page-item">
                    <a
                      className="page-link arrow-right rounded-3 mx-2"
                      href="#"
                    >
                      <img src={ArrowRight} alt="the arrow" />
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </motion.div>
    </StyledPlans>
  );
}

export default Plans;
