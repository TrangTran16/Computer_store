
 function listUsers(listUser){
    let elementShowList = $('#show_list');
    let listMember = localStorage.getItem('db_users')
    let htmlNotFound = '<tr><td colspan="4" class="text-center">Data not found</td></tr>'
    if(listMember == null) {
        elementShowList.html(htmlNotFound)
        localStorage.setItem('db_users', JSON.stringify([]))
        return;
    }else{
        listMember = JSON.parse(listMember)    
        if(listMember.length == 0) {
            elementShowList.html(htmlNotFound)
            return;
        }else {
            let html = ''
            console.log(listMember);
            for(let i = 0; i < listMember.length; i++) {
                let item = listMember[i]
                html += '<tr>'
                    html += '<td>' + item.id+ '</td>'
                    html += '<td>' + item.name+ '</td>'
                    html += '<td>' + item.reg_email+ '</td>'
                    html += '<td>********</td>'
                    html += '<td>'
                    html += '</td>'
                    html += '<tr>'
            }
            elementShowList.html(html)
        }
    }
 }

 listUsers()