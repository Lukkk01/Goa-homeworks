let tablet = {
    brand: 'Samsung',
    model: 'Galaxy tab s8',
    color: 'Black',

    playMusic: function() {
        console.log('Playing music...')
    }
}

document.getElementById('musicBtn').onclick = function() {
    tablet.playMusic()
}