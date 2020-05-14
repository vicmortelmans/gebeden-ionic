// utilitary function to create a dictionary of packaged files 
// based on the output of require.context()
export const importAll = (r: any, cache: {[key: string]: string}) => r.keys().forEach(
  (key: string) => cache[key] = r(key)
);

// pick a ranodom background image
// the files must be in src/images/backgrounds
export const randomBackground = () => {
    // create a dictionary of packaged image files, by './<source filename>'
    const imageFiles: {[key: string]: string} = {};
    importAll(
        require.context('../images/backgrounds/', true, /\.(png|gif|jpg)$/),
        imageFiles
    );
    // define available background images
    const bgImages = [
        { file: './01.jpg', w: 1536, h: 1024 },
        { file: './02.jpg', w: 1536, h: 1024 },
        { file: './03.jpg', w: 1280, h: 853 },
        { file: './04.jpg', w: 1536, h: 1024 },
        { file: './05.jpg', w: 1538, h: 1024 },
        { file: './06.jpg', w: 1820, h: 1024 },
        { file: './07.jpg', w: 1535, h: 1024 },
        { file: './08.jpg', w: 1542, h: 1024 },
        { file: './09.jpg', w: 1280, h: 850 },
        { file: './10.jpg', w: 1541, h: 1024 },
        { file: './11.jpg', w: 1536, h: 1024 },
        { file: './12.jpg', w: 672, h: 448 },
        { file: './13.jpg', w: 1280, h: 960 },
        { file: './14.jpg', w: 1341, h: 1159 },
        { file: './15.jpg', w: 3000, h: 1996 },
        { file: './16.jpg', w: 3000, h: 1994 },
        { file: './17.jpg', w: 3000, h: 2015 },
        { file: './18.jpg', w: 1280, h: 854 },
        { file: './19.jpg', w: 3244, h: 2260 },
        { file: './20.jpg', w: 3072, h: 2304 },
        { file: './21.jpg', w: 2100, h: 1500 },
        { file: './23.jpg', w: 1677, h: 1746 }
    ];
    // pick one randomly
    const bgImage = bgImages[Math.floor(Math.random() * bgImages.length)]; 
    bgImage.file = imageFiles[bgImage.file];
    return bgImage
}

// update DOM so the accordion items fit the page height
export const fitLayout = (bgImage: any) => {
    let bodyH = window.innerHeight;
    let bodyW = window.innerWidth;
    // calculate the row height (minimum 48)
    let rowCount = document.getElementsByClassName('background-span').length;
    let rowH = bodyH / rowCount;
    if (rowH < 48) {
        rowH = 48;
        bodyH = rowCount * rowH;
    }
    // calculate the fontsize
    let fontS = 14 / 48 * rowH;
    // calculate the size and offset of the image
    let categories = document.getElementsByClassName('background-span') as HTMLCollectionOf<HTMLElement>;
    for (let i=0; i<categories.length; i++) {
        categories[i].style.fontSize = fontS + 'pt';
        categories[i].style.lineHeight = rowH + 'px';
    }
    let bodyHorizontality = bodyW / bodyH;
    // calculate the size and offset of the image
    let bgX = 0;
    let bgY = 0;
    let bgHorizontality = bgImage.w / bgImage.h;
    let bgScale;
    let bgSize;
    let bgH;
    let bgW;
    if (bgHorizontality > bodyHorizontality) { // like e.g. on a portait phone screen
        bgScale = bodyH / bgImage.h;
        bgH = bodyH;
        bgX = - 1/2 * (bgScale * bgImage.w - bodyW);
        bgSize = 'auto ' + bgH + 'px';
    } else { // like e.g. on a widescreen monitor
        bgScale = bodyW / bgImage.w;
        bgW = bodyW;
        bgY = - 1/2 * (bgScale * bgImage.h - bodyH);
        bgSize = bgW + 'px auto';
    }
    // set the background image  
    for (let i=0; i<categories.length; i++) {
        categories[i].style.backgroundImage = 'url(' + bgImage.file + ')';
        categories[i].style.backgroundSize = bgSize;
        categories[i].style.backgroundPositionX = bgX + 'px';
        categories[i].style.backgroundPositionY = (bgY - i * rowH) + 'px';
    }
}

/**
 * Truncate a string to the given length, breaking at word boundaries and adding an elipsis
 * @param string str String to be truncated
 * @param integer limit Max length of the string
 * @return string
 */
export const truncate = function (str: string, limit: number) {
    let bits, i;
    bits = str.split('');
    if (bits.length > limit) {
        for (i = bits.length - 1; i > -1; --i) {
            if (i > limit) {
                bits.length = i;
            }
            else if (' ' === bits[i]) {
                bits.length = i;
                break;
            }
        }
        bits.push('...');
    }
    return bits.join('');
};
