"use client";

import { useUserContext } from "@/context/UserContext";
import { storage } from "@/lib/firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { ChangeEvent, useEffect, useLayoutEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { ImUserPlus } from "react-icons/im";
import { v4 as uuidv4 } from "uuid";

export default function Profile() {
  const [img, setImg] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const { state } = useUserContext();

  const { updateProfilePicture } = useUserContext();

  const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    try {
      if (e.target.files && e.target.files[0]) {
        const file = e.target.files[0];
        const imgRef = ref(storage, `images/${file.name + uuidv4()}`);

        const uploadTask = uploadBytes(imgRef, file);
        toast.promise(uploadTask, {
          loading: "Uploading image...",
          success: "Image uploaded successfully",
          error: "Error uploading image",
        });

        // Get download URL after upload completes
        const snapshot = await uploadTask;
        const downloadUrl = await getDownloadURL(snapshot.ref);

        // Update state and call context function to update profile picture
        setImg(downloadUrl);
        updateProfilePicture(downloadUrl);

        toast.success("Profile Picture updated Successfully!");
      }
    } catch (error) {
      console.error("Error uploading image:", error);
      toast.error("Error uploading image");
    }
  };

  const handleImageClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  useLayoutEffect(() => {
    if (state?.profilepicture) {
      setImg(state.profilepicture);
    }
  }, [state.profilepicture]);

  return (
    <section className="container mx-auto py-16">
      <div className="mb-10 flex items-center gap-x-8">
        <div
          onClick={handleImageClick}
          className="h-[100px] w-[100px] mb-5 border border-black rounded-[100%] relative overflow-hidden cursor-pointer"
        >
          {img ? (
            <div>
              <div
                className="w-[100px] h-[100px] rounded-[100%] border"
                style={{
                  backgroundImage: `url(${img})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
            </div>
          ) : (
            <div className="relative text-5xl flex items-center justify-center object-center object-contain bg-gray2 rounded-[100%] h-[100px] w-[100px]">
              <ImUserPlus />
            </div>
          )}
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-2">
            {state.firstname} {state.lastname}
          </h2>
          <p className="font-medium text-lg">{state.email}</p>
        </div>

        <div>
          <input type="file" ref={fileInputRef} onChange={handleFileChange} className="hidden" />
        </div>
      </div>

      <div>
        <div className="xl:flex xl:items-center xl:gap-x-10">
          <div className="w-full my-2">
            <label className="mb-3" htmlFor="firstname">
              First Name
            </label>
            <input
              className="bg-transparent border px-4 py-3 rounded-md border-gray2"
              type="text"
              defaultValue={state.firstname}
              name="firstname"
              readOnly
            />
          </div>
          <div className="w-full my-2">
            <label className="mb-3" htmlFor="lastname">
              Last Name
            </label>
            <input
              className="bg-transparent border px-4 py-3 rounded-md border-gray2"
              type="text"
              defaultValue={state.lastname}
              name="lastname"
            />
          </div>
        </div>
        <div className="xl:flex xl:items-center xl:gap-x-10">
          <div className="w-full my-2">
            <label className="my-3">Email</label>
            <input
              className="bg-transparent border px-4 py-3 rounded-md border-gray2"
              type="email"
              defaultValue={state.email}
              readOnly
            />
          </div>
          <div className="w-full my-2">
            <label className="my-3">Phone Number</label>
            <input
              className="bg-transparent border px-4 py-3 rounded-md border-gray2"
              type="phone"
              defaultValue={state.phonenumber}
              readOnly
            />
          </div>
        </div>

        <div className="xl:flex xl:items-center xl:gap-x-10">
          <div className="w-full my-2">
            <label className="my-3">Country</label>
            <input
              className="bg-transparent border px-4 py-3 rounded-md border-gray2"
              type="text"
              defaultValue={state.country}
              readOnly
            />
          </div>
          <div className="w-full my-2">
            <label className="my-3">SSN Number</label>
            <input
              className="bg-transparent border px-4 py-3 rounded-md border-gray2"
              type="text"
              defaultValue={state.ssn}
            />
          </div>
        </div>

        <div className="w-full my-5">
          <label className="mb-3">Address</label>
          <input
            className="bg-transparent border px-4 py-3 rounded-md border-gray2"
            type="text"
            readOnly
            defaultValue={state.address}
          />
        </div>
        <div className="xl:flex xl:items-center xl:gap-x-10 w-full">
          <div className="w-full my-2">
            <label className="mb-3">City</label>
            <input
              className="bg-transparent border px-4 py-3 rounded-md border-gray2"
              type="text"
              defaultValue={state.city}
              readOnly
            />
          </div>
          <div className="w-full my-2">
            <label className="mb-3">State</label>
            <input
              className="bg-transparent border px-4 py-3 rounded-md border-gray2"
              type="text"
              defaultValue={state.state}
              readOnly
            />
          </div>
        </div>
      </div>
    </section>
  );
}
