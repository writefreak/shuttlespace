import { Text, TouchableOpacity } from "react-native";

interface Props {
  text: string;
  variant?: "destructive" | "default";
  className?: string;
  children?: React.ReactNode;
  onPress?: () => void;
}

const variants = {
  default: "bg-blue-700 h-10 w-20 text-white rounded-md",
  destructive: "bg-red-700 w-20 text-white rounded-md",
  outline: "bg-white text-black border border-black rounded-md",
};

export default function Button({
  text,
  children,
  onPress,
  className,
  variant = "default",
}: Props) {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={`${variants[variant]} ${className}`}
    >
      <Text className="text-white">{text}</Text>
    </TouchableOpacity>
  );
}
