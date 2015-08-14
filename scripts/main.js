function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $('img').attr('src', e.target.result);
                $('img').show();
            };

            reader.readAsDataURL(input.files[0]);
        }
    }