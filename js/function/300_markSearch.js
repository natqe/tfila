
function markSearch(data) {
  if (main.id.startsWith('חיפוש-')) {
    let words = main.id.split('-');
    words.shift();
    const search = words.join(' ');
    let newData = data.replace(RegExp("<(/)?span class='mark חיפוש-[^>]*>", 'g'), '<span>').
      replace(RegExp(search, 'g'), `<span class='mark ${main.id}' >${search}</span>`);
    words.forEach(word => newData = newData.replace(RegExp(`(${word})(?![^<]*>)`, 'g'), `<span class='mark ${main.id}' >${word}</span>`));
    return newData;
  }
  return data;
}



    // const combinations = []
    // for (var i = 0; i < words.length; i++) {
    //   if(words[i+1]) combinations.push(`${words[i]} ${words[i+1]}`);
    // }
    // console.log(combinations);

    // words.reduce((previous, current) =>
    //   newData = newData.replace(RegExp(`(${previous} ${current})(?![^<]*>)`, 'g'), `<span class='mark ${main.id}' >${previous} ${current}</span>`).
    //     replace(RegExp(`(${previous})(?![^<]*>)`, 'g'), `<span class='mark ${main.id}' >${previous}</span>`).
    //     replace(RegExp(`(${current})(?![^<]*>)`, 'g'), `<span class='mark ${main.id}' >${current}</span>`));