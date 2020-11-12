





function listComputer(){
    let listProduct = localStorage.getItem('db_products')
    if(listProduct == null)
    {
        return false
    }
    var obj = JSON.parse(listProduct);
    let index = 0;
    for( let i=0; i<=obj.length-1;i++){
        // show 4 product
        if(index < 4) {
            index += 1
            var demo = '<div class="col-md-3" style="padding-top: 10px">';
            demo += '<div class="card text-center">';
            demo += '<img src="IMAGE/' + obj[i].img + ' " class="card-img-top" style="height: 250px; width: 300px">';
            demo += '</div>'; 
            demo += '</div>';
            demo += '</div>';
            document.getElementById('computer').innerHTML += demo;
        }
    }
}

function listComputerNoiBat(){
    let list_Computer_noibat = localStorage.getItem('db_products')

    if(list_Computer_noibat == null)
    {
        return false
    }
    var obj1 = JSON.parse(list_Computer_noibat);
    let index = 0;
    for( let i = 0; i <= obj1.length-1; i++){
        // Show 4 product hot 

        if(obj1[i].is_hot && index < 4) {
            index += 1
            var noibat = '<div class="col-md-3 pt-10" style="padding-top: 10px">';
                    noibat += '<div class="card text-center" style="width: 100%; text-align: center;">';
                        noibat += '<img src="IMAGE/' + obj1[i].img + ' " class="card-img-top" style="height: 200px; width: 300px">';
                        noibat += '<div class="card-body">';
                            noibat += '<h5 class="card-title text-center">' + obj1[i].name + '</h5>';
                            noibat += '<p class="card-text text-center">' + obj1[i].price + '</p>';
                            noibat += '<a href="javascript:void(0)" class="btn btn-primary" onclick="Order()" >Đặt Mua</a>';
                        noibat += '</div>'; 
                    noibat += '</div>';
                noibat += '</div>';
            document.getElementById('noibat').innerHTML += noibat;
        }
    }
}

function listComputerNew(){
    let list_Computer_new = localStorage.getItem('db_products')
    if(list_Computer_new == null)
    {
        return false
    }
    var obj2 = JSON.parse(list_Computer_new);
    let index = 0;
    for( let i = 0; i <= obj2.length-1; i++){
        if(obj2[i].is_new && index < 4) {
            index += 1
            var mt_new = '<div class="col-md-3 pt-10" style="padding-top: 10px">';
                mt_new += '<div class="card text-center" style="width: 100%; text-align: center;">';
                    mt_new += '<img src="IMAGE/' + obj2[i].img + ' " class="card-img-top" style="height: 200px; width: 300px">';
                        mt_new += '<div class="card-body">';
                            mt_new += '<h5 class="card-title text-center">' + obj2[i].name + '</h5>';
                            mt_new += '<p class="card-text text-center">' + obj2[i].price + '</p>';
                            mt_new += '<a href="javascript:void(0)" class="btn btn-primary" onclick="Order()" >Đặt Mua</a>';
                            mt_new += '</div>'; 
                        mt_new += '</div>';
                    mt_new += '</div>';
            document.getElementById('product-new').innerHTML += mt_new;
        }
    }
}


listComputer()
listComputerNoiBat();
listComputerNew();
