import multer from 'multer';
import path from 'path';
import { NextResponse } from 'next/server';

const storage = multer.diskStorage({
  destination: path.join(process.cwd(), 'public/images'),
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const upload = multer({ storage });
const uploadMiddleware = upload.single('image');

export function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
}

export { uploadMiddleware };
