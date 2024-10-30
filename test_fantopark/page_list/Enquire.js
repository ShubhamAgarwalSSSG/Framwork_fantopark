class Enquire {
  // page loactors:
  get username() {
    return $('//*[@id="username"]');
  }
  get email() {
    return $('//*[@id="email"]');
  }
  get phone() {
    return $('//*[@id="phone"]');
  }
  get referral() {
    return $('//*[@id="referral"]');
  }

  //  to perform some action
}

export default new Enquire();

//*[@id="email"]
//*[@id="phone"]
//*[@id="referral"]
//*[@id="root"]/div/div/div[1]/div[3]/div[2]/div/div[2]/form/div[1]/div[4]/div/div/div[1]/div[2] --> match selection

//*[@id="terms"] --> radiobutton
//*[@id="root"]/div/div/div[1]/div[3]/div[2]/div/div[2]/form/div[4]/button---->sumit
//*[@id="root"]/div/div/div[1]/div[3]/div[2]/div/div[1]/button/span---> x button
