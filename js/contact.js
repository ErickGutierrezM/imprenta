
    $(document).ready(function() {
        $('#formContacto').on('submit', function(e) {
            e.preventDefault();
            var formdata = new FormData(this);
            $.ajax({
                url: "server/form-contact.php",
                type: "POST",
                cache: false,
                data: formdata,
                contentType: false,
                processData: false,
                dataType: "json",
                beforeSend: function() {
                    $('#sendContacto').attr('disabled', 'disabled');
                },
                success: function(data) {
                    $('#sendContacto').attr('disabled', false);
                    if (data.success) {
                        $('#formContacto')[0].reset();
                        $('#formNombre_error').text('');
                        $('#formEmail_error').text('');
                        $('#formTelefono_error').text('');
                        $('#formEmpresa_error').text('');
                        $('#formAsunto_error').text('');
                        $('#captcha_error').text('');
                        grecaptcha.reset();
                        alert('¡Enviado Correctamente!');

                    } else {
                        $('#formNombre_error').text(data.formNombre_error);
                        $('#formEmail_error').text(data.formEmail_error);
                        $('#formTelefono_error').text(data
                            .formTelefono_error);
                        $('#formEmpresa_error').text(data
                            .formEmpresa_error);
                        $('#formAsunto_error').text(data
                            .formAsunto_error);
                        $('#captcha_error').text(data.captcha_error);
                    }
                }
            });
        });
    });