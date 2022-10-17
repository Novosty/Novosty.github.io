const range = document.querySelector('#range')
const fill = document.querySelector('.fill')
const result = document.querySelector('#result')
const menu = document.querySelector('.menu')
const navigation = document.querySelector('.navigation')

const one = document.querySelector('#one')
const two = document.querySelector('#two')
const three = document.querySelector('#three')
const four = document.querySelector('#four')
const five = document.querySelector('#five')

const oneb = document.querySelector('#oneb')
const twob = document.querySelector('#twob')
const threeb = document.querySelector('#threeb')
const fourb = document.querySelector('#fourb')
const fiveb = document.querySelector('#fiveb')

const counts = [
    { count: 0, el: oneb, el2: one },
    { count: 50, el: twob, el2: two },
    { count: 100, el: threeb, el2: three },
    { count: 150, el: fourb, el2: four },
    { count: 200, el: fiveb, el2: five },
]

range.oninput = (() => {
    fill.style.width = (range.value / 2) + '%'

    counts.forEach(({ count, el, el2 }) => {
        if (range.value >= count) {
            el.style.background = '#f1412c'
            el2.style.color = '#f1412c'
        } else {
            el.style.background = '#e0e0e0'
            el2.style.color = '#000'
        }
    })

    result.textContent = (range.value * 1000) * 0.005 + ' руб в день'
})

if (range.value >= 0 && range.value >= 50 && range.value == 100) {
    oneb.style.background = '#f1412c'
    twob.style.background = '#f1412c'

    one.style.color = '#f1412c'
    two.style.color = '#f1412c'
    three.style.color = '#f1412c'
}

result.textContent = (range.value * 1000) * 0.005 + ' руб в день'

menu.onclick = () => {
    menu.classList.toggle('active')
    navigation.classList.toggle('active')
}