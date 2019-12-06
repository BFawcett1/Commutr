import React from 'react'

const Login = () => {

    return (
      <div className="landing">
        <div className="landing__tablet-container">
          <div className="landing__top-container">
            <h1 className="landing__header">
              Which bus pass is right for you?
            </h1>
            <p className="landing__paragraph">
              There are a few different options for purchasing a buss pass. With
              single fare, stored value, and monthly pass options it can be
              confusing to determine which is right for you. You must also
              consider how many zones you travel regularly. This site will help
              you navigate the public transit system and choose the right option
              for you.
            </p>
          </div>
          <div mid className="landing__mid-container">
            <h1 mid className="landing__header">
              Pricing
            </h1>
            <tr>
              <th className="landing__table-row">Fare Product</th>
              <th className="landing__table-row">Zones</th>
              <th className="landing__table-row">Adult</th>
              <th className="landing__table-row">Concession</th>
            </tr>
            <tr>
              <th className="landing__table-row">Single Fare</th>
              <th className="landing__table-row">1</th>
              <th className="landing__table-row">$3</th>
              <th className="landing__table-row">$1.95</th>
            </tr>
            <tr>
              <th className="landing__table-row"></th>
              <th className="landing__table-row">2</th>
              <th className="landing__table-row">$4.25</th>
              <th className="landing__table-row">$2.95</th>
            </tr>
            <tr>
              <th className="landing__table-row"></th>
              <th className="landing__table-row">3</th>
              <th className="landing__table-row">$5.75</th>
              <th className="landing__table-row">$3.95</th>
            </tr>
            <tr>
              <th className="landing__table-row">Stored Value</th>
              <th className="landing__table-row">1</th>
              <th className="landing__table-row">$2.40</th>
              <th className="landing__table-row">$1.95</th>
            </tr>
            <tr>
              <th className="landing__table-row"></th>
              <th className="landing__table-row">2</th>
              <th className="landing__table-row">$3.45</th>
              <th className="landing__table-row">$2.95</th>
            </tr>
            <tr>
              <th className="landing__table-row"></th>
              <th className="landing__table-row">3</th>
              <th className="landing__table-row">$4.50</th>
              <th className="landing__table-row">$3.95</th>
            </tr>
            <tr>
              <th className="landing__table-row">Monthly Pass</th>
              <th className="landing__table-row">1</th>
              <th className="landing__table-row">$98</th>
              <th className="landing__table-row"></th>
            </tr>
            <tr>
              <th className="landing__table-row"></th>
              <th className="landing__table-row">2</th>
              <th className="landing__table-row">$131</th>
              <th className="landing__table-row"></th>
            </tr>
            <tr>
              <th className="landing__table-row"></th>
              <th className="landing__table-row">3</th>
              <th className="landing__table-row">$177</th>
              <th className="landing__table-row">$56</th>
            </tr>
          </div>
        </div>
        <div className="landing__bottom-container">
          <h1 className="landing__header">Decision Tools</h1>
          <p className="landing__paragraph">
            To make your transit pass decisions easier you can access
            visualizations here that will tell you how much each option will
            cost depending on how many trips you take per month. If you’re not
            sure how many trips you take, you can use the trip tracking feature
            to keep a log of all your trips to help you make informed decisions
            in the future.
          </p>
        </div>
      </div>
    );
}

export default Login;