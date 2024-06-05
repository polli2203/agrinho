document.getElementById('more-info-btn').addEventListener('click', function() {
    alert('Para mais informações, visite o site oficial do Concurso Agrinho.');
});

// Adicionando funcionalidade aos botões "Mais Informações" de cada tecnologia
const moreInfoButtons = document.querySelectorAll('.btn-more-info');
moreInfoButtons.forEach(button => {
    button.addEventListener('click', function() {
        const technology = this.parentNode.querySelector('h3').textContent;
        let info = '';
        switch (technology) {
            case 'Máquinas Agrícolas Inteligentes':
                info = 'As máquinas agrícolas inteligentes são equipadas com tecnologia GPS e sensores que permitem monitorar e otimizar o trabalho no campo, aumentando a eficiência e reduzindo custos.';
                break;
            case 'Agrotecnologia de Precisão':
                info = 'A agrotecnologia de precisão utiliza drones e satélites para coletar dados sobre as plantações, permitindo uma aplicação precisa de insumos como fertilizantes e pesticidas, o que reduz o desperdício e protege o meio ambiente.';
                break;
            case 'Biotecnologia':
                info = 'A biotecnologia no agronegócio envolve o desenvolvimento de sementes geneticamente modificadas para resistir a pragas e condições climáticas adversas, aumentando a produtividade e a segurança alimentar.';
                break;
            case