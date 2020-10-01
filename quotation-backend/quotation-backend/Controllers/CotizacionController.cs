using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using quotation_backend.Models;
using quotation_backend.Services;

namespace quotation_backend.Controllers
{
    [Produces("application/json")]
    [Route("/[controller]")]
    [ApiController]
    public class CotizacionController : ControllerBase
    {
        // GET: api/Cotizacion/moneda
        [HttpGet("{moneda}", Name = "Get")]
        public async Task<Cotizar> Get(string moneda)
        {
            TasaCalcularContext cotizarTasa = null;
            var httpClient = GetHttpClient();

            switch(moneda)
            {
                case Parametro.monedaDolar:
                    cotizarTasa = new TasaCalcularContext(new TasaDolar());
                    break;
                case Parametro.monedaEuro:
                    cotizarTasa = new TasaCalcularContext(new TasaEuro());
                    break;
                case Parametro.monedaReal:
                    cotizarTasa = new TasaCalcularContext(new TasaReal());
                    break;
            }
            Cotizar tasa = await cotizarTasa.GetTasa(httpClient, moneda);
            return tasa;            
        }

        private HttpClient GetHttpClient()
        {
            var httpClient = new HttpClient();
            httpClient.BaseAddress = new Uri(Parametro.url);
            httpClient.DefaultRequestHeaders.Accept.Clear();
            httpClient.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
            return httpClient;
        }
    }
}
