function showDescription(area) {
    const descriptionText = document.getElementById('descriptionText');
    let description = '';

    switch(area) {
        case 'agronomia':
            description = 'Agronomia: é voltado para o estudo e desenvolvimento de técnicas e práticas agrícolas. Aborda temas como cultivo de plantas, manejo do solo, produção animal e gestão rural. O curso fornece base teórica e prática, habilitando o profissional a gerenciar propriedades agrícolas, desenvolver projetos de produção e aplicar inovações tecnológicas no campo.';
            break;
            case 'biologia':
                description = 'Biologia: as Ciências Biológicas proporciona uma formação ampla nas ciências da vida, incluindo o estudo da ecologia, genética e biologia molecular, elementos cruciais para a compreensão e gestão dos ecossistemas agrícolas. Ele capacita o profissional a trabalhar em pesquisa, consultoria ambiental, educação e gestão de projetos relacionados à agricultura e ao agronegócio.';
                break;
                case 'engenharia de alimentos':
                    description = 'Engenharia de Alimentos: Este curso superior abrange o desenvolvimento e produção de alimentos, desde a matéria-prima até o produto final. Inclui estudos sobre processamento, conservação e controle de qualidade. O profissional atua em indústrias alimentícias, laboratórios de controle de qualidade e pesquisa, garantindo a segurança e qualidade dos produtos agrícolas.';
                    break;
            case 'engenharia florestal':
            description = 'Engenharia Florestal: este curso é focado na gestão sustentável de recursos naturais, especialmente florestas. Inclui estudo de silvicultura, manejo ambiental e conservação. Forma profissionais aptos a trabalhar na preservação e exploração responsável de recursos florestais, além de planejar e executar projetos de reflorestamento.';
            break;
            case 'gestao do agronegocio':
                description = 'Focado em aspectos gerenciais do agronegócio, este curso aborda temas como marketing, logística, gestão financeira e estratégias para o setor. A formação prepara profissionais para atuar em cargos de gestão e administração em empresas agrícolas, cooperativas, agroindústrias e organizações relacionadas ao agronegócio.';
                break;
                case 'gestao ambiental':
                    description = 'Focado na integração entre atividades produtivas e a preservação ambiental, este curso aborda estratégias para a gestão sustentável de recursos naturais, incluindo os utilizados na agricultura. A Gestão Ambiental habilita profissionais para atuar em empresas, órgãos governamentais e ONGs, promovendo práticas agrícolas responsáveis e contribuindo para a conservação dos ecossistemas.';
                    break;
                    case 'programacao':
            description = 'Programação: Tecnologia da informação para desenvolver soluções inovadoras que aumentem a eficiência do campo.';
            break;
        case 'tecnico em agropecuaria':
            description = 'Tecnico em Agropecuária: é um curso técnico que oferece uma formação mais prática e direcionada para atuação na agropecuária. Aborda temas como manejo de animais, cultivo de plantas e gestão rural. Ele proporciona habilidades específicas para o gerenciamento de atividades agropecuárias, contribuindo para o aumento da produtividade e aprimoramento das práticas no campo.';
            break;
            case 'tecnico em meio ambiente':
            description = 'Técnico em Meio Ambiente: a formação é voltada para a formação de profissionais aptos a atuar na preservação e conservação ambiental, incluindo aspectos relacionados à agricultura sustentável. O curso oferece conhecimentos sobre legislação ambiental, gestão de resíduos e técnicas de manejo sustentável, fundamentais para a integração entre a atividade agrícola e a conservação ambiental.';
            break;
            case 'tecnico em agroindustria':
                description = 'Técnico em Agroindústria: voltado para o processamento e transformação de produtos agrícolas, este curso técnico aborda temas como tecnologia de alimentos, controle de qualidade e gestão de processos industriais. Prepara profissionais para atuar em agroindústrias, cooperativas e empresas do ramo alimentício, contribuindo para a agregação de valor aos produtos agrícolas.';
                break;
                case 'zootecnia':
            description = 'Zootecnia: é a ciência que se dedica ao estudo da criação e produção de animais. O curso abrange temas como nutrição, manejo, genética e reprodução animal. O profissional estará  para atuar na gestão de fazendas, granjas e agroindústrias, visando a maximização da produção e a qualidade dos produtos de origem animal.';
            break;
        default:
            description = 'Clique em uma área de estudo para saber mais.';
    }

    descriptionText.textContent = description;
}