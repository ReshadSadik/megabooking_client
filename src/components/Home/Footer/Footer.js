import React from 'react';

const Footer = () => {
  return (
    <div>
      <div class=" mt-5 bg-dark">
        <footer class="text-center text-white">
          <div class="container">
            <section class="mt-5">
              <div class="row text-center d-flex justify-content-center pt-5">
                <div class="col-md-2">
                  <h6 class="text-uppercase font-weight-bold">
                    <a href="#!" class="text-white">
                      About us
                    </a>
                  </h6>
                </div>

                <div class="col-md-2">
                  <h6 class="text-uppercase font-weight-bold">
                    <a href="#!" class="text-white">
                      Products
                    </a>
                  </h6>
                </div>

                <div class="col-md-2">
                  <h6 class="text-uppercase font-weight-bold">
                    <a href="#!" class="text-white">
                      Awards
                    </a>
                  </h6>
                </div>

                <div class="col-md-2">
                  <h6 class="text-uppercase font-weight-bold">
                    <a href="#!" class="text-white">
                      Help
                    </a>
                  </h6>
                </div>

                <div class="col-md-2">
                  <h6 class="text-uppercase font-weight-bold">
                    <a href="#!" class="text-white">
                      Contact
                    </a>
                  </h6>
                </div>
              </div>
            </section>

            <hr class="my-5" />

            <section class="mb-5">
              <div class="row d-flex justify-content-center">
                <div class="col-lg-8">
                  <p>
                    As one of the largest and most experienced global airlines
                    throughout the COVID-19 crisis, you can rely on us to take
                    you on your next journey safely.
                  </p>
                </div>
              </div>
            </section>
          </div>

          <div class="text-center p-3">
            © 2021 Copyright:
            <a class="text-white" href="/">
              MetaBooking.com
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
