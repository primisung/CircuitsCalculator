/////////////////// OHM'S FORMULAAAAAAAAAA

    // VOLTS
    document.querySelector('#solve-volts').addEventListener('click', function (){
        const volts = document.querySelector('#volts').value 
        const amp = document.querySelector('#amp').value
        const ohm = document.querySelector('#ohm').value 
        const power = document.querySelector('#power').value
        const nVolts = parseFloat(volts)
        const nAmp = parseFloat(amp)
        const nOhm = parseFloat(ohm)
        const nPower = parseFloat(power)

        if (volts ==='') {
                if (power === '') {
                    getVoltsAO(nAmp,nOhm)
                } else if (ohm === '') {
                    getVoltsAP(nAmp,nPower)
                } else {
                    getVoltsPO(nPower,nOhm)
                }
            }
        clearInput()
    })

    // AMPS
    document.querySelector('#solve-amp').addEventListener('click', function (){
        const volts = document.querySelector('#volts').value 
        const amp = document.querySelector('#amp').value
        const ohm = document.querySelector('#ohm').value 
        const power = document.querySelector('#power').value
        const nVolts = parseFloat(volts)
        const nAmp = parseFloat(amp)
        const nOhm = parseFloat(ohm)
        const nPower = parseFloat(power)

        if (amp === '') {
                if (power === '') {
                    getAmpVO(nVolts,nOhm)
                } else if (ohm === '') {
                    getAmpVP(nVolts,nPower)
                } else {
                    getAmpPO(nPower,nOhm)
                }
            }

        clearInput()
    })

    // OHMS
    document.querySelector('#solve-ohm').addEventListener('click', function (){
        const volts = document.querySelector('#volts').value 
        const amp = document.querySelector('#amp').value
        const ohm = document.querySelector('#ohm').value 
        const power = document.querySelector('#power').value
        const nVolts = parseFloat(volts)
        const nAmp = parseFloat(amp)
        const nOhm = parseFloat(ohm)
        const nPower = parseFloat(power)

        if (ohm === '') {
                if (power === '') {
                    getOhmAV(nAmp,nVolts)
                } else if (amp === '') {
                    getOhmVP(nVolts,nPower)
                } else {
                    getOhmAP(nAmp,nPower)
                }
            }

        clearInput()
    })

    // POWER
    document.querySelector('#solve-power').addEventListener('click', function (){
        const volts = document.querySelector('#volts').value 
        const amp = document.querySelector('#amp').value
        const ohm = document.querySelector('#ohm').value 
        const power = document.querySelector('#power').value
        const nVolts = parseFloat(volts)
        const nAmp = parseFloat(amp)
        const nOhm = parseFloat(ohm)
        const nPower = parseFloat(power)

        if  (power === '') {
                if (amp === '') {
                    getPowerVO(nVolts,nOhm)
                } else if (volts === '') {
                    getPowerOA(nOhm,nAmp)
                } else {
                    getPowerVA(nVolts,nAmp)
                }
            }

        clearInput()
    })




////////////////////////// Electrical Energyyyyyyyyyyyyyyy

document.querySelector('#solve-energy').addEventListener('click', function () {
    const power = document.querySelector('#e-power').value
    const time = document.querySelector('#e-time').value
    const energy = document.querySelector('#e-energy').value
    const nPower = parseFloat(power)
    const nTime = parseFloat(time)
    const nEnergy = parseFloat(energy)

    function clear() {
        document.querySelector('#e-power').value = ''
        document.querySelector('#e-time').value = ''
        document.querySelector('#e-energy').value = ''
    }
    if (power === '') {
        getPowerEE(nTime,nEnergy)
        clear()
    } else if (time === '') {
        getTimeEE(nPower,nEnergy)
        clear()
    } else {
        getEnergyEE(nPower,nTime)
        clear()
    }
})


///////////////////////////// Coulomb SHIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIT

document.querySelector('#solve-coulomb').addEventListener('click', function () {
    const amp = document.querySelector('#c-amp').value
    const coulomb = document.querySelector('#c-coulomb').value
    const time = document.querySelector('#c-time').value
    const nAmp = parseFloat(amp)
    const nCoulomb = parseFloat(coulomb)
    const nTime = parseFloat(time)

    function clear() {
        document.querySelector('#c-amp').value = ''
        document.querySelector('#c-coulomb').value = ''
        document.querySelector('#c-time').value = ''
    }

    if (amp === '') {
        getAmpCS(nCoulomb,nTime)
        clear()
    } else if (coulomb === '') {
        getCoulombCS(nAmp,nTime)
        clear()
    } else {
        getTimeCS(nCoulomb,nAmp)
        clear()
    }
})

////////////////////// Efficiency Solvingggggggg

document.querySelector('#solve-efficiency').addEventListener('click', function (){
    const input = document.querySelector('#ec-input').value
    const output = document.querySelector('#ec-output').value
    const efficiency = document.querySelector('#ec-efficiency').value
    const nInput = parseFloat(input)
    const nOutput = parseFloat(output)
    const nEfficiency = parseFloat(efficiency)

    function clear() {
        document.querySelector('#ec-input').value = ''
        document.querySelector('#ec-output').value = ''
        document.querySelector('#ec-efficiency').value = ''
    }

    if (input === '') {
        getInput(nOutput,nEfficiency)
        clear()
    } else if (output === '') {
        getOutput(nInput,nEfficiency)
        clear()
    } else {
        getEfficiency(nInput,nOutput)
        clear()
    }
})






//////////////////// Ohm's Formula Section

// Solving for Volts
function getVoltsAO(amp,ohm) {
    const volts = amp*ohm
    document.querySelector('#ohm-answer').textContent = volts + 'V'
}
function getVoltsAP(amp,power) {
    const volts = power/amp
    document.querySelector('#ohm-answer').textContent = volts + 'V'
}
function getVoltsPO(power,ohm) {
    const volts = power*ohm
    document.querySelector('#ohm-answer').textContent = Math.sqrt(volts) + 'V'
}

// Solving for I(Amps)
function getAmpVO(volts,ohm) {
    const amp = volts/ohm
    document.querySelector('#ohm-answer').textContent = amp + 'A'
}
function getAmpVP(volts,power) {
    const amp = power/volts
    document.querySelector('#ohm-answer').textContent = amp + 'A'
}
function getAmpPO(power,ohm) {
    const amp = power/ohm
    document.querySelector('#ohm-answer').textContent = Math.sqrt(amp) + 'A'
}

// Solving for R(Ω)
function getOhmAV(amp,volts) {
    const ohm = volts/amp
    document.querySelector('#ohm-answer').textContent = ohm + 'Ω'
}
function getOhmVP(volts,power) {
    const ohm = Math.pow(volts,2)/power
    document.querySelector('#ohm-answer').textContent = ohm + 'Ω'
}
function getOhmAP(amp,power) {
    const ohm = power/Math.pow(amp,2)
    document.querySelector('#ohm-answer').textContent = ohm + 'Ω'
}

// Solving for Power(W)
function getPowerVO(volts,ohm) {
    const power = Math.pow(volts,2)/ohm
    document.querySelector('#ohm-answer').textContent = power + 'W'
}
function getPowerOA(amp,ohm) {
    const power = ohm*Math.pow(amp,2)
    document.querySelector('#ohm-answer').textContent = power + 'W'
}
function getPowerVA(volts,amp) {
    const power = volts*amp
    document.querySelector('#ohm-answer').textContent = power + 'W'
}

function clearInput() {
    document.querySelector('#volts').value = ''
    document.querySelector('#amp').value = ''
    document.querySelector('#ohm').value  = ''
    document.querySelector('#power').value = ''
}

//////////////////// Electrical Energy Section

function getPowerEE(time,energy) {
    const power = energy/time
    document.querySelector('#energy-answer').textContent = power + 'W'
}
function getTimeEE(power,energy) {
    const time = energy/power
    document.querySelector('#energy-answer').textContent = time + 's'
}
function getEnergyEE(power,time) {
    const energy = power*time
    document.querySelector('#energy-answer').textContent = energy + 'J'
}

///////////////////// Coulomb Shit Formula

function getAmpCS(coulomb, time) {
    const amp = coulomb*time
    document.querySelector('#coulomb-answer').textContent = amp + 'A'
}
function getCoulombCS(amp, time) {
    const coulomb = amp*time
    document.querySelector('#coulomb-answer').textContent = coulomb + 'C'
}
function getTimeCS(coulomb, amp) {
    const time = coulomb/amp
    document.querySelector('#coulomb-answer').textContent = time + 's'
}

///////////////////// Efficiency Formula

function getInput(output, efficiency) {
    const input = output/efficiency
    document.querySelector('#efficiency-answer').textContent = input + 'kW'
}
function getOutput(input, efficiency) {
    const output = input*efficiency
    document.querySelector('#efficiency-answer').textContent = output + 'hp'
}
function getEfficiency(input, output) {
    const efficiency = output/input
    document.querySelector('#efficiency-answer').textContent = efficiency + '%'
}