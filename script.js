document.addEventListener('DOMContentLoaded', function () {
  const Token = '1014333022960709';
  const baseurl = `https://superheroapi.com/api.php/${Token}`;
  const click = document.getElementById('click');
  const heroDiv = document.getElementById('hero');
  const nameDiv = document.getElementById('name');
  const search = document.getElementById('search');
  const input = document.getElementById('in');
  const statsDiv=document.getElementById('stats');

  function getSuperhero(id) {
    fetch(`${baseurl}/${id}`)
      .then(res => res.json())
      .then(val => {
        if (val.response === 'success') {
          nameDiv.innerHTML = `<h3>${val.name}</h3>`;
          heroDiv.innerHTML = `<img src="${val.image.url}" height=200 width=200/>`;
          
          statsDiv.innerHTML = `<h3>Power: ${val.powerstats.power}</h3>`;
          statsDiv.innerHTML += `<h3>intelligence: ${val.powerstats.intelligence}</h3>`;
          statsDiv.innerHTML += `<h3>combat: ${val.powerstats.combat}</h3>`;

        } else {
          console.error('Error fetching superhero:', val.error);
        }
      })
      .catch(error => console.error('Error fetching superhero:', error));
  }

  function getSearch(name) {
    fetch(`${baseurl}/search/${name}`)
      .then(res => res.json())
      .then(v => {
        if (v.response === 'success') {
          const hiro=v.results[0]
          nameDiv.innerHTML = `<h3>${hiro.name}</h3>`;
          heroDiv.innerHTML = `<img src="${hiro.image.url}" height=200 width=200/>`;
          
          statsDiv.innerHTML = `<h3>Power: ${hiro.powerstats.power}</h3>`;
          statsDiv.innerHTML += `<h3>intelligence: ${hiro.powerstats.intelligence}</h3>`;
          statsDiv.innerHTML += `<h3>combat: ${hiro.powerstats.combat}</h3>`;

        } else {
          console.error('Error fetching superhero:', v.error);
        }
      })
      .catch(error => console.error('Error fetching superhero:', error));
  }

  search.onclick=()=>getSearch(input.value)

  click.addEventListener('click', function () {
    getSuperhero(Math.floor(Math.random() * 731));
  });
});
