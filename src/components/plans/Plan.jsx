import { useState, useEffect } from 'react';
import { useGetFoodsQuery } from '../../store';
import { useGetPackagesQuery } from '../../store';
import { useGetPlanQuery } from '../../store';
import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import { StyledPlan } from '../styles/plans/StyledPlan.styled';
// Icons
import WalletIcon from '../../assets/icons/wallet_2.svg';
import InfoIcon from '../../assets/icons/info.svg';
import KcalIcon from '../../assets/icons/kcal.svg';

function Plan() {
  const { id: itemId } = useParams();
  const { data: foods } = useGetFoodsQuery();
  const { data: packages } = useGetPackagesQuery();
  const { data: plan } = useGetPlanQuery(itemId);
  const [filteredFoods, setFilteredFoods] = useState([]);
  const [activeCategory, setActiveCategory] = useState('');

  useEffect(() => {
    filterFoods(activeCategory);
  }, [activeCategory, foods]);

  const filteredPackage = packages?.filter(
    (p) => p.plan_id === parseInt(itemId)
  );

  const filteredAllFoods = foods?.filter(
    (food) => food.plan_id === parseInt(itemId)
  );

  const filterFoods = (category) => {
    if (category === '') {
      setFilteredFoods(filteredAllFoods);
    } else {
      const filteredFoods = filteredAllFoods.filter(
        (food) =>
          food.category_id === category && food.plan_id === parseInt(itemId)
      );
      setFilteredFoods(filteredFoods);
    }
    setActiveCategory(category);
  };

  return (
    <StyledPlan>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        section
        className="plans"
      >
        <div className="container mt-4">
          <div className="row mb-3">
            <div className="col-xl-12">
              <h2 className="section-title">{plan?.title}</h2>
              <p>Lorem ipsum dolor sit amet lorem ipsum dolor sit </p>
            </div>
          </div>
          {/* Tab */}
          <div className="row">
            <div className="col-xl-12">
              <div className="selection-tabs mt-2 mb-4">
                <button
                  onClick={() => filterFoods(6)}
                  className={
                    activeCategory === 6
                      ? 'selection-btn active'
                      : 'selection-btn'
                  }
                >
                  Ana yemək
                </button>
                <button
                  onClick={() => filterFoods(7)}
                  className={
                    activeCategory === 7
                      ? 'selection-btn active'
                      : 'selection-btn'
                  }
                >
                  Garnir
                </button>
                <button
                  onClick={() => filterFoods(8)}
                  className={
                    activeCategory === 8
                      ? 'selection-btn active'
                      : 'selection-btn'
                  }
                >
                  Salat
                </button>
                <button
                  onClick={() => filterFoods(9)}
                  className={
                    activeCategory === 9
                      ? 'selection-btn active'
                      : 'selection-btn'
                  }
                >
                  Içki
                </button>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-9 col-lg-12 col-md-12">
              <div className="row">
                <div className="col-left col-md-12">
                  <div className="row">
                    {filteredFoods?.map((food) => (
                      <motion.div
                        key={food.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                      >
                        <div className="col-xl-12 mb-3">
                          {/* Card */}
                          <div className="card bg-light shadow">
                            <div className="row g-0 p-4">
                              <div className="col-md-3">
                                <img
                                  src={`/src/assets/products/${food.food_img}`}
                                  alt=""
                                  className="w-100"
                                />
                              </div>
                              <div className="col-md-9 d-flex ">
                                <div className="card-body w-100 pe-4 ps-4">
                                  <div className="card-info w-100 d-flex align-items-center justify-content-between">
                                    <h5 className="card-title">{food.title}</h5>
                                    <img src={InfoIcon} alt="" width="16" />
                                  </div>
                                  <div className="card-content mt-2">
                                    <p className="text-secondary">
                                      With only 5 ingredients, these black bean
                                      tostadas are the easiest and fastes You
                                      can always include additional toppings
                                      like corn salsa, avocado ranch
                                    </p>
                                  </div>
                                  <div className="card-footer d-flex justify-content-end">
                                    <span className="mt-1 pe-1">500</span>{' '}
                                    <img src={KcalIcon} alt="" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {/* Right */}
            <div className="col-xl-3 col-md-3 col-lg-4">
              <div className="row">
                {filteredPackage?.map((p) => (
                  <div key={p.id} className="col-12 mb-4">
                    <div className="card shadow text-center">
                      <div className="card-header bg-accent text-white">
                        {p.title}
                      </div>
                      <div className="card-body pt-4">
                        <div className="card-heading d-flex justify-content-center align-content-center">
                          <img src={WalletIcon} alt="" />
                          <span className="ms-2 text-blue">
                            Qiymət: {p.price}
                          </span>
                        </div>
                        <Link
                          to={`/package/${p.id}`}
                          className="d-block btn-outline-custom mt-3 pe-5 ps-5"
                        >
                          Paketi seç
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </StyledPlan>
  );
}

export default Plan;
