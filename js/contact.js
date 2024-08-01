// Colors
const primary_color = '#1E1E1E'
const font = 'black'
const secondary_color = '#8F72E3'
const container_color = 'white'
const input_color = '#f7f7f7'

// Adjustment
const textgap = '.3rem'
const buttonwidth = 'fit-content'
const buttonpad = '.8vw'
const buttonfont = '1vw'

// Select The Parent Div
const contact = document.querySelector('.contact')

const contact_left = document.querySelector('.contact_left')
const contact_right = document.querySelector('.contact_right')

//-- Left Column --\\
// Create Left Column Parent ( Contact > Content > meet)
const meet = document.createElement('div')
meet.className = 'meet'
contact_left.appendChild(meet)

// Left Column Main Parent Container (meet)

const urlocation = document.createElement('div')
urlocation.className = 'urlocation'
meet.appendChild(urlocation)

const mailaddress = document.createElement('h')
mailaddress.innerHTML = 'tecpen.info@gmail.com'
urlocation.appendChild(mailaddress)

const address = document.createElement('h')
address.innerHTML = 'Montreal, Canada'
urlocation.appendChild(address)

// button
const schedule = document.createElement('button')
schedule.innerHTML = 'Schedule A Meeting'

meet.appendChild(schedule)
