import * as constants from'./constants';
import * as actions from'./balance';
it('create an actions to set the balance',()=>{
  const balance=0;
  const expectedAction ={type:constants.SET_BALANCE,balance};
  expect(actios.setBalance(balance)).toEqual(expectedAction)

})
