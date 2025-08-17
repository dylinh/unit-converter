// Elements requiring JS
const inputBoxEl = document.getElementById("unit-input")
const convertButtonEl = document.getElementById("convert-btn")
const lengthEl = document.getElementById("length")
const volumeEl = document.getElementById("volume")
const massEl = document.getElementById("mass")

// Create an event listener for the convert button
// Use the value in the input box to output the conversions

convertButtonEl.addEventListener("click", () => {
    // Conversions
    const numberInput = Number(inputBoxEl.value)
    const meterToFeet = numberInput * 3.281
    const feetToMeter = numberInput / 3.281
    const litersToGallons = numberInput * 0.264
    const gallonsToLiters = numberInput / 0.264
    const kilogramsToPounds = numberInput * 2.204
    const poundsToKilograms = numberInput / 2.204

    // Update elements
    lengthEl.textContent = `${numberInput} metres = ${meterToFeet.toFixed(3)} feet | ${numberInput} feet = ${feetToMeter.toFixed(3)} meters`
    volumeEl.textContent = `${numberInput} liters = ${litersToGallons.toFixed(3)} gallons | ${numberInput} gallons = ${gallonsToLiters.toFixed(3)} liters`
    massEl.textContent = `${numberInput} kilograms = ${kilogramsToPounds.toFixed(3)} pounds | ${numberInput} pounds = ${poundsToKilograms.toFixed(3)} kilograms`
})

