const sequence = [1,2,3,4,5,6,1,2,3,1,2,3,4,5,6,7,8,9,1,2,3];
let seq_index = 0;
let interval_id = -1;
let duration = 18;

function play() {
    document.querySelector('#lung > div:first-child').style.animationName = 'bigball';
    document.querySelector('#lung > div:last-child').style.animationName = 'smallball';
    document.querySelector('#lung > div:first-child').style.animationDuration = duration+'s';
    document.querySelector('#lung > div:last-child').style.animationDuration = duration+'s';
    seq_index = 0;
    interval_id = setInterval(()=>{
        document.querySelector('#lung > div:first-child')
            .setAttribute('counter', sequence[seq_index++]);
        seq_index = seq_index == sequence.length ? 0 : seq_index;
    }, 1000*duration/21);
}

function stop() {
    document.querySelector('#lung > div:first-child').style.animationName = '';
    document.querySelector('#lung > div:last-child').style.animationName = '';
    clearInterval(interval_id);
}