namespace WebApi.UseCases.V1.GetAccount
{
    using System;
    using System.ComponentModel.DataAnnotations;
    using Application.Boundaries.GetAccount;

    /// <summary>
    ///     The Get Account Details Request.
    /// </summary>
    public sealed class GetAccountRequest : IGetAccountInput
    {
        /// <summary>
        ///     Gets or sets account ID.
        /// </summary>
        [Required]
        public Guid AccountId { get; set; }
    }
}
