// Hello there!
// Below this you should find the ugliest shit of code you've ever seen

const Religion = document.querySelector("#marks-rel")
const Sinhala = document.querySelector("#marks-sin")
const English = document.querySelector("#marks-eng")
const Maths = document.querySelector("#marks-math")
const Science = document.querySelector("#marks-sci")
const HistoryS = document.querySelector("#marks-his")
const Geography = document.querySelector("#marks-geo")
const Civic = document.querySelector("#marks-ls")
const Tamil = document.querySelector("#marks-tam")
const Drama = document.querySelector("#marks-es")
const PTS = document.querySelector("#marks-pts")
const Health = document.querySelector("#marks-hs")

const year2024 = document.querySelector("#ttf")
const year2023 = document.querySelector("#ttt")
const year2022 = document.querySelector("#ttw")
const year2021 = document.querySelector("#tto")

const firstTerm = document.querySelector("#t1")
const secondTerm = document.querySelector("#t2")
const thirdTerm = document.querySelector("#t3")

const average = document.querySelector("#avg")
const classPlace = document.querySelector("#pc")
const mediumPlace = document.querySelector("#pm")
const total = document.querySelector("#tot")


let selectedYear = 2024
let selectedTerm = 2

indicateSelection() // See the code for this function. You will rethink about your existence. (Line 278)
updateData()

function updateData(){
    indicateSelection();
    if (selectedYear === 2021){
        if (selectedTerm === 1){
            Religion.innerHTML = "Not Held"
            Sinhala.innerHTML = "Not Held"
            English.innerHTML = "Not Held"
            Maths.innerHTML = "Not Held"
            Science.innerHTML = "Not Held"
            HistoryS.innerHTML = "Not Held"
            Geography.innerHTML = "Not Held"
            Civic.innerHTML = "Not Held"
            Tamil.innerHTML = "Not Held"
            Drama.innerHTML = "Not Held"
            PTS.innerHTML = "Not Held"
            Health.innerHTML = "Not Held"

            average.innerHTML = "N/A"
            classPlace.innerHTML = "N/A"
            mediumPlace.innerHTML = "N/A"
            total.innerHTML = "N/A"
        }
        else if (selectedTerm === 2){
            Religion.innerHTML = "Not Held"
            Sinhala.innerHTML = "Not Held"
            English.innerHTML = "Not Held"
            Maths.innerHTML = "Not Held"
            Science.innerHTML = "Not Held"
            HistoryS.innerHTML = "Not Held"
            Geography.innerHTML = "Not Held"
            Civic.innerHTML = "Not Held"
            Tamil.innerHTML = "Not Held"
            Drama.innerHTML = "Not Held"
            PTS.innerHTML = "Not Held"
            Health.innerHTML = "Not Held"

            average.innerHTML = "N/A"
            classPlace.innerHTML = "N/A"
            mediumPlace.innerHTML = "N/A"
            total.innerHTML = "N/A"
        }
        else if (selectedTerm === 3){
            Religion.innerHTML = 59
            Sinhala.innerHTML = 51
            English.innerHTML = 73
            Maths.innerHTML = 62
            Science.innerHTML = 71
            HistoryS.innerHTML = 59
            Geography.innerHTML = 61
            Civic.innerHTML = 37
            Tamil.innerHTML = 12
            Drama.innerHTML = 76
            PTS.innerHTML = 44
            Health.innerHTML = 37

            average.innerHTML = 54.50
            classPlace.innerHTML = 20
            mediumPlace.innerHTML = 20
            total.innerHTML = 654
        }
    }
    else if (selectedYear === 2022){
        if (selectedTerm === 1){
            Religion.innerHTML = 74
            Sinhala.innerHTML = 88
            English.innerHTML = 86
            Maths.innerHTML = 42
            Science.innerHTML = 59
            HistoryS.innerHTML = 49
            Geography.innerHTML = 56
            Civic.innerHTML = 56
            Tamil.innerHTML = 36
            Drama.innerHTML = 88
            PTS.innerHTML = 38
            Health.innerHTML = 60

            average.innerHTML = 61.00
            classPlace.innerHTML = 25
            mediumPlace.innerHTML = 25
            total.innerHTML = 732
        }
        else if (selectedTerm === 2){
            Religion.innerHTML = 85
            Sinhala.innerHTML = 87
            English.innerHTML = 96
            Maths.innerHTML = 47
            Science.innerHTML = 75
            HistoryS.innerHTML = 81
            Geography.innerHTML = 77
            Civic.innerHTML = 88
            Tamil.innerHTML = 51
            Drama.innerHTML = 83
            PTS.innerHTML = 80
            Health.innerHTML = 51

            average.innerHTML = 75.08
            classPlace.innerHTML = 9
            mediumPlace.innerHTML = 9
            total.innerHTML = 901
        }
        else if (selectedTerm === 3){
            Religion.innerHTML = 96
            Sinhala.innerHTML = 89
            English.innerHTML = 97
            Maths.innerHTML = 54
            Science.innerHTML = 65
            HistoryS.innerHTML = 77
            Geography.innerHTML = 75
            Civic.innerHTML = 76
            Tamil.innerHTML = 71
            Drama.innerHTML = 87
            PTS.innerHTML = 43
            Health.innerHTML = 50

            average.innerHTML = 73.33
            classPlace.innerHTML = 13
            mediumPlace.innerHTML = 13
            total.innerHTML = 880
        }
    }
    else if (selectedYear === 2023){
        if (selectedTerm === 1){
            Religion.innerHTML = 84
            Sinhala.innerHTML = 73
            English.innerHTML = 94
            Maths.innerHTML = 43
            Science.innerHTML = 63
            HistoryS.innerHTML = 62
            Geography.innerHTML = 79
            Civic.innerHTML = 82
            Tamil.innerHTML = 41
            Drama.innerHTML = 88
            PTS.innerHTML = 78
            Health.innerHTML = 69

            average.innerHTML = 71.33
            classPlace.innerHTML = 17
            mediumPlace.innerHTML = 10
            total.innerHTML = 856
        }
        else if (selectedTerm === 2){
            Religion.innerHTML = 79
            Sinhala.innerHTML = 95
            English.innerHTML = 96
            Maths.innerHTML = 53
            Science.innerHTML = 72
            HistoryS.innerHTML = 85
            Geography.innerHTML = 91
            Civic.innerHTML = 69
            Tamil.innerHTML = 48
            Drama.innerHTML = 95
            PTS.innerHTML = 81
            Health.innerHTML = 70

            average.innerHTML = 77.83
            classPlace.innerHTML = 11
            mediumPlace.innerHTML = 6
            total.innerHTML = 934
        }
        else if (selectedTerm === 3){
            Religion.innerHTML = 77
            Sinhala.innerHTML = 78
            English.innerHTML = 93
            Maths.innerHTML = 37
            Science.innerHTML = 70
            HistoryS.innerHTML = 76
            Geography.innerHTML = 88
            Civic.innerHTML = 88
            Tamil.innerHTML = 40
            Drama.innerHTML = 85
            PTS.innerHTML = 89
            Health.innerHTML = 61

            average.innerHTML = 73.5
            classPlace.innerHTML = 15
            mediumPlace.innerHTML = 9
            total.innerHTML = 882
        }
    }
    else if (selectedYear === 2024){
        if (selectedTerm === 1){
            Religion.innerHTML ="Not Held"
            Sinhala.innerHTML ="Not Held"
            English.innerHTML ="Not Held"
            Maths.innerHTML ="Not Held"
            Science.innerHTML ="Not Held"
            HistoryS.innerHTML ="Not Held"
            Geography.innerHTML ="Not Held"
            Civic.innerHTML ="Not Held"
            Tamil.innerHTML ="Not Held"
            Drama.innerHTML ="Not Held"
            PTS.innerHTML ="Not Held"
            Health.innerHTML ="Not Held"

            average.innerHTML = "N/A"
            classPlace.innerHTML ="N/A"
            mediumPlace.innerHTML ="N/A"
            total.innerHTML = "N/A"
        }
        else if (selectedTerm === 2){
            Religion.innerHTML = 86
            Sinhala.innerHTML = 80
            English.innerHTML = 90
            Maths.innerHTML = 75
            Science.innerHTML = 60
            HistoryS.innerHTML = 76
            Geography.innerHTML = 70
            Civic.innerHTML = 84
            Tamil.innerHTML = 68
            Drama.innerHTML = 87
            PTS.innerHTML = 85
            Health.innerHTML = 76

            average.innerHTML = 78.083
            classPlace.innerHTML = 5
            mediumPlace.innerHTML = 5
            total.innerHTML = 937
        }
        else if (selectedTerm === 3){
            Religion.innerHTML ="TBD"
            Sinhala.innerHTML ="TBD"
            English.innerHTML ="TBD"
            Maths.innerHTML ="TBD"
            Science.innerHTML ="TBD"
            HistoryS.innerHTML ="TBD"
            Geography.innerHTML ="TBD"
            Civic.innerHTML = "TBD"
            Tamil.innerHTML = "TBD"
            Drama.innerHTML = "TBD"
            PTS.innerHTML = "TBD"
            Health.innerHTML ="TBD"

            average.innerHTML = "TBD"
            classPlace.innerHTML = "TBD"
            mediumPlace.innerHTML= "TBD"
            total.innerHTML = "TBD"
        }
    }
}

function indicateSelection(){
    if (selectedYear == 2021){
        year2021.style.backgroundColor = "rgba(61, 61, 150, 0.344)"
        year2022.style.backgroundColor = "rgba(104, 104, 150, 0.144)"
        year2023.style.backgroundColor = "rgba(104, 104, 150, 0.144)"
        year2024.style.backgroundColor = "rgba(104, 104, 150, 0.144)"
    }
    else if (selectedYear == 2022){
        year2022.style.backgroundColor = "rgba(61, 61, 150, 0.344)"
        year2021.style.backgroundColor = "rgba(104, 104, 150, 0.144)"
        year2023.style.backgroundColor = "rgba(104, 104, 150, 0.144)"
        year2024.style.backgroundColor = "rgba(104, 104, 150, 0.144)"
    }
    else if (selectedYear == 2023){
        year2023.style.backgroundColor = "rgba(61, 61, 150, 0.344)"
        year2022.style.backgroundColor = "rgba(104, 104, 150, 0.144)"
        year2021.style.backgroundColor = "rgba(104, 104, 150, 0.144)"
        year2024.style.backgroundColor = "rgba(104, 104, 150, 0.144)"
    }
    else if (selectedYear == 2024){
        year2024.style.backgroundColor = "rgba(61, 61, 150, 0.344)"
        year2022.style.backgroundColor = "rgba(104, 104, 150, 0.144)"
        year2023.style.backgroundColor = "rgba(104, 104, 150, 0.144)"
        year2021.style.backgroundColor = "rgba(104, 104, 150, 0.144)"
    }

    if (selectedTerm == 3){
        thirdTerm.style.backgroundColor = "rgba(61, 61, 150, 0.344)"
        firstTerm.style.backgroundColor = "rgba(104, 104, 150, 0.144)"
        secondTerm.style.backgroundColor = "rgba(104, 104, 150, 0.144)"
    }
    else if (selectedTerm == 2){
        secondTerm.style.backgroundColor = "rgba(61, 61, 150, 0.344)"
        firstTerm.style.backgroundColor = "rgba(104, 104, 150, 0.144)"
        thirdTerm.style.backgroundColor = "rgba(104, 104, 150, 0.144)"
    }
    else if (selectedTerm == 1){
        firstTerm.style.backgroundColor = "rgba(61, 61, 150, 0.344)"
        thirdTerm.style.backgroundColor = "rgba(104, 104, 150, 0.144)"
        secondTerm.style.backgroundColor = "rgba(104, 104, 150, 0.144)"
    }
}

function setYear(year){
    selectedYear = year;
    updateData();
    
}

function setTerm(term){
    selectedTerm = term;
    updateData();
    // indicateSelection();
}