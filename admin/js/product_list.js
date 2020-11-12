$(function() {
    let elementShowList = $('#show_list');
    let listProduct = localStorage.getItem('db_products')
    let htmlNotFound = '<tr><td colspan="6" class="text-center">Data not found</td></tr>'
    
    showListproduct(listProduct);

    function showListproduct(listProduct){
    
        if(listProduct == null) {
            elementShowList.html(htmlNotFound)
            return;
        }else{
            listProduct = JSON.parse(listProduct)    
            if(listProduct.length == 0) {
                elementShowList.html(htmlNotFound)
                return;
            }else {
                let html = ''
                for(let i = 0; i < listProduct.length; i++) {

                    let item = listProduct[i];

                    let textNew = ''
                    let textHot = ''
                    if (item.is_new) {
                        textNew = 'San pham moi'
                    }

                    if (item.is_hot) {
                        textHot = 'San pham noi bat'
                    }

                    html += '<tr>'
                    html += '<td>' + item.id+ '</td>'
                    html += '<td><img style="width: 50px;height: 50px;" src="../IMAGE/' + item.img + '" /></td>'
                    html += '<td>' + item.name+ '</td>'
                    html += '<td>' + item.quantily+ '</td>'
                    html += '<td>' + item.price+ '</td>'
                    html += '<td class="text-success">' + textNew + '</td>'
                    html += '<td class="text-success">' + textHot + '</td>'
                    html += '<td>'
                        html += ' <a href="./product_edit.html?id=' + item.id +'" class="text-primary"><i class="glyphicon glyphicon-edit"></i>Edit</a> '
                        html += ' <span class="text-danger">|</span> '
                        html += ' <a href="javascript:void(0)" data-id="'+ item.id +'" class="text-primary delete-product"><i class="glyphicon glyphicon-remove"></i>Delete</a> '
                    html += '</td>'
                    html += '<tr>'
                }
                elementShowList.html(html)
            }
    
        }
    }

    $(document).on('click', '.delete-product', function(){
        let idProduct = $(this).attr('data-id')
        let listProduct = localStorage.getItem('db_products')
        if(confirm('Are you sure?')) {
            if(listProduct != null) {
                let listProductAfterDelete = []
                listProduct = JSON.parse(listProduct)
                for(let i = 0; i < listProduct.length; i++) { 
                    if(idProduct != listProduct[i].id) {
                        listProductAfterDelete.push(listProduct[i])
                    }
                }
                localStorage.setItem('db_products', JSON.stringify(listProductAfterDelete))
                
                showListproduct(JSON.stringify(listProductAfterDelete))
            }
        }
    })
    $(document).on('click', '#btn_search', function(){ 
        let nameProduct = $('#search_name').val()
        let listProduct = localStorage.getItem('db_products')
        if(listProduct == null) {
            showListproduct(JSON.stringify([]))
            return;
        }

        if(nameProduct.trim() == '') {
            showListproduct(listProduct)
            return;
        } else {
            listProduct = JSON.parse(listProduct)
            let listProductAfterSearch = [];
            for(let i =0; i < listProduct.length; i++){
                if(nameProduct == listProduct[i].name){
                    listProductAfterSearch.push(listProduct[i])
                }
            }
            if(listProductAfterSearch.length == 0) {
                elementShowList.html(htmlNotFound)
            }else{
                showListproduct(JSON.stringify(listProductAfterSearch))
            }
        }
    })
    

    function onDelete(productId){
        console.log(productId);
    }
})