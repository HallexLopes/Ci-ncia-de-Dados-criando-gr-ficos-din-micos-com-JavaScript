const ctx = document.getElementById('meuGrafico').getContext('2d');

const dadosGrafico = {
    labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'], // Inicialmente, os meses
    datasets: [{
        label: 'Vendas',
        data: [10, 20, 30, 40, 50, 60], // Dados de exemplo
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 2,
        fill: false,
    }]
};

const config = {
    type: 'line',
    data: dadosGrafico,
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
};

const meuGrafico = new Chart(ctx, config);

function atualizarGrafico() {
    const novoValor = Math.floor(Math.random() * 100);
    const novoMes = Mês ${dadosGrafico.labels.length + 1}; 

    dadosGrafico.labels.push(novoMes);
    dadosGrafico.datasets[0].data.push(novoValor);
    meuGrafico.update(); 
}

setInterval(atualizarGrafico, 2000);