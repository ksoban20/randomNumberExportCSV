# randomNumberExportCSV
Generate Random Maths Number and Export it in CSV format

this will give the output as 1234 5678
```const generateRandomNumber = () => {
  return Math.floor(Math.random() * 1000000000000)
    .toString()
    .padStart(8, '0')
    .replace(/(\d{4})/g, '$1 ');
};```

// change "(8, '0')" 8 to any length you want, for example if you want it as 0000 0000 0000 then change 8 to 12
// change "(\d{4})" 4 to any gap you want, for example if you want 00 00 00 00 then change 4 to 2,