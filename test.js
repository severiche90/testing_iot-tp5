// test de status de conexion
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

// test que supervisa el ID del dispositivo
pm.test("Check_Id", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData[0].idsensores).to.eql(2);
});

// test del tipo de dato del campo valor 
pm.test("Check_Valor", function(){
   var jsonData = pm.response.json();
   pm.expect(jsonData[0].Valor).to.eql("24.87");
});

