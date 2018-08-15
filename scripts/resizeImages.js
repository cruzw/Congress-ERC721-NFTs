// resize images

const signale = require('signale')
const FS = require('fs')
const promisify = require('tiny-promisify')
const sharp = require('sharp')
const BASE_DIR = `${__dirname}/../profile-photos`
const OUT_DIR = `${__dirname}/../src/assets/images/congress/200x200`
const WHITE_LIST = require('../src/assets/metadata/tokens')
  .map(tkn => `${tkn.attributes[0].value}.jpg`)


const processImg = (iPath, oPath, size) => (
  new Promise((res, rej) => {
    sharp(iPath)
    .resize(size, size)
    .toFile(oPath, (err, info) => {
      if (err) rej(err)
      signale.complete(`${iPath}`)
      res(info)
    })
  })
)

const main = async () => {

  let base_images, output_check, noPictureFor = []

  try {
    base_images = await FS.readdirSync(BASE_DIR)
    let output_check = await FS.statSync(OUT_DIR)
  }
  catch (e) {
    signale.warn(e)
    if (!output_check) FS.mkdirSync(OUT_DIR)
  }
  finally {
    signale.time('process all images')
    await WHITE_LIST.forEach(async (val, i) => {
      if (base_images.indexOf(val) != -1) {
        try {
          await processImg(`${BASE_DIR}/${val}`, `${OUT_DIR}/${val}`, 200)
        }
        catch (e) {
          signale.error(`${val}: ${e}`)
        }
      } else {
        noPictureFor.push(val)
        console.log(`val ${val} not in WHITE_LIST`);
      }
    })
    signale.success('All Done!')
    signale.success('noPictureFor:', noPictureFor)
  }
}

main()
