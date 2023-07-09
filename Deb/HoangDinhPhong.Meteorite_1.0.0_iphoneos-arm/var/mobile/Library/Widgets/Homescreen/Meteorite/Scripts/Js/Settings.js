/* Color */
document.documentElement.style.setProperty('--bgCl', config.bgCl);
document.documentElement.style.setProperty('--textCl', config.textCl);
document.documentElement.style.setProperty('--calCl', config.calCl);
document.documentElement.style.setProperty('--calBg', config.calBg);
document.documentElement.style.setProperty('--seCl', config.seCl);
document.documentElement.style.setProperty('--seBg', config.seBg);
document.documentElement.style.setProperty('--dockCl', config.dockCl);

/* On off */
if(!config.dock){
document.getElementById('DockCont').style.display = 'none';
}

if(!config.search){
document.getElementById('SearchCont').style.display = 'none';
}

/* Other */
document.getElementById("In").placeholder = config.ph;
document.documentElement.style.setProperty('--sh', config.sh);