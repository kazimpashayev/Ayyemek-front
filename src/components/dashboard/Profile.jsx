import Sidebar from '../../pages/Dashboard/layout/Sidebar';
import { StyledProfile } from '../styles/dashboard/StyledProfile.styled.js';

function Profile() {
  return (
    <StyledProfile>
      <div className="profile">
        <div className="container mt-4">
          <div className="row">
            {/* Menu */}
            <div className="col-xl-3">
              <Sidebar />
            </div>
            {/* Content */}
            <div className="profile-content col-xl-8 ps-5">
              <div className="card bg-body-tertiary shadow">
                <div className="card-body p-5">
                  <h3 className="card-title">Seçdiyiniz Kateqoriya</h3>
                  <div className="has-plan mt-3">
                    <div className="selected-plan">
                      <h5>Ekonom (10 günlük) </h5>
                      <label className="small-text text-secondary me-auto ps-3">
                        etibarlıdır 17 Yanvar 2023 - 27 Yanvar 2023
                      </label>
                      <button className="btn btn-danger">Paketi yenilə</button>
                    </div>
                  </div>
                  <button className="mt-3 btn btn-add">
                    <svg
                      width="26"
                      height="26"
                      viewBox="0 0 26 26"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.0606 1.12231C8.08951 1.44731 4.55514 3.71216 2.59498 7.19575C0.949669 10.1207 0.639903 13.7008 1.74693 16.9051C2.336 18.6012 3.20943 20.0079 4.48912 21.318C8.0692 24.9895 13.5891 25.9543 18.2051 23.7149C20.6985 22.5012 22.7653 20.3684 23.8672 17.875C25.6852 13.7668 25.0962 9.12036 22.3133 5.57583C21.6583 4.74301 20.3583 3.56489 19.4493 2.98598C18.4387 2.34106 17.1844 1.78755 16.0723 1.49809C15.2294 1.27466 14.6657 1.18325 13.8126 1.11723C13.0508 1.06137 12.802 1.06137 12.0606 1.12231ZM13.3962 6.5813C13.6196 6.6727 13.8379 6.87075 13.9547 7.08403C14.0309 7.21606 14.0462 7.52075 14.0665 9.57231L14.0919 11.9082L16.4278 11.9336C18.9821 11.959 18.9008 11.9489 19.2055 12.2739C19.5915 12.6801 19.5915 13.32 19.2055 13.7262C18.9008 14.0512 18.9821 14.0411 16.4278 14.0665L14.0919 14.0918L14.0665 16.4278C14.0411 18.9821 14.0512 18.9008 13.7262 19.2055C13.32 19.5915 12.6801 19.5915 12.2739 19.2055C11.9489 18.9008 11.959 18.9821 11.9337 16.4278L11.9083 14.0918L9.57232 14.0665C7.01803 14.0411 7.09928 14.0512 6.79459 13.7262C6.40865 13.32 6.40865 12.6801 6.79459 12.2739C7.09928 11.9489 7.01803 11.959 9.57232 11.9336L11.9083 11.9082L11.9337 9.57231C11.959 7.01801 11.9489 7.09926 12.2739 6.79458C12.5735 6.5102 13.0254 6.42387 13.3962 6.5813Z"
                        fill="#F75C03"
                      />
                    </svg>
                    <span className="ms-2">Yeni paket əlavə et</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyledProfile>
  );
}

export default Profile;
