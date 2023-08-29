import Sidebar from '../../pages/Dashboard/layout/Sidebar';
import { StyledPayments } from '../styles/dashboard/StyledPayments.styled';

function Payments() {
  return (
    <StyledPayments>
      <div className="payments">
        <div className="container mt-4">
          <div className="row">
            <div className="col-xl-3">
              <Sidebar />
            </div>
            <div className="payments-content col-xl-8 ps-5 d-flex align-items-center justify-content-center">
              <div className="w-100">
                <div className="payments-table">
                  <table className="table table-bordered ">
                    <thead>
                      <tr>
                        <th scope="col">Kateqoriya</th>
                        <th scope="col">Paket</th>
                        <th scope="col">Qiymət</th>
                        <th scope="col">Etibarlılıq</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">Ekonom</th>
                        <td>10 günlük </td>
                        <td>35 AZN</td>
                        <td>17.01.2023 - 20.01.2023</td>
                      </tr>
                      <tr>
                        <th scope="row">Premium</th>
                        <td>10 günlük</td>
                        <td>200 AZN</td>
                        <td>17.01.2023 - 20.01.2023</td>
                      </tr>
                      <tr>
                        <th scope="row">Ekonom</th>
                        <td>20 günlük</td>
                        <td>150 AZN</td>
                        <td>17.01.2023 - 20.01.2023</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyledPayments>
  );
}

export default Payments;
