using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using quotation_backend.Models;
using quotation_backend.Services;

namespace quotation_backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ValuesController : ControllerBase
    {
        //static HttpClient client = new HttpClient();

        // GET api/values
        [HttpGet]
        public async Task<Cotizar> Get()
        {

            var httpClient = GetHttpClient();

            var calcular = new TasaCotizarContext(new TasaDolar());
            var junior = await calcular.GetTasa(httpClient, "dolar");
            return junior;

            /**
            
            string requestEndpoint = "USD";

            ResultJson product = null;
            Cotizar cotizar = null;
            HttpResponseMessage response = await httpClient.GetAsync(requestEndpoint+ "/ARS/json?quantity=1&key=5025|O4kqZsji7Ty1r2tXAot5KdnyyLocSRqr");
            if (response.IsSuccessStatusCode)
            {
                product = await response.Content.ReadAsAsync<ResultJson>();
                cotizar = new Cotizar { Moneda = requestEndpoint, Precio = product.Result.Value };
            }
            return cotizar;**/

        }

        private HttpClient GetHttpClient()
        {
            var httpClient = new HttpClient();
            httpClient.BaseAddress = new Uri(@"https://api.cambio.today/v1/quotes/");
            httpClient.DefaultRequestHeaders.Accept.Clear();
            httpClient.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
            return httpClient;
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public ActionResult<string> Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
