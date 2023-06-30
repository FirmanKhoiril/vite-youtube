interface Props {
  onClick: () => void;
}
const BlackScreen = ({ onClick }: Props) => {
  return <div onClick={onClick} className="fixed h-screen w-full bg-black/60 top-0 z-10" />;
};

export default BlackScreen;
