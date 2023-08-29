import { NavLink } from 'react-router-dom';
import AuthUser from '../../../components/auth/AuthUser';

// Icons
import AvatarIcon from '../../../assets/icons/user_1.svg';
import OrderIcon from '../../../assets/icons/order.svg';
import LockIcon from '../../../assets/icons/lock.svg';
import WalletIcon from '../../../assets/icons/wallet.svg';
import LogoutIcon from '../../../assets/icons/exit.svg';

function Sidebar() {
  const { token, logout } = AuthUser();
  const logoutUser = () => {
    if (token != undefined) {
      logout();
    }
  };

  return (
    <>
      <div className="card bg-body-tertiary shadow">
        <div className="card-body p-0">
          <ul className="side-menu">
            <li>
              <NavLink to="/dashboard/profile">
                <img src={AvatarIcon} alt="" width="24" className="mb-1 me-2" />
                Məlumatlarım
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/orders">
                <img src={OrderIcon} alt="" width="24" className="mb-1 me-2" />
                Aktiv Sifarişlərim
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/change_password">
                <img src={LockIcon} alt="" width="24" className="mb-1 me-2" />
                Şifrə Dəyişdir
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/payments">
                <img src={WalletIcon} alt="" width="24" className="mb-1 me-2" />
                Ödənişlərim
              </NavLink>
            </li>
            <li className="mt-5">
              <span
                role="button"
                className="logout-btn ps-3"
                onClick={logoutUser}
              >
                <img src={LogoutIcon} alt="" width="24" className="mb-1 me-2" />
                Logout
              </span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
