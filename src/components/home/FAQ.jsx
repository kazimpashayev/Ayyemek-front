import { StyledFAQ } from '../styles/home/StyledFAQ.styled';

function FAQ() {
  return (
    <StyledFAQ>
      <section className="faq">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-8">
              <div className="faq">
                <div className="faq-title d-flex flex-column align-items-center">
                  <h1>Tez-tez Soruşulan Suallar</h1>
                  <p>Lorem Ipsum is simply dummy text of the printing </p>
                </div>
                <div className="accordion mt-3" id="accordionExample">
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseOne"
                          aria-expanded="false"
                          aria-controls="collapseOne"
                      >
                        <h6 className="fw-bold">
                          Lorem ipsum dolor sir amet ipsum?
                        </h6>
                      </button>
                    </h2>
                    <div
                        id="collapseOne"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>
                          Yet bed any for assistance indulgence unpleasing. Not
                          thoughts all exercise blessing. Indulgence way
                          everything joy alteration boisterous the attachment.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                      >
                        <h6 className="fw-bold">
                          Lorem ipsum dolor sir amet ipsum?
                        </h6>
                      </button>
                    </h2>
                    <div
                        id="collapseTwo"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>
                          Yet bed any for assistance indulgence unpleasing. Not
                          thoughts all exercise blessing. Indulgence way
                          everything joy alteration boisterous the attachment.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                      >
                        <h6 className="fw-bold">
                          Lorem ipsum dolor sir amet ipsum?
                        </h6>
                      </button>
                    </h2>
                    <div
                        id="collapseThree"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>
                          Yet bed any for assistance indulgence unpleasing. Not
                          thoughts all exercise blessing. Indulgence way
                          everything joy alteration boisterous the attachment.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseFour"
                          aria-expanded="false"
                          aria-controls="collapseFour"
                      >
                        <h6 className="fw-bold">
                          Lorem ipsum dolor sir amet ipsum?
                        </h6>
                      </button>
                    </h2>
                    <div
                        id="collapseFour"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>
                          Yet bed any for assistance indulgence unpleasing. Not
                          thoughts all exercise blessing. Indulgence way
                          everything joy alteration boisterous the attachment.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </StyledFAQ>
  );
}

export default FAQ;
