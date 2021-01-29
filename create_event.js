update_filter();
refresh_participants();
var participants = [];

function refresh_participants() {
    localStorage.removeItem('participant_event');
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
    members.innerHTML = "<option id='first_value_members'></option>";
    let first_option = document.getElementById("first_value_members");
    first_option.style.display = "none";
    members.innerHTML+=string_select;
}

//  Participant add event
function  participant_add_event(){
    let participant_event=[];
    if(localStorage.getItem("participant_event") === null) {
        participant_event = [];
    } else {
        participant_event=localStorage.getItem('participant_event').split(",");
    }
    let person = document.getElementById('input_participant');
    participant_event.push(person.value);
    let person_string="";
    for(let i = 0;i< participant_event.length;i++){
        person_string+=participant_event[i];
        if(i+1 < participant_event.length){
            person_string+=", ";
        }
    }
    for(let i = 0;i< person.options.length;i++) {
        if(person.options[i].value === person.value){
            person.options[i].remove();
        }
    }
    localStorage.setItem("participant_event", participant_event);
    let first_option = document.getElementById("first_value_members");
    first_option.innerHTML = person_string;
    person.options[0].selected = true;
}

// Create event(localstoradge)
function create_event() {
    let message="Failed to create an event.";
    if(document.getElementById("input_name_event").value.trim()!=="" && document.getElementById('input_participant').value.trim() !== "") {
        let new_event = {};
        new_event.name_event = document.getElementById("input_name_event").value;
        new_event.participant = document.getElementById('input_participant').value.split(",");
        new_event.day = document.getElementById('input_day').value;
        new_event.time = document.getElementById('input_time').value;
        let events = [];
        if (localStorage.getItem("events") !== null) {
            events = JSON.stringify(localStorage.getItem("events"));
        }
        let proverka = true;
        for (let i = 0; i < events.length; i++) {
            if (events[i].day === new_event.day && new_event.time === events[i].time) {
                proverka = false;
            }
        }
        if (proverka === true) {
            events.push(new_event);
            localStorage.setItem("events", events);
            let message_box = document.getElementById("alert");
            message_box.style.display = "none";
        }else{
            message+= " Time slot is already booked.";
            let message_box = document.getElementById("alert");
            message_box.style.display="flex";
            let message_div;
            message_div = document.getElementById("text");
            message_div.innerHTML = message;
        }
    } else {
        if(document.getElementById("input_name_event").value.trim()==="") {
            message += " Write name event, please."
        }
        if(document.getElementById('input_participant').value.trim() === "") {
            message += " Choose participant, please."
        }
        let message_box = document.getElementById("alert");
        message_box.style.display="flex";
        let message_div;
        message_div = document.getElementById("text");
        message_div.innerHTML = message;
    }
}