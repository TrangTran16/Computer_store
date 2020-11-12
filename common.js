
setDefaultData()

function setDefaultData() {
    let products = localStorage.getItem('db_products')
    let listProduct = [
        {
            "id": 1,
            "name": "san pham 1",
            "img": "category1.jpg",
            "quantily": "10",
            "price": "120000",
            "is_new": true,
            "is_hot": true
        },
        {
            "id": 2,
            "name": "san pham 2",
            "img": "category22.jpg",
            "quantily": "12",
            "price": "2900000",
            "is_new": false,
            "is_hot": true
        },
        {
            "id": 3,
            "name": "san pham 3",
            "img": "ds_800x450.jpg",
            "quantily": "9",
            "price": "100000",
            "is_new": true,
            "is_hot": false
        },
        {
            "id": 4,
            "name": "san pham 4",
            "img": "category3.jpg",
            "quantily": "22",
            "price": "1200000",
            "is_new": true,
            "is_hot": true
        },
        {
            "id": 5,
            "name": "san pham 5",
            "img": "prd6.jpg",
            "quantily": "15",
            "price": "2000000",
            "is_new": false,
            "is_hot": true
        },
        {
            "id": 6,
            "name": "san pham 6",
            "img": "prd7.jpg",
            "quantily": "100",
            "price": "10000",
            "is_new": true,
            "is_hot": false
        },
        {
            "id": 7,
            "name": "san pham 7",
            "img": "prd101.jpg",
            "quantily": "21",
            "price": "100000",
            "is_new": false,
            "is_hot": true
        },
        {
            "id": 8,
            "name": "san pham 8",
            "img": "prd101.jpg",
            "quantily": "10",
            "price": "99999",
            "is_new": true,
            "is_hot": true
        }
    ]
    if(products == null) {
        localStorage.setItem('db_products', JSON.stringify(listProduct))
        return false;
    }

    products = JSON.parse(products)
    if(products.length == 0) {
        localStorage.setItem('db_products', JSON.stringify(listProduct))
        return false;
    }
}


function Order(id) {
    if(confirm('Bạn có chắc đặt mua không')) {
        let ordersTmp = localStorage.getItem('orders_tmp')
        
        if(ordersTmp == null) {
            localStorage.setItem('orders_tmp', JSON.stringify([]))
            ordersTmp = localStorage.getItem('orders_tmp')
        }

        ordersTmp = JSON.parse(ordersTmp)

        if(ordersTmp.length > 0) {
            let isHas = false
            for(let i=0; i< ordersTmp.length; i++) {
                if(id == ordersTmp[i].product_id){
                    ordersTmp[i].quantily = ordersTmp[i].quantily + 1
                    isHas = true
                    break
                }
            }

            if(!isHas){
                let order = {
                    id: ordersTmp.length + 1,
                    product_id: id,
                    quantily: 1
                }
                ordersTmp.push(order)
            }

        }else{
            let order = {
                id: ordersTmp.length + 1,
                product_id: id,
                quantily: 1
            }
            ordersTmp.push(order)
        }

        localStorage.setItem('orders_tmp', JSON.stringify(ordersTmp))
        countCartOrdered()
    }
}
countCartOrdered()
function countCartOrdered()
{
    let ordersTmp = localStorage.getItem('orders_tmp')
    if(ordersTmp == null){
        document.getElementById('show-cart-number').innerText = ''
    }

    ordersTmp = JSON.parse(ordersTmp)
    if(ordersTmp == null){
        return
    }
    if (ordersTmp.length > 0) {
        let count = 0;
        for(let i= 0; i< ordersTmp.length; i++) {
            count += ordersTmp[i].quantily
        }
        document.getElementById('show-cart-number').innerText = '(' + count + ')'
    }else {
        document.getElementById('show-cart-number').innerText = ''
    }
}