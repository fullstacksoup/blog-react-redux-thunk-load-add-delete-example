using FileUploadAPI.Models;
using FileUploadAPI.Utilities;
using System;
using System.Linq;
using System.Web.Http;
using System.Web.Http.Cors;

namespace FileUploadAPI.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    [RoutePrefix("api/product")]
    public class ProductsController : ApiController
    {

        //********************************************************************************
        // G E T   P R O D U C T S
        //********************************************************************************

        [HttpGet]
        [Route("getall")]
        public object GetAll()
        {
            try
            {
                using (LocalDBEntities db = new LocalDBEntities())
                {

                    var results = db.Products.ToList();


                    return new { status = StatusCodes.OK.code, msg = StatusCodes.OK.msg, data = results };
                }
            }
            catch (System.Exception e)
            {
                return new { status = StatusCodes.NotFound.code, msg = e.InnerException, data = 0 };
            }
        }


        //********************************************************************************
        // G E T   S I N G L E   P R O D U C T
        //********************************************************************************

        [HttpGet]
        [Route("getsinglerecord/{id}")]
        public object GetSingleRecord(int id)
        {
            try
            {
                using (LocalDBEntities db = new LocalDBEntities())
                {

                    var results = db.Products.Find(id);


                    return new { status = StatusCodes.OK.code, msg = StatusCodes.OK.msg, data = results };
                }
            }
            catch (System.Exception e)
            {
                return new { status = StatusCodes.NotFound.code, msg = e.InnerException, data = 0 };
            }
        }


   
        //********************************************************************************
        // A D D   N E W   P R O D U C T
        //********************************************************************************

        [HttpPost]
        [Route("add")]
        public object addProduct(Product form)
        {
            DateTime today = DateTime.Today;
            try
            {
                using (LocalDBEntities db = new LocalDBEntities())
                {
                    // Read the form data.

                    Product ProductForm = new Product();
                    ProductForm.Title = form.Title;
                    ProductForm.Description = form.Description;
                    ProductForm.Quantity = form.Quantity;
                    ProductForm.DateCreated = today;
                    db.Products.Add(ProductForm);
                    db.SaveChanges();
           
                    return new { data= ProductForm };
                }

            }
            catch (System.Exception e)
            {
                return BadRequest(e.Message);
            }
        }


     

        //********************************************************************************
        // D E L E T E   P R O D U C T   R E C O R D
        //********************************************************************************

        [HttpDelete]
        [Route("remove/{id}")]
        public object removeProduct(int id)
        {
            try
            {

                using (LocalDBEntities db = new LocalDBEntities())
                {
                    Product product = db.Products.Find(id);
                    db.Products.Remove(product);
                    db.SaveChanges();

                    return new { status = StatusCodes.OK.code };
                }

            }
            catch (System.Exception e)
            {
                return new { status = StatusCodes.NotFound.code, msg = e.InnerException, data = 0 };
            }
        }
    }
}

