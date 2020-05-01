// <copyright file="GetAccountInput.cs" company="Ivan Paulovich">
// Copyright © Ivan Paulovich. All rights reserved.
// </copyright>

namespace Application.Boundaries.GetAccount
{
    using Domain.Accounts.ValueObjects;

    /// <summary>
    ///     Get Account Details Input Message.
    /// </summary>
    public interface IGetAccountInput
    {
        /// <summary>
        ///     Gets the AccountId.
        /// </summary>
        public AccountId AccountId { get; }
    }
}
