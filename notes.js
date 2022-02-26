
showNotes();
// add note Button

let addbtn=document.getElementById('addbtn');
addbtn.addEventListener('click',function(element){
    let txt=document.getElementById('note');
    


    let notes=localStorage.getItem('notes');
    if(notes==null){
        var noteobj=[];
    }
    else{
        noteobj=JSON.parse(notes)

    }
    noteobj.push(txt.value);
    localStorage.setItem("notes",JSON.stringify(noteobj));
    txt.value="";
    // console.log(noteobj);
    showNotes();
})




// function to show the notes

function showNotes(){

    let notes=localStorage.getItem('notes');
    let html="";
    if(notes==null){
        var noteobj=[];
        
    }
    else{
        noteobj=JSON.parse(notes)
        noteobj.forEach(function(element,index){
            html+= `
            <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">Note ${index + 1}</h5>
                        <p class="card-text"> ${element}</p>
                        <button id="${index}"onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
                    </div>
                </div>
            `;
        })
        let noteelem=document.querySelector('.block');
        noteelem.innerHTML=html;


    }
}

function deleteNote(index){
    let notes=localStorage.getItem('notes');
    if(notes==null){
        var noteobj=[];
    }
    else{
        noteobj=JSON.parse(notes)

    }
    noteobj.splice(index,1);
    localStorage.setItem('notes',JSON.stringify(noteobj));
    showNotes();
}


//Manipulating search bar

let search=document.getElementById('searchTxt');
search.addEventListener('input',function(element){
    
    let searchElem=search.value;
    console.log(searchElem);
    let notecard=document.getElementsByClassName('noteCard')
    Array.from(notecard).forEach(function(element){
        cardTxt=element.getElementsByTagName('p')[0].innerText;
        // console.log(cardTxt);
        if(cardTxt.includes(searchElem)){
            element.style.display='block';
        }
        else{
            element.style.display='none';
        }

    })

})

//Delete All Notes button manipulation

let dlt=document.getElementById('dltall');
dlt.addEventListener('click',function(){
  var noteup=[];
  localStorage.setItem('notes',JSON.stringify(noteup));


    showNotes();
})