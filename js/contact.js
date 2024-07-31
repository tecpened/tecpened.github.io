// Colors
const primary_color = '#1E1E1E'
const font = 'white'
const secondary_color = '#8F72E3'
const container_color = '#0e0e0e8a'
const input_color = 'grey'

// Adjustment
const textgap = '.3rem'
const buttonwidth = 'fit-content'

// Select The Parent Div
const contact = document.querySelector('.contact')
contact.style.padding = '2rem'
contact.style.color = font
contact.style.display = 'flex'
contact.style.flexDirection = 'column'
contact.style.gap = '2rem'

// Create A First Order Child Division
const contents = document.createElement('div')
contents.className = 'contents'
contact.appendChild(contents)

// Styling the Parent Container
contents.style.display = 'flex'
contents.style.flexDirection = 'row'
contents.style.padding = '0rem'
contents.style.justifyContent = 'space-between'
contents.style.position = 'relative'
contents.style.gap = '1rem'


//-- Left Column --\\
// Create Right Column Parent ( Contact > Content > meet)
const meet = document.createElement('div')
meet.className = 'meet'
contents.appendChild(meet)

// Left Column Main Parent Container (meet)
meet.style.display = 'flex'
meet.style.flexDirection = 'column'
meet.style.backgroundColor = container_color
meet.style.padding = '2rem'
meet.style.justifyContent = 'space-between'
meet.style.width ='25%'

const urlocation = document.createElement('div')
urlocation.className = 'urlocation'
meet.appendChild(urlocation)

urlocation.style.display = 'flex'
urlocation.style.flexDirection = 'column'

const mailaddress = document.createElement('h')
mailaddress.innerHTML = 'tecpen.info@gmail.com'
urlocation.appendChild(mailaddress)

const address = document.createElement('h')
address.innerHTML = 'Montreal, Canada'
urlocation.appendChild(address)

// button
const schedule = document.createElement('button')
schedule.innerHTML = 'schedule'
schedule.style.width = buttonwidth
meet.appendChild(schedule)

//-- Right Column --\\
// Create Right Column Parent ( Contact > Content > mails)
const mails = document.createElement('div')
mails.className = 'mails'
contents.appendChild(mails)

// Styling the Left Column Contents (mails)
mails.style.display = 'flex'
mails.style.flexDirection = 'column'
mails.style.backgroundColor = container_color
mails.style.padding = '2rem'
mails.style.width = '65%'
mails.style.gap = '1rem'

// Mail Input Box
const mailbox = document.createElement('div')
mailbox.className = 'mailbox'
mails.appendChild(mailbox)

mailbox.style.display = 'flex'
mailbox.style.flexDirection = 'column'
mailbox.style.gap = textgap


const mail_label = document.createElement('h')
mail_label.innerHTML = 'your mail'
mailbox.appendChild(mail_label)

const mail_input = document.createElement('input')
mailbox.appendChild(mail_input)

mail_input.style.backgroundColor = input_color

// Description Box
const textbox = document.createElement('div')
textbox.className = 'textbox'
mails.appendChild(textbox)

textbox.style.display = 'flex'
textbox.style.flexDirection = 'column'
textbox.style.gap = textgap

const text_label = document.createElement('h')
text_label.innerHTML = 'Description'
textbox.appendChild(text_label)

const text_input = document.createElement('input')
textbox.appendChild(text_input)

text_input.style.minHeight = '7rem'
text_input.style.backgroundColor = input_color

// Button
const send = document.createElement('button')
send.innerHTML = 'send'
send.style.width = buttonwidth;
mails.appendChild(send)