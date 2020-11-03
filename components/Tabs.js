// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-api.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element

function makeTab(topic) {
    const newTab = document.createElement('div')
    newTab.classList.add('tab')
    newTab.classList.add(`${topic}`)
    newTab.textContent = `${topic}`
    newTab.addEventListener('click', (target) => {
        changeView(target)
    })
    return newTab
}
axios.get('https://lambda-times-api.herokuapp.com/topics')
    .then(res => {
        let topics = res.data.topics
        topics.forEach(topic => {
            let myTab = makeTab(topic)
            const entryPoint = document.querySelector('.topics')
            entryPoint.appendChild(myTab)
        })
    })

    .catch(err => {
        console.log(err)
    })

function changeView(event) {
    let myTab = makeTab('All')
    const entryPoint = document.querySelector('.title')
    entryPoint.after(myTab)
    console.log(event.target)
    let cards = document.querySelector('.cards-container')
    console.log(cards.children)
    debugger
    for (let i; i < cards.children.length; i++) {
        if (event.target.classList.includes('All')) {
            cards.children[i].classList.add('on')
        } else if (cards[i].classList !== event.target.classList) {
            cards[i].classList.remove('on')
        } else {
            cards[i].classList.add = event.target.classList[1]
            cards[i].classList.add = 'on'
        }
    }
}
