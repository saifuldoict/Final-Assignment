import multer from "multer"

const fileStorageEngine = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./uploads")
    },
    filename: (req, file, cb) => {
        cb(null, "product-img" + Date.now() + "-" + file.originalname)
    }

})

let upload = multer({storage: fileStorageEngine})
export default upload