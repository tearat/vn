var dialog = document.getElementById('dialog');
var dialog_pos = 0;

render(dialog_pos);

var controls_status = true;
function controls(arg)
{
    controls_status = arg;
    document.getElementById("btn_back").disabled = !arg;
    document.getElementById("btn_next").disabled = !arg;
}

function render(dialog_pos)
{
    controls(false);
    
    // checking existence
    try { texts[dialog_pos].name }
    catch (err) { dialog.innerHTML = "// null"; clearTimeout(rendering);  }

    // rendering NAME
    dialog.innerHTML += "<strong>" + texts[dialog_pos].name + ": </strong>";

    // rendering TEXT
    var i = 0;
    var rendering = setInterval(function(){
        dialog.innerHTML += texts[dialog_pos].text[i];
        i++;

        if ( i == texts[dialog_pos].text.length ) 
        {
            clearTimeout(rendering); 
            controls(true)
        }
    },10);

    // rendering IMAGE

    // checking picture
    var sprite_1 = document.getElementById('sprite_1');
    var sprite_2 = document.getElementById('sprite_2');
    
    if ( texts[dialog_pos].pic_1 ) { sprite_1.setAttribute( "src", texts[dialog_pos].pic_1 ); }
    else { sprite_1.setAttribute( "src", "" ); }
    
    if ( texts[dialog_pos].pic_2 ) { sprite_2.setAttribute( "src", texts[dialog_pos].pic_2 ); }
    else { sprite_2.setAttribute( "src", "" ); }

    // checking position
    if ( texts[dialog_pos].pos_1 == "left" ) { sprite_1.style.marginLeft = "0px"; }
    if ( !texts[dialog_pos].pos_1 ) { sprite_1.style.marginLeft = "200px"; }
    if ( texts[dialog_pos].pos_1 == "right" ) { sprite_1.style.marginLeft = "400px"; }
    
    if ( texts[dialog_pos].pos_2 == "left" ) { sprite_2.style.marginLeft = "0px"; }
    if ( !texts[dialog_pos].pos_2 ) { sprite_2.style.marginLeft = "200px"; }
    if ( texts[dialog_pos].pos_2 == "right" ) { sprite_2.style.marginLeft = "400px"; }

    // checking effects
    if ( texts[dialog_pos].effect_1 == "fadeout" ) { sprite_1.style.opacity = 0; }
    if ( texts[dialog_pos].effect_1 == "fadein" ) { sprite_1.style.opacity = 1; }
//    else { sprite_1.style.opacity = 1; }
    
    if ( texts[dialog_pos].effect_2 == "fadeout" ) { sprite_2.style.opacity = 0; }
    if ( texts[dialog_pos].effect_2 == "fadein" ) { sprite_2.style.opacity = 1; }
//    else { sprite_2.style.opacity = 1; }
}

document.onkeydown = function(event)
{
    if ( controls_status )
    {
        if (event.keyCode == 37) 
            { back(); }
        if (event.keyCode == 39) 
            { next(); }
    }
}

function next()
{
    dialog.innerHTML = "";
    dialog_pos++;
    render(dialog_pos);
}

function back()
{
    dialog.innerHTML = "";
    dialog_pos--;
    render(dialog_pos);
}