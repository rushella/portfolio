type AvatarProps = {
  src: string;
  className?: string;
};

export default function Avatar({ src, className }: AvatarProps) {
  return (
    <img
      src={src}
      alt="Vladislav Kharchenko profile"
      className={`h-48 w-48 rounded-full ${className}`}
    />
  );
}