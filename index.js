const object = {
    duration: 18,
    set_duration: function() {
        this.stop();
    },
    play: function() {
        document.querySelector('#lung > div:first-child')
            .style.animationName = 'bigball';
        document.querySelector('#lung > div:first-child')
            .style.setProperty('--anim-name', 'counter');
        document.querySelector('#lung > div:last-child')
            .style.animationName = 'smallball';
        document.querySelector('#lung > div:first-child')
            .style.animationDuration = this.duration+'s';
        document.querySelector('#lung > div:first-child')
            .style.setProperty('--anim-duration', this.duration+'s');
        document.querySelector('#lung > div:last-child')
            .style.animationDuration = this.duration+'s';
    },
    stop: function() {
        document.querySelector('#lung > div:first-child')
            .style.animationName = '';
        document.querySelector('#lung > div:last-child')
            .style.animationName = '';
        document.querySelector('#lung > div:first-child')
            .style.setProperty('--anim-name', '');
    }
};

// Event fired after KSS.init
window.addEventListener('kssready', function(e){
    console.log('kssready event triggered!', e);
    KSS.add_sandbox('ee', object, document.body);
});

// Main process
(async function(){
    KSS.init();
})();








