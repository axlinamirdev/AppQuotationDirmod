using quotation_backend.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;

namespace quotation_backend.Services
{
    public class TasaReal : ITasaCotizacion
    {
        public async Task<Cotizar> GetTasa(HttpClient httpClient, string nameMoneda)
        {
            string requestEndpoint = "REAL";

            ResultJson product = null;
            Cotizar cotizar = null;
            HttpResponseMessage response = await httpClient.GetAsync(requestEndpoint + Parametro.claveApi);
            if (response.IsSuccessStatusCode)
            {
                product = await response.Content.ReadAsAsync<ResultJson>();
                cotizar = new Cotizar { Moneda = nameMoneda, Precio = product.Result.Value };
            }
            return cotizar;
        }
    }
}
