$(function() {
    $(document).ready(function () {
        $("#buttonLogin").click(function () {
            const items = $('#nm_user, #ds_password')
            const body = JSON.stringify(getLoginFormatedBody(items));

            login(body);
        });
    });

    function getBearerToken(resource, method, body) {
        $.ajax('http://127.0.0.1:5000' + resource, {
            contentType: 'application/json',
            type: method,
            data: body,
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

    function apiCall(resource, method, body, token) {
        $.ajax('http://127.0.0.1:5000' + resource, {
            contentType: 'application/json',
            type: method,
            data: body,
            headers: '',
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
                //console.log(dados);
                //return -1;
            },
            complete: function () {
                //$('.loading').remove();
            }
        })
    }

    function login(body) {
        getBearerToken('/login', 'post', body);
    }

    function getLoginFormatedBody(bodyValues) {
        const obj = {}
        bodyValues.each(function () {
            obj[this.id] = $(this).val();
        })
        return obj;
    }
});
