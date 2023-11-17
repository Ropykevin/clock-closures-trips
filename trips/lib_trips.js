const Trip_module = (function () {
    let trips = [];

    // private way
    function calc_total() {
        let total_km = 0;
        let total_ltrs = 0;

        for (let i = 0; i < trips.length; i++) {
            total_km += trips[i].km;
            total_ltrs += trips[i].litres;
        }

        return total_km / total_ltrs;
    }

    // Public methods
    return {
        push: function (trip) {
            // only allow Trip objects to be added to array
            if (trip instanceof Trip) {
                trips.push(trip);
            }
        },
        total_klm: function () {
            return calc_total();
        },
        to_string: function () {
            let trip_strings = [];

            for (let i = 0; i < trips.length; i++) {
                trip_strings.push(trips[i].toString());
            }

            let acc_klm = calc_total().toFixed(1);
            return trip_strings.join("\n") + "\n\nCumulative KML: " + acc_klm;
        }
    };
})();

// Trip class
function Trip(destination, km, litres) {
    this.destination = destination;
    this.km = parseFloat(km);
    this.litres = parseFloat(litres);

    this.isValid = function () {
        return (
            this.destination.trim() !== "" &&
            !isNaN(this.km) && !isNaN(this.litres) &&
            this.km > 0 && this.litres > 0
        );
    };

    this.kml = function () {
        return this.km / this.litres;
    };

    Trip.prototype.toString = function () {
        let kml = this.kml().toFixed(1);
        return `Destination: ${this.destination}, Kilometers: ${this.km}, KML: ${kml}`;    };
}

export { Trip_module, Trip };
