<<<<<<< HEAD
import { addDoc, collection } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

async function addProduct(db, product) {
    try {
        await addDoc(collection(db, "products"),
            product);
        console.log("product added: ");
    } catch (e) {
        console.log(e);
    }
}
async function imageUploadRef(storage, image) {
    const storageRef = ref(storage, `products/images/${image.name}`);
    return await uploadBytes(storageRef, image);
}
async function uploadImages(storage, images = []) {
    console.log(images);
    const uploadedImages = images.map(async(image) => {
        //console.log(image);
        const imageRef = await imageUploadRef(storage, image);
        return getDownloadURL(ref(storage, imageRef.ref));
    });

    return uploadedImages;
}


=======
import { addDoc, collection } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

async function addProduct(db, product) {
    try {
        await addDoc(collection(db, "products"),
            product);
        console.log("product added: ");
    } catch (e) {
        console.log(e);
    }
}
async function imageUploadRef(storage, image) {
    const storageRef = ref(storage, `products/images/${image.name}`);
    return await uploadBytes(storageRef, image);
}
async function uploadImages(storage, images = []) {
    console.log(images);
    const uploadedImages = images.map(async(image) => {
        //console.log(image);
        const imageRef = await imageUploadRef(storage, image);
        return getDownloadURL(ref(storage, imageRef.ref));
    });

    return uploadedImages;
}


>>>>>>> 74836e1edb4bfcd92dd7c61304ab8eab842b8e66
export { addProduct, uploadImages }