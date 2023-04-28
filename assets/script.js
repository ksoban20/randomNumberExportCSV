const generateRandomNumber = () => {
  return Math.floor(Math.random() * 1000000000000)
    .toString()
    .padStart(8, '0')
    .replace(/(\d{4})/g, '$1 ');
};
// change "(8, '0')" 8 to any length you want,
// change "(\d{4})" 4 to any gap you want

const generateRandomNumbers = (numRandomNumbers) => {
  const randomNumbers = Array.from(
    { length: numRandomNumbers },
    generateRandomNumber
  );
  const csvContent = randomNumbers.join('\n');
  const encodedUri = encodeURI(`data:text/csv;charset=utf-8,${csvContent}`);
  const link = document.createElement('a');
  link.setAttribute('href', encodedUri);
  link.setAttribute('download', 'random_numbers.csv');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  console.log(
    `Successfully generated and downloaded ${numRandomNumbers} random numbers`
  );
};

const generateButton = document.getElementById('generate-button');
generateButton.addEventListener('click', () => {
  generateRandomNumbers(1000);
});
