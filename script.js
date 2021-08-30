function play(aid){
    var audio = document.getElementById(aid);
    audio.play();
              }


window.onload = function(){
    window.onkeydown= function(gfg){
        // if(gfg.keyCode === 13){
        //     console.log('Hello A');
        // }
        if(gfg.keyCode === 65)
        {
            play("c_octave1_audio");
        }
        else if(gfg.keyCode === 83)
        {
            play("d_octave1_audio");
        }
        else if(gfg.keyCode === 68)
        {
            play("e_octave1_audio");
        }
        else if(gfg.keyCode === 70)
        {
            play("f_octave1_audio");
        }
        else if(gfg.keyCode === 71)
        {
            play("g_octave1_audio");
        }
        else if(gfg.keyCode === 72)
        {
            play("a_octave1_audio");
        }
        else if(gfg.keyCode === 74)
        {
            play("b_octave1_audio");
        }
        else if(gfg.keyCode === 75)
        {
            play("c_octave2_audio");
        }
        else if(gfg.keyCode === 69)
        {
            play("c_octave1_sharp_audio");
        }
        else if(gfg.keyCode === 82)
        {
            play("d_octave1_sharp_audio");
        }
        else if(gfg.keyCode === 84)
        {
            play("f_octave1_sharp_audio");
        }
        else if(gfg.keyCode === 89)
        {
            play("g_octave1_sharp_audio");
        }
        else if(gfg.keyCode === 85)
        {
            play("a_octave1_sharp_audio");
        }
        else if(gfg.keyCode === 73)
        {
            play("c_octave2_sharp_audio");
        };
    };
};    