import axios from "axios"

export default {
    //Ticketmaster
    callTicketmasterD: function (sports, concert, theatre, distance, state, dateStart, city, film, family) {
        let array = []
        if (sports) {
            array.push(sports)
        }
        if (concert) {
            array.push(concert)
        }
        if (theatre) {
            array.push(theatre)
        }
        if (film) {
            array.push(film)
        }
        if (family) {
            array.push(family)
        }
        return axios.get("/api/ticketmaster", {
            params:
            {
                activity: array,
                distance: distance,
                dateStart: dateStart,
                city: city,
                state: state
            }
        })
    },
    //Ticketmaster
    callTicketmasterV: function (concert, sports, theatre, film, family, distance, dateStart, dateEnd, city) {
        return axios.get("/api/ticketmaster", {
            params:
            {
                activity: concert + sports + theatre + film + family,
                distance: distance,
                dateStart: dateStart,
                dateEnd: dateEnd,
                city: city,
            }
        })
    },
    //RIBD
    callRibd: function (state, city, boating, fishing, hiking, beach, camping, swimming) {
        return axios.get("/api/ribd", {
            params: {
                location: city + "," + state,
                activities: boating + fishing + hiking + beach + camping + swimming,
            }
        })
    },
    //We can add arrival and depature times
    //Search TRIPOSO API Day Planner
    callDayPlanner: function (city, startDate, endDate) {
        return axios.get("/api/triposo", {
            params: {
                city: city,
                startDate: startDate,
                endDate: endDate,
            }
        })
    },
    //Search Yelp for food and drink
    callYelp: function (city, state, breakfast, dinner, dessert, foodType, drinks) {
        return axios.get("/api/yelp", {
            params: {
                location: city + "," + state,
                term: breakfast + dinner + dessert + foodType + drinks,
            }
        })
    },
    //Search RestCountries for basic country information
    callCountries: function (country) {
        return axios.get("/api/country", { params: { country: country } })
    },
    //Search Triposo for city walk information
    callTour: function (city) {
        return axios.get("/api/walk", {
            params: {
                city: city
            }
        })
    },
    callTrip: function (city, state) {
        return axios.get("/api/trip", {
            params: {
                location: city + "," + state
            }
        })
    },
    uploadImage: function(id, data) {
        return axios.post("api/users/uploadImage/" + id, data);
    },
    getUser: function (id) {
        return axios.get("/api/users/" + id);
    },
    getUsers: function () {
        return axios.get("/api/users")
    },
    getVacations: function (id) {
        return axios.get("/api/vacations/" + id)
    },
    saveTrip: function (tripData) {
        return axios.post("/api/vacations", tripData)
    },
    saveOutdoorArea: function (id, data) {
        return axios.put("/api/ribd/ribd/" + id, data)
    },
    deleteOutdoor: function (vacaId, outdoorId) {
        return axios.delete("/api/ribd/outdoor/" + vacaId + "/" + outdoorId);
    },
    saveCountry: function (countryData) {
        return axios.post("/api/country", countryData)
    },
    deleteCountry: function (id) {
        return axios.delete("/api/country/" + id);
    },
    saveFood: function (id, data) {
        return axios.put("/api/yelp/food/" + id, data)
    },
    deleteFood: function (vacaId, foodId) {
        return axios.delete("/api/yelp/food/" + vacaId + "/" + foodId);
    },
    saveTicketmaster: function (id, data) {
        return axios.put("/api/ticketmaster/event/" + id, data)
    },
    deleteEvent: function (vacaId, eventId) {
        return axios.delete("/api/ticketmaster/event/" + vacaId + "/" + eventId);
    },
    saveSightseeing: function (id, data) {
        return axios.put("/api/vacations/sightseeing/" + id, data)
    },
    deleteSightseeing: function (vacaId, sightseeId) {
        return axios.delete("/api/trip/sightseeing/" + vacaId + "/" + sightseeId);
    },
    deleteVacation: function (id) {
        return axios.delete("/api/vacations/" + id);
    },
    deleteUserVacaId: function (id, vacaId) {
        return axios.delete("/api/users/vaca/" + id + "/" + vacaId);
    },
}


    // returnCountry: function () {
    //     return axios.get("/api/country")
    // },
    // returnFood: function () {
    //     return axios.get("/api/food")
    // },
    // returnEvent: function (id) {
    //     return axios.get("/api/ticketmaster/events/" + id)
    // },
    // saveSightseeing: function (sightseeingData) {
    //     return axios.post("/api/sightseeing", sightseeingData)
    // },
    // returnSightseeing: function () {
    //     return axios.get("/api/sightseeing")
    // },
    // returnOutdoorAreas: function () {
    //     return axios.get("/api/ribd")
    // },
    // saveWalk: function (sightseeingData) {
    //     return axios.post("/api/walk", sightseeingData)
    // },
    // returnWalk: function () {
    //     return axios.get("/api/walk")
    // },
    // deleteWalk: function (id) {
    //     return axios.delete("/api/walk" + id);
    // },
    // saveDayplan: function (dayplanData) {
    //     return axios.post("/api/triposo", dayplanData)
    // },
    // returnDayplan: function () {
    //     return axios.get("/api/triposo")
    // },
    // deleteDayplan: function (id) {
    //     return axios.delete("/api/triposo" + id);
    // },
