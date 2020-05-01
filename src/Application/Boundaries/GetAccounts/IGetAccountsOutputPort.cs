// <copyright file="IGetAccountsOutputPort.cs" company="Ivan Paulovich">
// Copyright © Ivan Paulovich. All rights reserved.
// </copyright>

namespace Application.Boundaries.GetAccounts
{
    using System.Collections.Generic;
    using Domain.Accounts;

    /// <summary>
    ///     Output Port.
    /// </summary>
    public interface IGetAccountsOutputPort
        : IOutputPortStandard<IEnumerable<IAccount>>, IOutputPortError
    {
    }
}
