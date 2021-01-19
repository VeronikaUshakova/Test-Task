localStorage.removeItem('participant');
update_filter();

let events;
var participants = [];

function addParticipant(){
    let participant = localStorage.getItem('participant');
    let new_participant_name = document.getElementById('addParticipant_name');
    if(participant !== null) {
        participants = participant.split(",");
        if(new_participant_name.value.trim() !== "") {
            participants.push(new_participant_name.value);
        }
        localStorage.setItem('participant', participants);
    }else{
        if(new_participant_name.value.trim() !== "") {
            participants = [];
            participants.push(new_participant_name.value);
            localStorage.setItem('participant', participants);
        }
    }
    update_filter();
}

function update_filter(){
    let members = document.getElementById('all_members');
    participant = localStorage.getItem('participant');
    let string_select;
    members.innerHTML="<option>All members</option>";
    if(participant !== null) {
        participants = participant.split(",");
        for(let i =0;i<participants.length;i++){
            string_select+="<option>"+participants[i]+"</option>";
        }
    }
    members.innerHTML+=string_select;
}

function  participant(){
    let person = document.getElementById('input_participant');
    participants.push(person.value);
    let person_string;
    for(let i = 0;i< participants.length;i++){
        person_string+=participants[i];
        if(i+1 <= participants.length){
            person_string+=", ";
        }
    }
    person.value = person_string;
}
function create_event(){
    let name_event = document.getElementById("input_name");
    let participants = [];
    participants
}