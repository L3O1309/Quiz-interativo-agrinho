const questions = [
  {
    question: 'Onde você se sente mais confortável?',
    answers: [
      { answer: 'Na natureza, cercado de árvores e animais.', correct: true },
      { answer: 'Na cidade, com movimento e tecnologia.', correct: false },
    ],
  },
  {
    question: 'Qual seu som preferido?',
    answers: [
      { answer: 'O canto dos pássaros.', correct: true },
      { answer: 'O som da cidade e das pessoas.', correct: false },
    ],
  },
  {
    question: 'Você prefere acordar com:',
    answers: [
      { answer: 'O nascer do sol e canto dos galos.', correct: true },
      { answer: 'O despertador e movimento da cidade.', correct: false },
    ],
  },
  {
    question: 'Seu lazer ideal é:',
    answers: [
      { answer: 'Fazer trilhas, cuidar de plantas ou pescar.', correct: true },
      { answer: 'Ir ao shopping, cinema ou cafeterias.', correct: false },
    ],
  },
  {
    question: 'O que te traz mais paz?',
    answers: [
      { answer: 'Ver um pôr do sol no campo.', correct: true },
      { answer: 'Assistir séries e ouvir música na cidade.', correct: false },
    ],
  },
  {
    question: 'Comida que você prefere:',
    answers: [
      { answer: 'Comida caseira, feita no fogão a lenha.', correct: true },
      { answer: 'Comida de restaurantes modernos.', correct: false },
    ],
  },
  {
    question: 'Se pudesse escolher onde morar:',
    answers: [
      { answer: 'Uma chácara com bastante verde.', correct: true },
      { answer: 'Um apartamento no centro.', correct: false },
    ],
  },
  {
    question: 'Você se sente mais energizado:',
    answers: [
      { answer: 'Cuidando de plantas, animais ou jardinagem.', correct: true },
      { answer: 'Em ambientes tecnológicos, coworkings ou eventos urbanos.', correct: false },
    ],
  },
  {
    question: 'Trânsito para você é:',
    answers: [
      { answer: 'Algo estressante e que evito.', correct: true },
      { answer: 'Parte do dia a dia, já estou acostumado.', correct: false },
    ],
  },
  {
    question: 'O que você acha mais bonito?',
    answers: [
      { answer: 'Paisagens naturais, plantações e rios.', correct: true },
      { answer: 'Prédios altos, luzes e arquitetura moderna.', correct: false },
    ],
  },
  {
    question: 'Seu meio de transporte favorito é:',
    answers: [
      { answer: 'Bicicleta, cavalo, ou caminhadas.', correct: true },
      { answer: 'Metrô, ônibus ou carro.', correct: false },
    ],
  },
  {
    question: 'Qual dessas opções te define melhor?',
    answers: [
      { answer: 'Amo simplicidade, natureza e vida tranquila.', correct: true },
      { answer: 'Gosto de agitação, novidades e movimento.', correct: false },
    ],
  },
];
// texto final de conexão
const message = document.createElement('p');

if (points > questions.length / 2) {
  message.textContent = 'Você tem uma alma do campo! Mas lembre-se: cidade e campo se completam e juntos fazem um mundo mais equilibrado 🌎🌾🏙️';
} else {
  message.textContent = 'Você tem espírito urbano! Mas a natureza sempre traz equilíbrio para nossa vida. Cidade e campo caminham juntos 🌆🌳';
}

scoreContainer.appendChild(message);