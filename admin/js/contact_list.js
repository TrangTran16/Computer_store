
$(function(){
    let htmlNotFound = '<tr><td colspan="6" class="text-center">Data not found</td></tr>'
    let elementList = $('#show_list')
    listContacts()
    function listContacts(){
        let listConacts = localStorage.getItem('db_contacts')
        if(listConacts == null) {
            elementList.html(htmlNotFound)
            return;
        }else{
            listConacts = JSON.parse(listConacts)
            if(listConacts.length == 0){
                elementList.html(htmlNotFound)
                return;
            }else{
                let html = ''
                for(let i = 0; i < listConacts.length; i++) {
                    let item = listConacts[i];
                    let status = 'Active';
                    let className = 'text-success'
                    if(item.status == 2){
                        status = 'Not Active'
                        className = 'text-danger'
                    }
                    html += '<tr>'
                    html += '<td>' + item.id+ '</td>'
                    html += '<td>' + item.name+ '</td>'
                    html += '<td>' + item.subject+ '</td>'
                    html += '<td>' + item.content+ '</td>'
                    html += '<td class="'+ className +'">' + status + '</td>'
                    html += '<td>'
                        // html += ' <a href="./contact_edit.html?id=' + item.id +'" class="text-primary"><i class="glyphicon glyphicon-edit"></i>Edit</a> '
                        // html += ' <span class="text-danger">|</span> '
                        // html += ' <a href="javascript:void(0)" data-id="'+ item.id +'" class="text-primary delete-product"><i class="glyphicon glyphicon-remove"></i>Delete</a> '
                    html += '</td>'
                    html += '<tr>'
                }
                elementList.html(html)
            }
        }
        console.log(listConacts);
    }
})