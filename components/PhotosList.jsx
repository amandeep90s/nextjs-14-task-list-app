import Image from "next/image";
import Link from "next/link";
import React from "react";

const PhotosList = ({ photos }) => {
  return (
    <ul className="grid gap-6 mt-6 sm:grid-cols-2">
      {photos.map((photo) => (
        <li key={photo.id}>
          <Link href={`/photos/${photo.id}`} className="text-xl font-medium">
            <div className="relative h-48 mb-4">
              <Image
                src={photo.thumbnail}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
                alt={photo.title}
                className="object-cover rounded-md shadow-lg bg-slate-700"
              />
            </div>
            {photo.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

// const PhotosList = ({ photos }) => {
//   return (
//     <ul className="pl-0 menu menu-vertical">
//       {photos.map((photo) => (
//         <li key={photo.id}>
//           <Link href={`/photos/${photo.id}`} className="text-xl font-medium">
//             <div className="relative h-48 mb-4">
//               <Image
//                 src={photo.thumbnail}
//                 fill
//                 sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
//                 alt={photo.title}
//                 className="object-cover rounded-lg"
//               />
//             </div>
//             {photo.title}
//           </Link>
//         </li>
//       ))}
//     </ul>
//   );
// };

export default PhotosList;
