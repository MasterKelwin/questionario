let titulo = document.querySelector('#boasVindas');
let dia = new Date().getDay();
let horas = new Date().getHours();

(function boasVindas(dia, horas) {
    (() => {
        if (dia == 0) {
            return diaDasemana = "Domingo";
        }
        if (dia == 1) {
            return diaDasemana = "Segunda-feira";
        }
        if (dia == 2) {
            return diaDasemana = "Terça-feira";
        }
        if (dia == 3) {
            return diaDasemana = "Quarta-feira";
        }
        if (dia == 4) {
            return diaDasemana = "Quinta-feira";
        }
        if (dia == 5) {
            return diaDasemana = "Sexta-feira";
        }
        if (dia == 6) {
            return diaDasemana = "Sábado";
        }
    })();

    (() => {
        if(horas >= 4 && horas < 12) {
            return turno = "Bom dia";
        }
        if(horas >= 12 && horas < 18) {
            return turno = "Boa tarde";
        }
        else {
            return turno = "Boa noite";
        }
    })();   
    
    renderiza();

})(dia, horas);

function renderiza() {
    titulo.textContent = `${turno}, hoje é ${diaDasemana}, foco nos estudos!`
};


