update_filter();

var participants = [];

function addParticipant() {
    let participant = localStorage.getItem('participant');
    let new_participant_name = document.getElementById('addParticipant_name');
    if(participant !== null) {
        participants = participant.split(",");
        if(new_participant_name.value.trim() !== "") {
            participants.push(new_participant_name.value);
        }
        localStorage.setItem('participant', participants);
    } else {
        if(new_participant_name.value.trim() !== "") {
            participants = [];
            participants.push(new_participant_name.value);
            localStorage.setItem('participant', participants);
        }
    }
    update_filter();
}

function update_filter() {
    let members;
    if(document.getElementById('all_members') !== null) {
        members = document.getElementById('all_members');
    } else {
        members = document.getElementById('input_participant');
    }
    participant = localStorage.getItem('participant');
    let string_select="";
    if(participant !== null) {
        participants = participant.split(",");
        for(let i =0;i<participants.length;i++) {
            string_select+="<option>"+participants[i]+"</option>";
        }
    }
    members.innerHTML = "<option>All members</option>";
    members.innerHTML+=string_select;
}

function refresh_participants() {
    localStorage.removeItem('participant_event');
}