let FontFamily = new FontFace("FontSelect", `url(${'/Fonts/' + config.FontSelect + '.ttf'}) format("truetype")`);
FontFamily.load().then(function (loadedFontFamily) {
document.fonts.add(loadedFontFamily);
})