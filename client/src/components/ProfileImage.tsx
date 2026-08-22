/** Personal research portfolio style: a calm, engineering-document avatar fallback rather than a substitute portrait. */
import { useState } from "react";
import { profile } from "@/data/profile";

export function ProfileImage({ className = "" }: { className?: string }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className={`profile-fallback ${className}`} aria-label="Profile image placeholder">
        <span>{profile.initials}</span>
        <i aria-hidden="true" />
        <small>PHOTO / ADD LATER</small>
      </div>
    );
  }

  return <img className={`object-cover ${className}`} src={profile.profileImage} alt={`${profile.name} profile`} onError={() => setFailed(true)} />;
}
