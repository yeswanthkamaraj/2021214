import React from "react"
const Header = () => {
  return (
  <header>
    Admin Login
    <form>
   <div class="form-group row">
    <label for="inputEmail3" class="col-sm-2 col-form-label">Train Name</label>
    <div class="col-sm-10">
      <input type="email" class="form-control" id="inputEmail3" placeholder="TrainName"/>
    </div>
  </div>
  <div class="form-group row">
    <label for="inputEmail3" class="col-sm-2 col-form-label">TrainNumber</label>
    <div class="col-sm-10">
      <input type="email" class="form-control" id="inputEmail3" placeholder="TrainNumber"/>
    </div>
  </div>
  <div class="form-group row">
    <label for="inputEmail3" class="col-sm-2 col-form-label">DepatureTime</label>
    <div class="col-sm-10">
      <input type="email" class="form-control" id="inputEmail3" placeholder="Hrs:min:sec"/>
    </div>
  </div>
  <div class="form-group row">
    <label for="inputEmail3" class="col-sm-2 col-form-label">DelayTiming</label>
    <div class="col-sm-10">
      <input type="email" class="form-control" id="inputEmail3" placeholder="delayed"/>
    </div>
  </div>
  <div class="form-group row">
    <label for="inputPassword3" class="col-sm-2 col-form-label">Access Code</label>
    <div class="col-sm-10">
      <input type="password" class="form-control" id="inputPassword3" placeholder="aces code"/>
    </div>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
  </header>
  )
}

export default Header