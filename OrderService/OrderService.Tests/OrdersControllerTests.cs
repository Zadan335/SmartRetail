using Xunit;
using Microsoft.AspNetCore.Mvc;
using OrderService.Controllers;

public class OrdersControllerTests
{
    [Fact]
    public void Get_ReturnsOk()
    {
        var controller = new OrdersController();
        var result = controller.Get() as OkObjectResult;
        Assert.NotNull(result);
        Assert.Equal(200, result.StatusCode);
    }
}
