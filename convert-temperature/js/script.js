// Implementasikan Kelas Adapte untuk konversi suhu
class TemperatureAdaptee {
    constructor(adapter) {
        this.adapter = adapter;
    }

    // Metode untuk melakukan konversi suhu
    convert(input, from, to) {
        return this.adapter.convert(input, from, to);
    }

    // Metode untuk mendapatkan rumus konversi suhu
    getFormula(input, from, result, to) {
        return this.adapter.getFormula(input, from, result, to);
    }
}

// Implementasikan Kelas Adapter untuk konversi suhu
class TemperatureAdapter {
    // Metode utama untuk melakukan konversi suhu
    convert(input, from, to) {
        // Jika satuan asal sama dengan satuan tujuan, tidak perlu konversi
        if (from === to) {
            return input;
        }

        // Pilih metode konversi berdasarkan satuan asal
        switch (from) {
            case "Celsius":
                return this.convertFromCelsius(input, to);
            case "Fahrenheit":
                return this.convertFromFahrenheit(input, to);
            case "Reamur":
                return this.convertFromReamur(input, to);
            case "Kelvin":
                return this.convertFromKelvin(input, to);
            default:
                throw new Error("Satuan suhu tidak dikenali");
        }
    }

    // Metode untuk konversi dari Celsius ke satuan lainnya
    convertFromCelsius(input, to) {
        switch (to) {
            case "Fahrenheit":
                return (input * 9 / 5) + 32;
            case "Reamur":
                return input * 4 / 5;
            case "Kelvin":
                return input + 273.15;
            default:
                throw new Error("Satuan suhu tidak dikenali");
        }
    }

    // Implementasikan metode untuk konversi dari Fahrenheit ke satuan lainnya
    convertFromFahrenheit(input, to) {
        switch (to) {
            case "Celsius":
                return (input - 32) * 5 / 9;
            case "Reamur":
                return (input - 32) * 4 / 9;
            case "Kelvin":
                return (input - 32) * 5 / 9 + 273.15;
            default:
                throw new Error("Satuan suhu tidak dikenali");
        }
    }

    // Implementasikan metode untuk konversi dari Reamur ke satuan lainnya
    convertFromReamur(input, to) {
        switch (to) {
            case "Celsius":
                return (5 / 4) * input;
            case "Fahrenheit":
                return (9 / 4) * input + 32;
            case "Kelvin":
                return (5 / 4) * input + 273.15;
            default:
                throw new Error("Satuan suhu tidak dikenali");
        }
    }

    // Implementasikan metode untuk konversi dari Kelvin ke satuan lainnya
    convertFromKelvin(input, to) {
        switch (to) {
            case "Celsius":
                return input - 273.15;
            case "Fahrenheit":
                return (input * 9 / 5) - 459.67;
            case "Reamur":
                return (4 / 5) * (input - 273.15);
            default:
                throw new Error("Satuan suhu tidak dikenali");
        }
    }

    // Metode untuk mendapatkan rumus konversi suhu
    getFormula(input, from, result, to) {
        // Pilih rumus konversi berdasarkan satuan asal
        switch (from) {
            case "Celsius":
                return this.getFormulaFromCelsius(input, result, to);
            case "Fahrenheit":
                return this.getFormulaFromFahrenheit(input, result, to);
            case "Reamur":
                return this.getFormulaFromReamur(input, result, to);
            case "Kelvin":
                return this.getFormulaFromKelvin(input, result, to);
            default:
                throw new Error("Satuan suhu tidak dikenali");
        }
    }

    // Metode untuk mendapatkan rumus konversi dari Celsius ke satuan lainnya
    getFormulaFromCelsius(input, result, to) {
        switch (to) {
            case "Fahrenheit":
                return `(${input}°C × 9/5) + 32 = ${result}°F`;
            case "Reamur":
                return `${input}°C × 4/5 = ${result}°R`;
            case "Kelvin":
                return `${input}°C + 273.15 = ${result}°K`;
            default:
                throw new Error("Satuan suhu tidak dikenali");
        }
    }

    // Implementasikan metode untuk mendapatkan rumus konversi dari Fahrenheit ke satuan lainnya
    getFormulaFromFahrenheit(input, result, to) {
        switch (to) {
            case "Celsius":
                return `(${input}°F - 32) × 5/9 = ${result}°C`;
            case "Reamur":
                return `(${input}°F - 32) × 4/9 = ${result}°R`;
            case "Kelvin":
                return `(${input}°F + 459.67) × 5/9 = ${result}°K`;
            default:
                throw new Error("Satuan suhu tidak dikenali");
        }
    }

    // Implementasikan metode untuk mendapatkan rumus konversi dari Reamur ke satuan lainnya
    getFormulaFromReamur(input, result, to) {
        switch (to) {
            case "Celsius":
                return `${input}°R × 5/4 = ${result}°C`;
            case "Fahrenheit":
                return `(${input}°R × 9/4) + 32 = ${result}°F`;
            case "Kelvin":
                return `(${input}°R × 5/4) + 273.15 = ${result}°K`;
            default:
                throw new Error("Satuan suhu tidak dikenali");
        }
    }

    // Implementasikan metode untuk mendapatkan rumus konversi dari Kelvin ke satuan lainnya
    getFormulaFromKelvin(input, result, to) {
        switch (to) {
            case "Celsius":
                return `${input}K - 273.15 = ${result}°C`;
            case "Fahrenheit":
                return `(${input}K × 9/5) - 459.67 = ${result}°F`;
            case "Reamur":
                return `(${input}K - 273.15) × 4/5 = ${result}°R`;
            default:
                throw new Error("Satuan suhu tidak dikenali");
        }
    }
}

// Buat objek adapter dengan menggunakan strategi konversi suhu
const temperatureAdaptee = new TemperatureAdaptee(new TemperatureAdapter());;

// Referensi elemen-elemen HTML
const output = document.getElementById("output");
const inputElement = document.getElementById("input");
const selectOneElement = document.getElementById("selection_1");
const selectTwoElement = document.getElementById("selection_2");
const buttonConvert = document.getElementById("result");
const buttonReset = document.getElementById("reset");
const howto = document.getElementById("howto");
const error = document.getElementById("error");

// Tambahkan event listener untuk tombol konversi
buttonConvert.addEventListener("click", () => {
    const input = parseFloat(inputElement.value);
    const selectOne = selectOneElement.value;
    const selectTwo = selectTwoElement.value;

    if (isNaN(input)) {
        error.innerHTML = `* Mohon masukkan nilai dalam bentuk angka!`;
        return;
    } else if (selectOne === selectTwo) {
        error.innerHTML = `* Satuan awal dan tujuan tidak boleh sama!`;
        return;
    }

    error.innerHTML = ``;

    // Gunakan adapter untuk melakukan konversi
    let result = temperatureAdaptee.convert(input, selectOne, selectTwo).toFixed(2);

    output.value = result;

    // Gunakan adapter untuk mendapatkan rumus konversi
    let formula = temperatureAdaptee.getFormula(input, selectOne, result, selectTwo);
    howto.innerHTML = formula;
});

// Tambahkan event listener untuk tombol reset
buttonReset.addEventListener("click", () => {
    error.innerHTML = ``;
    inputElement.value = 0;
    output.value = `32.00`;
    howto.innerHTML = `(0°C × 9/5) + 32 = 32.00°F`;
    selectOneElement.options[0].selected = true;
    selectTwoElement.options[1].selected = true;
});