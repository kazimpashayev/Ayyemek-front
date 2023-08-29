import ProcessOverviewImg from '../../assets/process-overview.png';
import { StyledOverview } from '../styles/home/StyledOverview.styled';
import Step1 from '../../assets/step1.svg';
import Step2 from '../../assets/step2.svg';
import Step3 from '../../assets/step3.svg';

function ProcessOverview() {
  return (
    <StyledOverview>
      <section className="overview">
        <div className="container">
          <div className="row ">
            <div className="col-12 ">
              <div className="process-overview ">
                <div className="process-overview-title d-flex flex-column align-items-center">
                  <h1>Ay Yemək Necə İşləyİr?</h1>
                  <p>Lorem Ipsum is simply dummy text of the printing </p>
                </div>
                <div className="row mt-4">
                  <div className="col-xl-4 col-lg-4 col-md-6 col-12">
                    <div className="step step-1">
                      <img src={Step1} alt="" className="mb-2" />
                      <div className="step-number mb-1">01</div>
                      <div className="step-title">Qeydiyyatdan Keçin</div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-6 col-12 ">
                    <div className="step step-2">
                      <img src={Step2} alt="" className="mb-2" />
                      <div className="step-number mb-1">02</div>
                      <div className="step-title">
                        Paketi və yeməklərinizi seçin
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-6 col-12">
                    <div className="step step-3">
                      <img src={Step3} alt="" className="mb-2" />
                      <div className="step-number mb-1">03</div>
                      <div className="step-title">
                        Sürətli bir şəkildə çatdırılma edin
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </StyledOverview>
  );
}

export default ProcessOverview;
