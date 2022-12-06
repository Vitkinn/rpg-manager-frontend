$(function() {
    $(document).ready(function () {
        $("#buttonLogin").click(function () {
            let items = $('#nm_user, #ds_password')
            let body = JSON.stringify(getFormatedBody(items));

            login(body);
        });

        $("#buttonRegister").click(function () {
            let items = $('#nm_user, #ds_avatar, #ds_email, #ds_name, #ds_password, #nr_contact')
            console.log(items)
            let body = JSON.stringify(getFormatedBody(items));

            register(body);
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
                if (xhr.status == 200 && !xhr.responseJSON.message) {
                    window.location.href = "../home/home.html"
                    return dados;
                }
                console.log(xhr.responseJSON.message);
                console.log(dados);
                document.getElementById('error_message').replaceChildren();
                document.getElementById('error_message').append('Usuário ou senha inválida, por-favor, tente novamente.');
                return -1;
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
            beforeSend: function () {
                //$('.table').after('<p class="loading"> carregando ... </p>')
            },
            error: function () {
                //$('.table').after('<p class="loading"> deu ruim </p>')
            },
            success: function (dados, textStatus, xhr) {
                if (xhr.status == 201 && !xhr.responseJSON.message) {
                    console.log(dados);
                    window.location.href = "../login/login.html"
                    return dados;
                }
                console.log(xhr.responseJSON.message);
                return -1;
            },
            complete: function () {
                //$('.loading').remove();
            }
        })
    }

    function login(body) {
        getBearerToken('/login', 'post', body);
    }

    function register(body) {
        apiCall('/users/1', 'post', body);
    }

    function getFormatedBody(bodyValues) {
        const obj = {}
        bodyValues.each(function () {
            obj[this.id] = $(this).val();
        })
        return obj;
    }
});
