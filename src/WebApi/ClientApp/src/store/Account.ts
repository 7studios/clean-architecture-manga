import { Action, Reducer } from 'redux';
import { AppThunkAction } from './';

export interface AccountState {
    account: AccountDetails;
}

export interface AccountDetails {
    accountId: string;
    currentBalance: number;
    credits: Credit[];
    debits: Debit[];
}

export interface Credit {
    transactionId: string;
    amount: number;
    description: string;
    transactionDate: Date;
}

export interface Debit {
    transactionId: string;
    amount: number;
    description: string;
    transactionDate: Date;
}

interface ReceiveAccountAction {
    type: 'RECEIVE_ACCOUNT';
    account: AccountDetails;
}

export const actionCreators = {
    requestAccount: (accountId: string): AppThunkAction<ReceiveAccountAction> => (dispatch, getState) => {
        fetch(`api/v1/Accounts/${accountId}`)
            .then(response => response.json() as Promise<AccountDetails>)
            .then(data => {
                dispatch({ type: 'RECEIVE_ACCOUNT', account: data });
            });
    }
};

const unloadedState: AccountState = { account: { accountId: "", currentBalance: 0,  credits: [], debits: [] }};

export const reducer: Reducer<AccountState> = (state: AccountState | undefined, incomingAction: Action): AccountState => {
    if (state === undefined) {
        return unloadedState;
    }

    const action = incomingAction as ReceiveAccountAction;
    switch (action.type) {
        case 'RECEIVE_ACCOUNT':
            return {
                account: action.account
            };
            break;
    }

    return state;
};
