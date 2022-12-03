$(function() {
    apiCall('/users/1', 'get', '');

    function apiCall(resource, method, body) {
        $.ajax('http://127.0.0.1:5000' + resource, {
            contentType: 'application/json',
            type: method,
            //data: body,8
            headers: { "Authorization": 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTY3MDA5MTgwMywianRpIjoiZTdlZTUwNjYtY2U0OS00OGU2LWFhNWItZmQ2OWEzNDdlOTg2IiwidHlwZSI6ImFjY2VzcyIsInN1YiI6MSwibmJmIjoxNjcwMDkxODAzLCJleHAiOjE2NzAwOTI3MDN9.hVUnFoQRU4RzbZYhax6Aoj_L48-0bIEl8U5JSg1uNM0' },
            beforeSend: function () {
                //$('.table').after('<p class="loading"> carregando ... </p>')
            },
            error: function () {
                //$('.table').after('<p class="loading"> deu ruim </p>')
            },
            success: function (dados, textStatus, xhr) {
                //console.log(xhr.status);
                if (xhr.status === '200') {
                    return dados;
                }
                console.log(dados);
                //return -1;
            },
            complete: function () {
                //$('.loading').remove();
            }
        })
    }
});
  

