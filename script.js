function showDescription(area) {
    const descriptionText = document.getElementById('descriptionText');
    let description = '';

    switch(area) {
        case 'medicina':
            description = 'Medicina: Profissionais da saúde são essenciais para garantir o bem-estar das comunidades rurais.';
            break;
            case 'agronomia':
                description = 'O curso de Agronomia é voltado para o estudo e desenvolvimento de técnicas e práticas agrícolas. Aborda temas como cultivo de plantas, manejo do solo, produção animal e gestão rural. O curso fornece base teórica e prática, habilitando o profissional a gerenciar propriedades agrícolas, desenvolver projetos de produção e aplicar inovações tecnológicas no campo.';
                break;
        case 'engenhariaAgricola':
            description = 'Engenharia Agrícola: Engenharia aplicada ao campo para otimizar a produção e a tecnologia agrícola.';
            break;
        case 'biologia':
            description = 'Biologia: Estudo da vida e dos organismos, fundamental para a preservação e melhoria do meio ambiente.';
            break;
        case 'programacao':
            description = 'Programação: Tecnologia da informação para desenvolver soluções inovadoras que aumentem a eficiência do campo.';
            break;
        case 'gestaoAmbiental':
            description = 'Gestão Ambiental: Planejamento e manejo sustentável dos recursos naturais para a proteção do meio ambiente.';
            break;
        default:
            description = 'Clique em uma área de estudo para saber mais.';
    }

    descriptionText.textContent = description;
}