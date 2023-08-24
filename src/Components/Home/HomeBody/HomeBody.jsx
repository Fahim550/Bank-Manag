// import React from 'react'
import { useState } from 'react'
import MoneyCard from '../../moneycard/moneycard';
import './HomeBody.css'
export default function HomeBody() {
  const [totalMoney, setTotalMoney] = useState(2000);
  const[withdrawMoney, setWithdrawMoney]=useState(0);

  const [depositMoney, setDepositMoney] = useState(0);
  const [changesDepositeMoney, setChangesDepositeMoney] = useState(1000);
   // onChange withdraw function
   const onChangeWithdrawMoney = (e) => {
    // console.log(e.target.value);
    setWithdrawMoney(e.target.value);
    
  };
   // withdraw button event calling function
   const withdrawButtonHandle = () => {
    console.log("I want to withdraw ", withdrawMoney);
    if (withdrawMoney < 0) {
      alert("You cant put negative value !");
      return;
    }
    let currentTotalMoney = totalMoney - withdrawMoney;
    if(currentTotalMoney>=0){
      setTotalMoney(currentTotalMoney);
    }
    else{
      alert("You have no sufficient balance !")
    }
    setWithdrawMoney(0);
    // setTotalMoney<0?false:true;
  };
  // deposite section
  const onChangeDepositeMoney = (e) => {
    // console.log(e.target.value, typeof e.target.value + 0);
    setDepositMoney(Number(e.target.value));
  };

  const depositeButtonHandle = () => {
    console.log("You enterd", depositMoney);
    if (depositMoney < 0) {
      alert("You cant put negative value !");
      return;
    }
    // const value = depositMoney + changesDepositeMoney;
    console.log("depositMoney", depositMoney, typeof depositMoney);
    console.log("changesDepositeMoney", changesDepositeMoney);
    setChangesDepositeMoney(changesDepositeMoney + depositMoney);
    setDepositMoney(0);
  };

  


  let DepositeMoney=2000;
  let withdraw=DepositeMoney - totalMoney
  return (
    <div className="bank text-white " style={{height:"100vh"}}>
      <div className=" container ">
      <h1>Bank Managment </h1>
      <div className='row pt-5 m-2 w-100 text-center justify-content-md-center '>
      <MoneyCard
       title="Withdraw Money"
       moneyprops={withdraw}
       dynamiclass=" bg-success text-dark"/>
      <MoneyCard
       title="Deposite Money"
       moneyprops={changesDepositeMoney}
       dynamiclass="bg-danger text-dark"/>
      <MoneyCard
       title="Total Money"
       moneyprops={totalMoney}
       dynamiclass="bg-dark text-white"/>
      </div>
      
      </div>
      <div className="text-center pt-2 ">
          <input
            type="number"
            value={withdrawMoney}
            className="input p-2 me-2 w-25"
            placeholder="Enter your amount"
            min={0}
            max={10000000}
            onChange={onChangeWithdrawMoney}
          />
          <button onClick={withdrawButtonHandle} disabled={totalMoney<=0?true:false} className="btn btn-dark p-2">
            Withdraw
          </button>
        </div>
        

      <div className="text-center pt-2">
        <input
          type="number"
          className="input p-2 me-2 w-25"
          placeholder="Enter your amount"
          value={depositMoney}
          min={0}
          max={10000000}
          onChange={onChangeDepositeMoney}
        />
        <button onClick={depositeButtonHandle} className="btn btn-dark p-2">
          Deposite
        </button>
      </div>
      </div>
      

      /* <div className="d-flex m-2 row justify-content-center" >
      <div className="card  p-3 bg-success text-white m-2 col-md-3">
      <h3>Withdraw</h3>
      <h1>{withdraw}</h1>

      </div>
      <div className="card  p-3 bg-danger text-white m-2 col-md-3 ">
      <h3>Deposite Money</h3>
      <h1>{DepositeMoney}</h1>
       </div>
      <div className="card p-3 bg-dark text-white m-2 col-md-3">
      <h3>Total Money</h3>
      <h1>{totalMoney} </h1>

      </div> */
    // </div>
  )
}
