import balanceReducer from'./balance'
import  constants from '../actions/constants'
 describe("balanceredcer",()=>{
   it("set balance",()=>{
     const balance=10;
     expect(balanceReducer(undefined,{type:constants.SET_BALANCE,balance})).toEqual(balance);
   })
 })