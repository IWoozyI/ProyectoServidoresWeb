using GraphQL.Types;
using System;

namespace CatalogoTurismoF.GraphQL
{
    public class CatalogoSchema : Schema
    {
        public CatalogoSchema(IServiceProvider serviceProvider) : base(serviceProvider)
        {
            Query = serviceProvider.GetRequiredService<CatalogoQuery>();
        }
    }
}
