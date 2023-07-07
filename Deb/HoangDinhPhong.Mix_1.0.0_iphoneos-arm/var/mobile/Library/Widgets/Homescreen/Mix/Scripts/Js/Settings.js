/* Color */
document.documentElement.style.setProperty('--anaBgCl', config.anaBgCl);
document.documentElement.style.setProperty('--lineMinCl', config.lineMinCl);
document.documentElement.style.setProperty('--lineHourCl', config.lineHourCl);
document.documentElement.style.setProperty('--hourminCl', config.hourminCl);
document.documentElement.style.setProperty('--minuteBgCl', config.minuteBgCl);
document.documentElement.style.setProperty('--hourNumCl', config.hourNumCl);
document.documentElement.style.setProperty('--hourBgCl', config.hourBgCl);
document.documentElement.style.setProperty('--secCl', config.secCl);

document.documentElement.style.setProperty('--dateCl', config.dateCl);

/*On Off*/
if(!config.Glasses){
document.getElementById('Glasses').style.display = 'none';
}

/* Other */
document.getElementById('Glasses').src = 'Scripts/Js/Glasses.js';
document.getElementById("In").placeholder = config.ph;