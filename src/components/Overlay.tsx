import { FC } from 'react';

type OverlayProps = {
  modalOpen: number;
  setModalOpen: (whichModal: number) => void;
};
const Overlay: FC<OverlayProps> = ({ modalOpen, setModalOpen }) => {
  return (
    <div
      onClick={() => setModalOpen(0)}
      className={`${
        modalOpen > 0 ? 'cursor-pointer' : 'hidden'
      } fixed top-0 left-0 bottom-0 right-0 h-full bg-black opacity-50`}
    ></div>
  );
};

export default Overlay;
