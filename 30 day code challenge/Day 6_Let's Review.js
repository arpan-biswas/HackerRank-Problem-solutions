// Day 6: Let's Review

process.stdin.on("end", function () {
   processData(_input);
   _input = _input.split('\n');
   
  for (i = 1; i < _input.length; i++) {
    var Word = _input[i].split('');

    var even = '';
    var odd = '';

    for (var j = 0; j < Word.length; j++) {
      if (j % 2 === 0) {
        even = even + Word[j];
      } else {
        odd = odd + Word[j];
      }
    }
    console.log(even + ' ' + odd);
    }
});