import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { User } from "lucide-react";

interface UserProfileProps {
  name: string;
  imageUrl?: string;
}

export function UserProfile({ name, imageUrl }: UserProfileProps) {
  return (
    <div className="flex items-center space-x-3 p-4">
      <Avatar className="h-10 w-10">
        <AvatarImage src={imageUrl} alt={name} />
        <AvatarFallback>
          <User className="h-6 w-6" />
        </AvatarFallback>
      </Avatar>
      <span className="font-medium text-sm">{name}</span>
    </div>
  );
}