import React from 'react'

const Login = () => {

    return (
      <div className="landing">
        <div className="landing__top-container">
          <h1 className="landing__header">Which bus pass is right for you?</h1>
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
            <th>Fare Product</th>
            <th>Zones</th>
            <th>Adult</th>
            <th>Concession</th>
          </tr>
          <tr>
            <th>Single Fare</th>
            <th>1</th>
            <th>$3</th>
            <th>$1.95</th>
          </tr>
          <tr>
            <th></th>
            <th>2</th>
            <th>$4.25</th>
            <th>$2.95</th>
          </tr>
          <tr>
            <th></th>
            <th>3</th>
            <th>$5.75</th>
            <th>$3.95</th>
          </tr>
          <tr>
            <th>Stored Value</th>
            <th>1</th>
            <th>$2.40</th>
            <th>$1.95</th>
          </tr>
          <tr>
            <th></th>
            <th>2</th>
            <th>$3.45</th>
            <th>$2.95</th>
          </tr>
          <tr>
            <th></th>
            <th>3</th>
            <th>$4.50</th>
            <th>$3.95</th>
          </tr>
          <tr>
            <th>Monthly Pass</th>
            <th>1</th>
            <th>$98</th>
            <th></th>
          </tr>
          <tr>
            <th></th>
            <th>2</th>
            <th>$131</th>
            <th></th>
          </tr>
          <tr>
            <th></th>
            <th>3</th>
            <th>$177</th>
            <th>$56</th>
          </tr>
        </div>
        <div>
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