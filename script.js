const cats = ['false', 'false', 'false', 'false', 'false'];
const tips = ['marca', 'market', 'mayor', 'reta', 'start'];
const tipsname = ['Marca', 'Marketplace', 'Mayorista', 'Retailer', 'Startup'];
const catname = [
  'Estilo de vida',
  'Hogar, oficina e industria',
  'Multicategoría',
  'Tecnología',
  'Vehículos y otras categorías',
];
const subname = [
  'Belleza y cuidado personal',
  'Deportes y fitness',
  'Fiestas',
  'Joyas, relojes y lentes',
  'Juegos y juguetes',
  'Niños y bebés',
  'Ropa, bolsas y calzado',
  'Salud y equipamiento médico',

  'Arte, papelería y mercería',
  'Electrodomésticos',
  'Herramientas y construcción',
  'Hogar, muebles y jardín',
  'Industrias y oficinas',

  'Múltiples artículos',

  'Cámaras y accesorios',
  'Celulares y telefonía',
  'Computación',
  'Consolas y videojuegos',
  'Electrónica, audio y video',

  'Adulto',
  'Instrumentos musicales',
  'Libros y revistas',
  'Mascotas',
  'Vehículos',
  'Otros artículos',
];

var catcat = null,
  subcat = null,
  subcatname = null,
  tipo = null,
  pais = 'ambos';
for (i = 1; i < 6; i++) {
  var x = document.getElementById('nav-' + i);
  x.innerHTML = catname[i - 1];
}

function filtroCategoria(c) {
  new Promise(function (resolve) {
    resolve(filtrando(c));
  }).then(function (result) {
    filtradoEmpresa();
  });
}

function filtrando(c) {
  var cat = document.getElementById('nom-cat');
  filtradoCategoria(null);
  document.getElementById('nom-cat').innerHTML = '';
  document.getElementById('nom-sub').innerHTML = '';
  document.getElementById('cat-tip').style.display = 'none';
  document.getElementById('cat-tip-sel').selectedIndex = 0;
  document.getElementById('contenedor-botones').style.display = 'none';
  document.getElementById('b3').disabled = false;
  tipo = null;
  pais = 'ambos';
  subcatname = null;

  for (i = 1; i < 6; i++) {
    cats[i - 1] = 'false';
    document.getElementById('cat-' + i + '-sel').selectedIndex = 0;
    document.getElementById('nav-' + i).classList.remove('activo');
    document.getElementById('cat-' + i + '-sel').style.display = 'none';
    document.getElementById('op' + i).style.display = 'block';
    if (c == 'cat-' + i) {
      cats[i - 1] = 'true';
      catcat = 'cate-' + i;
      document.getElementById('cat-' + i + '-sel').style.display = 'block';
      document.getElementById('nav-' + i).classList.add('activo');
      document.getElementById('cat-tip').style.display = 'block';
      document.getElementById('contenedor-botones').style.display = 'block';
      cat.innerHTML = catname[i - 1];
      filtradoSubCategoria(catcat);
    }
  }
}

function filtradoTipo(c) {
  var x,
    i,
    total = 0;
  tipo = c;
  pais = 'ambos';
  var nom = document.getElementById('nom-sub');
  if (subcat == null) {
    subcat = catcat;
  }
  document.getElementById('b1').classList.add('activo-btn');
  document.getElementById('b2').classList.remove('activo-btn');
  document.getElementById('b3').classList.remove('activo-btn');

  x = document.getElementsByClassName('contenedor-tienda');
  if (c == 'cate') c = subcat;
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], 'show');
    var res = x[i].classList.contains(c);
    var res2 = x[i].classList.contains(catcat);
    var res3 = x[i].classList.contains(subcat);
    if (res == true && res2 == true && res3 == true) {
      if (x[i].className.indexOf(c) > -1) {
        w3AddClass(x[i], 'show');
        total += 1;
      }
    }
    if (total == 0) {
      document.getElementById('total').innerHTML = 'Sin tiendas por filtrar';
    } else {
      document.getElementById('total').innerHTML = total + ' tienda(s) para ti';
    }
  }

  if (subcatname != null) {
    nom.innerHTML = subcatname;
  } else {
    for (i = 0; i < 5; i++) {
      if (tips[i] === c) nom.innerHTML = tipsname[i];
    }
  }
}

function filtradoPais(c) {
  var x,
    i,
    total = 0;
  if (c == 'usa' || c == 'china') pais = c;
  if (subcat == null) {
    c = catcat;
    subcat = catcat;
  }
  if (tipo == 'cate' || tipo == null) {
    c = subcat;
    tipo = subcat;
  }
  if (c == 'ambos') {
    c = subcat;
    pais = subcat;
  }
  x = document.getElementsByClassName('contenedor-tienda');
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], 'show');
    var res = x[i].classList.contains(c);
    var res2 = x[i].classList.contains(catcat);
    var res3 = x[i].classList.contains(subcat);
    var res4 = x[i].classList.contains(pais);
    var res5 = x[i].classList.contains(tipo);
    if (
      res == true &&
      res2 == true &&
      res3 == true &&
      res4 == true &&
      res5 == true
    ) {
      if (x[i].className.indexOf(c) > -1) {
        w3AddClass(x[i], 'show');
        total += 1;
      }
    }
    if (total == 0) {
      document.getElementById('total').innerHTML = 'Sin tiendas por filtrar';
    } else {
      document.getElementById('total').innerHTML = total + ' tienda(s) para ti';
    }
  }
}

function filtradoSubCategoria(c) {
  var x,
    i,
    total = 0;
  x = document.getElementsByClassName('contenedor-tienda');
  if (c == 'cate') c = subcat;
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], 'show');
    var res = x[i].classList.contains(c);
    var res2 = x[i].classList.contains(catcat);
    if (res == true && res2 == true) {
      if (x[i].className.indexOf(c) > -1) {
        w3AddClass(x[i], 'show');
        total += 1;
      }
    }
    if (total == 0) {
      document.getElementById('total').innerHTML = 'Sin tiendas por filtrar';
    } else {
      document.getElementById('total').innerHTML = total + ' tienda(s) para ti';
    }
  }
}

function filtroSubCategoria(c) {
  new Promise(function (resolve) {
    resolve(filtradoCategoria(c));
  }).then(function (result) {
    filtradoEmpresa();
  });
}

function filtradoCategoria(c) {
  subcat = c;
  pais = 'ambos';
  tipo = null;
  var cat = document.getElementById('nom-cat');
  var nom = document.getElementById('nom-sub');
  nom.innerHTML = '';
  var x,
    z,
    i,
    total = 0;
  document.getElementById('cat-tip-sel').selectedIndex = 0;
  document.getElementById('b1').classList.add('activo-btn');
  document.getElementById('b2').classList.remove('activo-btn');
  document.getElementById('b3').classList.remove('activo-btn');
  document.getElementById('b3').disabled = false;
  x = document.getElementsByClassName('contenedor-tienda');

  if (c == 'todos') c = '';
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], 'show');
    if (x[i].className.indexOf(c) > -1) {
      w3AddClass(x[i], 'show');
      total += 1;
    }
  }

  if (total == 0) {
    document.getElementById('total').innerHTML = 'Sin tiendas por filtrar';
  } else {
    document.getElementById('total').innerHTML = total + ' tienda(s) para ti';
  }

  for (i = 0; i < 5; i++) {
    if (cats[i] === 'true') cat.innerHTML = catname[i];
  }

  if (c == null || c == 'undefined') {
    document.getElementById('nom-cat').innerHTML = '';
    document.getElementById('nom-sub').innerHTML = '';
  } else {
    for (i = 1; i <= 25; i++) {
      if (i < 10) {
        if (c == 'sub0' + i) {
          nom.innerHTML = subname[i - 1];
          subcatname = subname[i - 1];
        }
      } else {
        if (c == 'sub' + i) {
          nom.innerHTML = subname[i - 1];
          subcatname = subname[i - 1];
        }
      }
    }
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(' ');
  arr2 = name.split(' ');
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += ' ' + arr2[i];
    }
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(' ');
  arr2 = name.split(' ');
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(' ');
}

function filtradoEmpresa() {
  var z;
  var op1 = 0,
    op2 = 0,
    op3 = 0,
    op4 = 0,
    op5 = 0,
    op6 = 0;
  document.getElementById('op1').style.display = 'block';
  document.getElementById('op2').style.display = 'block';
  document.getElementById('op3').style.display = 'block';
  document.getElementById('op4').style.display = 'block';
  document.getElementById('op5').style.display = 'block';

  z = document.getElementsByClassName('show');
  for (j = 0; j < z.length; j++) {
    if (z[j].className.indexOf('marca') > -1) {
      op1 += 1;
    }
    if (z[j].className.indexOf('market') > -1) {
      op2 += 1;
    }
    if (z[j].className.indexOf('mayor') > -1) {
      op3 += 1;
    }
    if (z[j].className.indexOf('reta') > -1) {
      op4 += 1;
    }
    if (z[j].className.indexOf('start') > -1) {
      op5 += 1;
    }
    if (z[j].className.indexOf('china') > -1) {
      op6 += 1;
    }
  }

  if (op1 == 0) document.getElementById('op1').style.display = 'none';
  if (op2 == 0) document.getElementById('op2').style.display = 'none';
  if (op3 == 0) document.getElementById('op3').style.display = 'none';
  if (op4 == 0) document.getElementById('op4').style.display = 'none';
  if (op5 == 0) document.getElementById('op5').style.display = 'none';
  if (op6 == 0) document.getElementById('b3').disabled = true;
}

var btnContainer = document.getElementById('contenedor-botones');
var btns = btnContainer.getElementsByClassName('pais');
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener('click', function () {
    var current = document.getElementsByClassName('activo-btn');
    current[0].className = current[0].className.replace(' activo-btn', '');
    this.className += ' activo-btn';
  });
}

window.addEventListener('load', function () {
  var elements = document.getElementsByClassName('select2');
  for (i = 0; i < elements.length; i++) {
    elements[i].classList.add('hide');
  }

  filtroCategoria('cat-3');
});
