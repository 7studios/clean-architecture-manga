import * as React from 'react';
import { connect } from 'react-redux';
import { ApplicationState } from '../store';
import * as AccountStore from '../store/Account';
import {RouteComponentProps} from "react-router";
import {Credit} from "../store/Account";

type AccountProps =
    AccountStore.AccountState
    & typeof AccountStore.actionCreators
    & RouteComponentProps<{ accountId: string }>;

class Account extends React.PureComponent<AccountProps> {
    public componentDidMount() {
        this.ensureDataFetched();
    }

      public render() {
        return (
          <React.Fragment>
              <table className='table table-striped' aria-labelledby="tabelLabel">
                  <thead>
                  <tr>
                      <th>Transaction</th>
                      <th>Amount</th>
                      <th>Description</th>
                      <th>Transaction Date</th>
                  </tr>
                  </thead>
                  <tbody>
                  {this.props.account.credits.map((credit: Credit) =>
                      <tr key={credit.transactionId}>
                          <td>{credit.transactionId}</td>
                          <td>{credit.amount}</td>
                          <td>{credit.description}</td>
                          <td>{credit.transactionDate}</td>
                      </tr>
                  )}
z                  </tbody>
              </table>
          </React.Fragment>
        );
      }

      private ensureDataFetched() {
        this.props.requestAccount(this.props.match.params.accountId);
      }
}

export default connect(
  (state: ApplicationState) => state.account,
    AccountStore.actionCreators
)(Account as any);
