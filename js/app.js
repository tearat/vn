var dialog = document.getElementById('dialog');
var dialog_pos = 0;

// first render
render(dialog_pos);

function render(dialog_pos)
{
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
            console.log('frame done'); 
        }
    },10);

    // rendering IMAGE

    // checking picture
    var sprite_1 = document.getElementById('sprite_1');
    if ( texts[dialog_pos].pic ) { sprite_1.setAttribute( "src", texts[dialog_pos].pic ); }

    // checking position
    if ( texts[dialog_pos].position == "left" ) { sprite_1.style.marginLeft = "0px"; }
    if ( !texts[dialog_pos].position ) { sprite_1.style.marginLeft = "200px"; }
    if ( texts[dialog_pos].position == "right" ) { sprite_1.style.marginLeft = "400px"; }

    // checking effects
    if ( texts[dialog_pos].effect == "fadeout" ) { sprite_1.style.opacity = 0; }
    else { sprite_1.style.opacity = 1; }
}

document.onkeydown = function(event)
{
    if (event.keyCode == 37) 
        { back(); }
    if (event.keyCode == 39) 
        { next(); }
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