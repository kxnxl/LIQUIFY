import React, { Component } from "react";
import tether from "../tether.png";
class Main extends Component {
  render() {
    return (
      <div id="content" className=" mt-5 align-center">
        <table className="table text-primary  text-center">
          <thead>
            <tr style={{ color: "white", fontWeight: "bold" }}>
              <th scope="col">Staking balance</th>
              <th scope="col">Reward balance</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ color: "white" }}>
              <td>
                {window.web3.utils.fromWei(this.props.stakingBalance, "Ether")}{" "}
                USDT
              </td>
              <td>
                {window.web3.utils.fromWei(this.props.rewardBalance, "Ether")}{" "}
                RWD
              </td>
            </tr>
          </tbody>
        </table>
        <div className=" card mt-3" style={{ opacity: "0.9" }}>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              let amount;
              amount = this.input.value.toString();
              amount = window.web3.utils.toWei(amount, "Ether");
              this.props.stakeTokens(amount);
            }}
            className="mb-3"
          >
            <div style={{ borderSpacing: "0 1em" }}>
              <label className="ml-2">
                <b>Stake Tokens</b>
              </label>
              <span className="  float-right  mr-3">
                Balance:
                {window.web3.utils.fromWei(this.props.tetherBalance, "Ether")}
              </span>
              <div className="input-group mb-4 ml-1">
                <input
                  ref={(input) => {
                    this.input = input;
                  }}
                  type="text"
                  placeholder="0"
                  required
                  // style={{ border: "none" }}
                />
                <div className="input-group-open">
                  <div className="input-group-text">
                    <img src={tether} alt="tether" style={{ width: "30px" }} />
                    &nbsp;&nbsp;&nbsp;USDT
                  </div>
                </div>
              </div>
              <button
                type=" submit"
                className="btn btn-primary btn-block btn-lg mb-2"
              >
                DEPOSIT
              </button>
            </div>
          </form>
          <button
            onClick={(event) => {
              event.preventDefault();
              this.props.unstakeTokens();
            }}
            className="btn btn-primary btn-block btn-lg"
          >
            WITHDRAW
          </button>
          <div className="card-body text-center" style={{ color: "blue" }}>
            AIRDROP
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
