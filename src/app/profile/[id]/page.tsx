export default function UserProfile({params}: any) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>Profile Page</h1>
      <hr />
      <p className="text-4xl ">
        Profile Page <span className=" p-2 rounded-2xl text-black bg-orange-500"> {params.id}</span>
      </p>
    </div>
  );
}
