import profilePicture from "../assets/profile-picture.jpg";

export default function ProfilePicture() {
  return (
    <div className="bg-background-light dark:bg-background-dark flex w-full items-center justify-center transition-all duration-350 ease-in-out">
      <div className="max-w-24">
        <img
          srcSet={profilePicture}
          loading="lazy"
          alt="author's profile picture"
          className="mask-b-from-60% mask-b-to-100% object-scale-down"
        />
      </div>
    </div>
  );
}
