using quotation_backend.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;

namespace quotation_backend.Services
{
    public class TasaCalcularContext
    {
        private ITasaCotizacion _cotizacion;

        public TasaCalcularContext(ITasaCotizacion cotizacion) => _cotizacion = cotizacion;

        public async Task<Cotizar> GetTasa(HttpClient httpClient, string nameMoneda) => await _cotizacion.GetTasa(httpClient, nameMoneda);

    }
}
