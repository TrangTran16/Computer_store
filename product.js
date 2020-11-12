let product = localStorage.getItem('db_products')

listProducts(product)


function listProducts(product) {
    if(product == null)
    {
        return false
    }
    var obj = JSON.parse(product);
    for( let i = 0; i <= obj.length-1; i++){
        var demo = '<div class="col-md-3 pt-10" style="padding-top: 10px">';
            demo += '<div class="card text-center" style="width: 100%; text-align: center;">';
            demo += '<img src="IMAGE/' + obj[i].img + ' " class="card-img-top" style="height: 200px; width: 300px">';
            demo += '<div class="card-body">';
            demo += '<h5 class="card-title text-center">' + obj[i].name + '</h5>';
            demo += '<p class="card-text text-center">' + obj[i].price + '</p>';
            demo += '<a href="javascript:void(0)" class="btn btn-primary" onclick="Order('+ obj[i].id +')" >Đặt Mua</a>';
            demo += '</div>'; 
            demo += '</div>';
            demo += '</div>';
        document.getElementById('products').innerHTML += demo;
    }
}

$('#button-search').on('click', function() {
    let keyword = $('#search-name').val()
    document.getElementById('products').innerHTML = ''
    let product = localStorage.getItem('db_products')
    if(product == null)
    {
        document.getElementById('products').innerHTML = "Không có sản phẩm nào";
        return false
        
    }

    if(keyword.trim() == '') {
        listProducts(product)
        return;
    } else {
        listProduct = JSON.parse(product)
        let listProductAfterSearch = [];
        for(let i =0; i < listProduct.length; i++){
            if(keyword == listProduct[i].name){
                listProductAfterSearch.push(listProduct[i])
            }
        }
        if(listProductAfterSearch.length == 0) {
            document.getElementById('products').innerHTML = "Không có sản phẩm nào";
            return
        }else{
            listProducts(JSON.stringify(listProductAfterSearch))
        }
    }

   
})


