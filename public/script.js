class InterfazCalculadora {
    constructor() {
        this.formulario = document.getElementById('paceForm');
        this.resultadoDiv = document.getElementById('resultado');
        this.ritmoMostrado = document.getElementById('ritmoMostrado');
        
        this.selectDistancia = document.getElementById('distancia');
        this.inputDistanciaPersonalizada = document.getElementById('distanciaPersonalizada');
        
        this.vincularEventos();
    }

    vincularEventos() {
        this.formulario.addEventListener('submit', (evento) => this.procesarFormulario(evento));
        this.selectDistancia.addEventListener('change', () => this.manejarCambioSelector());
    }

    manejarCambioSelector() {
        if (this.selectDistancia.value === 'otra') {
            this.inputDistanciaPersonalizada.classList.remove('oculto');
            this.inputDistanciaPersonalizada.required = true;
        } else {
            this.inputDistanciaPersonalizada.classList.add('oculto');
            this.inputDistanciaPersonalizada.required = false;
            this.inputDistanciaPersonalizada.value = '';
        }
    }

    obtenerDatosFormulario() {
        let valorDistancia = this.selectDistancia.value;
        if (valorDistancia === 'otra') {
            valorDistancia = this.inputDistanciaPersonalizada.value;
        }

        return {
            distancia: parseFloat(valorDistancia),
            horas: parseInt(document.getElementById('horas').value) || 0,
            minutos: parseInt(document.getElementById('minutos').value) || 0,
            segundos: parseInt(document.getElementById('segundos').value) || 0
        };
    }

    async procesarFormulario(evento) {
        evento.preventDefault(); 
        
        const datos = this.obtenerDatosFormulario();

        try {
            const respuesta = await fetch('/api/calcular-ritmo', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(datos)
            });

            const resultado = await respuesta.json();
            this.actualizarVista(resultado.ritmo);
            
        } catch (error) {
            console.error('Hubo un error en la petición:', error);
        }
    }

    actualizarVista(ritmo) {
        this.ritmoMostrado.innerText = ritmo;
        this.resultadoDiv.classList.remove('oculto');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new InterfazCalculadora();
});