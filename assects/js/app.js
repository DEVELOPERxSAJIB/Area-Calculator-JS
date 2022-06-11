const area_form = document.getElementById('area_form');
const area_type = document.getElementById('area_type');
const rec = area_form.querySelector('.rec');
const squ = area_form.querySelector('.squ');
const tri = area_form.querySelector('.tri');
const cir = area_form.querySelector('.cir');
const details = document.querySelector('.details');

area_type.onchange = () => {

    if(area_type.value == 'Rectangle'){
        rec.style.display = 'block';
    }else {
        rec.style.display = '';
    }tri
    if(area_type.value == 'Square'){
        squ.style.display = 'block';
    }else {
        squ.style.display = '';
    }
    if(area_type.value == 'Triangle'){
        tri.style.display = 'block';
    }else {
        tri.style.display = '';
    }
    if(area_type.value == 'Circle'){
        cir.style.display = 'block';
    }else {
        cir.style.display = '';
    }
}

area_form.onsubmit = (e) => {
    e.preventDefault();

    if(area_type.value == 'Rectangle'){

        let length = area_form.querySelector('input[name="length"]').value;
        let width = area_form.querySelector('input[name="width"]').value;

        details.innerHTML = areaCal(area_type.value, length, width);

    }else if (area_type.value == 'Square'){

        let bahu = area_form.querySelector('input[name="bahu"]').value;

        details.innerHTML = areaCal(area_type.value, bahu);

    }else if (area_type.value == 'Triangle'){

        let base = area_form.querySelector('input[name="base"]').value;
        let height = area_form.querySelector('input[name="height"]').value;

        details.innerHTML = areaCal(area_type.value, base, height);

    }else if (area_type.value = 'Circle'){

        let radius = area_form.querySelector('input[name="radius"]').value;

        details.innerHTML = areaCal(area_type.value, radius);
    }
}