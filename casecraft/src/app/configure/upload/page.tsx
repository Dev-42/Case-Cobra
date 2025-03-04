'use client'
import React, { useState } from 'react';
import Dropzone from 'react-dropzone';
import { ImageIcon, Loader2Icon, MousePointerSquareDashed } from 'lucide-react';
import { Progress } from "@/components/ui/progress";
import Image from 'next/image';

const Page = () => {
    const [isDragOver, setIsDragOver] = useState(false);
    const [isUploading, setIsUploading] = useState(false);
    const [uploadProgress, setUploadProgress] = useState(0);
    const [uploadedUrl, setUploadedUrl] = useState<string | null>(null);

    const onDropAccepted = async (acceptedFiles: File[]) => {
        const file = acceptedFiles[0];
        if (!file) return;

        setIsUploading(true);
        setUploadProgress(10);

        const formData = new FormData();
        formData.append("file", file);

        try {
            const res = await fetch("/api/upload", {
                method: "POST",
                body: formData,
            });

            const data = await res.json();

            if (data.success) {
                setUploadedUrl(data.data.secure_url);
                setUploadProgress(100);
            } else {
                console.error("Upload failed", data.error);
            }
        } catch (error) {
            console.error("Error uploading file:", error);
        } finally {
            setIsUploading(false);
        }
    };

    return (
        <div className="relative h-full flex-1 my-16 w-full rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:rounded-2xl flex justify-center flex-col items-center"
            onDragEnter={() => setIsDragOver(true)}
            onDragLeave={() => setIsDragOver(false)}
        >
            <div className='relative flex flex-1 flex-col items-center justify-center w-full'>
                <Dropzone 
                    onDropAccepted={onDropAccepted} 
                    accept={{ 'image/png': ['.png'], 'image/jpeg': ['.jpeg'], 'image/jpg': ['.jpg'] }}
                >
                    {({ getRootProps, getInputProps }) => (
                        <div className='h-full w-full flex-1 flex flex-col items-center justify-center' {...getRootProps()}>
                            <input {...getInputProps()} />
                            {isUploading ? 
                                <Loader2Icon className='animate-spin h-6 w-6 text-zinc-500 mb-2'/> : 
                                isDragOver ? 
                                    <MousePointerSquareDashed className='h-6 w-6 text-zinc-500 mb-2'/> : 
                                    <ImageIcon className='h-6 w-6 text-zinc-500 mb-2'/>
                            }

                            <div className='flex flex-col justify-center mb-2 text-sm text-zinc-700 '>
                                {isUploading ? (
                                    <div className='flex flex-col items-center'>
                                        <p>Uploading...</p>
                                        <Progress value={uploadProgress} className='mt-2 w-40 h-2 bg-gray-300'/>
                                    </div> 
                                ) : isDragOver ? (
                                    <p>
                                        <span className='font-semibold'>Drop file</span> to upload
                                    </p> 
                                ) : (
                                    <p>
                                        <span className='font-semibold'>Click to upload</span> or drag and drop
                                    </p> 
                                )}
                            </div>

                            <p className='text-xs text-zinc-500'>PNG, JPG, JPEG</p>
                        </div>    
                    )}
                </Dropzone>
                
                {uploadedUrl && (
                    <div className="mt-4">
                        <p className="text-green-500">Upload successful!</p>
                        <Image src={uploadedUrl} alt="Uploaded file" className="w-32 h-32 rounded-lg mt-2" />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Page;
