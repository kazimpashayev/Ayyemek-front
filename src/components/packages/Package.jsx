import { useState, useEffect } from 'react';
import { useGetFoodsQuery } from '../../store';
import { useGetPackageQuery } from '../../store';
import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';
import { cartSchema } from '../../validations/cartValidation';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { StyledPlan } from '../styles/plans/StyledPlan.styled';
import { useNavigate } from 'react-router-dom';
// Icons
import InfoIcon from '../../assets/icons/info.svg';
import KcalIcon from '../../assets/icons/kcal.svg';
import PlusIcon from '../../assets/icons/plus1.svg';
import { FaTrash } from 'react-icons/fa';

function Package() {
  const { id: itemId } = useParams();
  const { data: foods } = useGetFoodsQuery();
  const { data: packages } = useGetPackageQuery(itemId);
  const [selectedFood, setSelectedFood] = useState([]);
  const [filteredFoods, setFilteredFoods] = useState([]);
  const [activeCategory, setActiveCategory] = useState('');
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(cartSchema),
    shouldFocusError: false,
  });

  useEffect(() => {
    filterFoods(activeCategory);
  }, [foods]);

  const filterFoods = (category) => {
    if (category === '') {
      setFilteredFoods(foods);
    } else {
      const filteredFoods = foods?.filter(
        (food) =>
          food.category_id === category && packages.id === parseInt(itemId)
      );
      setFilteredFoods(filteredFoods);
    }
    setActiveCategory(category);
  };

  const handleClick = (food) => {
    if (!selectedFood.find((item) => item.id === food.id)) {
      setSelectedFood((prevSelectedFood) => [...prevSelectedFood, food]);
    }
  };

  const handleRemoveClick = (selected) => {
    const updatedSelect = selectedFood.filter((item) => item !== selected);
    setSelectedFood(updatedSelect);
  };

  const categories = {
    6: 'Ana Yemək',
    7: 'Garnir',
    8: 'Salat',
  };

  const renderedCart = selectedFood.map((selected) => (
    <div key={selected.id} className="cart">
      <h6 className="cart-caption">
        {categories[selected.category_id] || 'İçki'}
      </h6>
      <div className="d-flex justify-content-between">
        <h6 className="cart-title">{selected.title}</h6>
        <FaTrash
          onClick={() => handleRemoveClick(selected)}
          className="trash-icon"
        />
      </div>
      <hr className="divider" />
    </div>
  ));

  const submitForm = (data) => {
    // Orders table-ına POST edin!
    const order = [...[data], ...selectedFood];
    console.log(order);
    navigate('/checkout');
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
              <h2 className="section-title">{packages?.title}</h2>
              <p>Lorem ipsum dolor sit amet lorem ipsum dolor sit </p>
            </div>
          </div>
          {/* Tab */}
          <div className="row">
            <div className="col-xl-12">
              <div className="selection-tabs mt-1 mb-4">
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
                    {filteredFoods
                      ?.filter((food) => food.plan_id === packages?.plan_id)
                      .map((food) => (
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
                                      <h5 className="card-title">
                                        {food.title}
                                      </h5>
                                      <label
                                        htmlFor=""
                                        className="text-green ms-auto pe-1"
                                      ></label>
                                      <img src={InfoIcon} alt="" width="16" />
                                    </div>
                                    <div className="card-content mt-2">
                                      <p className="text-secondary">
                                        With only 5 ingredients, these black
                                        bean tostadas are the easiest and fastes
                                        You can always include additional
                                        toppings like corn salsa, avocado ranch
                                      </p>
                                    </div>
                                    <div className="card-footer d-flex justify-content-end">
                                      <button
                                        onClick={() => handleClick(food)}
                                        className="me-auto add-btn d-flex align-items-center"
                                        disabled={selectedFood.find(
                                          (item) => item.id === food.id
                                        )}
                                      >
                                        <img
                                          src={PlusIcon}
                                          alt=""
                                          className={`me-1 ${
                                            selectedFood.find(
                                              (item) => item.id === food.id
                                            )
                                              ? 'opacity-50'
                                              : ''
                                          }`}
                                        />
                                        <span>Əlavə et</span>
                                      </button>
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
                <div className="col-12">
                  <form onSubmit={handleSubmit(submitForm)}>
                    <div className="form-group mb-3">
                      <label htmlFor="">Çatdırılma saatı seçin</label>
                      <input
                        {...register('time', { required: true })}
                        type="time"
                        className={
                          errors.time
                            ? 'form-control p-2 is-invalid'
                            : 'form-control p-2'
                        }
                      />
                      <div className="invalid-feedback">
                        <span>{errors.time?.message}</span>
                      </div>
                    </div>
                    <div className="form-group mb-3">
                      <label htmlFor="">Ünvan</label>
                      <input
                        {...register('address', { required: true })}
                        type="text"
                        className={
                          errors.address
                            ? 'form-control p-2 is-invalid'
                            : 'form-control p-2'
                        }
                      />
                      <div className="invalid-feedback">
                        <span>{errors.address?.message}</span>
                      </div>
                    </div>
                    <div className="form-group mb-3">
                      <label htmlFor="">Əlavə qeydiniz</label>
                      <textarea
                        name=""
                        id=""
                        cols="10"
                        rows="10"
                        className="form-control"
                      ></textarea>
                    </div>
                    <div
                      className={`${
                        selectedFood.length > 0 ? 'selected-foods' : 'd-none'
                      }`}
                    >
                      <div className="card shadow pb-4">
                        <div className="card-title pt-3 ps-3 ">
                          <h5>Seçilən yeməklər</h5>
                        </div>
                        <div className="card-body">
                          {renderedCart}
                          <button
                            type="submit"
                            className="d-block text-center btn-custom w-100 mt-3"
                          >
                            Menyunu təsdiqlə
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </StyledPlan>
  );
}

export default Package;
