import React from 'react';

const Pricing = () => {
  return (
    <div className="bg my-5">
      <div class="container border fw-bold border-2">
        <div class="row">
          <div class="col-md-4 border border-1 rounded  border-primary p-3">
            <div class="panel panel-success">
              <div class="panel-heading">
                <h4 class="text-center">Business Class</h4>
              </div>
              <div class="panel-body text-center">
                <p class="lead">
                  <strong>starts from $300</strong>
                </p>
              </div>
              <ul class="list-group list-group-flush text-center">
                <li class="list-group-item">
                  Personal Use
                  <span class="glyphicon glyphicon-ok pull-right"></span>
                </li>
                <li class="list-group-item">
                  up to 30kg
                  <span class="glyphicon glyphicon-remove pull-right"></span>
                </li>
                <li class="list-group-item">
                  1 person
                  <span class="glyphicon glyphicon-remove pull-right"></span>
                </li>
                <li class="list-group-item">
                  no membership Support
                  <span class="glyphicon glyphicon-remove pull-right"></span>
                </li>
              </ul>
              <div class="panel-footer">
                <div class="btn btn-lg btn-block btn-success">Purchase</div>
              </div>
            </div>
          </div>
          <div class="col-md-4 border border-2 rounded  border-success p-3">
            <div class="panel panel-info">
              <div class="panel-heading">
                <h4 class="text-center">First Class</h4>
              </div>
              <div class="panel-body text-center">
                <p class="lead">
                  <strong>starts from $700</strong>
                </p>
              </div>
              <ul class="list-group list-group-flush text-center">
                <li class="list-group-item">
                  Personal Use
                  <span class="glyphicon glyphicon-ok pull-right"></span>
                </li>
                <li class="list-group-item">
                  up to 40kg
                  <span class="glyphicon glyphicon-ok pull-right"></span>
                </li>
                <li class="list-group-item">
                  1 person
                  <span class="glyphicon glyphicon-remove pull-right"></span>
                </li>
                <li class="list-group-item">
                  membership Support
                  <span class="glyphicon glyphicon-ok pull-right"></span>
                </li>
              </ul>
              <div class="panel-footer">
                <div class="btn btn-lg btn-block btn-info">Purchase</div>
              </div>
            </div>
          </div>
          <div class="col-md-4 border border-1 rounded border-danger p-3">
            <div class="panel panel-primary">
              <div class="panel-heading">
                <h4 class="text-center">Premium with Lounge</h4>
              </div>
              <div class="panel-body text-center">
                <p class="lead">
                  <strong>more than $1000</strong>
                </p>
              </div>
              <ul class="list-group list-group-flush text-center">
                <li class="list-group-item">
                  Personal Use
                  <span class="glyphicon glyphicon-ok pull-right"></span>
                </li>
                <li class="list-group-item">
                  50 kg plus
                  <span class="glyphicon glyphicon-ok pull-right"></span>
                </li>
                <li class="list-group-item">
                  2 person
                  <span class="glyphicon glyphicon-ok pull-right"></span>
                </li>
                <li class="list-group-item">
                  membership Support
                  <span class="glyphicon glyphicon-ok pull-right"></span>
                </li>
              </ul>
              <div class="panel-footer">
                <div class="btn btn-lg btn-block btn-primary">Purchase</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
