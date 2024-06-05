function toggleSection(sectionId) {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        if (section.id === sectionId) {
            section.classList.add('active');
        } else {
            section.classList.remove('active');
        }
    });
}

// Event listeners para os botões de navegação
document.getElementById('more-info-btn').addEventListener('click', function() {
    toggleSection('journey');
});

document.getElementById('btn-introduction').addEventListener('click', function() {
    toggleSection('introduction');
});

document.getElementById('btn-technologies').addEventListener('click', function() {
    toggleSection('technologies');
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
            case 'Irrigação Inteligente':
                info = 'Os sistemas de irrigação inteligente utilizam sensores para determinar a necessidade de água das plantas, contribuindo para uma utilização mais eficiente dos recursos hídricos e uma produção agrícola sustentável.';
                break;
        }
        alert(info);
    });
});