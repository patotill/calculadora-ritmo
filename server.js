const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

class CalculadoraRitmo {
    constructor(distancia, horas, minutos, segundos) {
        this.distancia = distancia;
        this.tiempoTotalMinutos = (horas * 60) + minutos + (segundos / 60);
    }

    obtenerRitmoFormateado() {
        const ritmoDecimal = this.tiempoTotalMinutos / this.distancia;
        let ritmoMinutos = Math.floor(ritmoDecimal);
        let ritmoSegundos = Math.round((ritmoDecimal - ritmoMinutos) * 60);

        if (ritmoSegundos === 60) {
            ritmoMinutos++;
            ritmoSegundos = 0;
        }

        const segundosFormateados = ritmoSegundos < 10 ? `0${ritmoSegundos}` : ritmoSegundos;
        return `${ritmoMinutos}:${segundosFormateados} min/km`;
    }
}

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.post('/api/calcular-ritmo', (req, res) => {
    const { distancia, horas, minutos, segundos } = req.body;
    const calculadora = new CalculadoraRitmo(distancia, horas, minutos, segundos);
    res.json({ ritmo: calculadora.obtenerRitmoFormateado() });
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});