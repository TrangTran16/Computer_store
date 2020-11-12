$(function(){
    let listProductes = localStorage.getItem('db_products')

    if(listProductes == null) {
        localStorage.setItem('db_products', JSON.stringify([]))
        listProductes = localStorage.getItem('db_products')
    }
    listProductes = JSON.parse(listProductes)

    $('#onSave').on('click', function(){
        let productName = $('#product_name').val()
        let productImg = $('#product_img').val()
        var filename = productImg.replace(/C:\\fakepath\\/i, '')
        let productQuantily = $('#product_quantily').val()
        let productPrice = $('#product_price').val()
        let productNew = $('#product_new').is(':checked')
        let productHot = $('#product_hot').is(':checked')

        // console.log(productNew);
        let product = {
            id: listProductes.length + 1,
            name: productName,
            img: filename,
            quantily: productQuantily,
            price: productPrice,
            is_new: productNew,
            is_hot: productHot,
        }

        listProductes.push(product)
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