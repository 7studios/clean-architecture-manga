namespace WebApi.UseCases.V1.GetAccounts
{
    using System.Collections.Generic;
    using Application.Boundaries.GetAccounts;
    using Domain.Accounts;
    using Microsoft.AspNetCore.Mvc;

    /// <summary>
    /// </summary>
    public sealed class GetAccountsPresenter : IGetAccountsOutputPort
    {
        /// <summary>
        /// </summary>
        /// <returns></returns>
        public IActionResult ViewModel { get; private set; } = new NoContentResult();

        /// <summary>
        /// </summary>
        /// <param name="getAccountsOutput"></param>
        public void Standard(IEnumerable<IAccount> accounts)
        {
            var getAccountDetailsResponse = new GetAccountsResponse(accounts);
            this.ViewModel = new OkObjectResult(getAccountDetailsResponse);
        }

        /// <summary>
        /// </summary>
        /// <param name="message"></param>
        public void WriteError(string message) => this.ViewModel = new BadRequestObjectResult(message);
    }
}
