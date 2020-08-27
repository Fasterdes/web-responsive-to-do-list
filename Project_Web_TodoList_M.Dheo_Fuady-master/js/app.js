const clear = document.querySelector(".clear");
const datElement = document.getElementById("date");
const list = document.getElementById("list");
const input = document.getElementById("input");

//class name
const CHECK = "fa fa-circle";
const UNCHEK = "fa-circle-thin";
const LINE_THROUGH = "lineThrough";

//variabel
let LIST,id;

let data = localStorage.getItem("TODO");

//cek jika tidak kosong
if(data){
    LIST - JSON.parse(data);
    id = LIST.length;
    loadList(LIST);
}else{
    //jika data kosong
    LIST = []
    id = 0;
}

function loadList(array){
    array.forEach(function(item){
        addToDo{item.name,item.list,item.done,item.trash};
    });
}

//fungsi buat menghapus
clear.addEventListener{'click',function(){
    localStorage.clear();
    location.reload();
});

//buat mengupdate hari dan tanggal
const option = {weekday: "long",month:"short",day:"numeric"};
const today = new Date();

dataElement.innerHTML = today.toLocaleDateString("en-US",option);

function addToDo(toDO,id,done,trash){
    if(trash){return;}
    const DONE = done? CHECK : UNCHECK;
    const LINE = done? LINE_THROUGH:"";

    const item = <li class ="item">
        <i class="fa ${DONE}co" job = "completed" id ="${id}"></i>
        <p class="text $(LINE)">${toDO}></p>
        <i class="fa fa-trash-o de" job="delete" id="${id}"></i>
    </li>

    const.position = "beforeend";
    list.insertAdjacentHTML(position,item);
}

