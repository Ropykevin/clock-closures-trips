"use strict";
import {Trip_module,Trip} from './lib_trips.js';
$(document).ready( () => {
    let my_trips =  Trip_module;

    $("#add_trip").click( () => {
        const trip_add = new Trip($("#destination").val(), $("#km").val(), $("#litres").val());


        if (trip_add.isValid()) {
            my_trips.push(trip_add); 
            $("#trip_list").val(my_trips.to_string());

            $("#destination").val("");
            $("#km").val("");
            $("#litres").val("");

            $("#destination").focus();
        } 
        else {
            alert("Please complete all fields.\nKilometers and litres " 
                + "must be numeric and greater than zero.");
            $("#destination").select();
        }
        console.log(my_trips)
    });
    
    $("#destination").focus();
});