import { useState } from 'react';
import AuthUser from '../auth/AuthUser';
import Swal from 'sweetalert2';
import Sidebar from '../../pages/Dashboard/layout/Sidebar';
import { StyledChangePassword } from '../styles/dashboard/StyledChangePassword.styled';

function ChangePassword() {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const { http } = AuthUser();

  const resetForm = () => {
    setCurrentPassword('');
    setConfirmNewPassword('');
    setNewPassword('');
  };

  const handleChangePassword = async () => {
    try {
      const response = await http.post(
        'http://127.0.0.1:8000/api/change-password',
        {
          current_password: currentPassword,
          new_password: newPassword,
          new_password_confirmation: confirmNewPassword,
        }
      );

      Swal.fire({
        icon: 'success',
        title: 'Uğurlu',
        text: response.data.message,
      });

      resetForm();
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Xəta!',
        text: 'Bir xəta baş verdi',
      });
      // Developer üçün xəta səbəbi
      console.error(error);
    }
  };

  return (
    <StyledChangePassword>
      <div className="container mt-4">
        <div className="row">
          <div className="col-xl-3">
            <Sidebar />
          </div>
          <div className="panel-container col-xl-8 ps-5">
            <div className="row d-flex justify-content-center mt-4">
              <div className="col-xl-6">
                <div className="panel">
                  <div className="panel-content">
                    <div className="form-group mb-3">
                      <label htmlFor="">Köhnə şifrə</label>
                      <input
                        type="password"
                        value={currentPassword}
                        onChange={(e) => setCurrentPassword(e.target.value)}
                        className="form-control"
                      />
                    </div>
                    <div className="form-group mb-3">
                      <label htmlFor="">Yeni şifrə</label>
                      <input
                        type="password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        className="form-control"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="">Yeni şifrə təkrar</label>
                      <input
                        type="password"
                        value={confirmNewPassword}
                        onChange={(e) => setConfirmNewPassword(e.target.value)}
                        className="form-control"
                      />
                    </div>
                    <button
                      onClick={handleChangePassword}
                      className="btn-custom pe-4 ps-4 w-100 mt-4"
                    >
                      Şifrə dəyişdir
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyledChangePassword>
  );
}

export default ChangePassword;
