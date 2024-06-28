// bgImg is the background image to be modified.
// fgImg is the foreground image.
// fgOpac is the opacity of the foreground image.
// fgPos is the position of the foreground image in pixels. It can be negative and (0,0) means the top-left pixels of the foreground and background are aligned.
function composite( bgImg, fgImg, fgOpac, fgPos )
{
  let fgImgPixelIndexes = [];

  let indexCount = 0;
  for (let y = 0; y < fgImg.height; y++) 
  {
    for (let x = 0; x < fgImg.width; x++) 
    {
      let index = (y * bgImg.width + x) * 4;
      fgImgPixelIndexes[indexCount] = index;
      indexCount++;
    }
  }

  /*
  for (let i = 0; i < fgImg.data.length; i += 4) 
  {
    if (fgImg.data[i + 3] === 0) continue
    bgImg.data[fgImgPixelIndexes[i] + 0] = fgImg.data[i + 0]; // Red
    bgImg.data[fgImgPixelIndexes[i] + 1] = fgImg.data[i + 1]; // Green
    bgImg.data[fgImgPixelIndexes[i] + 2] = fgImg.data[i + 2]; // Blue
  }
  */

  let bgImgIndex = -1;
  for (let i = 0; i < fgImg.data.length; i += 4) 
    {
      bgImgIndex++;

      if (fgImg.data[i + 3] === 0) continue
      bgImg.data[fgImgPixelIndexes[bgImgIndex] + 0] = fgImg.data[i + 0]; // Red
      bgImg.data[fgImgPixelIndexes[bgImgIndex] + 1] = fgImg.data[i + 1]; // Green
      bgImg.data[fgImgPixelIndexes[bgImgIndex] + 2] = fgImg.data[i + 2]; // Blue
    }
}
