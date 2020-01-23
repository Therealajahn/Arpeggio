const synths = [
    new Tone.Synth(),
    new Tone.Synth(),
    new Tone.Synth(),
];

synths[0].oscillator.type =  "sine";
synths[1].oscillator.type = "sine";
synths[2].oscillator.type = "sine";

const gain = new Tone.Gain(0.5).toMaster();




synths.forEach(synth => synth.connect(gain));

const rows = document.body.querySelectorAll("div > div"),
      notes = ["C3", "E3", "C5"];
let index = 0;

Tone.Transport.scheduleRepeat(repeat, "8n");
Tone.Transport.start();


function repeat(time) {
    let step = index % 8;
    for (let i = 0; i < rows.length; i++){
        let synth = synths[i],
            row = rows[i],
            note = notes[i],    
            input = row.querySelector(`input:nth-child(${step + 1})`);
    if (input.checked) synth.triggerAttackRelease(note, "8n", time);    
    }
    index += 1;
    console.log(Tone.context.state);
}


