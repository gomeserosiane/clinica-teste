const MINI_CARDS = [
  '+ de 15 anos de experiência', 
  'Centenas de exames realizados', 
  'Excelência e confiança comprovadas', 
  'Referência em ultrassonografia e medicina fetal', 
  'Formação internacional em ultrassonografia', 
  'Especialista em diversas áreas médicas', 
  'Atendimento humanizado', 
  'Diagnósticos precisos e confiáveis'
];

const SERVICES = [
  { title: 'Ultrassonografia Abdominal', 
    category: 'Geral', 
    subtitle: 'Avaliação completa dos órgãos abdominais.', 
    image: 'https://images.unsplash.com/photo-1583912267550-d6c2ac376506?auto=format&fit=crop&w=900&q=80', 
    points: ['Exame seguro, não invasivo e sem radiação.', 'Indicado para investigação de dores, alterações e acompanhamento clínico.'] 
  },

  { title: 'Ultrassonografia da Próstata', 
    category: 'Especializados', 
    subtitle: 'Imagem direcionada para saúde masculina.', 
    image: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&w=900&q=80', 
    points: ['Auxilia na avaliação prostática com precisão.', 'Atendimento reservado, técnico e humanizado.'] 
  },

  { title: 'Ultrassonografia da Tireoide', 
    category: 'Geral', 
    subtitle: 'Avaliação da glândula tireoide e estruturas cervicais.', 
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=900&q=80', 
    points: ['Ajuda a identificar nódulos e alterações estruturais.', 'Pode orientar acompanhamento e procedimentos guiados.'] 
  },

  { title: 'Ultrassonografia Transvaginal', 
    category: 'Saúde da Mulher', 
    subtitle: 'Exame essencial para avaliação ginecológica.', 
    image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=900&q=80', 
    points: ['Avalia útero, ovários e região pélvica.', 'Importante para check-up feminino e investigação clínica.'] 
  },

  { title: 'Ultrassonografia Pélvica', 
    category: 'Saúde da Mulher', 
    subtitle: 'Avaliação pélvica com conforto e segurança.', 
    image: 'https://images.unsplash.com/photo-1551190822-a9333d879b1f?auto=format&fit=crop&w=900&q=80', 
    points: ['Exame indicado para acompanhamento ginecológico.', 'Imagem de apoio para diagnóstico preciso.'] 
  },
  
  { title: 'Ultrassonografia 3D e 4D', 
    category: 'Gestação', 
    subtitle: 'Tecnologia para acompanhamento fetal.', 
    image: 'https://images.unsplash.com/photo-1531983412531-1f49a365ffed?auto=format&fit=crop&w=900&q=80', 
    points: ['Visualização fetal com detalhes e maior vínculo familiar.', 'Acompanhamento seguro durante a gestação.'] 
  },

  { title: 'Doppler de Carótidas', 
    category: 'Doppler', 
    subtitle: 'Avaliação vascular das artérias carótidas.', 
    image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=900&q=80', 
    points: ['Analisa fluxo sanguíneo e possíveis obstruções.', 'Indicado para prevenção e investigação vascular.'] 
  },

  { title: 'Doppler Transcraniano', 
    category: 'Doppler', 
    subtitle: 'Avaliação do fluxo sanguíneo cerebral.', 
    image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=900&q=80', 
    points: ['Exame especializado para análise vascular intracraniana.', 'Apoia condutas médicas com dados precisos.'] 
  },

  { title: 'Doppler Transfontanela', 
    category: 'Doppler', 
    subtitle: 'Avaliação vascular neonatal especializada.', 
    image: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=900&q=80', 
    points: ['Indicado para bebês com fontanela aberta.', 'Exame cuidadoso, técnico e humanizado.'] 
  },

  { title: 'Elastografia Hepática', 
    category: 'Elastografia', 
    subtitle: 'Análise moderna da rigidez dos tecidos.', 
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=80', 
    points: ['Ajuda na avaliação de fibrose e alterações hepáticas.', 'Tecnologia avançada com método não invasivo.'] 
  }
];


const TESTIMONIALS = [
  {
    initials: 'AM',
    name: 'Ana Martins',
    label: 'Paciente de rotina ginecológica',
    text: 'Atendimento muito acolhedor, ambiente tranquilo e explicação clara durante todo o exame. Saí mais segura e bem orientada.'
  },
  {
    initials: 'CR',
    name: 'Carlos Ribeiro',
    label: 'Paciente de Doppler',
    text: 'A experiência foi organizada do agendamento ao resultado. Profissionalismo e cuidado em cada detalhe.'
  },
  {
    initials: 'LS',
    name: 'Larissa Souza',
    label: 'Acompanhamento gestacional',
    text: 'Fiz meu exame 3D/4D e me senti muito bem assistida. A equipe transmite confiança e muita humanidade.'
  },
  {
    initials: 'MP',
    name: 'Marcelo Pereira',
    label: 'Ultrassonografia abdominal',
    text: 'Serviço pontual, estrutura moderna e atendimento excelente. Recomendo pela precisão e pela forma respeitosa de conduzir o exame.'
  }
];
