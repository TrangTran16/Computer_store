
function onSendContact()
{
    let full_name = $('#full_name').val()
    let subject = $('#subject').val()
    let content = $('#content').val()

    let contacts = localStorage.getItem('db_contacts')

    if(contacts == null) {
        localStorage.setItem('db_contacts', JSON.stringify([]))
        contacts = localStorage.getItem('db_contacts')
    }

    contacts = JSON.parse(contacts)

    let contact = {
        id: contacts.length + 1,
        name: full_name,
        subject: subject,
        content: content,
    }
    
    contacts.push(contact)

    localStorage.setItem('db_contacts', JSON.stringify(contacts))

    alert('Cảm ơn!!')
}