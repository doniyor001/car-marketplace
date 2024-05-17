// // useFirebaseStorage.js
// import firebase from 'firebase/app'
// import 'firebase/storage'

// export function useFirebaseStorage(storageURL, fileNamePattern) {
//   const storageRef = firebase.storage().ref(storageURL)

//   const getAllImages = async () => {
//     try {
//       const listResult = await storageRef.listAll()
//       const urls = await Promise.all(
//         listResult.items.map(async (itemRef) => {
//           const name = itemRef.name
//           if (name.match(fileNamePattern)) {
//             return await itemRef.getDownloadURL()
//           } else {
//             return null
//           }
//         })
//       )
//       return urls.filter((url) => url !== null)
//     } catch (error) {
//       console.error('Error fetching images:', error)
//       return []
//     }
//   }

//   return { getAllImages }
// }
