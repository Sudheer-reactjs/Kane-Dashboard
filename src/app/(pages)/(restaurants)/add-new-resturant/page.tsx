"use client";
import SingleImageUpload from '@/components/restaurants/SingleImageUpload ';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import React, { useState } from 'react';

const Page = () => {
     const [currentImage, setCurrentImage] = useState<File | null>(null);

  const handleImageSelect = (file: File) => {
    setCurrentImage(file);
    console.log('Image selected:', file.name);
  };

  const handleImageRemove = () => {
    setCurrentImage(null);
    console.log('Image removed');
  };

  const handleUpload = async () => {
    if (!currentImage) {
      alert('Please select an image first');
      return;
    }

    const formData = new FormData();
    formData.append('image', currentImage);

    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const result = await response.json();
        alert('Image uploaded successfully!');
        console.log('Upload result:', result);
      } else {
        alert('Upload failed');
      }
    } catch (error) {
      if (error instanceof Error) {
        alert('Upload error: ' + error.message);
      } else {
        alert('Upload error: ' + String(error));
      }
    }
  };
    return (
        <>
           <div className="bg-[#0a0e11] rounded border border-[#2e2e2e] py-5 px-7 flex flex-col gap-2.5" >
              <h2 className="text-xl leading-loose">Restaurant Details</h2>
              <div className='flex gap-10'>
                 <div className='w-full max-w-[250px] min-w-[250px]'>
                     <h3></h3>
                     <SingleImageUpload
                        onImageSelect={handleImageSelect}
                        onImageRemove={handleImageRemove}
                        placeholder="Upload Restaurant Logo"
                      />
                      {currentImage && (
            <div className="mt-6 text-center">
              <button
                onClick={handleUpload}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md font-medium transition-colors"
              >
                Upload Cover Photo
              </button>
            </div>
          )}
                 </div>
                 <div className='w-full'>
                     <div className="grid gap-3">
                             <Label htmlFor="email" className="text-sm">
                               Email Address
                             </Label>
                             <Input id="email" type="email" placeholder="m@example.com" required />
                           </div>
                 </div>
              </div>
           </div>

        </>
    );
}

export default Page;
