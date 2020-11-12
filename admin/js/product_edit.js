$(function () {

    var urlParams = new URLSearchParams(window.location.search);
    let productId = urlParams.get('id');

    if (productId == null) {
        window.location.href = 'product_list.html';
    }

    let listProductes = localStorage.getItem('db_products')
    if (listProductes == null) {
        window.location.href = 'product_add.html';
    }
    listProductes = JSON.parse(listProductes)

    // find product has exists in listProductes
    let indexEdit = null;
    listProductes.some(function (productTmp, index) {
        if (productTmp.id == productId) {
            $('#product_name').val(productTmp.name)
            $('#hiden_product_img').val(productTmp.img)
            $('#product_quantily').val(productTmp.quantily)
            $('#product_price').val(productTmp.price)
            $('#img_view').attr('src', '../IMAGE/' + productTmp.img)
            $('#product_new').prop('checked', productTmp.is_new)
            $('#product_hot').prop('checked', productTmp.is_hot)
            indexEdit = index
        }
    });

    $('#onUpdate').on('click', function(){
        let productName = $('#product_name').val()
        let productImg = $('#product_img').val()
        let isChange = $('#hiden_product_img').val()
        let productQuantily = $('#product_quantily').val()
        var filename = productImg.replace(/C:\\fakepath\\/i, '')
        let productPrice = $('#product_price').val()
        let productNew = $('#product_new').is(':checked')
        let productHot = $('#product_hot').is(':checked')

        let listProductes = localStorage.getItem('db_products')
        if (listProductes == null) {
            window.location.href = 'product_add.html';
        }
        listProductes = JSON.parse(listProductes)

        listProductes[indexEdit].name = productName
        if(isChange == 'true')
        {
            listProductes[indexEdit].img = filename
        }
        listProductes[indexEdit].quantily = productQuantily
        listProductes[indexEdit].price = productPrice
        listProductes[indexEdit].is_new = productNew
        listProductes[indexEdit].is_hot = productHot
        localStorage.removeItem('db_products')
        localStorage.setItem('db_products', JSON.stringify(listProductes))

        window.location.href = 'product_list.html'
    })

    function readURL(input) {
        if (input.files && input.files[0]) {
          var reader = new FileReader();
          
          reader.onload = function(e) {
                let isChange = $('#hiden_product_img').val('true')
                $('#img_view').attr('src', e.target.result);
          }
          
          reader.readAsDataURL(input.files[0]); // convert to base64 string
        }
      }
      
    $("#product_img").change(function() {
    readURL(this);
    });


})