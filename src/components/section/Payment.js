import React from 'react';
import '../css/payment.css'


function Payment() {
    return (
      <div class="col-md-8 col-sm-12 well payment-container">
        <div className="login-form">
        <legend><underline>Payment Details</underline></legend>
      <ul class="nav left nav-pills bg-light">
        <li class="active"><a data-toggle="pill" href="#home"><i class="fa fa-credit-card"></i> Debit/Credit Card</a></li>
        <li><a data-toggle="pill" href="#menu1"><i class="fa fa-paypal"></i>  Paypal</a> </li>
        <li><a data-toggle="pill" href="#menu2"><i class="fa fa-university"></i>  UPI</a></li>
      </ul>
    <form action="" class="center" method="post">
        <h2 className="pull-left">We Accept</h2>     

        <div class="form-group">
          <label class="col-sm-2 control-label" for="textinput">Name on Card</label>
          <div class="col-sm-9">
            <input type="text" placeholder="Name on Card" class="form-control" required/>
          </div>
        </div>
      
        <div class="form-group">
          <label class="col-sm-2 control-label" for="textinput">Card Number</label>
          <div class="col-sm-9">
            <input type="text" placeholder="Card Number" class="form-control" required/>
          </div>
        </div>

        <div class="form-group">
          <label class="col-sm-2 control-label" for="textinput">Expiry</label>
          <div class="col-sm-2">
            <input type="number" class="form-control" placeholder="MM" name=""/>
          </div>

          <div class="col-sm-2">
            <input type="text" placeholder="YY" class="form-control" required/>
          </div>

          <label class="col-sm-3 control-label" for="textinput">CVV</label>
          <div class="col-sm-2">
            <input type="text" placeholder="CVV" class="form-control" required/>
          </div>
        </div>

        <button class="subscribe btn btn-primary btn-block" type="button"> PAY  </button>
    </form>
    <div id="menu1" class="tab-pane fade tab-payment">
      <p>Paypal is easiest way to pay online</p>
      <p>
        <button type="button" class="btn btn-primary"> <i class="fa fa-paypal"></i> Log in my Paypal </button>
      </p>
    </div>
    <div id="menu2" class="tab-pane fade tab-payment right"></div>
      <form className="form-horizontal">
        <div class="form-group">
          <label class="col-sm-2 control-label" for="textinput">Pay Via New VPA</label>
          <div class="col-sm-9">
            <input type="text" placeholder="Enter VPA" class="form-control" required/>
          </div>
        </div>
        <button class="subscribe btn btn-primary btn-block" type="button"> VERIFY AND PAY   </button>
      </form>  
    </div>
    </div>
    )
}

export default Payment
